import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isEmpty } from "../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../kernel/view/UIManager";
import { chat_request, chat_msgs } from "../../../../common/script/proto/net_chat";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import Group from "../../../../common/script/model/Group";
import LoginUser from "../../../../common/script/model/LoginUser";



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
				Name: grpName
			});
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_no, function(){
            CommonUtil.safeDelete(this);
		}, this);

		EventCenter.getInstance().listen(chat_msgs.SetupGroupResp, this.SetupGroupResp, this);
	}
	
	SetupGroupResp(param) {
		var grp = new Group(param.GroupId, param.GroupName, param.HostId, param.Timestamp);
		LoginUser.getInstance().MyGroup = grp;
	}

}
