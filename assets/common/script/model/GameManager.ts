import GameConfig from "../definer/GameConfig";
import HotUpdator from "../../../kernel/hotupdator/HotUpdator";
import UIManager from "../../../kernel/view/UIManager";
import SceneManager from "../../../kernel/view/SceneManager";
import ModelBase from "../../../kernel/model/ModelBase";
import KernelUIDefine from "../../../kernel/basic/defines/KernelUIDefine";
import LoginMgr from "./LoginMgr";
import { IS_DANJI_MODE } from "../definer/ConstDefine";
import { gamecomm_request } from "../proto/net_gamecomm";

//游戏管理器
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
	//------------------------------------------------------------------------------

	private _gameList = [];
	private _roomList = {};
	private _allRooms = {}


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

	public clientConfig(gameType:string|number) : any{
		var svrInfo = this._allRooms[gameType];
		if(!svrInfo) {
			cc.log("no server info: ", gameType);
			return null;
		}
		return GameConfig[svrInfo.GameKind];
	}

	

	public isGameExist(gameKind:string|number) : boolean {
		return true;
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

	//退出游戏的唯一出口
	public quitGame(reason:number) {
		gamecomm_request.ReqExitGame({GameType:0});
		if(IS_DANJI_MODE) {
			SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
		}
	}
	
	//进入游戏的唯一入口
	public enterGame(gameType:number) {
		if( !this.canEnterGame(gameType) ) {
			return;
		}
		cc.log("enterGame: ", gameType)
		gamecomm_request.ReqEnterGame({GameType:gameType});
		if(IS_DANJI_MODE) {
			this.enterGameScene(gameType);
		}
	}

	public enterGameScene(gameType) {
		if(!this.clientConfig(gameType)) {
			cc.warn("no client config");
			return;
		}
		SceneManager.turn2Scene(KernelUIDefine.GameScene.name, ()=>{
			var viewpath = this.clientConfig(gameType).viewpath;
			UIManager.openPanel(viewpath, null);
		});
	}

}
