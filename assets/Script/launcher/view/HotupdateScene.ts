const {ccclass, property} = cc._decorator;

import EventDef from "../../looker/EventDef";
import EventCenter from "../EventCenter";
import BaseComp from "./BaseComp";

@ccclass
export default class HotupdateScene extends BaseComp {

	// LIFE-CYCLE CALLBACKS:

	onLoad () {
		EventCenter.instance().listen(EventDef.HOTUPDATE_OVER, function(){
			this.leave();
		}, this, false);
	}

	private leave() {
		cc.director.loadScene("LobbyScene");
	}
	
}
