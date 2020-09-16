import GameManager from "../../../../common/script/model/GameManager";
import { gamecomm_request } from "../../../../common/script/proto/net_gamecomm";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import BaseComponent from "../../../../kernel/view/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UISearchDesk extends BaseComponent {

    private cancelCb:Function = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        CommonUtil.addClickEvent(this.m_ui.btn_cancel, function(){
            var cb = this.cancelCb;
            CommonUtil.safeDelete(this);
            if(cb) {
                cb();
            }
        }, this);
        this.m_ui.loading_search.runAction(cc.repeatForever(cc.rotateBy(2, 360)));
    }

    setViewData(cb:Function) {
        this.cancelCb = cb;
    }

}
