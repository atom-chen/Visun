import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import UIManager from "../../../../../kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIPerson extends BaseComponent {

	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		this.initUIEvent();
	}

	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ CommonUtil.safeDelete(this); }, this);
		var self = this;
		for(var i = 1001; i<=1008; i++) {
			this.m_ui["head"+i]["__headid__"] = i;
			CommonUtil.addClickEvent(this.m_ui["head"+i], function(){
				self.onSelectHead(this.__headid__);
			}, this.m_ui["head"+i]);
		}
		for(var j = 2001; j<=2008; j++) {
			this.m_ui["head"+j]["__headid__"] = j;
			CommonUtil.addClickEvent(this.m_ui["head"+j], function(){
				self.onSelectHead(this.__headid__);
			}, this.m_ui["head"+j]);
		}
	}

	onSelectHead(headId:number) {
		this.m_ui.img_kuang.position = this.m_ui["head"+headId].position;
		UIManager.toast("尚未实现");
	}

}
