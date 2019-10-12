import GameConfig from "../definer/GameConfig";
import HotUpdator from "../../../kernel/hotupdator/HotUpdator";
import UIManager from "../../../kernel/view/UIManager";
import SceneManager from "../../../kernel/view/SceneManager";
import ModelBase from "../../../kernel/model/ModelBase";
import ViewDefine from "../definer/ViewDefine";
import KernelUIDefine from "../../../kernel/looker/KernelUIDefine";
import LoginMgr from "./LoginMgr";


export default class GameManager extends ModelBase {
	private static _instance:GameManager;
	private constructor() {
		super();
	}
	public static getInstance() : GameManager {
		if(!GameManager._instance){ GameManager._instance = new GameManager; }
		return GameManager._instance;
	}
	public static delInstance() : void {
		if(GameManager._instance) {
			GameManager._instance.clear();
			GameManager._instance = null;
		}
	}
	public on_clear() {
		
	}



	public isGameExist(gameId:string) : boolean {
		if(!GameConfig[gameId] || !GameConfig[gameId].isexist) { 
			return false; 
		}
		return true;
	}

	public getUpdator(gameId:string) : HotUpdator {
		if(!GameConfig[gameId]) {
			return null;
		}
		return HotUpdator.create(gameId, "", (bSucc:boolean)=>{}, null);
	}


	public canEnterGame(gameId:string) : boolean {
		var cfg = GameConfig[gameId];
		if(!cfg) {
			UIManager.toast("敬请期待");
			return false;
		}
		var updator = this.getUpdator(gameId);
		if(updator) {
			if(updator.isUpdating()) {
				UIManager.toast("正在更新中，请稍等");
				return false;
			}
		}
		if(!this.isGameExist(gameId)) {
			UIManager.toast("游戏不存在 "+gameId);
			return false;
		}
		if(!LoginMgr.getInstance().checkLogin(true)) {
			return false;
		}
		return true;
	}
	
	//进入游戏的唯一入口
	public enterGame(gameId:string) {
		if( !this.canEnterGame(gameId) ) {
			return;
		}
		this.enterGameScene(gameId);
	}

	public enterGameScene(gameId) {
		SceneManager.turn2Scene(KernelUIDefine.GameScene.name, ()=>{
			gameId = gameId.toString();
			switch(gameId) {
				case "40000040":
					UIManager.openPanel(ViewDefine.ddzUI.path, null);
					break;
				case "90000040":
					UIManager.openPanel(ViewDefine.brnnUI.path, null);
					break;
				case "80000044":
					UIManager.openPanel(ViewDefine.fqzsUI.path, null);
					break;
				case "40070012":
					UIManager.openPanel(ViewDefine.zjhUI.path, null);
					break;
				case "80000041":
					UIManager.openPanel(ViewDefine.bjleUI.path, null);
					break;
			}
		});
	}

	//退出游戏的唯一出口
	public quitGame(reason:number) {
		SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
	}

}
