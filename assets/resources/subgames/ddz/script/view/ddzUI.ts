import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import CpnHandcard from "../../../../../common/script/comps/CpnHandcard";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";


const {ccclass, property} = cc._decorator;

@ccclass
export default class DdzUI extends BaseComponent {
    
    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
        }, this);

        this.m_ui.outs0.getComponent(CpnHandcard).resetCards([PokerCode.FK_10,PokerCode.HT_A]);
        this.m_ui.outs1.getComponent(CpnHandcard).resetCards([PokerCode.FK_10,PokerCode.HT_A]);
        this.m_ui.outs2.getComponent(CpnHandcard).resetCards([PokerCode.FK_10,PokerCode.HT_A]);
        this.m_ui.my_handor.getComponent(CpnHandcard).resetCards([PokerCode.FK_10,PokerCode.HT_A]);
        
        this.toStateReady();
    }
    
    private toStateReady() {
        this.m_ui.readyNode.active = true;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
    }

    private toStateGrab() {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = true;
        this.m_ui.fightNode.active = false;
    }

    private toStateFight() {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = true;
    }

    private toStateResult() {

    }
    
}
