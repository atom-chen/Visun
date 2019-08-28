import BaseComp from "../../../../kernel/view/BaseComp";
import SceneManager from "../../../../kernel/view/SceneManager";
import CommonUtils from "../../../../kernel/utils/CommonUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FqzsUI extends BaseComp {
    
    start () {
        CommonUtils.traverseNodes(this.node, this.m_ui);
        
        CommonUtils.addClickEvent(this.m_ui.btn_close, function(){ 
            SceneManager.turn2Scene("LobbyScene");
		}, this);

        this.m_ui.ChipBox.getComponent("ChipBox").setChipValues([1,3,5,8,10]);
    }
    
}
