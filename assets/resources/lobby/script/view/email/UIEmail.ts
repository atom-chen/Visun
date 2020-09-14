import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIEmail extends BaseComponent {
	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ CommonUtil.safeDelete(this); }, this);
	}
}
