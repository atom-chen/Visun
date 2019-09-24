import BaseComponent from "../../../../kernel/view/BaseComponent";
import SceneManager from "../../../../kernel/view/SceneManager";
import CommonUtil from "../../../../kernel/utils/CommonUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DdzUI extends BaseComponent {
    
    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            SceneManager.turn2Scene("LobbyScene");
		}, this);
    }
    
}
