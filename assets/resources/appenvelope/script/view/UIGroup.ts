import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import UIManager from "../../../../kernel/view/UIManager";
import GroupMgr from "../../../../common/script/model/GroupMgr";
import ChatMgr from '../../../../common/script/model/ChatMgr';
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import { login_msgs } from "../../../../common/script/proto/net_login";
import EventDefine from "../../../../common/script/definer/EventDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGroup extends BaseComponent {
    @property(cc.Prefab)
    groupitem: cc.Prefab = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        this.initUIEvent();

        EventCenter.getInstance().listen(login_msgs.MasterInfo, this.onMasterInfo, this, true);
    }

    onMasterInfo() {
        this.m_ui.content.removeAllChildren(true);

        var grps = GroupMgr.getInstance().getGroupList();
        for(var grpId in grps) {
            var item = cc.instantiate(this.groupitem);
            this.m_ui.content.addChild(item);
            item.getChildByName("lab_grpname").getComponent(cc.Label).string = grps[grpId].GroupName;
            item.getChildByName("lab_grphost").getComponent(cc.Label).string = grps[grpId].HostID.toString();
            item.getChildByName("lab_grpmembercnt").getComponent(cc.Label).string = "0";
            item.getChildByName("btn_chat")["_grpId"] = grps[grpId].GroupId;
            CommonUtil.addClickEvent( item.getChildByName("btn_chat"), function(){
                ChatMgr.getInstance().setChatingTarget(0, this._grpId);
                EventCenter.getInstance().fire(EventDefine.switch_to_chat);
            }, item.getChildByName("btn_chat"));
        }
    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_create_grp, function(){ 
            UIManager.openPanel(ViewDefine.UIGroupCreate, null);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_join_grp, function(){ 
            UIManager.openPanel(ViewDefine.UIGroupJoin, null);
        }, this);
    }

}
