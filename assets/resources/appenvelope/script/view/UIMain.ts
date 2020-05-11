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
    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_chat, function(){ 
            UIManager.closeWindow(ViewDefine.UIGroup);
            UIManager.closeWindow(ViewDefine.UIPersonal);
            UIManager.openPanel(ViewDefine.UIChat, null);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_group, function(){ 
            UIManager.closeWindow(ViewDefine.UIChat);
            UIManager.closeWindow(ViewDefine.UIPersonal);
            UIManager.openPanel(ViewDefine.UIGroup, null);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_person, function(){ 
            if(!LoginMgr.getInstance().checkLogin(true)){
                return;
            }
            UIManager.closeWindow(ViewDefine.UIGroup);
            UIManager.closeWindow(ViewDefine.UIChat);
            UIManager.openPanel(ViewDefine.UIPersonal, null);
		}, this);
    }

}
