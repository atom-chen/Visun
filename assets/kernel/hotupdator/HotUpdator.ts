//---------------------------------
// 热更
//---------------------------------
import { HOT_STATE } from "../basic/defines/KernelDefine";
import UIManager from "../view/UIManager";


var versionCompareHandle = function(versionA:string, versionB:string) {
	cc.log("热更检查: version A is " + versionA + ', version B is ' + versionB);
	var vA = versionA.split('.');
	var vB = versionB.split('.');
	for (var i = 0; i < vA.length; ++i) {
		var a = parseInt(vA[i]) || 0;
		var b = parseInt(vB[i]) || 0;
		if (a !== b) {
			return a - b;
		}
	}
	if (vB.length > vA.length) {
		return -1;
	} else {
		return 0;
	}
};

// Setup the verification callback, but we don't have md5 check function yet, so only print some message
// Return true if the verification passed, otherwise return false
var verifyCallback = function(path, asset) {
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
	} else {
		cc.log("Verification passed : " + relativePath + ' (' + expectedMD5 + ')');
		return true;
	}
}


export default class HotUpdator {
	private static _all_updators:{[key: string]: HotUpdator;} = {};

	private _id:string = "";
	private _manifestUrl:string = "";
	private _finishCallback:Function = null;
	private _progressCallback:Function = null;
	private _curState:HOT_STATE = HOT_STATE.READY;
	private _am:any = null;
	private _canRetry:boolean = false;
	private _storagePath:string = "";

	private _is_checking:boolean = false;
	private _checkListener:Function = null;



	public static create(id:string, manifestUrl:string, finishCallback:(bSucc:boolean)=>void, progressCallback:((nowState:HOT_STATE, progressByFile:number, progressByBytes:number)=>void)|null) : HotUpdator {
		if(!HotUpdator._all_updators[id]){
			HotUpdator._all_updators[id] = new HotUpdator(id, manifestUrl, finishCallback, progressCallback);
		}
		return HotUpdator._all_updators[id];
	}

	public static getUpdator(id:string) {
		return HotUpdator._all_updators[id];
	}


	private constructor(id:string, manifestUrl:string, finishCallback:(bSucc:boolean)=>void, progressCallback:((nowState:HOT_STATE, progressByFile:number, progressByBytes:number)=>void)|null) {
		this._curState = HOT_STATE.READY;
		this._id = id;
		this._manifestUrl = manifestUrl;
		this._finishCallback = finishCallback;
		this._progressCallback = progressCallback;

		if(cc.sys.isNative) {
			this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'hotupdate/' + this._id);
			cc.log('Storage path for remote asset : ' + this._storagePath);
		}
	}

	private initAm() {
		if (!cc.sys.isNative) {
			return;
		}

		if(this._am) { return; }

		//@ts-ignore
		this._am = new jsb.AssetsManager("", this._storagePath, versionCompareHandle);
		this._am.setVerifyCallback(verifyCallback);

		if (cc.sys.os === cc.sys.OS_ANDROID) {
			this._am.setMaxConcurrentTask(4);
		}
	}

	protected getLocalManifestPath() : string {
		return this._manifestUrl;
	}
	
	protected loadLocalManifest() : boolean {
		if(!this._am) {
			cc.log("am is nil");
			return false;
		}
		//@ts-ignore
		if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
			var url = this.getLocalManifestPath();
			this._am.loadLocalManifest(url);
		}
		if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            return false;
        }
		return true;
	}


	private onCheckFinish(bHasNewVersion:boolean, totalBytes:number = 0) {
		this._is_checking = false;
		var checkListener = this._checkListener;
		this._checkListener = null;
		cc.log("--------检查更新完毕---------");
		cc.log("是否有更新：", bHasNewVersion, totalBytes);
		if(checkListener) {
			checkListener(bHasNewVersion);
		}
	}
	protected checkCb(event) {
		cc.log('Code: ' + event.getEventCode());
        switch (event.getEventCode())
        {
			//@ts-ignore
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
				cc.log("No local manifest file found, hot update skipped.");
				this.onCheckFinish(false);
				break;
			//@ts-ignore
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
			//@ts-ignore
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
				cc.log("Fail to download manifest file, hot update skipped.");
				this.onCheckFinish(false);
				break;
			//@ts-ignore
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
				cc.log("Already up to date with the latest remote version.");
				this.onCheckFinish(false);
				break;
			//@ts-ignore
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
				cc.log('New version found, please try to update. (' + this._am.getTotalBytes() + ')');
				this.onCheckFinish(true, this._am.getTotalBytes());
                break;
            default:
                return;
        }
		
		cc.log("检查更新完毕");
        this._am.setEventCallback(null);
		this._is_checking = false;
	}
	public checkUpdate(checkListener:Function) {
		if (!cc.sys.isNative) {
			checkListener(false);
			return;
		}

		if(this._is_checking) {
			cc.log("正在检查更新");
            return;
		}
		if(this.isUpdating()) {
			cc.log("正在更新");
			return;
		}

		cc.log("---------开始检查更新------------");
		this._is_checking = true;
		this._checkListener = checkListener;
		
		this.initAm();

		if(!this._am) {
			cc.log("检查更新失败：创建更新器失败");
			this.onCheckFinish(false);
			return;
		}
		
		var flag = this.loadLocalManifest();
		if(!flag) {
			cc.log("检查更新失败：本地manifest不存在");
			this.onCheckFinish(false);
			return;
		}
		
        this._am.setEventCallback(this.checkCb.bind(this));
        this._am.checkUpdate();
	}



	protected notifyProgress(nowState:HOT_STATE, progressByFile:number, progressByBytes:number) {
		cc.log("...热更进度...", this._curState, nowState, progressByFile, progressByBytes);
		if(this._progressCallback) {
			this._progressCallback(this._curState, progressByFile, progressByBytes);
		}
	}

	protected updateCb(event:any) {
		var needRestart = false;
		var failed = false;
		switch (event.getEventCode())
		{
			//@ts-ignore
			case jsb.EventAssetsManager.UPDATE_PROGRESSION:
				cc.log("progress by file: " + event.getDownloadedFiles() + ' / ' + event.getTotalFiles());
				cc.log("progress by byte: " + event.getDownloadedBytes() + ' / ' + event.getTotalBytes());
				var msg = event.getMessage();
				if (msg) {
					cc.log('Updated file: ' + msg);
					cc.log(event.getPercent()/100 + '% : ' + msg);
				}
				this.notifyProgress(HOT_STATE.UPDATING, event.getPercentByFile(), event.getPercent());
				break;
			//@ts-ignore
			case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
				cc.log('updateCb No local manifest file found, hot update skipped.');
				failed = true;
				break;
			//@ts-ignore
			case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
			//@ts-ignore
			case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
				cc.log('updateCb Fail to download manifest file, hot update skipped.');
				failed = true;
				break;
			//@ts-ignore
			case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
				cc.log('updateCb Already up to date with the latest remote version.');
				failed = true;
				break;
			//@ts-ignore
			case jsb.EventAssetsManager.UPDATE_FINISHED:
				cc.log('updateCb Update finished. ' + event.getMessage());
				needRestart = true;
				break;
			//@ts-ignore
			case jsb.EventAssetsManager.UPDATE_FAILED:
				cc.log('updateCb Update failed. ' + event.getMessage());
				this._canRetry = true;
				this.retry();
				break;
			//@ts-ignore
			case jsb.EventAssetsManager.ERROR_UPDATING:
				cc.log('updateCb Asset update error: ' + event.getAssetId() + ', ' + event.getMessage());
				break;
			//@ts-ignore
			case jsb.EventAssetsManager.ERROR_DECOMPRESS:
				cc.log(event.getMessage());
				failed = true;
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

	protected onSuccess() {
		if(this._am){
			this._am.setEventCallback(null);
			//@ts-ignore
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

		cc.log("-----------热更完毕：成功---------------");
		this._curState = HOT_STATE.SUCCESS;
		this.notifyProgress(HOT_STATE.SUCCESS, 100, 100);

		if(this._finishCallback) {
			this._finishCallback(true);
		}

		cc.audioEngine.stopAll();
		cc.game.restart();
	}

	protected onFail() {
		cc.log("------------热更完毕：失败--------------");
		if(this._am){
			this._am.setEventCallback(null);
		}
		this._curState = HOT_STATE.FAIL;
		this.notifyProgress(HOT_STATE.FAIL, 100, 100);
		if(this._finishCallback) {
			this._finishCallback(false);
		}
	}

	public isUpdating() : boolean {
		if(this._am && this._curState!==HOT_STATE.READY && this._curState!==HOT_STATE.SUCCESS && this._curState!==HOT_STATE.FAIL) {
			return true;
		}
		return false;
	}

	public beginUpdate() {
		if(!cc.sys.isNative) {
			this.onFail();
			return;
		}

		if(this.isUpdating()){
			cc.log("已经在热更中");
			return;
		}

		cc.log("---------hotupdate begin-----------");
		this._curState = HOT_STATE.UPDATING;
		this.notifyProgress(this._curState, 0, 0);

		this.initAm();

		if(!this._am) {
			cc.log("更新失败：创建更新器失败");
			this.onFail();
		}
			
        if (!this.loadLocalManifest()) {
			cc.log("更新失败：本地manifest不存在");
			this.onFail();
            return;
        }

		this._am.setEventCallback(this.updateCb.bind(this));
        this._am.update();
	}

	protected retry() {
		if(this._canRetry && !this.isUpdating()) {
			var self = this;
			UIManager.openDialog("hotretry", "更新失败，是否重试？", 2, (menuId:number)=>{
				if(menuId===1){
					if(self._canRetry && !self.isUpdating()) {
						cc.log('Retry failed Assets...');
						self._canRetry = false;
						self._am.downloadFailedAssets();
					} else {
						self.onFail();
					}
				} else {
					self.onFail();
				}
			});
		}
	}

}
