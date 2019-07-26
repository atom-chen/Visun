const {ccclass, property} = cc._decorator;

import UIManager from "../../kernel/manager/UIManager";
import EventDef from "../../looker/EventDef";
import EventCenter from "../EventCenter";

@ccclass
export default class HotupdateScene extends cc.Component {

	// LIFE-CYCLE CALLBACKS:

	onLoad () {
		EventCenter.instance().listen(EventDef.HOTUPDATE_OVER, function(){
			this.leave();
		}, this, false);
	}

	onDestroy() {
		EventCenter.instance().removeByTarget(this);
	}

	private leave() {
		cc.director.loadScene("LobbyScene");
	}
	
}
