import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import CpnHandcard from "../../../../../common/script/comps/CpnHandcard";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";
import LoginUser from "../../../../../common/script/model/LoginUser";
import DDzMgr from "../model/DDzMgr";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import DDzPlayer from "../model/DDzPlayer";


const MAX_SOLDIER = 3;

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

        var deck = [];
        var info = PokerCode;
		for (var key in info) {
			if (isNaN(key as any)) {
				var value = parseInt( info[key] );
                deck.push(value);
                if(deck.length>=17) { break; }
			}
        }
        this.m_ui.my_handor.getComponent(CpnHandcard).resetCards(deck);
        
        this.toStateReady();
    }

    private playerIndex(player:DDzPlayer) : number {
		if(isNil(player)){ return -1; }
		var hero = DDzMgr.getInstance().getPlayer(LoginUser.getInstance().UserId);
		var index = player.Pos;
		if(hero.Pos===0) { return index; }
		index = (player.Pos-hero.Pos+MAX_SOLDIER) % MAX_SOLDIER;
		return index;
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
