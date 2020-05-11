import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import UIManager from "../../../../kernel/view/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIMain extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        CommonUtil.addClickEvent(this.m_ui.btn_chat, function(){ 
            UIManager.closeWindow("appenvelope/prefabs/UIGroup");
            UIManager.closeWindow("appenvelope/prefabs/UIPersonal");
            UIManager.openPanel("appenvelope/prefabs/UIChat", null);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_group, function(){ 
            UIManager.closeWindow("appenvelope/prefabs/UIChat");
            UIManager.closeWindow("appenvelope/prefabs/UIPersonal");
            UIManager.openPanel("appenvelope/prefabs/UIGroup", null);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_person, function(){ 
            UIManager.closeWindow("appenvelope/prefabs/UIGroup");
            UIManager.closeWindow("appenvelope/prefabs/UIChat");
            UIManager.openPanel("appenvelope/prefabs/UIPersonal", null);
		}, this);
    }

}
