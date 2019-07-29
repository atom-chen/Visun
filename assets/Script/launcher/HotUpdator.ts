import { HOT_STATE } from "../looker/Consts";


export default class HotUpdator {
	private _id:string;
	private _manifestUrl:string;
	private _finishCallback:Function;
	private _progressCallback:Function;
	private _curState:HOT_STATE = HOT_STATE.READY;
	private _am:any;
	private _canRetry:boolean = false;
	private _storagePath:string = "";


	public constructor(id:string, manifestUrl:string, finishCallback:(bSucc:boolean)=>void, progressCallback:((nowState:HOT_STATE, progressByFile:number, progressByBytes:number)=>void)|null)
	{
		this._curState = HOT_STATE.READY;
		this._id = id;
		this._manifestUrl = manifestUrl;
		this._finishCallback = finishCallback;
		this._progressCallback = progressCallback;

		this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'hotupdate/' + this._id);
		cc.log('Storage path for remote asset : ' + this._storagePath);
	}

	public isUpdating() : boolean {
		if(this._am && this._curState!==HOT_STATE.READY && this._curState!==HOT_STATE.SUCCESS && this._curState!==HOT_STATE.FAIL) {
			return true;
		}
		return false;
	}

	public beginUpdate() {
		if (!cc.sys.isNative) {
			this.onFail();
			return;
		}

		if(this.isUpdating()){
			cc.log("已经在热更中");
			return;
		}

		cc.log("---------hotupdate begin-----------");
		this._curState = HOT_STATE.UPDATING;
		this.notifyState(this._curState, 0, 0);

		var versionCompareHandle = function (versionA:string, versionB:string) {
			cc.log("Version Compare: version A is " + versionA + ', version B is ' + versionB);
			var vA = versionA.split('.');
			var vB = versionB.split('.');
			for (var i = 0; i < vA.length; ++i) {
				var a = parseInt(vA[i]) || 0;
				var b = parseInt(vB[i]) || 0;
				if (a === b) {
					continue;
				}
				else {
					return a - b;
				}
			}
			if (vB.length > vA.length) {
				return -1;
			}
			else {
				return 0;
			}
		};

		this._am = new jsb.AssetsManager("", this._storagePath, versionCompareHandle);

		// Setup the verification callback, but we don't have md5 check function yet, so only print some message
		// Return true if the verification passed, otherwise return false
		this._am.setVerifyCallback(function (path, asset) {
			// When asset is compressed, we don't need to check its md5, because zip file have been deleted.
			var compressed = asset.compressed;
			// Retrieve the correct md5 value.
			var expectedMD5 = asset.md5;
			// asset.path is relative path and path is absolute.
			var relativePath = asset.path;
			// The size of asset file, but this value could be absent.
			var size = asset.size;
			if (compressed) {
				cc.log("Verification passed : " + relativePath);
				return true;
			}
			else {
				cc.log("Verification passed : " + relativePath + ' (' + expectedMD5 + ')');
				return true;
			}
		});

		cc.log('Hot update is ready, please check or directly update.');

		if (cc.sys.os === cc.sys.OS_ANDROID) {
			this._am.setMaxConcurrentTask(4);
		}
		
		this._am.setEventCallback(this.updateCb.bind(this));
		if(!this.loadLocalManifest()) {
			cc.log("加载本地manifest失败");
			this.onFail();
			return;
		}
		
		this._am.update();
	}


	protected notifyState(nowState:HOT_STATE, progressByFile:number, progressByBytes:number)
	{
		cc.log("----热更进度", this._curState, nowState, progressByFile, progressByBytes);
		if(this._progressCallback) {
			this._progressCallback(this._curState, progressByFile, progressByBytes);
		}
	}

	protected updateCb(event:any) 
	{
		var needRestart = false;
		var failed = false;
		switch (event.getEventCode())
		{
			case jsb.EventAssetsManager.UPDATE_PROGRESSION:
				cc.log("progress by file: " + event.getDownloadedFiles() + ' / ' + event.getTotalFiles());
				cc.log("progress by byte: " + event.getDownloadedBytes() + ' / ' + event.getTotalBytes());
				var msg = event.getMessage();
				if (msg) {
					cc.log('Updated file: ' + msg);
					cc.log(event.getPercent()/100 + '% : ' + msg);
				}
				this.notifyState(HOT_STATE.UPDATING, event.getPercentByFile(), event.getPercent());
				break;
			case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
				cc.log('updateCb No local manifest file found, hot update skipped.');
				failed = true;
				break;
			case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
			case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
				cc.log('updateCb Fail to download manifest file, hot update skipped.');
				failed = true;
				break;
			case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
				cc.log('updateCb Already up to date with the latest remote version.');
				failed = true;
				break;
			case jsb.EventAssetsManager.UPDATE_FINISHED:
				cc.log('updateCb Update finished. ' + event.getMessage());
				needRestart = true;
				break;
			case jsb.EventAssetsManager.UPDATE_FAILED:
				cc.log('updateCb Update failed. ' + event.getMessage());
				this._canRetry = true;
				this.retry();
				break;
			case jsb.EventAssetsManager.ERROR_UPDATING:
				cc.log('updateCb Asset update error: ' + event.getAssetId() + ', ' + event.getMessage());
				break;
			case jsb.EventAssetsManager.ERROR_DECOMPRESS:
				cc.log(event.getMessage());
				break;
			default:
				break;
		}

		if (failed) {
			this.onFail();
		}

		if (needRestart) {
			this.onSuccess();
		}
	}

	protected onSuccess()
	{
		if(this._am){
			this._am.setEventCallback(null);
			// Prepend the manifest's search path
			var searchPaths = jsb.fileUtils.getSearchPaths() || [];
			var newPaths = this._am.getLocalManifest().getSearchPaths();
			if(newPaths){
				console.log("--------resetSearchPaths:");
				console.log(JSON.stringify(newPaths));
				Array.prototype.unshift.apply(searchPaths, newPaths);
				cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
				jsb.fileUtils.setSearchPaths(searchPaths);
			}
			else {
				console.log("---------resetSearchPaths: null");
			}
		}

		cc.log("热更成功");
		this._curState = HOT_STATE.SUCCESS;
		this.notifyState(HOT_STATE.SUCCESS, 100, 100);
		if(this._finishCallback) {
			this._finishCallback(true);
		}

		cc.audioEngine.stopAll();
		cc.game.restart();
	}

	protected onFail()
	{
		cc.log("热更失败");
		if(this._am){
			this._am.setEventCallback(null);
		}
		this._curState = HOT_STATE.FAIL;
		this.notifyState(HOT_STATE.FAIL, 100, 100);
		if(this._finishCallback) {
			this._finishCallback(false);
		}
	}

	protected getLocalManifestPath() : string
	{
		return this._manifestUrl;
	}
	
	protected loadLocalManifest() : boolean
	{
		if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
			var url = this.getLocalManifestPath();
			this._am.loadLocalManifest(url);
			return true;
		}
		return false;
	}

	protected retry() 
	{
		if (this._canRetry) {
			this._canRetry = false;
			cc.log('Retry failed Assets...');
			this._am.downloadFailedAssets();
		}
	}

}
