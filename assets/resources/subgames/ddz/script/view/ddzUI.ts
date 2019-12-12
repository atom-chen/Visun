import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import CpnHandcard from "../../../../../common/script/comps/CpnHandcard";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";
import LoginUser from "../../../../../common/script/model/LoginUser";
import DDzMgr from "../model/DDzMgr";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import DDzPlayer from "../model/DDzPlayer";
import UIManager from "../../../../../kernel/view/UIManager";
import CpnPlayer from "../../../../../common/script/comps/CpnPlayer";
import RuleDdz from "../rule/RuleDdz";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";


const MAX_SOLDIER = 3;

const {ccclass, property} = cc._decorator;

@ccclass
export default class DdzUI extends BaseComponent {
    private _myHandor:CpnHandcard;
    private _players:Array<CpnPlayer> = [];
    private _outs:Array<CpnHandcard> = [];
    
    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        
        this._myHandor = this.m_ui.my_handor.getComponent(CpnHandcard);
        for(var i=0; i<MAX_SOLDIER; i++) {
            this._players.push(this.m_ui["player"+i].getComponent(CpnPlayer));
            this._outs.push(this.m_ui["outs"+i].getComponent(CpnHandcard));
        }

        this.initNetEvent();
        this.initUIEvent();
        this._myHandor.initSlideTouch();
        
        this.toStateResult();
        TimerManager.delayFrame(2, new CHandler(this, this.test));
        TimerManager.delayFrame(4, new CHandler(this, this.test1));
    }

    private test() {
        UIManager.showSpineAsync("common/spines/jack", 0, "a", true, this.node, {y:140, scale:0.6}, null);
        for(var j=0; j<MAX_SOLDIER; j++) {
            UIManager.showSpineAsync("common/spines/ky_lhd_js", 0, "1", true, this._players[j].node, {scale:1.1}, null);
            this._outs[j].resetCards([PokerCode.FK_10,PokerCode.HT_A]);
        }
    }
    private test1() {
        var deck = RuleDdz.initDeck();
     //   CommonUtil.shuffle(deck);
        var cards = [];
		for (var n=0; n<17; n++) {
            cards.push(deck[n]);
            cc.log(deck[n])
        }
        this._myHandor.resetCards(cards);
    }

    //玩家的UI位置
    private playerIndex(player:DDzPlayer) : number {
		if(isNil(player)){ return -1; }
		var hero = DDzMgr.getInstance().getPlayer(LoginUser.getInstance().UserID);
		var index = player.Pos;
		if(hero.Pos===0) { return index; }
		index = (player.Pos-hero.Pos+MAX_SOLDIER) % MAX_SOLDIER;
		return index;
    }
    
    //匹配阶段
    private toStateSearching() {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
    }
    
    //准备阶段
    private toStateReady() {
        this.m_ui.readyNode.active = true;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
    }

    //抢地主阶段
    private toStateGrab() {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = true;
        this.m_ui.fightNode.active = false;
    }

    //出牌阶段
    private toStateFight() {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = true;
    }

    //结算阶段
    private toStateResult() {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
        this.m_ui.player0.getComponent(CpnPlayer).addMoney(100);
        this.m_ui.player1.getComponent(CpnPlayer).addMoney(135);
        this.m_ui.player2.getComponent(CpnPlayer).addMoney(122);
    }
    

    private initNetEvent() {

    }

    private initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
        }, this);
    }

}
