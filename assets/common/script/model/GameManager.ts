import GameConfig from "../definer/GameConfig";
import HotUpdator from "../../../kernel/hotupdator/HotUpdator";
import UIManager from "../../../kernel/view/UIManager";
import SceneManager from "../../../kernel/view/SceneManager";
import ModelBase from "../../../kernel/model/ModelBase";
import ViewDefine from "../definer/ViewDefine";
import KernelUIDefine from "../../../kernel/looker/KernelUIDefine";
import LoginMgr from "./LoginMgr";
import { GameKindEnum } from "../definer/ConstDefine";
import { gamecomm_request } from "../proto/net_gamecomm";


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

	private _gameList = [];
	public setGameList(data) {
		this._gameList = data;
	}
	public getGameList() : any[] {
		return this._gameList;
	}

	private _roomList = {};
	private _allRooms = {}
	public setRoomList(gameKind, data) {
		this._roomList[gameKind] = data
		for(var i in data) {
			this._allRooms[data[i].GameType] = data[i];
		}
	}
	public getRoomList(gameKind) {
		return this._roomList[gameKind];
	}

	public isGameExist(gameKind:string|number) : boolean {
		var cfg = GameConfig[gameKind];
		if(!cfg || !cfg.isexist) { 
			return false; 
		}
		return true;
	}

	public clientConfig(gameType:string|number) : any{
		var svrInfo = this._allRooms[gameType];
		if(!svrInfo) {
			cc.log("no server info: ", gameType);
			return null;
		}
		return GameConfig[svrInfo.GameKind];
	}

	public getUpdator(gameKind:string|number) : HotUpdator {
		if(!GameConfig[gameKind]) {
			return null;
		}
		return HotUpdator.create(gameKind.toString(), "", (bSucc:boolean)=>{}, null);
	}


	public canEnterGame(gameType:string|number) : boolean {
		var cfg = this.clientConfig(gameType);
		if(!cfg) {
			UIManager.toast("敬请期待");
			return false;
		}
		var updator = this.getUpdator(cfg.id);
		if(updator) {
			if(updator.isUpdating()) {
				UIManager.toast("正在更新中，请稍等");
				return false;
			}
		}
		if(!this.isGameExist(cfg.id)) {
			UIManager.toast("游戏不存在 "+cfg.id);
			return false;
		}
		if(!LoginMgr.getInstance().checkLogin(true)) {
			return false;
		}
		return true;
	}
	
	//进入游戏的唯一入口
	public enterGame(gameType:number) {
		cc.log("enterGame: ", gameType)
		if( !this.canEnterGame(gameType) ) {
			return;
		}
		gamecomm_request.ReqEnterGame({GameType:gameType})
	//	this.enterGameScene(gameType);
	}

	public enterGameScene(gameType) {
		var gameKind = this.clientConfig(gameType).id
		SceneManager.turn2Scene(KernelUIDefine.GameScene.name, ()=>{
			switch(gameKind) {
				case GameKindEnum.BrCowCow:
					UIManager.openPanel(ViewDefine.brnnUI.path, null);
					break;
				case "40000040":
					UIManager.openPanel(ViewDefine.ddzUI.path, null);
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
				default:
					cc.warn("no ui", gameKind);
					break;
			}
		});
	}

	//退出游戏的唯一出口
	public quitGame(reason:number) {
		gamecomm_request.ReqExitGame({GameType:0});
	}

}
