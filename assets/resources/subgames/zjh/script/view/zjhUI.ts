import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import GameManager from "../../../../../common/script/model/GameManager";
import UIManager from "../../../../../kernel/view/UIManager";
import CpnHandcard from "../../../../appqp/script/comps/CpnHandcard";
import CpnUserState from "../../../../appqp/script/comps/CpnUserState";
import CpnGameState from "../../../../appqp/script/comps/CpnGameState";
import { zhajinhua_msgs, zhajinhua_request } from "../../../../../common/script/proto/net_zhajinhua";
import { zhajinhua } from "../../../../../../declares/zhajinhua";
import ZjhMgr from "../model/ZjhMgr";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import LoginUser from "../../../../../common/script/model/LoginUser";
import CpnPlayer1 from "../../../../appqp/script/comps/CpnPlayer1";
import CpnCircleCD from "../../../../appqp/script/comps/CpnCircleCD";
import { gamecomm } from "../../../../../../declares/gamecomm";


const MAX_SOLDIER = 5;


const {ccclass, property} = cc._decorator;

@ccclass
export default class zjhUI extends BaseComponent {
    private _pnodes:Array<cc.Node> = [];
    private _playerCpns:Array<CpnPlayer1> = [];
    private _handors:Array<CpnHandcard> = [];
    private _stateCpns:Array<CpnUserState> = [];
    private _cdCpns:Array<CpnCircleCD> = [];

    private _tmrState = 0;
    

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        for(var i = 0; i <= 4; i++) {
            var nd = this.m_ui["p"+i];
            this._pnodes.push(nd);
            this._playerCpns.push(nd.getChildByName("CpnPlayer").getComponent(CpnPlayer1));
            this._handors.push(nd.getChildByName("CpnHandcard").getComponent(CpnHandcard));
            this._stateCpns.push(nd.getChildByName("stateTip").getComponent(CpnUserState));
            this._cdCpns.push(nd.getChildByName("CpnCircleCD").getComponent(CpnCircleCD));
        }

        this.initUIEvent();
        this.initNetEvent();

        this.ZhajinhuaStateFreeResp(null);
    }

    //玩家的UI位置
    private playerIndex(player:zhajinhua.IZhajinhuaPlayer) : number {
		if(isNil(player)){ return -1; }
		var hero = ZjhMgr.getInstance().getPlayer(LoginUser.getInstance().UserId);
		if(hero.SeatId===1) { return player.SeatId-1; }
		return (player.SeatId-hero.SeatId+MAX_SOLDIER) % MAX_SOLDIER;
    }

    private playerIdx(uid:number) : number {
        var p = ZjhMgr.getInstance().getPlayer(uid);
        return this.playerIndex(p);
    }

    //场景信息
    ZhajinhuaSceneResp(param:zhajinhua.ZhajinhuaSceneResp) {
        for(var n=0; n<MAX_SOLDIER; n++) {
            this._pnodes[n].active = false;
        }
        if(param.Fighters) {
            for(var i in param.Fighters) {
                var cur = param.Fighters[i];
                var idx = this.playerIndex(cur);
                this._pnodes[idx].active = true;
                this._playerCpns[idx].setName(cur.UserId.tostring());
                this._playerCpns[idx].setMoney(0);
                this._pnodes[idx].getChildByName("ust_kanpai").active = param.Fighters[idx].IsSee == true;
                if(cur.FightState == 1) {
                    this._stateCpns[idx].genzhu();
                }
                else if(cur.FightState == 2) {
                    this._stateCpns[idx].jiazhu();
                }
                else if(cur.FightState == 3) {
                    this._stateCpns[idx].qipai();
                }
                else if(cur.FightState == 4) {
                    this._stateCpns[idx].bipaishu();
                }
                else {
                    this._stateCpns[idx].idle();
                }
            }
        }
        var hero = ZjhMgr.getInstance().getPlayer(LoginUser.getInstance().UserID);
        if(hero) {
            this._handors[0].resetCards(hero.Cards && hero.Cards.Cards || null, false);
        }
    }

    //准备阶段
    ZhajinhuaStateFreeResp(param:any) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setZhunbei();
        this.m_ui.gameLayer.active = false;
        this.m_ui.opLayer.active = false;

        for(var i in this._stateCpns){
            this._stateCpns[i].idle();
        }
    }

    //开始游戏: 播发牌动画
    ZhajinhuaStateStartResp(param:any) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setFapai();
        this.m_ui.gameLayer.active = true;
        this.m_ui.opLayer.active = true;

        UIManager.showSpineAsync("common/spines/kaishiyouxi/fan", 0, "a", 1, this.node, {zIndex:10, x:0, y:0, scale:0.5}, {
            on_complete: (sk, trackEntry)=>{
                CommonUtil.safeDelete(sk);
            }
        });
    }

    //战斗阶段
    ZhajinhuaStatePlayingResp(param:zhajinhua.ZhajinhuaStatePlayingResp) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setXiazhu();
        this.m_ui.gameLayer.active = true;
        this.m_ui.opLayer.active = true;

        var idx = this.playerIdx(param.UserID);
        for(var i=0; i<MAX_SOLDIER; i++) {
            this._cdCpns[i].node.active = idx == i;
            this._cdCpns[i].setRemainCD(15, 15);
        }
    }

    //结算阶段
    ZhajinhuaStateOverResp(param:any) {
        this.m_ui.CpnGameState2d.getComponent(CpnGameState).setPaijiang();
        this.m_ui.gameLayer.active = true;
        this.m_ui.opLayer.active = false;
    }

    //跟注
    ZhajinhuaFollowResp(param:zhajinhua.ZhajinhuaFollowResp) {
        cc.log("跟注", param.UserId, CommonUtil.fixRealMoney(param.Money));
        var idx = this.playerIdx(param.UserId);
        if(idx >= 0) {
            this._stateCpns[idx].genzhu();
        }
    }

    //加注
    ZhajinhuaRaiseResp(param:zhajinhua.ZhajinhuaRaiseResp) {
        cc.log("加注", param.UserId, CommonUtil.fixRealMoney(param.Money));
        var idx = this.playerIdx(param.UserId);
        if(idx >= 0) {
            this._stateCpns[idx].jiazhu();
        }
    }

    //看牌
    ZhajinhuaLookResp(param:zhajinhua.ZhajinhuaLookResp) {
        cc.log("看牌", param.UserId, param.Cards);
        ZjhMgr.getInstance().getPlayer(param.UserId).IsSee = true;

        var idx = this.playerIdx(param.UserId);
        if(idx >= 0) {
            this._pnodes[idx].getChildByName("ust_kanpai").active = true;
        }
    }

    //比牌
    ZhajinhuaCompareResp(param:zhajinhua.ZhajinhuaCompareResp) {
        cc.log("比牌", param);
        var losser = param.AttackerId;
        if(losser == param.WinnerId) {
            losser = param.HitId;
        }
        var idx = this.playerIdx(losser);
        if(idx >= 0) {
            this._stateCpns[idx].bipaishu();
        }
    }

    //弃牌
    ZhajinhuaGiveupResp(param:zhajinhua.ZhajinhuaGiveupResp) {
        cc.log("弃牌", param.UserId);
        var idx = this.playerIdx(param.UserId);
        if(idx >= 0) {
            this._stateCpns[idx].qipai();
        }
    }

    //定庄
    ZhajinhuaHostResp(param:zhajinhua.ZhajinhuaHostResp) {
        var idx = this.playerIdx(param.CurHost);
        if(idx >= 0) {
            this.m_ui.zhuang.position = this._pnodes[idx].position;
        }
    }

    initNetEvent() {
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaSceneResp, this.ZhajinhuaSceneResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaStateFreeResp, this.ZhajinhuaStateFreeResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaStateStartResp, this.ZhajinhuaStateStartResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaStatePlayingResp, this.ZhajinhuaStatePlayingResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaStateOverResp, this.ZhajinhuaStateOverResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaFollowResp, this.ZhajinhuaFollowResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaRaiseResp, this.ZhajinhuaRaiseResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaLookResp, this.ZhajinhuaLookResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaCompareResp, this.ZhajinhuaCompareResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaGiveupResp, this.ZhajinhuaGiveupResp, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.ZhajinhuaHostResp, this.ZhajinhuaHostResp, this);
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
            zhajinhua_request.ZhajinhuaRaiseReq({Money:20});
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_compare, function(){ 
            zhajinhua_request.ZhajinhuaCompareReq({HitId:0});
		}, this);
    }
    
}
