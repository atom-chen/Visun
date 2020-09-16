import CHandler from "../../../../kernel/basic/datastruct/CHandler";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UISearchDesk extends BaseComponent {

    private cancelCb:CHandler = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.addClickEvent(this.m_ui.btn_cancel, function(){
            var cb = this.cancelCb;
            CommonUtil.safeDelete(this);
            if(cb) {
                cb.invoke();
            }
        }, this);
        this.m_ui.loading_search.runAction(cc.repeatForever(cc.rotateBy(3, 360)));
    }

    setViewData(cb:CHandler) {
        this.cancelCb = cb;
    }

}
