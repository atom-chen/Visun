const {ccclass, property} = cc._decorator;

import BaseComp from "./BaseComp";
import HotUpdator from "../HotUpdator";
import { HOT_STATE } from "../../looker/Consts";

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
		this.fileProgress.progress = 0;
		this.byteProgress.progress = 0;

		if ( !cc.sys.isNative ) {
			this.enterGame();
		} 
		else {
			var hotter = new HotUpdator("main", this.getLocalManifestPath(), 
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
		cc.loader.loadResDir("lobby", 
		(cpltCnt:number, totalCnt:number, item:any)=>{
			cc.log("进度：", cpltCnt, totalCnt);
			this.fileProgress.progress = cpltCnt/totalCnt;
			this.byteProgress.progress = cpltCnt/totalCnt;
		}, 
		(err:Error, resobj:any[], urls:string[])=>{
			cc.director.loadScene("LobbyScene");
		});
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
