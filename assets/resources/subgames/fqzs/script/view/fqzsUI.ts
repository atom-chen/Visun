import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import CpnChipbox from "../../../../../common/script/comps/CpnChipbox";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FqzsUI extends BaseComponent {
    
    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
		}, this);

        this.m_ui.CpnChipbox.getComponent(CpnChipbox).setChipValues([1,3,5,8,10]);
    }
    
}