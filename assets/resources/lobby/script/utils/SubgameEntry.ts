import HotUpdator from "../../../../script/launcher/HotUpdator";
import UIManager from "../../../../script/kernel/manager/UIManager";
import GameConfig from "./GameConfig";


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
		if(this.isGameExist(gameId)) {
			switch(gameId) {
				case "ddz":
					UIManager.showPanel("subgames/ddz/prefabs/ddz_ui", null);
					break;
				case "brnn":
					UIManager.showPanel("subgames/brnn/prefabs/brnn_ui", null);
					break;
				case "fqzs":
					UIManager.showPanel("subgames/fqzs/prefabs/fqzs_ui", null);
					break;
				case "zjh":
					UIManager.showPanel("subgames/zjh/prefabs/zjh_ui", null);
					break;
			}
		}
	}
}
