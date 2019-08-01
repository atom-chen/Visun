import HotUpdator from "../../../../script/launcher/HotUpdator";
import GameConfig from "./GameConfig";
import UIManager from "../../../../script/kernel/gui/UIManager";


export default class SubgameEntry {
	private static _singleton:SubgameEntry;
	private constructor() {}
	public static instance() : SubgameEntry {
		if(!SubgameEntry._singleton){
			SubgameEntry._singleton = new SubgameEntry;
		}
		return SubgameEntry._singleton;
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
