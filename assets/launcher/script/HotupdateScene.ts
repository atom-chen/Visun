//---------------------------------
// 热更界面
//---------------------------------
import { HOT_FAIL_REASON, HOT_STATE } from "../../kernel/basic/defines/KernelDefine";
import BaseComponent from "../../kernel/view/BaseComponent";
import HotUpdator from "../../kernel/hotupdator/HotUpdator";
import SceneManager from "../../kernel/view/SceneManager";
import KernelUIDefine from "../../kernel/basic/defines/KernelUIDefine";
import PlatformUtil from "../../kernel/utils/PlatformUtil";
import UIManager from "../../kernel/view/UIManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class HotupdateScene extends BaseComponent {
	@property(cc.ProgressBar)
	barProg: cc.ProgressBar = null;
	@property(cc.Label)
	labHottip: cc.Label = null;
	@property(cc.RichText)
	labDbg: cc.RichText = null;

	@property({
		type: cc.Asset
	})
	manifestUrl: cc.Asset = null;


	onLoad () {
		PlatformUtil.setOrientation(true);
		
		KernelUIDefine.GameScene.name = "GameScene";
        KernelUIDefine.LobbyScene.name = "LobbyScene";
        KernelUIDefine.HotupdateScene.name = "HotupdateScene";
        KernelUIDefine.ConfirmDlg = "launcher/prefabs/ConfirmDlg";
        KernelUIDefine.UIToast = "launcher/prefabs/UIToast";
		KernelUIDefine.UILoading = "launcher/scene/UILoading";
		
		this.refleshBar(0);
		this.refleshHottip("检查更新中");

		if (!cc.sys.isNative) {
			this.enterGame();
		} else {
			var self = this;
			var hotter = HotUpdator.create("main", this.getLocalManifestPath(), 
			(bSucc:boolean, reason:number) => {
				self.onHotFinished(bSucc, reason);
			}, 
			(nowState:HOT_STATE, curCnt:number, totalCnt:number) => {
				self.onHotProgress(nowState, curCnt, totalCnt);
			});
			hotter.beginUpdate();
		}
	}

	private refleshBar(v:number) {
		if(this.barProg) {
			this.barProg.progress = v;
		}
	}

	private refleshHottip(str:string) {
		if(this.labHottip) {
			this.labHottip.string = str;
		}
	}

	private onHotFinished(bSucc:boolean, reason:HOT_FAIL_REASON) {
		if(!bSucc){
			if(reason==HOT_FAIL_REASON.not_need_update) {
				this.enterGame();
			} else {
				var self = this;
				UIManager.openDialog("hotfailenter", "更新失败，是否依然进入游戏", 2, function(mnuId:number){
					if(mnuId == 1){
						self.enterGame();
					} else {
						PlatformUtil.exitApp();
					}
				});
			}
		}
	}

	private onHotProgress(nowState:HOT_STATE, curCnt:number, totalCnt:number) {
		if(totalCnt == 0) {
			this.refleshBar(0);
		} else {
			this.refleshBar(curCnt/totalCnt);
		}

		if(nowState == HOT_STATE.UPDATING) {
			this.refleshHottip("更新资源中");
		} 
		else if(nowState == HOT_STATE.UNZIPING) {
			this.refleshHottip("解压资源中");
		}
	}

	protected enterGame() {
		this.refleshHottip("加载资源中");
		var hallPrefab = "lobby/prefabs/UIHall";
		var loginPrefab = "appqp/prefabs/UILogin";
		var self = this;
		cc.loader.loadResArray([loginPrefab,hallPrefab], cc.Prefab, (curCnt:number, totalCnt:number)=>{
			if(totalCnt==0) {
				self.refleshBar(0);
			} else {
				self.refleshBar(curCnt/totalCnt);
			}
		}, (err,rsc)=>{
			SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name, 0);
		});
	}

	protected getLocalManifestPath() : string
	{
		var url = this.manifestUrl.nativeUrl;
		if (cc.loader.md5Pipe) {
			url = cc.loader.md5Pipe.transformURL(url);
		}
		this.addDbgStr("local manifest path: "+url);
		if(jsb){
			this.addDbgStr(jsb.fileUtils.fullPathForFilename(url));
		}
		return url;
	}

	private addDbgStr(str:string) {
		cc.log(str);
		if(this.labDbg) {
			this.labDbg.string += "\n"+str;
		}
	}
	
}
