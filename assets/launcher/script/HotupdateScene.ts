//---------------------------------
// 热更界面
//---------------------------------
const {ccclass, property} = cc._decorator;

import { HOT_STATE } from "../../kernel/looker/KernelDefine";
import BaseComponent from "../../kernel/view/BaseComponent";
import HotUpdator from "../../kernel/hotupdator/HotUpdator";
import SceneManager from "../../kernel/view/SceneManager";
import Adaptor from "../../kernel/adaptor/Adaptor";
import KernelUIDefine from "../../kernel/looker/KernelUIDefine";

@ccclass
export default class HotupdateScene extends BaseComponent {
	@property(cc.ProgressBar)
	byteProgress: cc.ProgressBar = null;

	@property(cc.ProgressBar)
	fileProgress: cc.ProgressBar = null;

	@property({
		type: cc.Asset
	})
	manifestUrl: cc.Asset = null;


	onLoad () {
	//	Adaptor.setFullScreen(true);
		Adaptor.adaptOrientation(true);
		this.fileProgress.progress = 0;
		this.byteProgress.progress = 0;

		if ( !cc.sys.isNative ) {
			this.enterGame();
		} 
		else {
			var hotter = HotUpdator.create("main", this.getLocalManifestPath(), 
			(bSucc:boolean) => {
				if(!bSucc){
					this.enterGame();
				}
			}, 
			(nowState:HOT_STATE, progressByFile:number, progressByBytes:number) => {
				this.fileProgress.progress = progressByFile;
				this.byteProgress.progress = progressByBytes;
			});
			hotter.beginUpdate();
		}
	}

	protected enterGame() {
		this.byteProgress.node.active = false;
		SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
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
