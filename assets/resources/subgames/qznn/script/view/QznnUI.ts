import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import { qzcowcow_msgs, qzcowcow_request } from "../../../../../common/script/proto/net_qzcowcow";
import { qzcowcow } from "../../../../../../declares/qzcowcow";
import QznnMgr from "../model/QznnMgr";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import CpnPlayer1 from "../../../../appqp/script/comps/CpnPlayer1";
import CpnHandcard2 from "../../../../appqp/script/comps/CpnHandcard2";
import CpnGameState from "../../../../appqp/script/comps/CpnGameState";
import UIManager from "../../../../../kernel/view/UIManager";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";
import { isNil, newHandler } from "../../../../../kernel/utils/GlobalFuncs";
import LoginUser from "../../../../../common/script/model/LoginUser";
import { gamecomm } from "../../../../../../declares/gamecomm";
import { gamecomm_msgs } from "../../../../../common/script/proto/net_gamecomm";
import Preloader from "../../../../../kernel/utils/Preloader";
import CpnWinLoseMoney from "../../../../appqp/script/comps/CpnWinLoseMoney";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import GameUtil from "../../../../../common/script/utils/GameUtil";


const MAX_SOLDIER = 5;
const CARD_CNT = 5;


const {ccclass, property} = cc._decorator;

@ccclass
export default class QznnUI extends BaseComponent {
	private _pnodes:Array<cc.Node> = [];
    private _playerCpns:Array<CpnPlayer1> = [];
	private _handors:Array<CpnHandcard2> = [];
	private _winloses:Array<CpnWinLoseMoney> = [];
	private originZpos = null;
	private tmrState = 0;
	private _grabBeiList = [0, 2, 4, 8];
	private _betBeiList = [1, 2, 4, 8, 16];

	start() {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		for(var i = 0; i <= 4; i++) {
            var nd = this.m_ui["p"+i];
            this._pnodes.push(nd);
            this._playerCpns.push(nd.getChildByName("CpnPlayer1").getComponent(CpnPlayer1));
			this._handors.push(nd.getChildByName("CpnHandcard2").getComponent(CpnHandcard2));
			this._winloses.push(nd.getChildByName("CpnWinLoseMoney").getComponent(CpnWinLoseMoney));
		}
		this.originZpos = this.m_ui.cpzhuang.position;
		
		this._handors[1].set3dLook(15);
		this._handors[2].set3dLook(15);
		this._handors[3].set3dLook(-15);
		this._handors[4].set3dLook(-15);

		this.refreshBtns();

		this.initUIEvent();
		this.initNetEvent();

		this.QzcowcowStateFreeResp(null);

		this.QzcowcowSceneResp(QznnMgr.getInstance().getEnterData());
		ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);
	}

	//玩家的UI位置
    private playerIndex(player:qzcowcow.IQzcowcowPlayer) : number {
		if(isNil(player)){ return -1; }
        var hero = QznnMgr.getInstance().getPlayer(LoginUser.getInstance().UserId);
        if(isNil((player.MyInfo as gamecomm.IPlayerInfo).ChairID)) { return -1; }
        if(isNil(hero)) { return (player.MyInfo as gamecomm.IPlayerInfo).ChairID; }
		if((hero.MyInfo as gamecomm.IPlayerInfo).ChairID===0) { return (player.MyInfo as gamecomm.IPlayerInfo).ChairID; }
		return ((player.MyInfo as gamecomm.IPlayerInfo).ChairID-(hero.MyInfo as gamecomm.IPlayerInfo).ChairID+MAX_SOLDIER) % MAX_SOLDIER;
    }

    private playerIdx(uid:number) : number {
        var p = QznnMgr.getInstance().getPlayer(uid);
        return this.playerIndex(p);
    }

    getPlayerByIndex(idx:number) : qzcowcow.IQzcowcowPlayer {
        if(idx < 0) { return null; }
        var mans = QznnMgr.getInstance().getPlayerList();
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
        var man = QznnMgr.getInstance().getPlayer(uid);
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
		this._pnodes[idx].active = true;
        if(flag) {
            this.refreshFighter((man.MyInfo as gamecomm.IPlayerInfo).UserID);
        }
	}
	

	private onStateTimer(tmr:BaseTimer) {
		this.m_ui.lab_cd.getComponent(cc.Label).string = tmr.getRemainTimes().toString();
    }
    
    private resetCD(WaitTime) {
        TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, WaitTime, new CHandler(this, this.onStateTimer), true);
	}
	
	private playFapaiAni() {
        var nn = 0;
        for(var i=0; i<MAX_SOLDIER; i++){
            this._handors[i].resetCards([0,0,0,0,0]);
            if(!isNil(this.getPlayerByIndex(i))) {
                var fromPos = CommonUtil.convertSpaceAR(this.m_ui.cpzhuang, this._handors[i].node);
                for(var j=0; j<CARD_CNT; j++) {
                    nn++;
                    CommonUtil.bezierTo3(this._handors[i].node.children[j], fromPos, this._handors[i].getComponent(CpnHandcard2).getPosByIndex(j), 0.4, nn*0.06);
                }
            }
        }
    }

    playDingzhuang(BankerID:number, bAni:boolean) {
		this.m_ui.zhuang.stopAllActions();

        if(BankerID < 0) {
            this.m_ui.zhuang.position = this.originZpos;
            return;
        }

        var idx = this.playerIdx(BankerID);
        if(idx >= 0) {
            var dstPos = cc.v3(this._pnodes[idx].position);
            if(idx==0) {
                dstPos.x += -35;
                dstPos.y += 60;
            } else {
                dstPos.x += 50;
                dstPos.y += 75;
            }
            
            if(bAni) {
                this.m_ui.zhuang.position = this.originZpos;
                this.m_ui.zhuang.runAction(cc.moveTo(0.3, cc.v2(dstPos.x, dstPos.y)));
            } else {
                this.m_ui.zhuang.position = dstPos;
            }
        } else {
            this.m_ui.zhuang.position = this.originZpos;
        }
    }
    
    private refreshBtns() {
		for(var i=1; i<this._grabBeiList.length; i++) {
			var btnName = "btn_grab_"+i;
			if(this.m_ui[btnName]) {
				this.m_ui[btnName].getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = this._grabBeiList[i]+"倍";
			}
		}

		for(var i=0; i<this._betBeiList.length; i++) {
			var btnName = "btn_bet_"+i;
			if(this.m_ui[btnName]) {
				this.m_ui[btnName].getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = this._betBeiList[i]+"倍";
			}
		}
    }
    

	private QzcowcowSceneResp(param:qzcowcow.IQzcowcowSceneResp) {
		if(isNil(param)) { return; }
        QznnMgr.delInstance();
        QznnMgr.getInstance();
        if(param.AllPlayers && param.AllPlayers.AllInfos) {
            for(var ii in param.AllPlayers.AllInfos) {
                QznnMgr.getInstance().addPlayer(param.AllPlayers.AllInfos[ii]);
            }
		}
		
        var curGame = GameManager.getInstance().getRunningGameData();
        this.m_ui.labroomname.getComponent(cc.Label).string = "房间类型：" + GameUtil.roomNameByLevel(curGame.Info.Level);
        this.m_ui.labDizhu.getComponent(cc.Label).string = "底注：" + CommonUtil.formRealMoney(curGame.Info.LessScore);
        this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：" + param.Inning;

        for(var n=0; n<MAX_SOLDIER; n++) {
            this.refreshPlayerByIndex(n);
		}
		this.refreshBtns();
		this.playDingzhuang(QznnMgr.getInstance().getEnterData().HostID, false);
	}

    //准备阶段
	private QzcowcowStateFreeResp(param:qzcowcow.IQzcowcowSceneResp) {
        if(param) {
            QznnMgr.getInstance().getEnterData().Inning = param.Inning;
            this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：" + param.Inning;
        }
        
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setZhunbei(true);
		this.m_ui.readyNode.active = true;
		this.m_ui.grabNode.active = false;
		this.m_ui.callNode.active = false;
		this.m_ui.zhuang.stopAllActions();
		this.m_ui.zhuang.position = this.originZpos;

		for(var i=0; i<MAX_SOLDIER; i++) {
            this._handors[i].resetCards(null);
            this._winloses[i].stopPlay();
            this._pnodes[i].getChildByName("callScoreNode").active = false;
		}
		
		this.playDingzhuang(-99, false);
    }
    
    //发牌阶段
    private QzcowcowStateDealResp(param:qzcowcow.IQzcowcowStateDealResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setFapai(true);
        this.showSearching(false);
        this.m_ui.readyNode.active = false;
		this.m_ui.grabNode.active = false;
		this.m_ui.callNode.active = false;
        this.playFapaiAni();
        if(param && param.Times) {
            this.resetCD(param.Times.WaitTime);
        }
        UIManager.closeWindow(ViewDefine.UISearchDesk);
    }
    
    //喊庄阶段
    private QzcowcowStateCallResp(param:qzcowcow.IQzcowcowStateCallResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setJiaofen(true);
		this.showSearching(false);
		this.m_ui.readyNode.active = false;
		this.m_ui.grabNode.active = true;
        this.m_ui.callNode.active = false;
        if(param && param.Times) {
            this.resetCD(param.Times.WaitTime);
        }
        UIManager.closeWindow(ViewDefine.UISearchDesk);
	}

    //定妆阶段
	private QzcowcowStateDecideResp(param:qzcowcow.IQzcowcowStateDecideResp) {
        QznnMgr.getInstance().getEnterData().HostID = param.HostID;

		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setQiangzhuang(true);
		this.showSearching(false);
		this.m_ui.readyNode.active = false;
		this.m_ui.grabNode.active = false;
        this.m_ui.callNode.active = false;
        if(param && param.Times) {
            this.resetCD(param.Times.WaitTime);
        }
        UIManager.closeWindow(ViewDefine.UISearchDesk);
        
        QznnMgr.getInstance().getEnterData().HostID = param.HostID;
        this.playDingzhuang(param.HostID, true);
	}

    //下注阶段
	private QzcowcowStatePlayingResp(param:qzcowcow.IQzcowcowStatePlayingResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setXiazhu(true);
        this.showSearching(false);
        this.m_ui.readyNode.active = false;
		this.m_ui.grabNode.active = false;
        this.m_ui.callNode.active = true;
        if(param && param.Times) {
            this.resetCD(param.Times.WaitTime);
        }
        UIManager.closeWindow(ViewDefine.UISearchDesk);
	}

    //开牌结算阶段
	private QzcowcowStateOpenResp(param:qzcowcow.IQzcowcowStateOpenResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setKaipai(true);
        this.showSearching(false);
        this.m_ui.readyNode.active = false;
		this.m_ui.grabNode.active = false;
        this.m_ui.callNode.active = false;
        if(param && param.Times) {
            this.resetCD(param.Times.WaitTime);
        }
        UIManager.closeWindow(ViewDefine.UISearchDesk);
        this.QzcowcowOpenResp(param.OpenInfo);
	}

    //开牌结算阶段
	private QzcowcowStateOverResp(param:qzcowcow.IQzcowcowStateOverResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setPaijiang(true);
        this.showSearching(false);
        this.m_ui.readyNode.active = false;
		this.m_ui.grabNode.active = false;
        this.m_ui.callNode.active = false;
        if(param && param.Times) {
            this.resetCD(param.Times.WaitTime);
        }
        UIManager.closeWindow(ViewDefine.UISearchDesk);
	}

	private QzcowcowOpenResp(param:qzcowcow.IQzcowcowOpenResp) {
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

    private QzcowcowOverResp(param:qzcowcow.IQzcowcowOverResp) {
        if(param.MySettlement > 0) {
            UIManager.toast("赢"+CommonUtil.formRealMoney(param.MySettlement));
        } else {
            UIManager.toast("输"+CommonUtil.formRealMoney(-param.MySettlement));
        }
        var idx = this.playerIdx(LoginUser.getInstance().UserId);
        if(idx >= 0) {
            this._winloses[idx].playMoney(CommonUtil.fixRealMoney(param.MySettlement), 55, -1);
        }
    }

	GoldChangeInfo(param:gamecomm.IGoldChangeInfo) {
        var man = QznnMgr.getInstance().getPlayer(param.UserID);
        if(man) {
            (man.MyInfo as gamecomm.IPlayerInfo).Gold = param.Gold;
        }
        var idx = this.playerIdx(param.UserID);
        if(idx >= 0) {
            this._playerCpns[idx].setMoneyStr(CommonUtil.formRealMoney(param.Gold));
            if(param.AlterGold != 0) {
                this._winloses[idx].playMoney(CommonUtil.fixRealMoney(param.AlterGold), 55, -1);
            }
        }
    }

    EnterGameResp(param:gamecomm.IEnterGameResp) {
        QznnMgr.getInstance().addPlayer(param.UserInfo);
        this.refreshFighter(param.UserInfo.UserID);
    }

    ExitGameResp(param:gamecomm.IExitGameResp) {
        var idx = this.playerIdx(param.UserID);
        if(idx >= 0) {
            this._pnodes[idx].active = false;
        }
        QznnMgr.getInstance().removePlayer(param.UserID);
	}
	
	QzcowcowBetResp(param:qzcowcow.IQzcowcowBetResp) {
        if(isNil(param)) { return; }
        var idx = this.playerIdx(param.UserId);
        if(idx < 0) { return; }
        this._pnodes[idx].getChildByName("callScoreNode").active = true;
        this._pnodes[idx].getChildByName("callScoreNode").getComponent(cc.Label).string = "下注"+param.BetScore+"倍";
        if(param.UserId == LoginUser.getInstance().UserId) {
            this.m_ui.callNode.active = false;
        }
    }
    
    QzcowcowCallResp(param:qzcowcow.IQzcowcowCallResp) {
        if(isNil(param)) { return; }
        var idx = this.playerIdx(param.UserID);
        if(idx < 0) { return; }
        this._pnodes[idx].getChildByName("callScoreNode").active = true;
        this._pnodes[idx].getChildByName("callScoreNode").getComponent(cc.Label).string = "喊庄"+param.Multiple+"倍";
        if(param.UserID == LoginUser.getInstance().UserId) {
            this.m_ui.grabNode.active = false;
        }
    }

	initNetEvent() {
		EventCenter.getInstance().listen(qzcowcow_msgs.QzcowcowSceneResp, this.QzcowcowSceneResp, this);
		EventCenter.getInstance().listen(qzcowcow_msgs.QzcowcowStateFreeResp, this.QzcowcowStateFreeResp, this);
		EventCenter.getInstance().listen(qzcowcow_msgs.QzcowcowStateDecideResp, this.QzcowcowStateDecideResp, this);
		EventCenter.getInstance().listen(qzcowcow_msgs.QzcowcowStateCallResp, this.QzcowcowStateCallResp, this);
		EventCenter.getInstance().listen(qzcowcow_msgs.QzcowcowStateDealResp, this.QzcowcowStateDealResp, this);
		EventCenter.getInstance().listen(qzcowcow_msgs.QzcowcowStatePlayingResp, this.QzcowcowStatePlayingResp, this);
		EventCenter.getInstance().listen(qzcowcow_msgs.QzcowcowStateOpenResp, this.QzcowcowStateOpenResp, this);
		EventCenter.getInstance().listen(qzcowcow_msgs.QzcowcowStateOverResp, this.QzcowcowStateOverResp, this);
		EventCenter.getInstance().listen(qzcowcow_msgs.QzcowcowOpenResp, this.QzcowcowOpenResp, this);
		EventCenter.getInstance().listen(qzcowcow_msgs.QzcowcowOverResp, this.QzcowcowOverResp, this);
        EventCenter.getInstance().listen(gamecomm_msgs.GoldChangeInfo, this.GoldChangeInfo, this);
        EventCenter.getInstance().listen(gamecomm_msgs.EnterGameResp, this.EnterGameResp, this);
        EventCenter.getInstance().listen(gamecomm_msgs.ExitGameResp, this.ExitGameResp, this);
        EventCenter.getInstance().listen(qzcowcow_msgs.QzcowcowBetResp, this.QzcowcowBetResp, this);
		EventCenter.getInstance().listen(qzcowcow_msgs.QzcowcowCallResp, this.QzcowcowCallResp, this);
	}

	showSearching(bSearching:boolean) {
        if(bSearching) {
            var myIdx = this.playerIdx(LoginUser.getInstance().UserId);
            for(var n=0; n<MAX_SOLDIER; n++) {
                this._pnodes[n].active = n == myIdx;
            }
        } else {
            for(var i=0; i<MAX_SOLDIER; i++) {
                this.refreshPlayerByIndex(i, false);
            }
        }
	}
	
	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){
			UIManager.openPopwnd(ViewDefine.UIHelpdoc2, true, {kindId:GameKindEnum.QzCowcow});
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_ready, function(){ 
            qzcowcow_request.QzcowcowReadyReq({IsReady:true});
            this.showSearching(true);
            this.m_ui.readyNode.active = false;
            UIManager.openPopwnd(ViewDefine.UISearchDesk, false, newHandler(function(){
                this.m_ui.readyNode.active = true;
                qzcowcow_request.QzcowcowReadyReq({IsReady:false});
            }, this));
        }, this);

		CommonUtil.addClickEvent(this.m_ui.btn_grab_0, function(){ this.sendGrab(0); }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_grab_1, function(){ this.sendGrab(1); }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_grab_2, function(){ this.sendGrab(2); }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_grab_3, function(){ this.sendGrab(3); }, this);
		
		CommonUtil.addClickEvent(this.m_ui.btn_bet_0, function(){ this.sendBet(0); }, this);
		CommonUtil.addClickEvent(this.m_ui.btn_bet_1, function(){ this.sendBet(1); }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_bet_2, function(){ this.sendBet(2); }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_bet_3, function(){ this.sendBet(3); }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_bet_4, function(){ this.sendBet(4); }, this);
	}

	private sendGrab(idx:number) {
        var bei = this._grabBeiList[idx];
		qzcowcow_request.QzcowcowCallReq({
			Multiple: bei
		});
	}

	private sendBet(idx:number) {
        var bei = this._betBeiList[idx];
		qzcowcow_request.QzcowcowBetReq({
			BetArea:0,
			BetScore:bei
		});
	}
	
}