import BaseComp from "../../../../script/kernel/gui/BaseComp";
import SceneManager from "../../../../script/kernel/gui/SceneManager";
import CommonUtils from "../../../../script/kernel/utils/CommonUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DdzUI extends BaseComp {
    
    start () {
        CommonUtils.addClickEvent(this.m_ui.btn_close, function(){ 
            SceneManager.turn2Scene("LobbyScene");
		}, this);
    }
    
}
