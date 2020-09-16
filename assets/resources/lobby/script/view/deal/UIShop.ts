import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIShop extends BaseComponent {
	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ CommonUtil.safeDelete(this); }, this);

		CommonUtil.addClickEvent(this.m_ui.tab0, function(){ this.selectTab(0); }, this);
        CommonUtil.addClickEvent(this.m_ui.tab1, function(){ this.selectTab(1); }, this);
		CommonUtil.addClickEvent(this.m_ui.tab2, function(){ this.selectTab(2); }, this);
		CommonUtil.addClickEvent(this.m_ui.tab3, function(){ this.selectTab(3); }, this);

		this.selectTab(0);
	}

	private selectTab(idx) {
        for(var i=0; i<4; i++) {
            this.m_ui["tab"+i].getChildByName("tab_sel").active = idx == i;
            this.m_ui["tab"+i].getChildByName("tab_unsel").active = idx != i;
        }
    }
}
