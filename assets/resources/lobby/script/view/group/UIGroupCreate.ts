import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import { chat_request } from "../../../../../common/script/proto/net_chat";
import { isEmpty } from "../../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../../kernel/view/UIManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGroupCreate extends BaseComponent {
    @property(cc.EditBox)
    editcont: cc.EditBox = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        
        CommonUtil.addClickEvent(this.m_ui.btn_ok, function() {
			var grpName = this.editcont.string;
			if(isEmpty(grpName)) {
				UIManager.toast("请输入群名");
				return;
			}
            chat_request.SetupGroup({
				name: grpName
			});
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_no, function(){
            CommonUtil.safeDelete(this);
		}, this);
    }

}
