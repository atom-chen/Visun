import BaseComponent from "../../../../kernel/view/BaseComponent";
import { isNil } from "../../../../kernel/utils/GlobalFuncs";
import LoginUser from "../../../../common/script/model/LoginUser";
import CommonUtil from "../../../../kernel/utils/CommonUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGroup extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        
        var hasGroup = !isNil(LoginUser.getInstance().MyGroup);
        this.m_ui.btn_create_grp.active = !hasGroup;
        if(hasGroup) {

        }
    }

}
