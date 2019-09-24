import GameConfig from "../definer/GameConfig";
import HttpCore from "../../../kernel/net/HttpCore";
import HotUpdator from "../../../kernel/hotupdator/HotUpdator";
import HallRequest from "../../../resources/lobby/script/proxy/HallRequest";
import UIManager from "../../../kernel/view/UIManager";
import SceneManager from "../../../kernel/view/SceneManager";
import { CLIENT_VERSION } from "../definer/ConstDefine";
import UserMgr from "./UserMgr";
import ModelBase from "../../../kernel/model/ModelBase";
import ViewDefine from "../definer/ViewDefine";


export default class GameManager extends ModelBase {
	private static _instance:GameManager;
	private _gamelist:any[];
	
	
	private constructor() {
		super();
		this._gamelist = [];
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
		this._gamelist.length = 0;
	}

	public setServerGames(gameList:any[]) {
		this._gamelist = gameList;
		cc.log(gameList);
	} 

	public isGameExist(gameId:string) : boolean {
		if(!GameConfig[gameId]) {
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

	public enterGame(gameId:string) {
		var cfg = GameConfig[gameId];
		if(!cfg) {
			UIManager.toast("敬请期待");
			return;
		}
		var updator = this.getUpdator(gameId);
		if(updator) {
			if(updator.isUpdating()) {
				UIManager.toast("正在更新中，请稍等");
				return;
			}
		}
		if(!this.isGameExist(gameId)) {
			UIManager.toast("游戏不存在");
			return;
		}
		
		this.enterGameScene(gameId);
		
		
		if(cfg.game_type===1){
			//点击游戏按钮，进入选房界面
			HallRequest.req_room_select_info({gameId:gameId,channelId:UserMgr.getInstance().getHero().channelId})

			//获得游戏的ws地址
			var param = {
				sid : HttpCore.token,
				gameId: gameId,
				tableType: 0,
				gameType: 0,
				clientVersion: CLIENT_VERSION,
				channelId: UserMgr.getInstance().getHero().channelId
			}
			HallRequest.req_enter_coin_room(param);
		}
		else {
			//点击游戏按钮，进入选房界面
			HallRequest.req_room_select_info({gameId:gameId,channelId:UserMgr.getInstance().getHero().channelId});

			//获得游戏的ws地址
			var param = {
				sid : HttpCore.token,
				gameId: gameId,
				tableType: 1,
				gameType: 0,
				clientVersion: CLIENT_VERSION,
				channelId: UserMgr.getInstance().getHero().channelId
			}
			HallRequest.req_enter_br_room(param);
		}
	}

	public enterGameScene(gameId) {
		SceneManager.turn2Scene("GameScene", ()=>{
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

}
