
import GameConfig from "./GameConfig";
import UIManager from "../../../../script/kernel/gui/UIManager";
import HttpCore from "../../../../script/kernel/net/HttpCore";
import { CLIENT_VERSION } from "../../../../script/looker/Consts";
import HotUpdator from "../../../../script/kernel/hotupdator/HotUpdator";
import SceneManager from "../../../../script/kernel/gui/SceneManager";
import UserMgr from "../model/UserMgr";


export default class SubgameEntry {
	private _gamelist:any[];
	
	private static _singleton:SubgameEntry;
	private constructor() {}
	public static instance() : SubgameEntry {
		if(!SubgameEntry._singleton){
			SubgameEntry._singleton = new SubgameEntry;
		}
		return SubgameEntry._singleton;
	}
	public static destroy(){
		if(SubgameEntry._singleton) {
			SubgameEntry._singleton._gamelist.length = 0;
			SubgameEntry._singleton._gamelist = null;
			SubgameEntry._singleton = null;
		}
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
		return new HotUpdator(gameId, "", (bSucc:boolean)=>{}, null);
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
		
		cc.loader.loadResDir("subgames", (cpltCnt, totalCnt, item)=>{
			cc.log("进度：", cpltCnt, totalCnt);
			if(totalCnt<=0){ totalCnt=1; }
			//this.byteProgress.progress = cpltCnt/totalCnt;
		}, 
		(err, resobj, urls)=>{
			this.enterGameScene(gameId);
		}
		);
		
		if(cfg.game_type===1){
			//点击游戏按钮，进入选房界面
			HttpCore.request("req_room_select_info", null, {gameId:gameId,channelId:UserMgr.instance().getHero().channelId});

			//获得游戏的ws地址
			var param = {
				sid : HttpCore.token,
				gameId: gameId,
				tableType: 0,
				gameType: 0,
				clientVersion: CLIENT_VERSION,
				channelId: UserMgr.instance().getHero().channelId
			}
			HttpCore.request("req_enter_coin_room", null, param);
		}
		else {
			//点击游戏按钮，进入选房界面
			HttpCore.request("req_room_select_info", null, {gameId:gameId,channelId:UserMgr.instance().getHero().channelId});

			//获得游戏的ws地址
			var param = {
				sid : HttpCore.token,
				gameId: gameId,
				tableType: 1,
				gameType: 0,
				clientVersion: CLIENT_VERSION,
				channelId: UserMgr.instance().getHero().channelId
			}
			HttpCore.request("req_enter_br_room", null, param);
		}
	}

	public enterGameScene(gameId) {
		SceneManager.turn2Scene("GameScene", ()=>{
			gameId = gameId.toString();
			switch(gameId) {
				case "40000040":
					UIManager.openPanel("subgames/ddz/prefabs/ddz_ui", null);
					break;
				case "90000040":
					UIManager.openPanel("subgames/brnn/prefabs/brnn_ui", null);
					break;
				case "80000044":
					UIManager.openPanel("subgames/fqzs/prefabs/fqzs_ui", null);
					break;
				case "40070012":
					UIManager.openPanel("subgames/zjh/prefabs/zjh_ui", null);
					break;
				case "80000041":
					UIManager.openPanel("subgames/bjle/prefabs/bjle_ui", null);
					break;
			}
		});
	}

}
