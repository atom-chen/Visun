import SubgameEntry from "../../utils/SubgameEntry";
import GameConfig from "../../utils/GameConfig";
import UIManager from "../../../../../script/kernel/view/UIManager";
import HttpCore from "../../../../../script/kernel/net/HttpCore";
import CommonUtils from "../../../../../script/kernel/utils/CommonUtils";
import EventCenter from "../../../../../script/kernel/event/EventCenter";
import BaseComp from "../../../../../script/kernel/view/BaseComp";
import { MAIN_URL } from "../../../../../script/looker/Consts";
import http_rules from "../../proxy/rule/http_rules";
import HallRequest from "../../proxy/HallRequest";
import HallRespond from "../../proxy/HallRespond";
import {GameProto} from "../../proxy/pb/GameProto";
import {SdkProto} from "../../proxy/pb/SdkProto";
import Logic from "../../../../common/script/model/Logic";
import TimerManager from "../../../../../script/kernel/timer/TimerManager";
import PlatformUtil from "../../../../../script/kernel/utils/PlatformUtil";


const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyUI extends BaseComp {

	onLoad () 
	{
        CommonUtils.traverseNodes(this.node, this.m_ui);

        this.initUiEvents();
        this.initNet();
    //    this.testSpine();

        var param = { 
            deviceID : PlatformUtil.getDeviceId(), 
            platformId : 3
        };
        HallRequest.req_youke_login(param);
    }

    private initUiEvents(){
        CommonUtils.addClickEvent(this.m_ui.btn_safebox, function(){ 
            UIManager.openPopwnd("lobby/prefabs/SafeboxUI", null);
        }, this);

        CommonUtils.addClickEvent(this.m_ui.btn_email, function(){ 
            UIManager.openPopwnd("lobby/prefabs/EmailUI", null);
        }, this);

        CommonUtils.addClickEvent(this.m_ui.btn_shop, function(){ 
            UIManager.openPopwnd("lobby/prefabs/ShopUI", null);
        }, this);

        CommonUtils.addClickEvent(this.m_ui.btn_kefu, function(){ 
            UIManager.openPopwnd("lobby/prefabs/KefuUI", null);
        }, this);

        CommonUtils.addClickEvent(this.m_ui.btn_withdraw, function(){ 
            UIManager.openPopwnd("lobby/prefabs/WithdrawUI", null);
            TimerManager.instance().test();
        }, this);

        CommonUtils.addClickEvent(this.m_ui.btn_spread, function(){ 
            UIManager.openPopwnd("lobby/prefabs/SpreadUI", null);
        }, this);

        CommonUtils.addClickEvent(this.m_ui.HeroUI, function(){ 
            UIManager.openPopwnd("lobby/prefabs/PersonUI", null);
        }, this);

        CommonUtils.addClickEvent(this.m_ui.btn_user, function(){ 
            UIManager.openPopwnd("lobby/prefabs/LoginUI", null);
            this.testHttp();
        }, this);

        // 
        var gameBtnList = [
            { id:GameConfig["40000040"].id, btn:"btn_ddz" },
            { id:GameConfig["90000040"].id, btn:"btn_brnn" },
            { id:GameConfig["80000044"].id, btn:"btn_fqzs" },
            { id:GameConfig["40070012"].id, btn:"btn_zjh" },
            { id:GameConfig["80000041"].id, btn:"btn_buyu" }
        ];
        
        for(var i=0; i<gameBtnList.length; i++) {
            var cfg = gameBtnList[i];
            var bton = this.m_ui[cfg.btn];
            bton.gameId = cfg.id;
            CommonUtils.addClickEvent(bton, function(){ 
                SubgameEntry.instance().enterGame(this.gameId);
            }, bton);
        }
    }

    private initNet() {
        HttpCore.setMainUrl(MAIN_URL);
        HttpCore.registProcotol(http_rules, HallRequest, HallRespond);
        HttpCore.setCacheAble("req_youke_login", false);

        EventCenter.instance().listen("req_userinfo", this.req_userinfo, this);
        EventCenter.instance().listen("req_room_select_info", this.req_room_select_info, this);
        EventCenter.instance().listen("req_enter_br_room", this.req_enter_br_room, this);
    }

    private req_userinfo(data:any) {
        UIManager.toast("登录成功");
        this.m_ui.HeroUI.getComponent("HeroUI").setUserInfo(Logic.instance().g_UserMgr.getHero());
    }

    private req_room_select_info(info){
        cc.log(info);
    }

    private req_enter_br_room(info) {
        cc.log("------------------");
        cc.log(info);
    }

    private testSpine() {
        var self = this;

        //加载spine
        cc.loader.loadRes("common/spines/raptor.json", sp.SkeletonData, 
		function(err, resc){
			if( err ) { cc.log( '载入spine失败:' + err ); return; }
            //var obj = cc.instantiate(resc);
            var obj = new cc.Node();
            var sk = obj.addComponent(sp.Skeleton);
            sk.skeletonData = resc;
            self.node.addChild(obj, 10);
            obj.scale = 0.2;
            sk.setAnimation(1, "Jump", true);
        });
    }

    private testHttp() {
        //obj 转 二进制流
        var param11 = {
            phoneOrUsername : "",
            psword : "",
            deviceID : "a58c60b61643277c18b0805ca22abfcc",
            channelId : 0,
            agentCode : 0,
            platformId : 0
        }
        var req = SdkProto.Request.create();
        req.cmd = SdkProto.Request.CMD.Login;
        req.loginRequest = SdkProto.LoginRequest.create(param11);
        var buff = SdkProto.Request.encode(req).finish();

        //二进制流 转 obj
		var obj1 = SdkProto.Request.decode(buff);
		var info11 = SdkProto.Request.toObject(obj1);
        cc.log(info11);
    }

}
