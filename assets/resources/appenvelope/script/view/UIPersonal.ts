import CommonUtil from "../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import LoginUser from "../../../../common/script/model/LoginUser";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIPersonal extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.traverseLabels(this.node, this.m_lab);

        this.m_lab.lab_name.string = LoginUser.getInstance().Name;
        this.m_lab.lab_id.string = LoginUser.getInstance().UserID.toString();
    }

}
