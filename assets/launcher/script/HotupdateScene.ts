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
	byteProgress: cc.ProgressBar = null;

	@property(cc.ProgressBar)
	fileProgress: cc.ProgressBar = null;

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
		
		this.fileProgress.progress = 0;
		this.byteProgress.progress = 0;

		if (!cc.sys.isNative) {
			this.enterGame();
		} else {
			var self = this;
			var hotter = HotUpdator.create("main", this.getLocalManifestPath(), 
			(bSucc:boolean, reason:number) => {
				if(!bSucc){
					if(reason==HOT_FAIL_REASON.not_need_update) {
						self.enterGame();
					} else {
						UIManager.openDialog("hotfailenter", "更新失败，是否依然进入游戏", 2, function(mnuId:number){
							if(mnuId == 1){
								self.enterGame();
							} else {
								PlatformUtil.exitApp();
							}
						});
					}
				}
			}, 
			(nowState:HOT_STATE, progressByFile:number, progressByBytes:number) => {
				self.fileProgress.progress = progressByFile;
				self.byteProgress.progress = progressByBytes;
			});
			hotter.beginUpdate();
		}
	}

	protected enterGame() {
		SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name, 1);
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
