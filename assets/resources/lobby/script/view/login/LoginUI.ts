import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtils from "../../../../../kernel/utils/CommonUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginUI extends BaseComponent {

    start () {
        CommonUtils.traverseNodes(this.node, this.m_ui);

        CommonUtils.addClickEvent(this.m_ui.btn_login, function(){ 
            cc.log("click ");
        }, this);
        CommonUtils.addClickEvent(this.m_ui.btn_youke, function(){ 
            cc.log("click ");
        }, this);
        CommonUtils.addClickEvent(this.m_ui.btn_regist, function(){ 
            cc.log("click ");
        }, this);
    }

}
