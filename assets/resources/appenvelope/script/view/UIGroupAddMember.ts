import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isEmpty, isNil } from "../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../kernel/view/UIManager";
import LoginUser from "../../../../common/script/model/LoginUser";
import { chat_request } from "../../../../common/script/proto/net_chat";



const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGroupAddMember extends BaseComponent {
    @property(cc.EditBox)
    editcont: cc.EditBox = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        
        CommonUtil.addClickEvent(this.m_ui.btn_ok, function() {
			var target = this.editcont.string;
			if(isEmpty(target)) {
				UIManager.toast("请输入有效的用户ID");
				return;
			}
			if(isNil(LoginUser.getInstance().MyGroup)) {
				UIManager.toast("你还不属于任何群，无法添加成员");
				return;
			}
            chat_request.GroupAddPerson({
				GroupId: LoginUser.getInstance().MyGroup.getId(),
				MemID: parseInt(target)
			});
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_no, function(){
            CommonUtil.safeDelete(this);
		}, this);
    }

}
