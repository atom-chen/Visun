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
//import ZjhServer from "../model/ZjhServer";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import CpnShandian from "../../../../appqp/script/comps/CpnShandian";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";


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

    private _tmrState = 0;
    private _zhuangPos = null;
    private _bipaiTarget = -1;

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

        //for test
     //   ZjhServer.getInstance().run();
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
        if(idx < 0) { return; }

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
            this._pnodes[idx].getChildByName("ust_yizhunbei").active = man.MyInfo.Sate == ZjhFighterState.readyed;
            // if(man.IsSee == true) {
            //     this._handors[idx].resetCards(man.Cards.Cards);
            //     this._handors[idx].playOpen();
            // }
            if(ZjhMgr.getInstance().GameState != ZjhGameState.ready) {
                if(uid == LoginUser.getInstance().UserId && man.IsSee) {
                    this._handors[idx].resetCards(man.Cards.Cards);
                    this._handors[idx].playOpen();
                } else {
                    this._handors[idx].resetCards([0,0,0]);
                }
            }
            CommonUtil.grayNode(this._pnodes[idx], this.isLoseFightState((man.MyInfo as gamecomm.IPlayerInfo).Sate));
            this._playerCpns[idx].setLabGray(this.isLoseFightState((man.MyInfo as gamecomm.IPlayerInfo).Sate));
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

    ExitGameZjhResp(param:zhajinhua.IExitGameZjhResp) {
        for(var n=0; n<MAX_SOLDIER; n++) {
            this.refreshPlayerByIndex(n, false);
        }
    }

    EnterGameResp(param:gamecomm.IEnterGameResp) {
        if(param.GameID != GameManager.getInstance().getGameId()) {
			return;
		}
        var idx = this.playerIdx(param.UserInfo.UserID);
        this.refreshPlayerByIndex(idx);
    }

    ExitGameResp(param:gamecomm.IExitGameResp) {
        if(param.GameID == GameManager.getInstance().getGameId()) {
			return;
		}
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
        this.m_ui.labBottomBet.getComponent(cc.Label).string = "底注：" + CommonUtil.formRealMoney(500);
        this.m_ui.labRound.getComponent(cc.Label).string = "第1/20轮";
        this.m_ui.labMinBet.getComponent(cc.Label).string = "最低下注：" + CommonUtil.formRealMoney(param.MinScore);
        this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：" + param.Inning;
        if(param.Banker) {
            this.ZhajinhuaHostResp({BankerID:param.Banker});
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

        this.m_ui.zhuang.stopAllActions();
        this.m_ui.zhuang.position = this._zhuangPos;

        for(var i in this._stateCpns){
            this._cdCpns[i].node.active = false;
            this._handors[i].resetCards(null);
            this._pnodes[i].getChildByName("ust_kanpai").active = false;
            CommonUtil.grayNode(this._pnodes[i], false);
            this._playerCpns[i].setLabGray(false);
        }

        this.m_ui.chipLayer.removeAllChildren();
        this.m_ui.zhuang.active = false;
    }

    //开始游戏: 播发牌动画
    ZhajinhuaStateStartResp(param:zhajinhua.IZhajinhuaStateStartResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setFapai();
        this.m_ui.opLayer.active = false;

        this.m_ui.readyNode.active = false;

        this.m_ui.chipLayer.removeAllChildren();

        for(var n = 0; n < MAX_SOLDIER; n++) {
            this._pnodes[n].getChildByName("ust_yizhunbei").active = false;
        }

        Preloader.showSpineAsync("appqp/spines/kaishiyouxi/fan", 0, "a", 1, this.node, {zIndex:10, x:0, y:80, scale:0.36}, {
            on_complete: (sk, trackEntry)=>{
                CommonUtil.safeDelete(sk);
            }
        });

        TimerManager.delaySecond(3, newHandler(function(){
            var nn = 0;
            for(var i in this._stateCpns){
                this._handors[i].resetCards([0,0,0]);
    
                var fromPos = CommonUtil.convertSpaceAR(this.m_ui.cpzhuang, this._handors[i].node);
                for(var j=0; j<3; j++) {
                    nn++;
                    this.bezierTo0(this._handors[i].node.children[j], fromPos, this._handors[i].getComponent(CpnHandcard2).getPosByIndex(j), 0.4, nn*0.06);
                }
            }
        }, this));

        TimerManager.delaySecond(4, newHandler(function(){
            var mans = ZjhMgr.getInstance().getPlayerList();
            for(var m in mans) {
                this.playBetAni((mans[m].MyInfo as gamecomm.IPlayerInfo).UserID, 5);
            }
        }, this));
    }
    private bezierTo0(chipSpr:cc.Node, fromPos:cc.Vec2, toPos:cc.Vec2, duration:number, delay:number) {
		if(!chipSpr) { return; }
		chipSpr.setPosition(fromPos);
		var gj = cc.bezierTo(duration, 
			[
				new cc.Vec2(fromPos.x+15,fromPos.y-20),
				new cc.Vec2(fromPos.x+55,fromPos.y-140), 
				new cc.Vec2(toPos.x,toPos.y)
			]).easing(cc.easeInOut(2))
		if(delay<=0)
			chipSpr.runAction( gj );
		else
			chipSpr.runAction( cc.sequence(cc.delayTime(delay), gj) )
	}

    //战斗阶段-轮到新操作者
    ZhajinhuaStatePlayingResp(param:zhajinhua.IZhajinhuaStatePlayingResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setXiazhu();
        this.m_ui.opLayer.active = param.UserID == LoginUser.getInstance().UserId;
        this.m_ui.readyNode.active = false;

        var idx = this.playerIdx(param.UserID);
        for(var i=0; i<MAX_SOLDIER; i++) {
            this._cdCpns[i].node.active = idx == i;
            if(idx == i) {
                this._cdCpns[i].setRemainCD(param.Times.TotalTime, param.Times.WaitTime);
                this._stateCpns[i].idle();
            }
            this._pnodes[i].getChildByName("ust_yizhunbei").active = false;
        }
    }

    //战斗阶段-比牌
    ZhajinhuaStateCompareResp(param:zhajinhua.IZhajinhuaStateCompareResp) {
        this.m_ui.readyNode.active = false;
        if(param.Info) {
            this.ZhajinhuaCompareResp(param.Info);
        }
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
    }

    //结算数据
    ZhajinhuaOverResp(param:zhajinhua.IZhajinhuaOverResp) {
        if(isNil(param)) { return; }
        UIManager.toast("赢家ID：" + param.WinnerId);
        if(param.Infos) {
            for(var i in param.Infos) {
                this.GoldChangeInfo(param.Infos[i]);
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
                    cc.moveTo(0.2, cc.v2(this.m_ui.chipCen.x, this.m_ui.chipCen.y)),
                    cc.delayTime(0.03*i),
                    cc.moveTo(0.2, cc.v2(this._pnodes[idx].x, this._pnodes[idx].y)),
                    cc.destroySelf()
                ));
            }
        } else {
            for(var i=0; i<childs.length; i++) {
                childs[i].runAction(cc.sequence(
                    cc.moveTo(0.2, cc.v2(this.m_ui.chipCen.x, this.m_ui.chipCen.y)),
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
        }
    }

    //加注
    ZhajinhuaRaiseResp(param:zhajinhua.IZhajinhuaRaiseResp) {
        var idx = this.playerIdx(param.UserId);
        if(idx >= 0) {
            this._stateCpns[idx].jiazhu();
            this.playBetAni(param.UserId, CommonUtil.fixRealMoney(param.Score));
        }
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

    //比牌
    ZhajinhuaCompareResp(param:zhajinhua.IZhajinhuaCompareResp) {
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
        var mgr = ZjhMgr.getInstance();

        this.playBetAni(param.AttackerId, 100);

        var manP = ZjhMgr.getInstance().getPlayer(param.AttackerId);
        var manK = ZjhMgr.getInstance().getPlayer(param.HitId);
        var pkinfo = {
            phead: manP && manP["FaceID"] || 1004,
            khead: manK && manK["FaceID"] || 2006,
            pname: manP && (manP.MyInfo as gamecomm.IPlayerInfo).Name || param.AttackerId,
            kname: manK && (manK.MyInfo as gamecomm.IPlayerInfo).Name || param.HitId,
            winner: winStr
        }
        UIManager.openPopwnd(ViewDefine.UIpk, false, pkinfo);
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
        var idx = this.playerIdx(param.BankerID);
        if(idx >= 0) {
            var dstPos = cc.v3(this._pnodes[idx].position);
            dstPos.x += 50;
            dstPos.y += 75;
            this.m_ui.zhuang.stopAllActions();
            this.m_ui.zhuang.position = this._zhuangPos;
            this.m_ui.zhuang.runAction(cc.moveTo(0.3, cc.v2(dstPos.x, dstPos.y)));
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
        EventCenter.getInstance().listen(zhajinhua_msgs.ExitGameZjhResp, this.ExitGameZjhResp, this);
        EventCenter.getInstance().listen(gamecomm_msgs.EnterGameResp, this.EnterGameResp, this);
        EventCenter.getInstance().listen(gamecomm_msgs.ExitGameResp, this.ExitGameResp, this);
    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
        }, this);
        CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            GameManager.getInstance().quitGame(true);
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
