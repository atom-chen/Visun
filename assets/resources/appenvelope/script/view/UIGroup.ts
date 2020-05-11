import BaseComponent from "../../../../kernel/view/BaseComponent";
import { isNil } from "../../../../kernel/utils/GlobalFuncs";
import LoginUser from "../../../../common/script/model/LoginUser";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import UIManager from "../../../../kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGroup extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        var hasGroup = !isNil(LoginUser.getInstance().MyGroup);
        this.m_ui.btn_create_grp.active = !hasGroup;

        CommonUtil.addClickEvent(this.m_ui.btn_create_grp, function(){ 
            UIManager.openPanel(ViewDefine.UIGroupCreate, null);
        }, this);
    }

}
