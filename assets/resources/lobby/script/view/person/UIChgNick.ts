import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../../kernel/view/BaseComponent";
import UIManager from "../../../../../kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIChgNick extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ CommonUtil.safeDelete(this); }, this);

        CommonUtil.addClickEvent(this.m_ui.btn_ok1, function(){
            UIManager.toast("尚未实现");
            var name = this.m_ui.editNick.getComponent(cc.EditBox).string;
            cc.log(name);
        }, this);
    }

}
