import EventDef from "../looker/EventDef";
import EventCenter from "./EventCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HotUpdator extends cc.Component {

	@property(cc.ProgressBar)
	fileProgress: cc.ProgressBar = null;

	@property(cc.ProgressBar)
	byteProgress: cc.ProgressBar = null;

	@property({
		type: cc.Asset
	})
	manifestUrl: cc.Asset = null;

	private _am:any;
	private _updating:boolean = false;
	private _canRetry:boolean = false;
	private _storagePath:string = "";


	protected updateCb(event:any) 
	{
		var needRestart = false;
		var failed = false;
		switch (event.getEventCode())
		{
			case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
				cc.log('updateCb No local manifest file found, hot update skipped.');
				failed = true;
				break;
			case jsb.EventAssetsManager.UPDATE_PROGRESSION:
				this.byteProgress.progress = event.getPercent();
				this.fileProgress.progress = event.getPercentByFile();

				cc.log("progress by file: " + event.getDownloadedFiles() + ' / ' + event.getTotalFiles());
				cc.log("progress by byte: " + event.getDownloadedBytes() + ' / ' + event.getTotalBytes());

				var msg = event.getMessage();
				if (msg) {
					cc.log('Updated file: ' + msg);
					cc.log(event.getPercent()/100 + '% : ' + msg);
				}
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
				this._updating = false;
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
		cc.log("热更成功");
		if(this._am){
			this._am.setEventCallback(null);
			// Prepend the manifest's search path
			var searchPaths = jsb.fileUtils.getSearchPaths();
			var newPaths = this._am.getLocalManifest().getSearchPaths();
			console.log(JSON.stringify(newPaths));
			Array.prototype.unshift.apply(searchPaths, newPaths);
			cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
			jsb.fileUtils.setSearchPaths(searchPaths);
		}

		this._updating = false;

		cc.audioEngine.stopAll();
		cc.game.restart();
	}

	protected onFail()
	{
		cc.log("热更失败");
		if(this._am){
			this._am.setEventCallback(null);
		}
		this._updating = false;
		EventCenter.instance().fire(EventDef.HOTUPDATE_OVER)
	}

	protected getLocalManifestPath() : string
	{
		var url = this.manifestUrl.nativeUrl;
		if (cc.loader.md5Pipe) {
			url = cc.loader.md5Pipe.transformURL(url);
		}
		cc.log("local manifest path: ", url);
		return url;
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

	public beginUpdate() {
		if (!cc.sys.isNative) {
			this.fileProgress.node.active = false;
			this.byteProgress.node.active = false;
			this.onFail();
			return;
		}

		if(this._am && this._updating){
			cc.log("已经在热更中");
			return;
		}

		cc.log("---------hotupdate begin-----------");
		
		this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'hotupdate');
		cc.log('Storage path for remote asset : ' + this._storagePath);

		this.fileProgress.progress = 0;
		this.byteProgress.progress = 0;

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
		
		this.doUpdate();
	}

	protected doUpdate() 
	{
		if (this._am && !this._updating) {
			this._am.setEventCallback(this.updateCb.bind(this));
			if(!this.loadLocalManifest()) {
				cc.log("加载本地manifest失败");
				this.onFail();
				return;
			}
			this._updating = true;
			this._am.update();
		}
	}

	protected retry() 
	{
		if (!this._updating && this._canRetry) {
			this._canRetry = false;
			cc.log('Retry failed Assets...');
			this._am.downloadFailedAssets();
		}
	}

	onLoad() 
	{
		this.beginUpdate();
	}

	onDestroy() 
	{
		if(this._am){
			//this._am.setEventCallback(null);
		}
	}
}
