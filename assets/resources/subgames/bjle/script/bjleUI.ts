import BaseComp from "../../../../script/kernel/gui/BaseComp";
import CommonUtils from "../../../../script/kernel/utils/CommonUtils";
import SceneManager from "../../../../script/kernel/gui/SceneManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class bjleUI extends BaseComp {
	m_ui:any;

	onLoad () {
		this.m_ui = {};
		CommonUtils.traverseNodes(this.node, this.m_ui);

		this.m_ui.btn_close.on("click", function(){
			SceneManager.turn2Scene("LobbyScene");
		}, this);
	}
}
