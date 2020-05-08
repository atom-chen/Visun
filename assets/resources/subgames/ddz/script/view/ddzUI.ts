import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import CpnHandcard from "../../../../../common/script/comps/CpnHandcard";
import LoginUser from "../../../../../common/script/model/LoginUser";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../../kernel/view/UIManager";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import DDzMgr from "../model/DDzMgr";
import { landLords_msgs, landLords_request } from "../../../../../common/script/proto/net_landLords";
import { gamecomm_msgs, gamecomm_request } from "../../../../../common/script/proto/net_gamecomm";
import GamePlayer from "../../../../../common/script/model/GamePlayer";
import CpnPlayer1 from "../../../../../common/script/comps/CpnPlayer1";
import CpnCircleCD from "../../../../../common/script/comps/CpnCircleCD";

const MAX_SOLDIER = 3;

const {ccclass, property} = cc._decorator;

@ccclass
export default class DdzUI extends BaseComponent {
    private _myHandor:CpnHandcard;
    private _players:Array<CpnPlayer1> = [];
    private _outs:Array<CpnHandcard> = [];
    
    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);
        
        this._myHandor = this.m_ui.my_handor.getComponent(CpnHandcard);
        for(var i=0; i<MAX_SOLDIER; i++) {
            this._players.push(this.m_ui["player"+i].getComponent(CpnPlayer1));
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
        this.toStateReady();
        
        var EnterData = DDzMgr.getInstance().EnterData;
        if(EnterData) {
            this._myHandor.resetCards(DDzMgr.getInstance().getPlayer(LoginUser.getInstance().UserID).Cards, false);
            this._myHandor.sortCards();
            this.refreshCurAttacker();
            this.refreshRemainCardCount();

            if(EnterData.GameStateFree) {
                this.toStateSearching();
            }
            else if(EnterData.GameStateStart) {
                this.toStateReady();
            }
            else if(EnterData.GameStateCall) {
                this.toStateGrab();
                this.refreshCurAttacker();
            }
            else if(EnterData.GameStatePlaying) {
                this.toStateFight();
                this.refreshCurAttacker();
            }
            else if(EnterData.GameStateOver) {
                this.toStateResult();
            }
        }
    }

    private refreshRemainCardCount() {
        var fighters = DDzMgr.getInstance().getFighterList();
        for(var uid in fighters) {
            var idx = this.playerIndex(fighters[uid]);
            if(idx > 0) {
                this.m_ui["lab_remain"+idx].getComponent(cc.Label).string = fighters[uid].CardsLen.toString();
            }
        }
    }

    //玩家的UI位置
    private playerIndex(player:GamePlayer) : number {
		if(isNil(player)){ return -1; }
		var hero = DDzMgr.getInstance().getPlayer(LoginUser.getInstance().UserID);
		var index = player.ChairID;
		if(hero.ChairID===0) { return index; }
		index = (player.ChairID-hero.ChairID+MAX_SOLDIER) % MAX_SOLDIER;
		return index;
    }

    private refreshAuto() {
        if(DDzMgr.getInstance().IsAuto) {
            this.m_ui.lab_auto.getComponent(cc.Label).string = "取消托管";
        } else {
            this.m_ui.lab_auto.getComponent(cc.Label).string = "托 管";
        }
    }
    
    //匹配阶段
    private toStateSearching() {
        this.m_ui.readyNode.active = true;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = false;
        this._myHandor.clearCards();
        for(var i in this._outs) {
            this._outs[i].clearCards();
        }
        DDzMgr.getInstance().IsAuto = false;
        DDzMgr.getInstance().setCurAttacker(0);
        this.refreshCurAttacker();
        this.refreshAuto();
        this.markZhuang(false);
        this.m_ui.remainBg1.active = false;
        this.m_ui.lab_remain1.active = false;
        this.m_ui.remainBg2.active = false;
        this.m_ui.lab_remain2.active = false;
    }
    
    //准备阶段
    private toStateReady() {
        this.m_ui.readyNode.active = true;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = false;
        this._myHandor.clearCards();
        for(var i in this._outs) {
            this._outs[i].clearCards();
        }
        this.m_ui.labGrab0.getComponent(cc.Label).string = "";
        this.m_ui.labGrab1.getComponent(cc.Label).string = "";
        this.m_ui.labGrab2.getComponent(cc.Label).string = "";
        DDzMgr.getInstance().IsAuto = false;
        this.refreshAuto();
        DDzMgr.getInstance().setCurAttacker(0);
        this.refreshCurAttacker();
        this.markZhuang(false);
        this.m_ui.remainBg1.active = false;
        this.m_ui.lab_remain1.active = false;
        this.m_ui.remainBg2.active = false;
        this.m_ui.lab_remain2.active = false;
    }

    //抢地主阶段
    private toStateGrab() {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = DDzMgr.getInstance().getCurAttacker().UserID == LoginUser.getInstance().UserID;
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = false;
        DDzMgr.getInstance().IsAuto = false;
        this.refreshAuto();
        this.markZhuang(false);
        this.m_ui.remainBg1.active = false;
        this.m_ui.lab_remain1.active = false;
        this.m_ui.remainBg2.active = false;
        this.m_ui.lab_remain2.active = false;
    }

    //出牌阶段
    private toStateFight() {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = DDzMgr.getInstance().getCurAttacker().UserID == LoginUser.getInstance().UserID;
        this.m_ui.tipLayer.active = true;
        this.m_ui.labGrab0.getComponent(cc.Label).string = "";
        this.m_ui.labGrab1.getComponent(cc.Label).string = "";
        this.m_ui.labGrab2.getComponent(cc.Label).string = "";
        this.markZhuang(true);
        this.m_ui.remainBg1.active = true;
        this.m_ui.lab_remain1.active = true;
        this.m_ui.remainBg2.active = true;
        this.m_ui.lab_remain2.active = true;
    }

    //结算阶段
    private toStateResult() {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = true;
        this.m_ui.labGrab0.getComponent(cc.Label).string = "";
        this.m_ui.labGrab1.getComponent(cc.Label).string = "";
        this.m_ui.labGrab2.getComponent(cc.Label).string = "";
        DDzMgr.getInstance().IsAuto = false;
        this.refreshAuto();
        this.markZhuang(true);
        this.m_ui.remainBg1.active = true;
        this.m_ui.lab_remain1.active = true;
        this.m_ui.remainBg2.active = true;
        this.m_ui.lab_remain2.active = true;
    }
    
    private refreshPlayers() {
        for(var ii=0; ii<MAX_SOLDIER; ii++) {
            this._players[ii].setName("");
            this._players[ii].setMoney(0);
        }
        var players = DDzMgr.getInstance().getFighterList();
        for(var i in players) {
            if(!isNil(players[i])) {
                var idx = this.playerIndex(players[i]);
                this._players[idx].setName(players[i].Name);
                this._players[idx].setMoney(players[i].Gold);
            }
        }
    }

    private markZhuang(bShow:boolean) {
        var idx = this.playerIndex(DDzMgr.getInstance().getZhuang());
        this.m_ui.zhuang.active = idx >= 0 && bShow;
        if(idx>=0) {
            var pos = this._players[idx].node.position;
            pos.x += 40;
            pos.y += 62;
            this.m_ui.zhuang.position = pos;
        }
    }

    private refreshCurAttacker() {
        var MAX_PLAYER = 3;
        var curAttackerIdx = this.playerIndex(DDzMgr.getInstance().getCurAttacker());
        for(var idx=0; idx<MAX_PLAYER; idx++) {
			this.m_ui["CpnCircleCD"+idx].active = idx===curAttackerIdx;
        }
        if(this.m_ui["CpnCircleCD"+curAttackerIdx]) {
            this.m_ui["CpnCircleCD"+curAttackerIdx].getComponent(CpnCircleCD).setRemainCD(15, 15);
        }
    }

    private GameLandLordsPlayer(param) {
        this._myHandor.resetCards(param.Cards, false);
        this._myHandor.sortCards();
    }
    private GameLandLordsOutCard(param) {
        this.toStateFight();
        if(isNil(param)) {
            return;
        }

        var p = DDzMgr.getInstance().getPlayer(param.UserID);
        if(!p){
            UIManager.toast("bug：找不到玩家 "+param.UserID);
            return;
        }
        p.CardsLen -= param.Cards.length;

        var idx = this.playerIndex(p);
        if(idx>=0) {
            this._outs[idx].resetCards(param.Cards, false);
            if(param.UserID === LoginUser.getInstance().UserID) {
                this._myHandor.delCards(param.Cards);
            }
            if(isNil(param.Cards) || param.Cards.length<=0) {
                UIManager.toast(p.Name+" 不要")
            }
        } else {
            UIManager.toast("bug：找不到玩家UI "+param.UserID);
        }
        
        this.refreshRemainCardCount();

        var nextPos = (p.ChairID + 1) % MAX_SOLDIER;
        DDzMgr.getInstance().setCurAttacker(DDzMgr.getInstance().getPlayerByPos(nextPos).UserID);
        this.toStateFight();
        this.refreshCurAttacker();
    }
    private GameLandLordsDeal(param) {
        this._myHandor.resetCards(param.CardsHand, false);
    }
    private GameLandLordsCheckout(param) {
        this.toStateResult();
        if(isNil(param)) { return; }
        for(var i in param.players) {
            var p = param.players[i];
            var idx = this.playerIndex(DDzMgr.getInstance().getPlayer(p.UserID));
            this.m_ui["player"+idx].getComponent(CpnPlayer1).addMoney(p.GetGold);
            if(p.GetGold > 0) {
                UIManager.showSpineAsync("common/spines/headflower/ky_lhd_js", 0, "1", 3, this._players[idx].node, {scale:1.1, y:19}, null);
            }
        }
    }
    private GameStateCall(param) {
        DDzMgr.getInstance().setCurAttacker(param.UserID);
        this.toStateGrab();
        this.refreshCurAttacker();
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

        var nextPos = (p.ChairID + 1) % MAX_SOLDIER;
        DDzMgr.getInstance().setCurAttacker(DDzMgr.getInstance().getPlayerByPos(nextPos).UserID);
        this.toStateGrab();
        this.refreshCurAttacker();
    }
    private GameLandLordsBottomCard(param) {
        DDzMgr.getInstance().setCurAttacker(param.UserID);
        DDzMgr.getInstance().setZhuang(param.UserID);
        if(param.UserID == LoginUser.getInstance().UserID) {
            this._myHandor.addCards(param.CardsBottom);
            this._myHandor.sortCards();
        }
        this.m_ui.dipai.getComponent(CpnHandcard).resetCards(param.CardsBottom, false); 
        this.toStateFight();
        this.refreshCurAttacker();
        this.markZhuang(true);

        var fighters = DDzMgr.getInstance().getFighterList();
        for(var uid in fighters) {
            fighters[uid].CardsLen = 17;
        }
        fighters[param.UserID].CardsLen = 20;
        this.refreshRemainCardCount();
    }
    private onUserList(param) {
        DDzMgr.getInstance().updateFighterList(param && param.AllInfos);
        this.refreshPlayers();
    }
    private GameBeOut(param) {
        UIManager.toast("玩家被踢出房间"+param.UserID);
        DDzMgr.getInstance().removePlayer(param.UserID);

    }
    private initNetEvent() {
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsPlayer, this.GameLandLordsPlayer, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsOutCard, this.GameLandLordsOutCard, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsDeal, this.GameLandLordsDeal, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsCheckout, this.GameLandLordsCheckout, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsCall, this.GameLandLordsCall, this);
        EventCenter.getInstance().listen(landLords_msgs.GameLandLordsBottomCard, this.GameLandLordsBottomCard, this);
        EventCenter.getInstance().listen(gamecomm_msgs.UserList, this.onUserList, this);
        EventCenter.getInstance().listen(gamecomm_msgs.GameBeOut, this.GameBeOut, this);
        EventCenter.getInstance().listen(gamecomm_msgs.GameStateCall, this.GameStateCall, this);
    }

    private initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            DDzMgr.getInstance().clearFighters();
            GameManager.getInstance().quitGame(0);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_ready, function(){ 
            gamecomm_request.GameReady({
                UserID:LoginUser.getInstance().UserID,
                IsReady:true
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_chgdesk, function(){ 
            
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_out, function(){ 
            landLords_request.GameLandLordsOutCard({
                UserID:LoginUser.getInstance().UserID,
                Cards: this._myHandor.getSelectedCards(),
                Hints:"",
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_pass, function(){ 
            landLords_request.GameLandLordsOutCard({
                UserID:LoginUser.getInstance().UserID,
                Cards: [],
                Hints:"",
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_score0, function(){ 
            landLords_request.GameLandLordsCall({
                UserID:LoginUser.getInstance().UserID,
                Score:0
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_score1, function(){ 
            landLords_request.GameLandLordsCall({
                UserID:LoginUser.getInstance().UserID,
                Score:1
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_score2, function(){ 
            landLords_request.GameLandLordsCall({
                UserID:LoginUser.getInstance().UserID,
                Score:2
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_score3, function(){ 
            landLords_request.GameLandLordsCall({
                UserID:LoginUser.getInstance().UserID,
                Score:3
            });
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_auto, function(){ 
            DDzMgr.getInstance().IsAuto = !DDzMgr.getInstance().IsAuto;
            this.refreshAuto();
        }, this);
    }

}
