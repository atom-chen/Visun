import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../common/script/model/GameManager";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import { tbcowcow_msgs, tbcowcow_packet_define, tbcowcow_request } from "../../../../common/script/proto/net_tbcowcow";
import { tbcowcow } from "../../../../../declares/tbcowcow";
import TbnnMgr from "./TbnnMgr";
import ProcessorMgr from "../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../common/script/definer/ChannelDefine";
import CpnPlayer1 from "../../../appqp/script/comps/CpnPlayer1";
import CpnHandcard2 from "../../../appqp/script/comps/CpnHandcard2";
import CpnGameState from "../../../appqp/script/comps/CpnGameState";
import { GameKindEnum } from "../../../../common/script/definer/ConstDefine";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import UIManager from "../../../../kernel/view/UIManager";
import { isNil } from "../../../../kernel/utils/GlobalFuncs";
import LoginUser from "../../../../common/script/model/LoginUser";
import { gamecomm } from "../../../../../declares/gamecomm";
import { gamecomm_request } from "../../../../common/script/proto/net_gamecomm";
import { BaseTimer } from "../../../../kernel/basic/timer/BaseTimer";
import CHandler from "../../../../kernel/basic/datastruct/CHandler";
import TimerManager from "../../../../kernel/basic/timer/TimerManager";
import Preloader from "../../../../kernel/utils/Preloader";


const MAX_SOLDIER = 5;
const CARD_CNT = 5;


const {ccclass, property} = cc._decorator;

@ccclass
export default class UItbnn extends BaseComponent {
    @property(cc.Prefab)
    cardTypeTemplate: cc.Prefab = null;
    
    private _pnodes:Array<cc.Node> = [];
    private _playerCpns:Array<CpnPlayer1> = [];
    private _handors:Array<CpnHandcard2> = [];
    private tmrState = 0;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        for(var i = 0; i <= 4; i++) {
            var nd = this.m_ui["p"+i];
            this._pnodes.push(nd);
            this._playerCpns.push(nd.getChildByName("CpnPlayer1").getComponent(CpnPlayer1));
            this._handors.push(nd.getChildByName("CpnHandcard2").getComponent(CpnHandcard2));
        }

		this.initUIEvent();
        this.initNetEvent();
        
        this.TbcowcowSceneResp(TbnnMgr.getInstance().getEnterData());
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);
    }

    private onStateTimer(tmr:BaseTimer) {
		this.m_ui.lab_cd.getComponent(cc.Label).string = tmr.getRemainTimes().toString();
    }
    
    private resetCD(WaitTime) {
        TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, WaitTime, new CHandler(this, this.onStateTimer), true);
    }

    //玩家的UI位置
    private playerIndex(player:tbcowcow.ITbcowcowPlayer) : number {
		if(isNil(player)){ return -1; }
        var hero = TbnnMgr.getInstance().getPlayer(LoginUser.getInstance().UserId);
        if(isNil((player.MyInfo as gamecomm.IPlayerInfo).ChairID)) { return -1; }
        if(isNil(hero)) { return (player.MyInfo as gamecomm.IPlayerInfo).ChairID; }
		if((hero.MyInfo as gamecomm.IPlayerInfo).ChairID===0) { return (player.MyInfo as gamecomm.IPlayerInfo).ChairID; }
		return ((player.MyInfo as gamecomm.IPlayerInfo).ChairID-(hero.MyInfo as gamecomm.IPlayerInfo).ChairID+MAX_SOLDIER) % MAX_SOLDIER;
    }

    private playerIdx(uid:number) : number {
        var p = TbnnMgr.getInstance().getPlayer(uid);
        return this.playerIndex(p);
    }

    private playFapaiAni() {
        var nn = 0;
        for(var i=0; i<MAX_SOLDIER; i++){
            if(this.getPlayerByIndex(i)) {
                this._handors[i].resetCards([0,0,0,0,0]);
                var fromPos = CommonUtil.convertSpaceAR(this.m_ui.cpzhuang, this._handors[i].node);
                for(var j=0; j<CARD_CNT; j++) {
                    nn++;
                    CommonUtil.bezierTo3(this._handors[i].node.children[j], fromPos, this._handors[i].getComponent(CpnHandcard2).getPosByIndex(j), 0.4, nn*0.06);
                }
            }
        }
    }

    getPlayerByIndex(idx:number) : tbcowcow.ITbcowcowPlayer {
        if(idx < 0) { return null; }
        var mans = TbnnMgr.getInstance().getPlayerList();
        if(mans) {
            for(var uid in mans) {
                if(this.playerIndex(mans[uid]) == idx) {
                    return mans[uid];
                }
            }
        }
        return null;
    }

    private refreshFighter(uid) {
        var man = TbnnMgr.getInstance().getPlayer(uid);
        var idx = this.playerIdx(uid);
        if(idx >= 0) {
            this._pnodes[idx].active = true;
            this._playerCpns[idx].setName((man.MyInfo as gamecomm.IPlayerInfo).Name);
            this._playerCpns[idx].setMoneyStr(CommonUtil.formRealMoney((man.MyInfo as gamecomm.IPlayerInfo).Gold));
            this._playerCpns[idx].setHeadImg((man.MyInfo as gamecomm.IPlayerInfo).FaceID);
            this._handors[idx].resetCards(man.Cards && man.Cards.Cards);
            this._handors[idx].playOpen(false);
        }
    }

    refreshPlayerByIndex(idx:number, flag:boolean = true) {
        if(idx < 0) { return; }
        var man = this.getPlayerByIndex(idx);
        if(isNil(man)) {
            this._pnodes[idx].active = false;
            return;
        }
        if(flag) {
            this.refreshFighter((man.MyInfo as gamecomm.IPlayerInfo).UserID);
        }
    }

    private TbcowcowSceneResp(param:tbcowcow.ITbcowcowSceneResp) {
        if(isNil(param)) { return; }

        TbnnMgr.delInstance();
        TbnnMgr.getInstance();
        if(param.AllPlayers && param.AllPlayers.AllInfos) {
            for(var ii in param.AllPlayers.AllInfos) {
                TbnnMgr.getInstance().addPlayer(param.AllPlayers.AllInfos[ii]);
            }
        }

        this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：" + param.Inning;
        for(var n=0; n<MAX_SOLDIER; n++) {
            this.refreshPlayerByIndex(n);
        }
    }

    private TbcowcowStateFreeResp(param:tbcowcow.ITbcowcowStateFreeResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setZhunbei(true);
        this.m_ui.opNode.active = false;
        this.m_ui.readyNode.active = true;
        this.resetCD(param.Times.WaitTime);
        for(var i=0; i<MAX_SOLDIER; i++) {
            this._handors[i].resetCards(null);
        }
    }
    
    private TbcowcowStateDealResp(param:tbcowcow.ITbcowcowStateDealResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setFapai(true);
        this.playFapaiAni();
        this.m_ui.opNode.active = false;
        this.m_ui.readyNode.active = false;
        this.resetCD(param.Times.WaitTime);
	}

	private TbcowcowStatePlayingResp(param:tbcowcow.ITbcowcowStatePlayingResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setXiazhu(true);
        this.m_ui.opNode.active = true;
        this.m_ui.readyNode.active = false;
        this.resetCD(param.Times.WaitTime);
    }

	private TbcowcowStateOpenResp(param:tbcowcow.ITbcowcowStateOpenResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setKaipai(true);
        this.m_ui.opNode.active = false;
        this.m_ui.readyNode.active = false;
        this.resetCD(param.Times.WaitTime);
        this.TbcowcowOpenResp(param.OpenInfo);
	}

	private TbcowcowStateOverResp(param:tbcowcow.ITbcowcowStateOverResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setPaijiang(true);
        this.m_ui.opNode.active = false;
        this.m_ui.readyNode.active = false;
        this.resetCD(param.Times.WaitTime);
    }
    
    private TbcowcowOpenResp(param:tbcowcow.ITbcowcowOpenResp) {
        if(isNil(param)) { return; }
        var idx = this.playerIdx(param.WinnerId);
        if(idx >= 0) {
            Preloader.showSpineAsync("appqp/spines/headflower/ky_lhd_js", 0, "1", 3, this._pnodes[idx], {y:20, scale:1.12});
        }
        if(param.Infos) {
            for(var i in param.Infos) {
                var pos = this.playerIdx(param.Infos[i].MyInfo.UserID);
                if(pos >= 0) {
                    this._handors[pos].resetCards(param.Infos[i].Cards && param.Infos[i].Cards.Cards);
                    this._handors[pos].playOpen(true);
                }
            }
        }
    }

    private TbcowcowOverResp(param:tbcowcow.ITbcowcowOverResp) {
        if(param.MySettlement > 0) {
            UIManager.toast("赢"+CommonUtil.formRealMoney(param.MySettlement));
        } else {
            UIManager.toast("输"+CommonUtil.formRealMoney(-param.MySettlement));
        }
    }

    initNetEvent() {
        EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowSceneResp, this.TbcowcowSceneResp, this);
        EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowStateFreeResp, this.TbcowcowStateFreeResp, this);
		EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowStateDealResp, this.TbcowcowStateDealResp, this);
		EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowStatePlayingResp, this.TbcowcowStatePlayingResp, this);
		EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowStateOpenResp, this.TbcowcowStateOpenResp, this);
        EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowStateOverResp, this.TbcowcowStateOverResp, this);
        EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowOpenResp, this.TbcowcowOpenResp, this);
        EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowOverResp, this.TbcowcowOverResp, this);
	}

	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            UIManager.openPopwnd(ViewDefine.UIHelpdoc, true, {kindId:GameKindEnum.TbCowcow});
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_ready, function(){ 
            tbcowcow_request.TbcowcowReadyReq({IsReady:true});
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_chgdesk, function(){
            gamecomm_request.ChangeTableReq({
                GameID : GameManager.getInstance().getGameId()
            });
        }, this);

        CommonUtil.addClickEvent(this.m_ui.btn_bet1, function(){ 
            tbcowcow_request.TbcowcowBetReq({BetArea:0, BetScore:100});
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_bet2, function(){ 
            tbcowcow_request.TbcowcowBetReq({BetArea:0, BetScore:200});
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_bet3, function(){ 
            tbcowcow_request.TbcowcowBetReq({BetArea:0, BetScore:300});
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_bet4, function(){ 
            tbcowcow_request.TbcowcowBetReq({BetArea:0, BetScore:400});
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_bet5, function(){ 
            tbcowcow_request.TbcowcowBetReq({BetArea:0, BetScore:500});
        }, this);
	}

}
