import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIKefu extends BaseComponent {

	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ CommonUtil.safeDelete(this); }, this);
		CommonUtil.addClickEvent(this.m_ui.btn_ok1, this.onBtnOK, this);
	}

	onBtnOK() {
		var cont = this.m_ui.editCont.getComponent(cc.EditBox).string;
		cc.log(cont);
	}

}
