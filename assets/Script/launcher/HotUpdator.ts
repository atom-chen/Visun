const {ccclass, property} = cc._decorator;

var customManifestStr = JSON.stringify({
	"packageUrl": "http://localhost/Vision/remote-assets/",
	"remoteManifestUrl": "http://localhost/Vision/remote-assets/project.manifest",
	"remoteVersionUrl": "http://localhost/Vision/remote-assets/version.manifest",
	"version": "1.10",
	"assets": {},
	"searchPaths": []
});

@ccclass
export default class HotUpdator extends cc.Component {

	@property(cc.Label)
	tipLabel: cc.Label = null;

	@property(cc.ProgressBar)
	fileProgress: cc.ProgressBar = null;

	@property(cc.ProgressBar)
	byteProgress: cc.ProgressBar = null;

	@property
	manifestUrl:cc.Asset = null;

	private _am:any;
	private _updating:boolean = false;
	private _canRetry:boolean = false;
	private _storagePath:string = "";


	private checkCb(event:any) 
	{
		cc.log('checkCb Code: ' + event.getEventCode());
		switch (event.getEventCode())
		{
			case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
				cc.log("checkCb No local manifest file found, hot update skipped.");
				break;
			case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
			case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
				cc.log("checkCb Fail to download manifest file, hot update skipped.");
				break;
			case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
				cc.log("checkCb Already up to date with the latest remote version.");
				break;
			case jsb.EventAssetsManager.NEW_VERSION_FOUND:
				cc.log('checkCb New version found, please try to update.');
				//this.panel.checkBtn.active = false;
				this.fileProgress.progress = 0;
				this.byteProgress.progress = 0;
				break;
			default:
				return;
		}
		
		this._am.setEventCallback(null);
		this._updating = false;
	}

	private updateCb(event:any) 
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
				//this.panel.retryBtn.active = true;
				this._updating = false;
				this._canRetry = true;
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

		if (failed) 
		{
			this._am.setEventCallback(null);
			this._updating = false;
		}

		if (needRestart) 
		{
			this._am.setEventCallback(null);
			// Prepend the manifest's search path
			var searchPaths = jsb.fileUtils.getSearchPaths();
			var newPaths = this._am.getLocalManifest().getSearchPaths();
			console.log(JSON.stringify(newPaths));
			Array.prototype.unshift.apply(searchPaths, newPaths);
			// This value will be retrieved and appended to the default search path during game startup,
			// please refer to samples/js-tests/main.js for detailed usage.
			// !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.
			cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
			jsb.fileUtils.setSearchPaths(searchPaths);

			cc.audioEngine.stopAll();
			cc.game.restart();
		}
	}
	
	retry() 
	{
		if (!this._updating && this._canRetry) {
			//this.panel.retryBtn.active = false;
			this._canRetry = false;
			
			cc.log('Retry failed Assets...');
			this._am.downloadFailedAssets();
		}
	}
	
	loadCustomManifest() 
	{
		if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
			var manifest = new jsb.Manifest(customManifestStr, this._storagePath);
			this._am.loadLocalManifest(manifest, this._storagePath);
		}
	}
	loadLocalManifest()
	{
		if(!this.manifestUrl){
			this.loadCustomManifest();
			return;
		}
		if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
			// Resolve md5 url
			var url = this.manifestUrl.nativeUrl;
			if (cc.loader.md5Pipe) {
				url = cc.loader.md5Pipe.transformURL(url);
			}
			this._am.loadLocalManifest(url);
		}
	}

	checkUpdate() 
	{
		if (this._updating) {
			cc.log('Checking or updating ...');
			return;
		}
		this.loadLocalManifest();
		if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
			cc.log('Failed to load local manifest ...');
			return;
		}
		this._am.setEventCallback(this.checkCb.bind(this));

		this._am.checkUpdate();
		this._updating = true;
	}

	hotUpdate() 
	{
		if (this._am && !this._updating) {
			this._am.setEventCallback(this.updateCb.bind(this));

			this.loadLocalManifest();

			this._updating = true;
			this._am.update();
		}
	}

	// use this for initialization
	onLoad() 
	{
		// Hot update is only available in Native build
		if (!cc.sys.isNative) {
			this.fileProgress.progress = 0;
			this.byteProgress.progress = 0;
			this.fileProgress.node.active = false;
			this.byteProgress.node.active = false;
			return;
		}
		cc.log("---------hotupdate begin-----------");
		
		this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'hotupdate');
		cc.log('Storage path for remote asset : ' + this._storagePath);

		// Setup your own version compare handler, versionA and B is versions in string
		// if the return value greater than 0, versionA is greater than B,
		// if the return value equals 0, versionA equals to B,
		// if the return value smaller than 0, versionA is smaller than B.
		var versionCompareHandle = function (versionA:string, versionB:string) {
			cc.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
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

		// Init with empty manifest url for testing custom manifest
		this._am = new jsb.AssetsManager('', this._storagePath, versionCompareHandle);

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
			// Some Android device may slow down the download process when concurrent tasks is too much.
			// The value may not be accurate, please do more test and find what's most suitable for your game.
			this._am.setMaxConcurrentTask(4);
		}
		
		this.fileProgress.progress = 0;
		this.byteProgress.progress = 0;
		this.hotUpdate();
	}

	onDestroy() 
	{
		if(this._am){
			this._am.setEventCallback(null);
		}
	}
}
