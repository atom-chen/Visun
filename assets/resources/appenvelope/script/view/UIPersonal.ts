import CommonUtil from "../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import LoginUser from "../../../../common/script/model/LoginUser";
import LogicCenter from "../../../../common/script/model/LogicCenter";
import { login_request } from "../../../../common/script/proto/net_login";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import EventDefine from "../../../../common/script/definer/EventDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIPersonal extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.traverseLabels(this.node, this.m_lab);

        this.refreshUI();

        this.initUIEvent();
    }

    refreshUI() {
        this.m_lab.lab_name.string = LoginUser.getInstance().Name;
        this.m_lab.lab_id.string = LoginUser.getInstance().UserID.toString();
    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_unlogin, function(){ 
            LogicCenter.getInstance().clear();
            EventCenter.getInstance().fire(EventDefine.switch_to_group);
            login_request.Exit({});
        }, this);
    }

}
