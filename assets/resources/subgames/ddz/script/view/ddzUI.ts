import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import CpnHandcard from "../../../../../common/script/comps/CpnHandcard";
import LoginUser from "../../../../../common/script/model/LoginUser";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import UIManager from "../../../../../kernel/view/UIManager";
import CpnPlayer from "../../../../../common/script/comps/CpnPlayer";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import DDzMgr from "../model/DDzMgr";
import { landLords_msgs, landLords_request } from "../../../../../common/script/proto/net_landLords";
import { gamecomm_msgs, gamecomm_request } from "../../../../../common/script/proto/net_gamecomm";
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
        
        DDzMgr.getInstance().setCurAttacker(LoginUser.getInstance().UserID);
        var EnterData = DDzMgr.getInstance().EnterData;
        if(EnterData) {
            if(EnterData.GameStateFree) {
                this.toStateSearching(null);
            }
            else if(EnterData.GameStateStart) {
                this.toStateReady(null);
            }
            else if(EnterData.GameStateCall) {
                this.toStateGrab(null);
            }
            else if(EnterData.GameStatePlaying) {
                this.toStateFight(null);
            }
            else if(EnterData.GameStateOver) {
                this.toStateResult(null);
            }
        }
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
        this.m_ui.readyNode.active = true;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = false;
        this._myHandor.clearCards();
        for(var i in this._outs) {
            this._outs[i].clearCards();
        }
    }
    
    //准备阶段
    private toStateReady(param) {
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
    }

    //抢地主阶段
    private toStateGrab(param) {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = DDzMgr.getInstance().getCurAttacker().UserID == LoginUser.getInstance().UserID;
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = false;
    }

    //出牌阶段
    private toStateFight(param) {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = DDzMgr.getInstance().getCurAttacker().UserID == LoginUser.getInstance().UserID;
        this.m_ui.tipLayer.active = true;
        this.m_ui.labGrab0.getComponent(cc.Label).string = "";
        this.m_ui.labGrab1.getComponent(cc.Label).string = "";
        this.m_ui.labGrab2.getComponent(cc.Label).string = "";
    }

    //结算阶段
    private toStateResult(param) {
        this.m_ui.readyNode.active = false;
        this.m_ui.grabNode.active = false;
        this.m_ui.fightNode.active = false;
        this.m_ui.tipLayer.active = true;
        this.m_ui.labGrab0.getComponent(cc.Label).string = "";
        this.m_ui.labGrab1.getComponent(cc.Label).string = "";
        this.m_ui.labGrab2.getComponent(cc.Label).string = "";
    }
    
    private refreshPlayers() {
        for(var ii=0; ii<MAX_SOLDIER; ii++) {
            this._players[ii].setName("");
            this._players[ii].setMoney(0);
        }
        var players = DDzMgr.getInstance().getPlayerList();
        for(var i in players) {
            if(!isNil(players[i])) {
                var idx = this.playerIndex(players[i]);
                this._players[idx].setName(players[i].Name);
                this._players[idx].setMoney(players[i].Gold);
            }
        }
    }

    private GameLandLordsPlayer(param) {
        this._myHandor.resetCards(param.Cards, true);
    }
    private GameLandLordsOutCard(param) {
        this.toStateGrab(param);
        if(isNil(param)) {
            return;
        }

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

        var nextPos = (p.Pos + 1) % MAX_SOLDIER;
        DDzMgr.getInstance().setCurAttacker(DDzMgr.getInstance().getPlayerByPos(nextPos).UserID);
        this.toStateFight(null);
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

        var nextPos = (p.Pos + 1) % MAX_SOLDIER;
        DDzMgr.getInstance().setCurAttacker(DDzMgr.getInstance().getPlayerByPos(nextPos).UserID);
        this.toStateGrab(null);
    }
    private GameLandLordsBottomCard(param) {
        this.m_ui.labGrab0.getComponent(cc.Label).string = "";
        this.m_ui.labGrab1.getComponent(cc.Label).string = "";
        this.m_ui.labGrab2.getComponent(cc.Label).string = "";
        this.m_ui.dipai.getComponent(CpnHandcard).resetCards(param.CardsBottom, true);
    }
    private GameLandLordsAward(param) {
        this.toStateResult(null);
        if(isNil(param)) { return; }
        for(var i in param.players) {
            var p = param.players[i];
            var idx = this.playerIndex(DDzMgr.getInstance().getPlayer(p.UserID));
            this.m_ui["player"+idx].getComponent(CpnPlayer).addMoney(p.GetGold);
            if(p.GetGold > 0) {
                UIManager.showSpineAsync("common/spines/headflower/ky_lhd_js", 0, "1", true, this._players[idx].node, {scale:1.1}, null);
            }
        }
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
    }

}
