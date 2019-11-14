import GameConfig from "../definer/GameConfig";
import HotUpdator from "../../../kernel/hotupdator/HotUpdator";
import UIManager from "../../../kernel/view/UIManager";
import SceneManager from "../../../kernel/view/SceneManager";
import ModelBase from "../../../kernel/model/ModelBase";
import ViewDefine from "../definer/ViewDefine";
import KernelUIDefine from "../../../kernel/basic/defines/KernelUIDefine";
import LoginMgr from "./LoginMgr";
import { GameKindEnum, IS_DANJI_MODE } from "../definer/ConstDefine";
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
		this._gameList.sort((a,b)=>{
			return a.GameKind-b.GameKind
		})
	}
	public getGameList() : any[] {
		if(IS_DANJI_MODE && (!this._gameList || this._gameList.length <= 0)) {
			var testList = [];
			for(var k in GameConfig) {
				var info = {
					GameKind : GameConfig[k].GameKind,
					Name : GameConfig[k].name,
					State : 2,
				};
				testList.push(info);
			}
			return testList;
		}
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
		if(IS_DANJI_MODE && !this._roomList[gameKind]) {
			var testList = [];
			var cfg = GameConfig[gameKind];
			for(var i=1; i<=4; i++) {
				var info = {
					GameKind : cfg.GameKind,
					GameType : cfg.GameKind+i,
					Name : cfg.name,
				}
				testList.push(info);
			}
			this.setRoomList(gameKind, testList);
			return testList;
		}
		return this._roomList[gameKind];
	}

	public isGameExist(gameKind:string|number) : boolean {
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
		var updator = this.getUpdator(cfg.GameKind);
		if(updator) {
			if(updator.isUpdating()) {
				UIManager.toast("正在更新中，请稍等");
				return false;
			}
		}
		if(!this.isGameExist(cfg.GameKind)) {
			UIManager.toast("游戏不存在 "+cfg.GameKind);
			return false;
		}
		if(!LoginMgr.getInstance().checkLogin(true)) {
			return IS_DANJI_MODE;
		}
		return true;
	}
	
	//进入游戏的唯一入口
	public enterGame(gameType:number) {
		cc.log("enterGame: ", gameType)
		if( !this.canEnterGame(gameType) ) {
			return;
		}
		gamecomm_request.ReqEnterGame({GameType:gameType});
		if(IS_DANJI_MODE) {
			this.enterGameScene(gameType);
		}
	}

	public enterGameScene(gameType) {
		var gameKind = this.clientConfig(gameType).GameKind
		SceneManager.turn2Scene(KernelUIDefine.GameScene.name, ()=>{
			switch(gameKind) {
				case GameKindEnum.BrCowCow:
					UIManager.openPanel(ViewDefine.brnnUI.path, null);
					break;
				case GameKindEnum.Landlord:
					UIManager.openPanel(ViewDefine.ddzUI.path, null);
					break;
				case GameKindEnum.BirdBeast:
					UIManager.openPanel(ViewDefine.fqzsUI.path, null);
					break;
				case GameKindEnum.Zhajinhua:
					UIManager.openPanel(ViewDefine.zjhUI.path, null);
					break;
				case GameKindEnum.Baccarat:
					UIManager.openPanel(ViewDefine.bjleUI.path, null);
					break;
				case GameKindEnum.Blackjack:
					UIManager.openPanel(ViewDefine.UIdian21.path, null);
					break;
				case GameKindEnum.Longhu:
					UIManager.openPanel(ViewDefine.UIlonghu.path, null);
					break;
				case GameKindEnum.Suoha:
					UIManager.openPanel(ViewDefine.UIsuoha.path, null);
					break;
				case GameKindEnum.Redpacket:
					UIManager.openPanel(ViewDefine.UIredbag.path, null);
					break;
				case GameKindEnum.Water13:
					UIManager.openPanel(ViewDefine.UIshui13.path, null);
					break;
				case GameKindEnum.Redblack:
					UIManager.openPanel(ViewDefine.HongheiUI.path, null);
					break;
				case GameKindEnum.Sangong:
					UIManager.openPanel(ViewDefine.UIsangong.path, null);
					break;
				case GameKindEnum.QzCowcow:
					UIManager.openPanel(ViewDefine.UIqznn.path, null);
					break;
				case GameKindEnum.Qzpaijiu:
					UIManager.openPanel(ViewDefine.UIpaijiu.path, null);
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
		if(IS_DANJI_MODE) {
			SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
		}
	}

}
