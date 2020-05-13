import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import UIManager from "../../../../kernel/view/UIManager";
import ViewDefine from "../../../../common/script/definer/ViewDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIMessage extends BaseComponent {

    @property(cc.Prefab)
    msgItem: cc.Prefab = null;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        for(var i=0; i<10; i++) {
            var item = cc.instantiate(this.msgItem);
            this.m_ui.content.addChild(item);
            CommonUtil.addClickEvent(item, function(){
                UIManager.openPanel(ViewDefine.UIChat, null);
            }, item);
        }
    }

}
