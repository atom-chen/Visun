import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import CpnHandcard from "../../../../../common/script/comps/CpnHandcard";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";
import LoginUser from "../../../../../common/script/model/LoginUser";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../../kernel/view/UIManager";
import CpnPlayer from "../../../../../common/script/comps/CpnPlayer";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import DDzMgr from "../model/DDzMgr";
import RuleDdz from "../rule/RuleDdz";
import { landLords_msgs } from "../../../../../common/script/proto/net_landLords";
import { gamecomm_msgs } from "../../../../../common/script/proto/net_gamecomm";
import GamePlayer from "../../../../../common/script/model/GamePlayer";

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
            this._players[i].setName("");
            this._players[i].setMoney(0);
        }
        this._players[0].setName(LoginUser.getInstance().Name);
        this._players[0].setMoney(LoginUser.getInstance().getMoney());

        this.initNetEvent();
        this.initUIEvent();
        this._myHandor.initSlideTouch();
        
        this.refreshPlayers();
        this.toStateReady(null);
    }

    //玩家的UI位置
    private playerIndex(player:GamePlayer) : number {
		if(isNil(player)){ return -1; }
		var hero = DDzMgr.getInstance().getPlayer(LoginUser.getInstance().UserID);
		var index = player.Pos;
		if(hero.Pos===0) { return index; }
		index = (player.Pos-hero.Pos+MAX_SOLDIER) % MAX_SOLDIER;
		return index;
    }
    
    //匹配阶段
    private toStateSearching(param) {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
    }
    
    //准备阶段
    private toStateReady(param) {
        this.m_ui.readyNode.active = true;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = false;
        this._myHandor.clearCards();
        this.m_ui.labGrab0.getComponent(cc.Label).string = "";
        this.m_ui.labGrab1.getComponent(cc.Label).string = "";
        this.m_ui.labGrab2.getComponent(cc.Label).string = "";
        for(var i in this._outs) {
            this._outs[i].clearCards();
        }
    }

    //抢地主阶段
    private toStateGrab(param) {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = true;
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = false;
    }

    //出牌阶段
    private toStateFight(param) {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = true;
        this.m_ui.tipLayer.active = true;
    }

    //结算阶段
    private toStateResult(param) {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = true;
        this.m_ui.player0.getComponent(CpnPlayer).addMoney(100);
        this.m_ui.player1.getComponent(CpnPlayer).addMoney(135);
        this.m_ui.player2.getComponent(CpnPlayer).addMoney(122);
    }
    
    private refreshPlayers() {
        for(var ii=0; ii<MAX_SOLDIER; ii++) {
            this._players[ii].setName("");
            this._players[ii].setMoney(0);
        }
        var players = DDzMgr.getInstance().getPlayerList();
        for(var i in players) {
            var idx = this.playerIndex(players[i]);
            this._players[idx].setName(players[i].Name);
            this._players[idx].setMoney(players[i].Gold);
        }
    }

    private GameLandLordsPlayer(param) {
        this._myHandor.resetCards(param.Cards, true);
    }
    private GameLandLordsOutCard(param) {
        var p = DDzMgr.getInstance().getPlayer(param.UserID);
        if(!p){
            UIManager.toast("bug：找不到玩家 "+param.UserID);
            return;
        }
        var idx = this.playerIndex(p);
        if(idx>=0) {
            this._outs[idx].resetCards(param.Cards, false);
            if(isNil(param.Cards) || param.Cards.length<=0) {
                UIManager.toast(p.Name+" 不要")
            }
        } else {
            UIManager.toast("bug：找不到玩家UI "+param.UserID);
        }
    }
    private GameLandLordsOperate(param) {
        
    }
    private GameLandLordsDeal(param) {
        this._myHandor.resetCards(param.CardsHand, true);
    }
    private GameLandLordsCheckout(param) {
        
    }
    private GameLandLordsCall(param) {
        var p = DDzMgr.getInstance().getPlayer(param.UserID);
        if(!p){
            UIManager.toast("bug：找不到玩家 "+param.UserID);
            return;
        }
        var idx = this.playerIndex(p);
        if(this.m_ui["labGrab"+idx]) {
            this.m_ui["labGrab"+idx].getComponent(cc.Label).string = param.Score;
        }
    }
    private GameLandLordsBottomCard(param) {
        this.m_ui.labGrab0.getComponent(cc.Label).string = "";
        this.m_ui.labGrab1.getComponent(cc.Label).string = "";
        this.m_ui.labGrab2.getComponent(cc.Label).string = "";
        this.m_ui.dipai.getComponent(CpnHandcard).resetCards(param.CardsBottom, true);
    }
    private GameLandLordsAward(param) {
        
    }
    private onUserList(param) {
        DDzMgr.getInstance().resetPlayerList(param && param.AllInfos);
        this.refreshPlayers();
    }
    private initNetEvent() {
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsPlayer, this.GameLandLordsPlayer, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsOutCard, this.GameLandLordsOutCard, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsOperate, this.GameLandLordsOperate, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsDeal, this.GameLandLordsDeal, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsCheckout, this.GameLandLordsCheckout, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsCall, this.GameLandLordsCall, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsBottomCard, this.GameLandLordsBottomCard, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsAward, this.GameLandLordsAward, this);
        EventCenter.getInstance().listen(gamecomm_msgs.UserList, this.onUserList, this);
    }

    private initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            DDzMgr.getInstance().resetPlayerList([]);
            GameManager.getInstance().quitGame(0);
        }, this);
    }


    private test() {
        UIManager.showSpineAsync("common/spines/jack/jack", 0, "a", true, this.node, {y:140, scale:0.6}, null);
        for(var j=0; j<MAX_SOLDIER; j++) {
            UIManager.showSpineAsync("common/spines/headflower/ky_lhd_js", 0, "1", true, this._players[j].node, {scale:1.1}, null);
            this._outs[j].resetCards([PokerCode.FK_10,PokerCode.HT_A], true);
        }
    }
    private test1() {
        var deck = RuleDdz.initDeck();
     //   CommonUtil.shuffle(deck);
        var cards = [];
		for (var n=0; n<17; n++) {
            cards.push(deck[n]);
        //    cc.log(deck[n])
        }
        this._myHandor.resetCards(cards, true);
    }

}
