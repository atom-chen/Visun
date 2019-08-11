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

		EventCenter.instance().listen("MSG_USER_LEAVE_ROOM_PUSH", this.MSG_USER_LEAVE_ROOM_PUSH, this);
	}

	MSG_USER_LEAVE_ROOM_PUSH(info) {
		SceneManager.turn2Scene("LobbyScene");
	}
}
