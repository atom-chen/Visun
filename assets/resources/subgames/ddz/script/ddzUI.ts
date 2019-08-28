import BaseComponent from "../../../../kernel/view/BaseComponent";
import SceneManager from "../../../../kernel/view/SceneManager";
import CommonUtils from "../../../../kernel/utils/CommonUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DdzUI extends BaseComponent {
    
    start () {
        CommonUtils.traverseNodes(this.node, this.m_ui);
        
        CommonUtils.addClickEvent(this.m_ui.btn_close, function(){ 
            SceneManager.turn2Scene("LobbyScene");
		}, this);
    }
    
}
