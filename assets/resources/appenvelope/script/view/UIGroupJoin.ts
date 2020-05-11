import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import { isEmpty } from "../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../kernel/view/UIManager";
import { chat_request, chat_msgs } from "../../../../common/script/proto/net_chat";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import Group from "../../../../common/script/model/Group";
import GroupMgr from "../../../../common/script/model/GroupMgr";
import LoginUser from "../../../../common/script/model/LoginUser";



const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGroupJoin extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        
        this.initUIEvent();

		EventCenter.getInstance().listen(chat_msgs.EnterGroupResp, this.EnterGroupResp, this);
	}
	
	EnterGroupResp(param) {
		if(param.UserID==LoginUser.getInstance().UserID) {
			var grp = new Group(param.GroupId, "", 0, 0);
			GroupMgr.getInstance().addGroup(grp);
		}
		CommonUtil.safeDelete(this);
	}

	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_ok, function() {
			var grpId = this.m_ui.editbox.getComponent(cc.EditBox).string;
			if(isEmpty(grpId)) {
				UIManager.toast("请输入群ID");
				return;
			}
            chat_request.EnterGroup({
				GroupId: parseInt(grpId),
				HostID: 0
			});
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_no, function(){
            CommonUtil.safeDelete(this);
		}, this);
	}

}
