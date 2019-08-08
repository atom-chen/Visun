//---------------------------------
// 热更界面
//---------------------------------
const {ccclass, property} = cc._decorator;

import { HOT_STATE } from "../looker/Consts";
import BaseComp from "../kernel/gui/BaseComp";
import PlatformUtil from "../kernel/utils/PlatformUtil";
import HotUpdator from "../kernel/hotupdator/HotUpdator";
import SceneManager from "../kernel/gui/SceneManager";

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
		PlatformUtil.adaptScreen();
		
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
		this.byteProgress.node.active = false;

		cc.loader.loadResDir( "lobby", 
		(cpltCnt, totalCnt, item)=>{
			//cc.log("进度：", cpltCnt, totalCnt);
			if(totalCnt<=0){ totalCnt=1; }
			this.fileProgress.progress = cpltCnt/totalCnt;
			//this.byteProgress.progress = cpltCnt/totalCnt;
		}, 
		(err, resobj, urls)=>{
			cc.loader.loadResDir("common", 
			(cnt, tCnt, item)=>{
				//cc.log("进度：", cnt, tCnt);
				if(tCnt<=0){ tCnt=1; }
				this.fileProgress.progress = cnt/tCnt;
			},
			(err, res, ruls)=>{
				SceneManager.turn2Scene("LobbyScene");
			});
		}
		);
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
