import BaseComp from "../../../../script/kernel/gui/BaseComp";
import CommonUtils from "../../../../script/kernel/utils/CommonUtils";
import SceneManager from "../../../../script/kernel/gui/SceneManager";
import WsCore from "../../../../script/kernel/net/WsCore";
import EventCenter from "../../../../script/kernel/event/EventCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class bjleUI extends BaseComp {
	m_ui:any;

	onLoad () {
		this.m_ui = {};
		CommonUtils.traverseNodes(this.node, this.m_ui);

		this.m_ui.btn_close.on("click", function(){
			WsCore.request("MSG_USER_LEAVE_ROOM_REQUEST", {});
		}, this);

		var rule = [1,10,20,100,500];
		this.m_ui.ChipBox.getComponent("ChipBox").setChipValues(rule);

		EventCenter.instance().listen("MSG_USER_LEAVE_ROOM_PUSH", this.MSG_USER_LEAVE_ROOM_PUSH, this);
		EventCenter.instance().listen("MSG_GAME_OTHER_BET_ACK", this.MSG_GAME_OTHER_BET_ACK, this);
		EventCenter.instance().listen("MSG_GAME_ROOM_START_PUSH", this.MSG_GAME_ROOM_START_PUSH, this);
		EventCenter.instance().listen("MSG_JOIN_COIN_ACK", this.MSG_JOIN_COIN_ACK, this);
	}

	MSG_USER_LEAVE_ROOM_PUSH(info) {
		SceneManager.turn2Scene("LobbyScene");
	}
	MSG_GAME_OTHER_BET_ACK(info){

	}
	MSG_GAME_ROOM_START_PUSH(info){

	}
	MSG_JOIN_COIN_ACK(info){
		for(var i=0; i<info.richManList.length; i++){
			this.m_ui["richman"+(i+1)].getComponent("PlayerUI").label_name.string = info.richManList[i].nickname;
			this.m_ui["richman"+(i+1)].getComponent("PlayerUI").label_money.string = info.richManList[i].coin.toString();
		}
	}
}
