import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import LoginMgr from "../../../../../common/script/model/LoginMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginUI extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_login, function(){ 
            cc.log("click ");
            LoginMgr.instance().loginAsYouke();
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_youke, function(){ 
            cc.log("click ");
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_regist, function(){ 
            cc.log("click ");
        }, this);
    }

}
