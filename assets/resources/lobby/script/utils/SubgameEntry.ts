import HotUpdator from "../../../../script/launcher/HotUpdator";
import GameConfig from "./GameConfig";
import UIManager from "../../../../script/kernel/gui/UIManager";
import HttpCore from "../../../../script/kernel/net/HttpCore";
import User from "../model/User";


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

	public setServerGames(gameList:any[]) {
		this._gamelist = gameList;
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
		if(!GameConfig[gameId]) {
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
		
		//点击游戏按钮，进入选房界面
        HttpCore.request("req_room_select_info", null, {gameId:gameId,channelId:User.getHero().channelId});

        //获得游戏的ws地址
        var param = {
            sid : HttpCore.token,
            gameId: gameId,
            tableType: 0,
            gameType: 0,
            clientVersion: "9.9.9",
            channelId: User.getHero().channelId
        }
		HttpCore.request("req_enter_room", null, {data:JSON.stringify(param)});
	}

	public enterGameScene(gameId) {
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
		}
	}

}
