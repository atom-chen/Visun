import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isEmpty } from "../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIEnvelopeSend extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        this.initUIEvent();
    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_ok, function() {
            var money = this.m_ui.edit_money.getComponent(cc.EditBox).string;
            var count = this.m_ui.edit_count.getComponent(cc.EditBox).string;
			if(isEmpty(money) || isEmpty(count)) {
				UIManager.toast("请输入有效的红包信息");
				return;
            }
            cc.log("发红包", money, count);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_no, function(){
            CommonUtil.safeDelete(this);
		}, this);
    }
    
}
