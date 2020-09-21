import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import { sangong_msgs, sangong_request } from "../../../../../common/script/proto/net_sangong";
import { sangong } from "../../../../../../declares/sangong";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import SangongMgr from "../model/SangongMgr";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import UIManager from "../../../../../kernel/view/UIManager";
import CpnHandcard2 from "../../../../appqp/script/comps/CpnHandcard2";
import CpnPlayer1 from "../../../../appqp/script/comps/CpnPlayer1";
import CpnWinLoseMoney from "../../../../appqp/script/comps/CpnWinLoseMoney";
import { isNil, newHandler } from "../../../../../kernel/utils/GlobalFuncs";
import LoginUser from "../../../../../common/script/model/LoginUser";
import { gamecomm } from "../../../../../../declares/gamecomm";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import { gamecomm_msgs } from "../../../../../common/script/proto/net_gamecomm";
import CpnGameState from "../../../../appqp/script/comps/CpnGameState";
import Preloader from "../../../../../kernel/utils/Preloader";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import AudioManager from "../../../../../kernel/audio/AudioManager";


const MAX_SOLDIER = 5;
const CARD_CNT = 5;


const {ccclass, property} = cc._decorator;

@ccclass
export default class SangongUI extends BaseComponent {

	private _pnodes:Array<cc.Node> = [];
    private _playerCpns:Array<CpnPlayer1> = [];
	private _handors:Array<CpnHandcard2> = [];
	private _winloses:Array<CpnWinLoseMoney> = [];
	private originZpos = null;
	private tmrState = 0;
	private _grabBeiList = [0, 2, 4, 8];
	private _betBeiList = [1, 2, 4, 8, 16];

    private yazi:cc.Node = null;

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

        TimerManager.delayFrame(10, newHandler(this.createYazi, this));

		this.refreshBtns();

		this.SangongStateFreeResp(null);

		this.initUIEvent();
		this.initNetEvent();

		this.SangongSceneResp(SangongMgr.getInstance().getEnterData());
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);
	}


	//玩家的UI位置
    private playerIndex(player:sangong.ISangongPlayer) : number {
		if(isNil(player)){ return -1; }
        var hero = SangongMgr.getInstance().getPlayer(LoginUser.getInstance().UserId);
        if(isNil((player.MyInfo as gamecomm.IPlayerInfo).ChairID)) { return -1; }
        if(isNil(hero)) { return (player.MyInfo as gamecomm.IPlayerInfo).ChairID; }
		if((hero.MyInfo as gamecomm.IPlayerInfo).ChairID===0) { return (player.MyInfo as gamecomm.IPlayerInfo).ChairID; }
		return ((player.MyInfo as gamecomm.IPlayerInfo).ChairID-(hero.MyInfo as gamecomm.IPlayerInfo).ChairID+MAX_SOLDIER) % MAX_SOLDIER;
    }

    private playerIdx(uid:number) : number {
        var p = SangongMgr.getInstance().getPlayer(uid);
        return this.playerIndex(p);
    }

    getPlayerByIndex(idx:number) : sangong.ISangongPlayer {
        if(idx < 0) { return null; }
        var mans = SangongMgr.getInstance().getPlayerList();
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
        var man = SangongMgr.getInstance().getPlayer(uid);
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
	

	private onStateTimer(tmr:BaseTimer, bSound:boolean=false) {
        this.m_ui.lab_cd.getComponent(cc.Label).string = tmr.getRemainTimes().toString();
        if(bSound) {
			AudioManager.getInstance().playEffectAsync("appqp/audios/countdown", false);
		}
    }
    
    private resetCD(WaitTime:number, bSound:boolean=false) {
        TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, WaitTime, newHandler(this.onStateTimer, this, bSound), true);
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
                    TimerManager.delaySecond(nn*0.06, newHandler(function(){
                        AudioManager.getInstance().playEffectAsync("appqp/audios/deal", false);
                    }, this));
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
		for(var i=0; i<this._betBeiList.length; i++) {
			var btnName = "btn_bet_"+i;
			if(this.m_ui[btnName]) {
				this.m_ui[btnName].getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = this._betBeiList[i]+"倍";
			}
		}
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
    
    createYazi() {
        this.yazi = this.yazi || Preloader.showSpineAsync("subgames/sangong/spines/duke", 0, "duke", -1, this.m_ui.yaziarea, {x:this.m_ui.yaziarea.width/2, y:-80, scale:0.5});
        TimerManager.loopSecond(101, -1, newHandler(function(){
            var wid2 = this.m_ui.yaziarea.width/2;
            var roads = [];
            if(this.yazi.x > 0) {
                this.yazi.scaleX = 0.5;
                var v0 = cc.v2(wid2, -CommonUtil.getRandomInt(45, 125));
                this.yazi.x = v0.x;
                this.yazi.y = v0.y;
                for(var i=0; i<4; i++) {
                    roads.push(v0);
                    roads.push(cc.v2(wid2-500, -CommonUtil.getRandomInt(45, 125)));
                    roads.push(cc.v2(-wid2, -CommonUtil.getRandomInt(45, 125)));
                }
            } else {
                this.yazi.scaleX = -0.5;
                var v1 = cc.v2(wid2, -CommonUtil.getRandomInt(45, 125));
                this.yazi.x = v1.x;
                this.yazi.y = v1.y;
                for(var i=0; i<4; i++) {
                    roads.push(v1);
                    roads.push(cc.v2(-wid2+500, -CommonUtil.getRandomInt(45, 125)));
                    roads.push(cc.v2(wid2, -CommonUtil.getRandomInt(45, 125)));
                }
            }
            this.yazi.runAction(cc.bezierTo(100, roads));
        }, this), true);
    }


	private SangongSceneResp(param:sangong.ISangongSceneResp) {
		if(isNil(param)) { return; }
        SangongMgr.delInstance();
        SangongMgr.getInstance();
        if(param.AllPlayers && param.AllPlayers.AllInfos) {
            for(var ii in param.AllPlayers.AllInfos) {
                SangongMgr.getInstance().addPlayer(param.AllPlayers.AllInfos[ii]);
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
		this.playDingzhuang(SangongMgr.getInstance().getEnterData().HostID, false);
	}

	private SangongStateFreeResp(param:sangong.ISangongSceneResp) {
        if(param){
            SangongMgr.getInstance().getEnterData().Inning = param.Inning;
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
    
    private SangongStateDealResp(param:sangong.ISangongStateDealResp) {
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
    
    private SangongStateCallResp(param:sangong.ISangongStateCallResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setJiaofen(true);
		this.showSearching(false);
		this.m_ui.readyNode.active = false;
		this.m_ui.grabNode.active = true;
		this.m_ui.callNode.active = false;
		if(param && param.Times) {
            this.resetCD(param.Times.WaitTime, true);
        }
        UIManager.closeWindow(ViewDefine.UISearchDesk);
	}

	private SangongStateDecideResp(param:sangong.ISangongStateDecideResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setQiangzhuang(true);
		this.showSearching(false);
		this.m_ui.readyNode.active = false;
		this.m_ui.grabNode.active = false;
		this.m_ui.callNode.active = false;
		if(param && param.Times) {
            this.resetCD(param.Times.WaitTime);
        }
        UIManager.closeWindow(ViewDefine.UISearchDesk);
        
        SangongMgr.getInstance().getEnterData().HostID = param.HostID;
        this.playDingzhuang(param.HostID, true);
	}

	private SangongStatePlayingResp(param:sangong.ISangongStatePlayingResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setXiazhu(true);
        this.showSearching(false);
        this.m_ui.readyNode.active = false;
		this.m_ui.grabNode.active = false;
        this.m_ui.callNode.active = true;
		if(param && param.Times) {
            this.resetCD(param.Times.WaitTime, true);
        }
        UIManager.closeWindow(ViewDefine.UISearchDesk);
	}

	private SangongStateOpenResp(param:sangong.ISangongStateOpenResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setKaipai(true);
        this.showSearching(false);
        this.m_ui.readyNode.active = false;
		this.m_ui.grabNode.active = false;
        this.m_ui.callNode.active = false;
		if(param && param.Times) {
            this.resetCD(param.Times.WaitTime);
        }
        UIManager.closeWindow(ViewDefine.UISearchDesk);
        this.SangongOpenResp(param.OpenInfo);
	}

	private SangongStateOverResp(param:sangong.ISangongStateOverResp) {
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

	private SangongOpenResp(param:sangong.ISangongOpenResp) {
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

    private SangongOverResp(param:sangong.ISangongOverResp) {
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
        var man = SangongMgr.getInstance().getPlayer(param.UserID);
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
        SangongMgr.getInstance().addPlayer(param.UserInfo);
        this.refreshFighter(param.UserInfo.UserID);
    }

    ExitGameResp(param:gamecomm.IExitGameResp) {
        var idx = this.playerIdx(param.UserID);
        if(idx >= 0) {
            this._pnodes[idx].active = false;
        }
        SangongMgr.getInstance().removePlayer(param.UserID);
	}
	
	SangongBetResp(param:sangong.ISangongBetResp) {
        if(isNil(param)) { return; }
        var idx = this.playerIdx(param.UserId);
        if(idx < 0) { return; }
        this._pnodes[idx].getChildByName("callScoreNode").active = true;
        this._pnodes[idx].getChildByName("callScoreNode").getComponent(cc.Label).string = param.BetScore+"倍";
        if(param.UserId == LoginUser.getInstance().UserId) {
            this.m_ui.callNode.active = false;
        }
	}
	
	SangongHostResp(param:sangong.ISangongHostResp) {
        if(isNil(param)) { return; }
        if(param.IsWant) {
            SangongMgr.getInstance().getEnterData().HostID = param.UserID;
            this.playDingzhuang(param.UserID, true);
        }
        if(param.UserID == LoginUser.getInstance().UserId) {
            this.m_ui.grabNode.active = false;
        }
	}

	initNetEvent() {
		EventCenter.getInstance().listen(sangong_msgs.SangongSceneResp, this.SangongSceneResp, this);
		EventCenter.getInstance().listen(sangong_msgs.SangongStateFreeResp, this.SangongStateFreeResp, this);
		EventCenter.getInstance().listen(sangong_msgs.SangongStateDecideResp, this.SangongStateDecideResp, this);
		EventCenter.getInstance().listen(sangong_msgs.SangongStateCallResp, this.SangongStateCallResp, this);
		EventCenter.getInstance().listen(sangong_msgs.SangongStateDealResp, this.SangongStateDealResp, this);
		EventCenter.getInstance().listen(sangong_msgs.SangongStatePlayingResp, this.SangongStatePlayingResp, this);
		EventCenter.getInstance().listen(sangong_msgs.SangongStateOpenResp, this.SangongStateOpenResp, this);
		EventCenter.getInstance().listen(sangong_msgs.SangongStateOverResp, this.SangongStateOverResp, this);
		EventCenter.getInstance().listen(sangong_msgs.SangongOpenResp, this.SangongOpenResp, this);
		EventCenter.getInstance().listen(sangong_msgs.SangongOverResp, this.SangongOverResp, this);
        EventCenter.getInstance().listen(gamecomm_msgs.GoldChangeInfo, this.GoldChangeInfo, this);
        EventCenter.getInstance().listen(gamecomm_msgs.EnterGameResp, this.EnterGameResp, this);
        EventCenter.getInstance().listen(gamecomm_msgs.ExitGameResp, this.ExitGameResp, this);
        EventCenter.getInstance().listen(sangong_msgs.SangongBetResp, this.SangongBetResp, this);
		EventCenter.getInstance().listen(sangong_msgs.SangongHostResp, this.SangongHostResp, this);
	}

	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            UIManager.openPopwnd(ViewDefine.UIHelpdoc2, true, {kindId:GameKindEnum.Sangong});
		}, this);

		CommonUtil.addClickEvent(this.m_ui.btn_ready, function(){ 
            sangong_request.SangongReadyReq({IsReady:true});
            this.showSearching(true);
            this.m_ui.readyNode.active = false;
            UIManager.openPopwnd(ViewDefine.UISearchDesk, false, newHandler(function(){
                this.m_ui.readyNode.active = true;
                sangong_request.SangongReadyReq({IsReady:false});
            }, this));
		}, this);
		
		CommonUtil.addClickEvent(this.m_ui.btn_grab_0, function(){ this.sendGrab(0); }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_grab_1, function(){ this.sendGrab(1); }, this);
		
		CommonUtil.addClickEvent(this.m_ui.btn_bet_0, function(){ this.sendBet(0); }, this);
		CommonUtil.addClickEvent(this.m_ui.btn_bet_1, function(){ this.sendBet(1); }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_bet_2, function(){ this.sendBet(2); }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_bet_3, function(){ this.sendBet(3); }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_bet_4, function(){ this.sendBet(4); }, this);
	}

	private sendGrab(idx:number) {
		var want = idx > 0;
		sangong_request.SangongHostReq({
			IsWant: want
        });
        AudioManager.getInstance().playEffectAsync("appqp/audios/selectchip",false);
	}

	private sendBet(idx:number) {
		var bei = this._betBeiList[idx];
		sangong_request.SangongBetReq({
			BetArea:0,
			BetScore:bei
        });
        AudioManager.getInstance().playEffectAsync("appqp/audios/selectchip",false);
	}
	
}
