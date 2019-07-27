const {ccclass, property} = cc._decorator;

import BaseComp from "./BaseComp";
import HotUpdator from "../HotUpdator";

@ccclass
export default class HotupdateScene extends BaseComp {
	@property(cc.ProgressBar)
	byteProgress: cc.ProgressBar = null;

	@property(cc.ProgressBar)
	fileProgress: cc.ProgressBar = null;

	@property({
		type: cc.Asset
	})
	manifestUrl: cc.Asset = null;


	onLoad () {
		if (!cc.sys.isNative) {
			this.fileProgress.node.active = false;
			this.byteProgress.node.active = false;
			cc.director.loadScene("LobbyScene");
		} 
		else {
			var hotter = new HotUpdator("main", this.getLocalManifestPath(), (bSucc:boolean) => {
				if(!bSucc){
					cc.director.loadScene("LobbyScene");
				}
			})
			hotter.beginUpdate();
		}
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
	
}
