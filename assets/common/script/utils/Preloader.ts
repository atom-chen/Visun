import GameConfig from "../definer/GameConfig";

export default class Preloader {
	static loadGameIcons() {
		for(var k in GameConfig) {
			cc.loader.loadRes(GameConfig[k].icon, cc.SpriteFrame);
		}
	}
}