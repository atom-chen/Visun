import HotUpdator from "../../../../script/launcher/HotUpdator";
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
			vsun.UIManager.toast("敬请期待");
			return;
		}
		var updator = this.getUpdator(gameId);
		if(updator) {
			if(updator.isUpdating()) {
				vsun.UIManager.toast("正在更新中，请稍等");
				return;
			}
		}
		if(!this.isGameExist(gameId)) {
			vsun.UIManager.toast("游戏不存在");
			return;
		}
		switch(gameId) {
			case "ddz":
				vsun.UIManager.openPanel("subgames/ddz/prefabs/ddz_ui", null);
				break;
			case "brnn":
				vsun.UIManager.openPanel("subgames/brnn/prefabs/brnn_ui", null);
				break;
			case "fqzs":
				vsun.UIManager.openPanel("subgames/fqzs/prefabs/fqzs_ui", null);
				break;
			case "zjh":
				vsun.UIManager.openPanel("subgames/zjh/prefabs/zjh_ui", null);
				break;
		}
	}
}
