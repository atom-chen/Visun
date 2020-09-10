import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import GameManager from "../../../../../common/script/model/GameManager";
import UIManager from "../../../../../kernel/view/UIManager";
import CpnUserState from "../../../../appqp/script/comps/CpnUserState";
import CpnGameState from "../../../../appqp/script/comps/CpnGameState";
import { zhajinhua_msgs, zhajinhua_request } from "../../../../../common/script/proto/net_zhajinhua";
import { zhajinhua } from "../../../../../../declares/zhajinhua";
import ZjhMgr from "../model/ZjhMgr";
import { isNil, newHandler } from "../../../../../kernel/utils/GlobalFuncs";
import LoginUser from "../../../../../common/script/model/LoginUser";
import CpnPlayer1 from "../../../../appqp/script/comps/CpnPlayer1";
import CpnCircleCD from "../../../../appqp/script/comps/CpnCircleCD";
import { ZjhFighterState, ZjhGameState } from "../model/ZjhDefine";
import CpnHandcard2 from "../../../../appqp/script/comps/CpnHandcard2";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import ZjhHandlers from "../model/ZjhHandlers";
import { gamecomm_msgs, gamecomm_request } from "../../../../../common/script/proto/net_gamecomm";
import { gamecomm } from "../../../../../../declares/gamecomm";
import Preloader from "../../../../../kernel/utils/Preloader";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import CpnShandian from "../../../../appqp/script/comps/CpnShandian";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import { GameKindEnum } from "../../../../../common/script/definer/ConstDefine";


const MAX_SOLDIER = 5;
var CMLIST = [
    "appqp/imgs/chips/cm1", 
    "appqp/imgs/chips/cm2", 
    "appqp/imgs/chips/cm3", 
    "appqp/imgs/chips/cm4", 
    "appqp/imgs/chips/cm5",
    "appqp/imgs/chips/cm6"
];
var CMVLIST = [ 5, 10, 20, 50, 100, 150 ];
var margin = {rx:100,ry:60,rr:0};


const {ccclass, property} = cc._decorator;

@ccclass
export default class zjhUI extends BaseComponent {
    private _pnodes:Array<cc.Node> = [];
    private _playerCpns:Array<CpnPlayer1> = [];
    private _handors:Array<CpnHandcard2> = [];
    private _stateCpns:Array<CpnUserState> = [];
    private _cdCpns:Array<CpnCircleCD> = [];

    private _zhuangPos = null;
    private _bipaiTarget = -1;
    private ksyxSpn:cc.Node = null;
    private tmrFapaiAni = 0;
    private tmrCheckKickout = 0;

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        this._zhuangPos = this.m_ui.zhuang.position;

        for(var i = 0; i <= 4; i++) {
            var nd = this.m_ui["p"+i];
            this._pnodes.push(nd);
            this._playerCpns.push(nd.getChildByName("CpnPlayer").getComponent(CpnPlayer1));
            this._handors.push(nd.getChildByName("handor").getComponent(CpnHandcard2));
            this._stateCpns.push(nd.getChildByName("CpnUserState").getComponent(CpnUserState));
            this._cdCpns.push(nd.getChildByName("CpnCircleCD").getComponent(CpnCircleCD));
        }

        for(var n=0; n<MAX_SOLDIER; n++) {
            this._pnodes[n].active = false;
        }

        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).getDispatcher().addObserver(ZjhHandlers);

        this.initUIEvent();
        this.initNetEvent();

        this.ZhajinhuaSceneResp(ZjhMgr.getInstance().getEnterData());
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);

        //预加载
        cc.loader.loadRes(ViewDefine.UIpk, cc.Prefab)
    }

    onDestroy() {
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).getDispatcher().removeObserver(ZjhHandlers);
        super.onDestroy();
    }

    //玩家的UI位置
    private playerIndex(player:zhajinhua.IZhajinhuaPlayer) : number {
		if(isNil(player)){ return -1; }
        var hero = ZjhMgr.getInstance().getPlayer(LoginUser.getInstance().UserId);
        if(isNil((player.MyInfo as gamecomm.IPlayerInfo).ChairID)) { return -1; }
        if(isNil(hero)) { return (player.MyInfo as gamecomm.IPlayerInfo).ChairID; }
		if((hero.MyInfo as gamecomm.IPlayerInfo).ChairID===0) { return (player.MyInfo as gamecomm.IPlayerInfo).ChairID; }
		return ((player.MyInfo as gamecomm.IPlayerInfo).ChairID-(hero.MyInfo as gamecomm.IPlayerInfo).ChairID+MAX_SOLDIER) % MAX_SOLDIER;
    }

    private playerIdx(uid:number) : number {
        var p = ZjhMgr.getInstance().getPlayer(uid);
        return this.playerIndex(p);
    }

    private isLoseFightState(v) : boolean {
        if(ZjhMgr.getInstance().GameState != ZjhGameState.fighting && ZjhMgr.getInstance().GameState != ZjhGameState.settle) {
            return false;
        }
        return v == ZjhFighterState.qipai || v == ZjhFighterState.bipaishu
    }

    private getImgPath(v:number) : string {
        for(var i in CMVLIST) {
            if(v <= CMVLIST[i]) {
                return CMLIST[i];
            }
        }
        return CMLIST[5];
    }

    private playBetAni(uid:number, v:number) {
        var idx = this.playerIdx(uid);
        if(idx < 0 || v <= 0) { return; }

        var nums = GameUtil.parseChip(v, CMVLIST);
        for(var nn in nums) {
            var imgpath = this.getImgPath(nums[nn]);
            var sprChip = new cc.Node();
            var comp = sprChip.addComponent(cc.Sprite);
            Preloader.setNodeSprite(comp, imgpath, this);
            this.m_ui.chipLayer.addChild(sprChip);
            sprChip.scale = 0.2;
            CommonUtil.lineTo1(sprChip, this._pnodes[idx], this.m_ui.chipCen, 0.3, 0, margin);
        }
    }

    private refreshFighter(uid) {
        var man = ZjhMgr.getInstance().getPlayer(uid);
        var idx = this.playerIdx(uid);
        if(idx >= 0) {
            this._pnodes[idx].active = true;
            this._playerCpns[idx].setName((man.MyInfo as gamecomm.IPlayerInfo).Name);
            this._playerCpns[idx].setMoneyStr(CommonUtil.formRealMoney((man.MyInfo as gamecomm.IPlayerInfo).Gold));
            this._playerCpns[idx].setHeadImg((man.MyInfo as gamecomm.IPlayerInfo).FaceID);
            this._pnodes[idx].getChildByName("ust_kanpai").active = man.IsSee == true && (man.MyInfo as gamecomm.IPlayerInfo).UserID!=LoginUser.getInstance().UserId;
            this._pnodes[idx].getChildByName("ust_yizhunbei").active = man.MyInfo.Sate == ZjhFighterState.readyed;
            if(man.MyInfo.Sate == ZjhFighterState.genzhu) {
                this._stateCpns[idx].genzhu();
            }
            else if(man.MyInfo.Sate == ZjhFighterState.jiazhu) {
                this._stateCpns[idx].jiazhu();
            }
            else if(man.MyInfo.Sate == ZjhFighterState.qipai) {
                this._stateCpns[idx].qipai();
            }
            else if(man.MyInfo.Sate == ZjhFighterState.bipaishu) {
                this._stateCpns[idx].bipaishu();
            }
            else {
                this._stateCpns[idx].idle();
            }
            
            CommonUtil.grayNode(this._pnodes[idx], this.isLoseFightState((man.MyInfo as gamecomm.IPlayerInfo).Sate));
            this._playerCpns[idx].setLabGray(this.isLoseFightState((man.MyInfo as gamecomm.IPlayerInfo).Sate));
        }
    }

    refreshFighterGold(uid:number) {
        var idx = this.playerIdx(uid);
        if(idx >= 0) {
            var man = ZjhMgr.getInstance().getPlayer(uid);
            this._playerCpns[idx].setMoneyStr(CommonUtil.formRealMoney((man.MyInfo as gamecomm.IPlayerInfo).Gold));
        }
    }

    getPlayerByIndex(idx:number) : zhajinhua.IZhajinhuaPlayer {
        if(idx < 0) { return null; }
        var mans = ZjhMgr.getInstance().getPlayerList();
        if(mans) {
            for(var uid in mans) {
                if(this.playerIndex(mans[uid]) == idx) {
                    return mans[uid];
                }
            }
        }
        return null;
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

    EnterGameZjhResp(param:zhajinhua.IEnterGameZjhResp) {
        this.refreshFighter((param.Player.MyInfo as gamecomm.IPlayerInfo).UserID);
    }

    EnterGameResp(param:gamecomm.IEnterGameResp) {
        var idx = this.playerIdx(param.UserInfo.UserID);
        this.refreshPlayerByIndex(idx);
    }

    ExitGameResp(param:gamecomm.IExitGameResp) {
        for(var n=0; n<MAX_SOLDIER; n++) {
            this.refreshPlayerByIndex(n, false);
        }
    }

    //场景信息
    ZhajinhuaSceneResp(param:zhajinhua.IZhajinhuaSceneResp) {
        if(isNil(param)) {
            this.ZhajinhuaStateFreeResp(null);
            return;
        }

        ZjhMgr.delInstance();
        ZjhMgr.getInstance();
        for(var ii in param.Fighters) {
			ZjhMgr.getInstance().addPlayer(param.Fighters[ii]);
        }

        this.m_ui.labBottomBet.getComponent(cc.Label).string = "底注：" + CommonUtil.formRealMoney(500);
        this.m_ui.labRound.getComponent(cc.Label).string = "第1/20轮";
        this.m_ui.labMinBet.getComponent(cc.Label).string = "最低下注：" + CommonUtil.formRealMoney(param.MinScore);
        this.m_ui.labTotalBet.getComponent(cc.Label).string = "总下注：" + CommonUtil.formRealMoney(param.TotalScore);
        this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：" + param.Inning;
        
        if(param.Banker) {
            this.playDingzhuan(param.Banker, false);
        }

        for(var n=0; n<MAX_SOLDIER; n++) {
            this.refreshPlayerByIndex(n);
        }

        var mans = ZjhMgr.getInstance().getPlayerList();
        for(var uid in mans) {
            this.playBetAni((mans[uid].MyInfo as gamecomm.IPlayerInfo).UserID, CommonUtil.fixRealMoney(mans[uid].TotalScore));
        }
    }

    //准备阶段
    ZhajinhuaStateFreeResp(param:zhajinhua.IZhajinhuaStateFreeResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setZhunbei();
        this.m_ui.opLayer.active = false;
        this.m_ui.readyNode.active = true;

        for(var i=0; i<MAX_SOLDIER; i++){
            var man = this.getPlayerByIndex(i);
            this._pnodes[i].active = !isNil(man);
            this._cdCpns[i].node.active = false;
            this._handors[i].resetCards(null);
            this._pnodes[i].getChildByName("ust_kanpai").active = false;
            CommonUtil.grayNode(this._pnodes[i], false);
            this._playerCpns[i].setLabGray(false);
            
            if(!isNil(man)) {
                this._pnodes[i].getChildByName("ust_yizhunbei").active = man.MyInfo.Sate == ZjhFighterState.readyed;
            }
        }

        this.m_ui.chipLayer.removeAllChildren();
        this.selectBipaiTarget(-1);

        this.playDingzhuan(-99, false);
        this.m_ui.zhuang.active = false;

        CommonUtil.safeDelete(this.ksyxSpn);
        this.ksyxSpn = null;

        // if(this.quietCheck() && !TimerManager.isValid(this.tmrCheckKickout)) {
        //     this.tmrCheckKickout = TimerManager.delaySecond(6, newHandler(function(tmr){
        //         if(this.quietCheck()) {
        //             cc.log("长时间未准备踢出场");
        //             GameManager.getInstance().quitGame();
        //         }
        //     }, this));
        // }
    }

    quietCheck() : boolean {
        if(ZjhMgr.getInstance().fighterCnt() <= 1) {
            return false;
        }
        var hero = ZjhMgr.getInstance().getPlayer(LoginUser.getInstance().UserId);
        if(!isNil(hero)) {
            if(ZjhMgr.getInstance().GameState == ZjhGameState.ready && hero.MyInfo.Sate == ZjhFighterState.idle) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }

    //开始游戏: 播发牌动画
    ZhajinhuaStateStartResp(param:zhajinhua.IZhajinhuaStateStartResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setFapai();
        this.m_ui.opLayer.active = false;
        this.m_ui.readyNode.active = false;
        
        this.tmrCheckKickout = TimerManager.delTimer(this.tmrCheckKickout);

        for(var i=0; i<MAX_SOLDIER; i++){
            var man = this.getPlayerByIndex(i);
            this._pnodes[i].active = !isNil(man);
            this._cdCpns[i].node.active = false;
            this._handors[i].resetCards(null);
            this._pnodes[i].getChildByName("ust_kanpai").active = false;
            CommonUtil.grayNode(this._pnodes[i], false);
            this._playerCpns[i].setLabGray(false);
            
            if(!isNil(man)) {
                this._pnodes[i].getChildByName("ust_yizhunbei").active = man.MyInfo.Sate == ZjhFighterState.readyed;
            }
        }

        this.m_ui.chipLayer.removeAllChildren();

        for(var n = 0; n < MAX_SOLDIER; n++) {
            this._pnodes[n].getChildByName("ust_yizhunbei").active = false;
        }

        this.playFapaiAni();
    }
    private playFapaiAni() {
        this.ksyxSpn = Preloader.showSpineAsync("appqp/spines/kaishiyouxi/fan", 0, "a", 1, this.node, {zIndex:10, x:0, y:80, scale:0.36}, {
            on_complete: (sk, trackEntry)=>{
                CommonUtil.safeDelete(sk.node);
            }
        });

        this.tmrFapaiAni = TimerManager.delaySecond(3, newHandler(function(){
            var nn = 0;
            for(var i=0; i<MAX_SOLDIER; i++){
                var man:zhajinhua.IZhajinhuaPlayer = this.getPlayerByIndex(i);
                if(!isNil(man) && man.MyInfo.Sate != ZjhFighterState.idle) {
                    this._handors[i].resetCards([0,0,0]);
                    var fromPos = CommonUtil.convertSpaceAR(this.m_ui.cpzhuang, this._handors[i].node);
                    for(var j=0; j<3; j++) {
                        nn++;
                        CommonUtil.bezierTo3(this._handors[i].node.children[j], fromPos, this._handors[i].getComponent(CpnHandcard2).getPosByIndex(j), 0.4, nn*0.06);
                    }
                } else {
                    this._handors[i].resetCards(null);
                }
            }
        }, this));

        TimerManager.delaySecond(4, newHandler(function(){
            var mans = ZjhMgr.getInstance().getPlayerList();
            for(var m in mans) {
                if(mans[m].MyInfo.Sate != ZjhFighterState.idle) {
                    this.playBetAni((mans[m].MyInfo as gamecomm.IPlayerInfo).UserID, 5);
                }
            }
        }, this));
    }
    
    refreshCards(bJiesuan:boolean) {
        TimerManager.delTimer(this.tmrFapaiAni);
        this.tmrFapaiAni = 0;
        
        for(var nn=0; nn<MAX_SOLDIER; nn++) {
            var man = this.getPlayerByIndex(nn);
            if(!isNil(man)) {
                if(man.MyInfo.UserID == LoginUser.getInstance().UserId) {
                    if(man.IsSee || bJiesuan) {
                        this._handors[nn].resetCards(man.Cards.Cards);
                        this._handors[nn].playOpen(false);
                    } else {
                        if(man.MyInfo.Sate != ZjhFighterState.idle) {
                            this._handors[nn].resetCards([0,0,0]);
                        } else {
                            this._handors[nn].resetCards(null);
                        }
                    }
                } else {
                    if(man.MyInfo.Sate != ZjhFighterState.idle) {
                        this._handors[nn].resetCards([0,0,0]);
                    } else {
                        this._handors[nn].resetCards(null);
                    }
                }
            }
        }
    }

    //战斗阶段-轮到新操作者
    ZhajinhuaStatePlayingResp(param:zhajinhua.IZhajinhuaStatePlayingResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setXiazhu();
        this.m_ui.opLayer.active = param.UserID == LoginUser.getInstance().UserId;
        this.m_ui.readyNode.active = false;

        var idx = this.playerIdx(param.UserID);

        this.refreshCards(false);

        for(var i=0; i<MAX_SOLDIER; i++) {
            this._cdCpns[i].node.active = idx == i;
            if(idx == i) {
                this._cdCpns[i].setRemainCD(param.Times.TotalTime, param.Times.WaitTime);
                this._stateCpns[i].idle();
            } else {
                this._cdCpns[i].setRunning(false);
            }
            this._pnodes[i].getChildByName("ust_yizhunbei").active = false;
        }

        CommonUtil.safeDelete(this.ksyxSpn);
        this.ksyxSpn = null;
        this.tmrCheckKickout = TimerManager.delTimer(this.tmrCheckKickout);
    }

    //战斗阶段-比牌
    ZhajinhuaStateCompareResp(param:zhajinhua.IZhajinhuaStateCompareResp) {
        this.m_ui.readyNode.active = false;
        if(param.Info) {
            this.ZhajinhuaCompareResp(param.Info);
        }
        CommonUtil.safeDelete(this.ksyxSpn);
        this.ksyxSpn = null;
        this.refreshCards(false);
        this.selectBipaiTarget(-1);
        this.tmrCheckKickout = TimerManager.delTimer(this.tmrCheckKickout);
    }

    //结算阶段
    ZhajinhuaStateOverResp(param:zhajinhua.IZhajinhuaStateOverResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setPaijiang();
        this.m_ui.opLayer.active = false;
        this.m_ui.readyNode.active = false;
        for(var i=0; i<MAX_SOLDIER; i++) {
            this._cdCpns[i].setRunning(false);
            this._cdCpns[i].node.active = false;
            this._pnodes[i].getChildByName("ust_yizhunbei").active = false;
        }
        CommonUtil.safeDelete(this.ksyxSpn);
        this.ksyxSpn = null;
        this.refreshCards(true);
        this.selectBipaiTarget(-1);
        this.tmrCheckKickout = TimerManager.delTimer(this.tmrCheckKickout);
    }

    //结算数据
    ZhajinhuaOverResp(param:zhajinhua.IZhajinhuaOverResp) {
        if(isNil(param)) { return; }
        
        if(param.Infos) {
            for(var i in param.Infos) {
                var cur = param.Infos[i];
                for(var j in param.Infos[i].Compares) {
                    var uid = cur.Compares[j];
                    var idx = this.playerIdx(uid);
                    if(idx >= 0) {
                        var cardlist = cur.Cards && cur.Cards.Cards;
                        if(isNil(cardlist) || cardlist.length <= 0) {
                            cardlist = ZjhMgr.getInstance().getPlayer(uid).Cards.Cards;
                        }
                        this._handors[idx].resetCards(cardlist);
                        this._handors[idx].playOpen();
                    }
                }

                var tipStr = "";
                if(cur.WinScore > 0) {
                    tipStr += cur.MyInfo.Name + "赢" + cur.WinScore;
                } else {
                    tipStr += cur.MyInfo.Name + "输" + cur.WinScore;
                }
                UIManager.toast(tipStr);
            }
        }
        this.playJiesuan(param);
    }
    playJiesuan(param:zhajinhua.IZhajinhuaOverResp) {
        if(isNil(param)) { return; }
        var idx = this.playerIdx(param.WinnerId);
        
        var childs = this.m_ui.chipLayer.children;

        if(idx >= 0) {
            for(var i=0; i<childs.length; i++) {
                childs[i].runAction(cc.sequence(
                    cc.moveTo(0.25, cc.v2(this.m_ui.chipCen.x, this.m_ui.chipCen.y)),
                    cc.delayTime(0.05*i),
                    cc.moveTo(0.25, cc.v2(this._pnodes[idx].x, this._pnodes[idx].y)),
                    cc.destroySelf()
                ));
            }
            Preloader.showSpineAsync("appqp/spines/headflower/ky_lhd_js", 0, "1", 3, this._pnodes[idx], {y:20, scale:1.12});
        } else {
            for(var i=0; i<childs.length; i++) {
                childs[i].runAction(cc.sequence(
                    cc.moveTo(0.25, cc.v2(this.m_ui.chipCen.x, this.m_ui.chipCen.y)),
                    cc.destroySelf()
                ));
            }
        }
    }

    //跟注
    ZhajinhuaFollowResp(param:zhajinhua.IZhajinhuaFollowResp) {
        var idx = this.playerIdx(param.UserId);
        if(idx >= 0) {
            this._stateCpns[idx].genzhu();
            this.playBetAni(param.UserId, CommonUtil.fixRealMoney(param.Score));
            this.m_ui.labMinBet.getComponent(cc.Label).string = "最低下注：" + CommonUtil.formRealMoney(ZjhMgr.getInstance().getEnterData().MinScore);
            this.m_ui.labTotalBet.getComponent(cc.Label).string = "总下注：" + CommonUtil.formRealMoney(ZjhMgr.getInstance().getEnterData().TotalScore);
            this.refreshFighterGold(param.UserId);
        }
    }

    //加注
    ZhajinhuaRaiseResp(param:zhajinhua.IZhajinhuaRaiseResp) {
        var idx = this.playerIdx(param.UserId);
        if(idx >= 0) {
            this._stateCpns[idx].jiazhu();
            this.playBetAni(param.UserId, CommonUtil.fixRealMoney(param.Score));
            this.m_ui.labMinBet.getComponent(cc.Label).string = "最低下注：" + CommonUtil.formRealMoney(ZjhMgr.getInstance().getEnterData().MinScore);
            this.m_ui.labTotalBet.getComponent(cc.Label).string = "总下注：" + CommonUtil.formRealMoney(ZjhMgr.getInstance().getEnterData().TotalScore);
            this.refreshFighterGold(param.UserId);
        }
    }

    //比牌
    ZhajinhuaCompareResp(param:zhajinhua.IZhajinhuaCompareResp) {
        this.selectBipaiTarget(-1);
        var winStr = "sprK";
        var losser = param.AttackerId;
        if(losser == param.WinnerId) {
            losser = param.HitId;
            winStr = "sprP";
        }
        
        var idx = this.playerIdx(losser);
        if(idx >= 0) {
            this._stateCpns[idx].bipaishu();
            CommonUtil.grayNode(this._pnodes[idx], true);
            this._playerCpns[idx].setLabGray(true);
        }

        var atkIdx = this.playerIdx(param.AttackerId);
        if(atkIdx >= 0) {
            this._cdCpns[atkIdx].setRunning(false);
        }

        var mgr = ZjhMgr.getInstance();

        this.playBetAni(param.AttackerId, 100);
        this.m_ui.labMinBet.getComponent(cc.Label).string = "最低下注：" + CommonUtil.formRealMoney(mgr.getEnterData().MinScore);
        this.m_ui.labTotalBet.getComponent(cc.Label).string = "总下注：" + CommonUtil.formRealMoney(mgr.getEnterData().TotalScore);
        this.refreshFighterGold(param.AttackerId);

        var manP = mgr.getPlayer(param.AttackerId);
        var manK = mgr.getPlayer(param.HitId);
        var pkinfo = {
            phead: manP && manP["FaceID"] || 1004,
            khead: manK && manK["FaceID"] || 2006,
            pname: manP && (manP.MyInfo as gamecomm.IPlayerInfo).Name || param.AttackerId,
            kname: manK && (manK.MyInfo as gamecomm.IPlayerInfo).Name || param.HitId,
            winner: winStr
        }
        UIManager.openPopwnd(ViewDefine.UIpk, false, pkinfo);
    }

    //看牌
    ZhajinhuaLookResp(param:zhajinhua.IZhajinhuaLookResp) {
        var idx = this.playerIdx(param.UserId);
        if(idx >= 0) {
            this._pnodes[idx].getChildByName("ust_kanpai").active = true && param.UserId != LoginUser.getInstance().UserId;
        }
        var man = ZjhMgr.getInstance().getPlayer(param.UserId);
        if(man && (man.MyInfo as gamecomm.IPlayerInfo).UserID == LoginUser.getInstance().UserId) {
            this._handors[idx].resetCards(man.Cards.Cards);
            this._handors[idx].playOpen();
        }
    }

    //弃牌
    ZhajinhuaGiveupResp(param:zhajinhua.IZhajinhuaGiveupResp) {
        var idx = this.playerIdx(param.UserId);
        if(idx >= 0) {
            this._stateCpns[idx].qipai();
            CommonUtil.grayNode(this._pnodes[idx], true);
            this._playerCpns[idx].setLabGray(true);
            this._cdCpns[idx].setRunning(false);
        }
    }

    //定庄
    ZhajinhuaHostResp(param:zhajinhua.IZhajinhuaHostResp) {
        this.playDingzhuan(param.BankerID, true);
    }

    playDingzhuan(BankerID:number, bAni:boolean) {
        this.m_ui.zhuang.stopAllActions();

        if(BankerID < 0) {
            this.m_ui.zhuang.position = this._zhuangPos;
            return;
        }

        var idx = this.playerIdx(BankerID);
        if(idx >= 0) {
            var dstPos = cc.v3(this._pnodes[idx].position);
            dstPos.x += 50;
            dstPos.y += 75;
            if(bAni) {
                this.m_ui.zhuang.position = this._zhuangPos;
                this.m_ui.zhuang.runAction(cc.moveTo(0.3, cc.v2(dstPos.x, dstPos.y)));
            } else {
                this.m_ui.zhuang.position = dstPos;
            }
        } else {
            this.m_ui.zhuang.position = this._zhuangPos;
        }
    }

    //
    GoldChangeInfo(param:gamecomm.IGoldChangeInfo) {
        var man = ZjhMgr.getInstance().getPlayer(param.UserID);
        if(man) {
            (man.MyInfo as gamecomm.IPlayerInfo).Gold = param.Gold;
        }
        var idx = this.playerIdx(param.UserID);
        if(idx >= 0) {
            this._playerCpns[idx].setMoneyStr(CommonUtil.formRealMoney(param.Gold));
        }
    }

    ZhajinhuaReadyResp(param:zhajinhua.IZhajinhuaReadyResp) {
        if(param.UserId == LoginUser.getInstance().UserId) {
            this.m_ui.readyNode.active = false;
        }
        var idx = this.playerIdx(param.UserId);
        if(idx >= 0) {
            this._pnodes[idx].getChildByName("ust_yizhunbei").active = true;
        }
    }

    initNetEvent() {
        EventCenter.getInstance().listen(gamecomm_msgs.GoldChangeInfo, this.GoldChangeInfo, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaSceneResp, this.ZhajinhuaSceneResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaStateFreeResp, this.ZhajinhuaStateFreeResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaStateStartResp, this.ZhajinhuaStateStartResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaStatePlayingResp, this.ZhajinhuaStatePlayingResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaStateOverResp, this.ZhajinhuaStateOverResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaFollowResp, this.ZhajinhuaFollowResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaRaiseResp, this.ZhajinhuaRaiseResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaLookResp, this.ZhajinhuaLookResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaCompareResp, this.ZhajinhuaCompareResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaStateCompareResp, this.ZhajinhuaStateCompareResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaGiveupResp, this.ZhajinhuaGiveupResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaHostResp, this.ZhajinhuaHostResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaOverResp, this.ZhajinhuaOverResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaReadyResp, this.ZhajinhuaReadyResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.EnterGameZjhResp, this.EnterGameZjhResp, this);
        EventCenter.getInstance().listen(gamecomm_msgs.EnterGameResp, this.EnterGameResp, this);
        EventCenter.getInstance().listen(gamecomm_msgs.ExitGameResp, this.ExitGameResp, this);
    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            UIManager.openPopwnd(ViewDefine.UIHelpdoc, true, {kindId:GameKindEnum.Zhajinhua});
		}, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_giveup, function(){ 
            zhajinhua_request.ZhajinhuaGiveupReq({});
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_look, function(){ 
            zhajinhua_request.ZhajinhuaLookReq({});
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_follow, function(){ 
            zhajinhua_request.ZhajinhuaFollowReq({});
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_add, function(){ 
            zhajinhua_request.ZhajinhuaRaiseReq({Score:20});
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_compare, function(){ 
            if(this._bipaiTarget < 0) {
                UIManager.toast("请选择比牌对象");
                return;
            }
            zhajinhua_request.ZhajinhuaCompareReq({HitId:this._bipaiTarget});
            this.selectBipaiTarget(-1);
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_ready, function(){
            zhajinhua_request.ZhajinhuaReadyReq({IsReady:true});
        }, this);

        CommonUtil.addClickEvent(this.m_ui.btn_chgdesk, function(){
            gamecomm_request.ChangeTableReq({
                GameID : GameManager.getInstance().getGameId()
            });
        }, this);

        CommonUtil.addClickEvent(this.m_ui.p0.getChildByName("CpnPlayer"), function(){ this.selectBipaiTarget(0); }, this);
        CommonUtil.addClickEvent(this.m_ui.p1.getChildByName("CpnPlayer"), function(){ this.selectBipaiTarget(1); }, this);
        CommonUtil.addClickEvent(this.m_ui.p2.getChildByName("CpnPlayer"), function(){ this.selectBipaiTarget(2); }, this);
        CommonUtil.addClickEvent(this.m_ui.p3.getChildByName("CpnPlayer"), function(){ this.selectBipaiTarget(3); }, this);
        CommonUtil.addClickEvent(this.m_ui.p4.getChildByName("CpnPlayer"), function(){ this.selectBipaiTarget(4); }, this);
    }
    
    selectBipaiTarget(idx:number) {
        this._bipaiTarget = -1;

        var man = ZjhMgr.getInstance().getPlayer(LoginUser.getInstance().UserId);
        if(isNil(man) || this.isLoseFightState(man.MyInfo.Sate)) {
            return;
        }

        var man:zhajinhua.IZhajinhuaPlayer = null;
        if(idx >= 0) {
            man = this.getPlayerByIndex(idx);
            if(!isNil(man) && (man.MyInfo as gamecomm.IPlayerInfo).UserID != LoginUser.getInstance().UserId) {
                this._bipaiTarget = (man.MyInfo as gamecomm.IPlayerInfo).UserID;
            }
        }
        
        this.m_ui.shandian.active = this._bipaiTarget >= 0;

        if(this._bipaiTarget > 0) {
            var id1 = LoginUser.getInstance().UserId;
            var id2 = (man.MyInfo as gamecomm.IPlayerInfo).UserID;
            var idx1 = this.playerIdx(id1);
            var idx2 = this.playerIdx(id2);
            if(idx1 >= 0 && idx2 >= 0) {
                var nd1 = this._pnodes[idx1];
                var nd2 = this._pnodes[idx2];
                this.m_ui.shandian.getComponent(CpnShandian).setLighting(nd1.x, nd1.y, nd2.x, nd2.y, 150);
            }
        }
    }
}
