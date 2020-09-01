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
import { ZjhFightState } from "../model/ZjhDefine";
import CpnHandcard2 from "../../../../appqp/script/comps/CpnHandcard2";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../../common/script/definer/ChannelDefine";
import ZjhHandlers from "../model/ZjhHandlers";
import { gamecomm_msgs, gamecomm_request } from "../../../../../common/script/proto/net_gamecomm";
import { gamecomm } from "../../../../../../declares/gamecomm";
import Preloader from "../../../../../kernel/utils/Preloader";
import ZjhServer from "../model/ZjhServer";


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

        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).getDispatcher().addObserver(ZjhHandlers);

        this.initUIEvent();
        this.initNetEvent();

        this.ZhajinhuaSceneResp(ZjhMgr.getInstance().getEnterData());
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);

        //for test
    //    ZjhServer.getInstance().run();
    }

    //玩家的UI位置
    private playerIndex(player:zhajinhua.IZhajinhuaPlayer) : number {
		if(isNil(player)){ return -1; }
        var hero = ZjhMgr.getInstance().getPlayer(LoginUser.getInstance().UserId);
        if(isNil(player.SeatId)) { return -1; }
        if(isNil(hero)) { return player.SeatId; }
		if(hero.SeatId===0) { return player.SeatId; }
		return (player.SeatId-hero.SeatId+MAX_SOLDIER) % MAX_SOLDIER;
    }

    private playerIdx(uid:number) : number {
        var p = ZjhMgr.getInstance().getPlayer(uid);
        return this.playerIndex(p);
    }

    private isLoseFightState(v) : boolean {
        return v == ZjhFightState.qipai || v == ZjhFightState.bipaishu
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

        var imgpath = this.getImgPath(v);
        var sprChip = new cc.Node();
        var comp = sprChip.addComponent(cc.Sprite);
        Preloader.setNodeSprite(comp, imgpath, this);
        this.m_ui.chipLayer.addChild(sprChip);
        sprChip.scale = 0.2;
        CommonUtil.lineTo1(sprChip, this._pnodes[idx], this.m_ui.chipCen, 0.3, 0, {rx:50,ry:40,rr:0});
    }

    private resetFighters() {
        for(var n=0; n<MAX_SOLDIER; n++) {
            this._pnodes[n].active = false;
        }
        var mans = ZjhMgr.getInstance().getPlayerList();
        for(var uid in mans) {
            var idx = this.playerIndex(mans[uid]);
            if(idx >= 0) {
                this._pnodes[n].active = true;
                this._playerCpns[idx].setName(mans[uid].Name);
                this._playerCpns[idx].setMoneyStr(CommonUtil.formRealMoney(mans[uid].Gold));
                this._pnodes[idx].getChildByName("ust_kanpai").active = mans[uid].IsSee == true;
            }
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

        if(param.Banker) {
            this.ZhajinhuaHostResp({BankerID:param.Banker});
        }

        for(var n=0; n<MAX_SOLDIER; n++) {
            this._pnodes[n].active = false;
        }
        if(param.Fighters) {
            for(var i in param.Fighters) {
                var cur = param.Fighters[i];
                var idx = this.playerIndex(cur);
                this._pnodes[idx].active = true;
                this._playerCpns[idx].setName(cur.Name);
                this._playerCpns[idx].setMoneyStr(CommonUtil.formRealMoney(cur.Gold));
                this._pnodes[idx].getChildByName("ust_kanpai").active = cur.IsSee == true;
                CommonUtil.grayNode(this._pnodes[idx], this.isLoseFightState(cur.SeatState));
                this._playerCpns[idx].setLabGray(this.isLoseFightState(cur.SeatState));
                if(cur.SeatState == ZjhFightState.genzhu) {
                    this._stateCpns[idx].genzhu();
                }
                else if(cur.SeatState == ZjhFightState.jiazhu) {
                    this._stateCpns[idx].jiazhu();
                }
                else if(cur.SeatState == ZjhFightState.qipai) {
                    this._stateCpns[idx].qipai();
                }
                else if(cur.SeatState == ZjhFightState.bipaishu) {
                    this._stateCpns[idx].bipaishu();
                }
                else {
                    this._stateCpns[idx].idle();
                }
            }
        }
        var hero = ZjhMgr.getInstance().getPlayer(LoginUser.getInstance().UserId);
        if(hero) {
            this._handors[0].resetCards(hero.Cards && hero.Cards.Cards || null);
        }
    }

    //准备阶段
    ZhajinhuaStateFreeResp(param:zhajinhua.IZhajinhuaStateFreeResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setZhunbei();
        this.m_ui.opLayer.active = false;

        this.m_ui.btn_ready.active = true;

        this.m_ui.zhuang.stopAllActions();
        this.m_ui.zhuang.position = this._zhuangPos;

        for(var i in this._stateCpns){
            this._stateCpns[i].idle();
            this._cdCpns[i].node.active = false;
            this._handors[i].resetCards(null);
            this._pnodes[i].getChildByName("ust_kanpai").active = false;
            CommonUtil.grayNode(this._pnodes[i], false);
            this._playerCpns[i].setLabGray(false);
        }

        this.m_ui.chipLayer.removeAllChildren();
    }

    //开始游戏: 播发牌动画
    ZhajinhuaStateStartResp(param:zhajinhua.IZhajinhuaStateStartResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setFapai();
        this.m_ui.opLayer.active = false;

        this.m_ui.btn_ready.active = false;

        this.m_ui.chipLayer.removeAllChildren();

        UIManager.showSpineAsync("appqp/spines/kaishiyouxi/fan", 0, "a", 1, this.node, {zIndex:10, x:0, y:80, scale:0.36}, {
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
                this.playBetAni(mans[m].UserId, 5);
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
        this.m_ui.btn_ready.active = false;

        var idx = this.playerIdx(param.UserID);
        for(var i=0; i<MAX_SOLDIER; i++) {
            this._cdCpns[i].node.active = idx == i;
            this._cdCpns[i].setRemainCD(15, 15);
        }
    }

    //战斗阶段-比牌
    ZhajinhuaStateCompareResp(param:zhajinhua.IZhajinhuaStateCompareResp) {
        this.m_ui.btn_ready.active = false;
        if(param.Info) {
            this.ZhajinhuaCompareResp(param.Info);
        }
    }

    //结算阶段
    ZhajinhuaStateOverResp(param:zhajinhua.IZhajinhuaStateOverResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setPaijiang();
        this.m_ui.opLayer.active = false;
        this.m_ui.btn_ready.active = false;
    }

    //结算数据
    ZhajinhuaOverResp(param:zhajinhua.IZhajinhuaOverResp) {
        UIManager.toast("赢家ID：" + param.WinnerId);
        if(param.Infos) {
            for(var i in param.Infos) {
                this.GoldChangeInfo(param.Infos[i]);
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
            this._pnodes[idx].getChildByName("ust_kanpai").active = true;
        }
    }

    //比牌
    ZhajinhuaCompareResp(param:zhajinhua.IZhajinhuaCompareResp) {
        var losser = param.AttackerId;
        if(losser == param.WinnerId) {
            losser = param.HitId;
        }
        var idx = this.playerIdx(losser);
        if(idx >= 0) {
            this._stateCpns[idx].bipaishu();
            CommonUtil.grayNode(this._pnodes[idx], true);
            this._playerCpns[idx].setLabGray(true);
        }
        var mgr = ZjhMgr.getInstance();

        this.playBetAni(param.AttackerId, 100);

        var tipStr = cc.js.formatStr("%s和%s比牌，%s赢", mgr.getPlayer(param.AttackerId).Name, mgr.getPlayer(param.HitId).Name, mgr.getPlayer(param.WinnerId).Name)
        UIManager.toast(tipStr)
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
            man.Gold = param.Gold;
        }
        var idx = this.playerIdx(param.UserID);
        if(idx >= 0) {
            this._playerCpns[idx].setMoneyStr(CommonUtil.formRealMoney(param.Gold));
        }
    }

    ZhajinhuaReadyResp(param:zhajinhua.IZhajinhuaReadyResp) {
        if(param.UserId == LoginUser.getInstance().UserId) {
            this.m_ui.btn_ready.active = false;
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
        EventCenter.getInstance().listen(gamecomm_msgs.PlayerListInfo, this.resetFighters, this);
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
            zhajinhua_request.ZhajinhuaCompareReq({HitId:0});
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_ready, function(){
            zhajinhua_request.ZhajinhuaReadyReq({IsReady:true});
        }, this);
    }
    
}
