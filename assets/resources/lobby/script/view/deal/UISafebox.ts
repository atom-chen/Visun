import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import { newHandler } from "../../../../../kernel/utils/GlobalFuncs";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import UIManager from "../../../../../kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UISafebox extends BaseComponent {
	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ CommonUtil.safeDelete(this); }, this);
		CommonUtil.addClickEvent(this.m_ui.btn_cunru, function(){ 
			UIManager.openPopwnd(ViewDefine.UINumInput, true, newHandler(function(v){
				cc.log(v);
				this.m_ui.lab_cunru.getComponent(cc.Label).string = v;
				return true;
			}, this));
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_quchu, function(){ 
			UIManager.openPopwnd(ViewDefine.UINumInput, true, newHandler(function(v){
				cc.log(v);
				this.m_ui.lab_quchu.getComponent(cc.Label).string = v;
				return true;
			},this));
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_ok, function(){ 
			CommonUtil.safeDelete(this);
		}, this);
	}
}
