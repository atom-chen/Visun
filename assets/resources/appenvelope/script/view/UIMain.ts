import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import UIManager from "../../../../kernel/view/UIManager";
import LoginMgr from "../../../../common/script/model/LoginMgr";
import ViewDefine from "../../../../common/script/definer/ViewDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIMain extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        this.initUIEvent();
        this.switchPage(1);
    }

    switchPage(idx:number) {
        if(idx == 1) {
            UIManager.closeWindow(ViewDefine.UIGroup);
            UIManager.closeWindow(ViewDefine.UIPersonal);
            UIManager.openPanel(ViewDefine.UIChat, null);
        } else if(idx == 2) {
            UIManager.closeWindow(ViewDefine.UIChat);
            UIManager.closeWindow(ViewDefine.UIPersonal);
            UIManager.openPanel(ViewDefine.UIGroup, null);
        } else {
            UIManager.closeWindow(ViewDefine.UIGroup);
            UIManager.closeWindow(ViewDefine.UIChat);
            UIManager.openPanel(ViewDefine.UIPersonal, null);
        }
    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_chat, function(){ 
            this.switchPage(1);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_group, function(){ 
            this.switchPage(2);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_person, function(){ 
            this.switchPage(3);
		}, this);
    }

}
