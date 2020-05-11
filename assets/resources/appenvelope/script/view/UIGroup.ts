import BaseComponent from "../../../../kernel/view/BaseComponent";
import { isNil } from "../../../../kernel/utils/GlobalFuncs";
import LoginUser from "../../../../common/script/model/LoginUser";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import UIManager from "../../../../kernel/view/UIManager";
import GroupMgr from "../../../../common/script/model/GroupMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGroup extends BaseComponent {
    @property(cc.Prefab)
    groupitem: cc.Prefab = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        this.initUIEvent();

        var grps = GroupMgr.getInstance().getGroupList();
        for(var grpId in grps) {
            var item = cc.instantiate(this.groupitem);
            this.m_ui.content.addChild(item);
        }
    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_create_grp, function(){ 
            UIManager.openPanel(ViewDefine.UIGroupCreate, null);
        }, this);
    }

}
