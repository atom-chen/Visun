import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import UIManager from "../../../../kernel/view/UIManager";
import LoginMgr from "../../../../common/script/model/LoginMgr";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import EventDefine from "../../../../common/script/definer/EventDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIMain extends BaseComponent {

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        this.initUIEvent();
        this.switchPage(2);
        EventCenter.getInstance().listen(EventDefine.switch_to_chat, function(){
            this.switchPage(1);
        }, this);
        EventCenter.getInstance().listen(EventDefine.switch_to_group, function(){
            this.switchPage(2);
        }, this);
    }

    switchPage(idx:number) {
        if(idx == 1) {
            UIManager.closeWindow(ViewDefine.UIGroup);
            UIManager.closeWindow(ViewDefine.UIPersonal);
            UIManager.openPanel(ViewDefine.UIMessage, null);
        } else if(idx == 2) {
            UIManager.closeWindow(ViewDefine.UIMessage);
            UIManager.closeWindow(ViewDefine.UIPersonal);
            UIManager.openPanel(ViewDefine.UIGroup, null);
        } else {
            if(!LoginMgr.getInstance().checkLogin(true)) {
                return;
            }
            UIManager.closeWindow(ViewDefine.UIGroup);
            UIManager.closeWindow(ViewDefine.UIMessage);
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
