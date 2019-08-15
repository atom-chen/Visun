import SubgameEntry from "../../utils/SubgameEntry";
import GameConfig from "../../utils/GameConfig";
import UIManager from "../../../../../script/kernel/gui/UIManager";
import HttpCore from "../../../../../script/kernel/net/HttpCore";
import CommonUtils from "../../../../../script/kernel/utils/CommonUtils";
import WsCore from "../../../../../script/kernel/net/WsCore";
import http_rules from "../../proxy/rule/http_rules";
import ws_rules from "../../proxy/rule/ws_rules";
import http_responds from "../../proxy/http_responds";
import ws_responds from "../../proxy/ws_responds";
import EventCenter from "../../../../../script/kernel/event/EventCenter";
import BaseComp from "../../../../../script/kernel/gui/BaseComp";
import UserMgr from "../../model/UserMgr";
import { MAIN_URL } from "../../../../../script/looker/Consts";
import HallRequest from "../../proxy/HallRequest";
import {proto} from "../../proxy/pb/proto";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyUI extends BaseComp {

	onLoad () 
	{
        CommonUtils.traverseNodes(this.node, this.m_ui);

        this.initUiEvents();
        this.initNet();
    //    this.tests();

        // var param = { 
        //     deviceID : PlatformUtil.getDeviceId(), 
        //     platformId : 3
        // };
        // HallRequest.req_youke_login(param)

        this.testPB();
    }

    private testPB(){
        var info = {
            name : "sssss",
            pwd : "ddddd"
        }
        let message = proto.TestPB.create(info);
        let messageBuf = proto.TestPB.encode(message).finish();
        cc.log("---------------")
        cc.log(messageBuf);

        var arr = new Uint8Array(messageBuf);
		var obj = proto.TestPB.decode(arr);
		var info1 = proto.TestPB.toObject(obj);
        cc.log(info1);
        


        var param11 = {
            phoneOrUsername : "14645547345",
            psword : "age543SSdfd",
            deviceID : "a58c60b61643277c18b0805ca22abfcc",
            channelId : 4,
            agentCode : 2,
            platformId : 3
        }
        let message1 = proto.LoginRequest.create(param11);
        let messageBuf1 = proto.LoginRequest.encode(message1).finish();
        cc.log("---------------");
        cc.log(messageBuf1);

        var arr1 = new Uint8Array(messageBuf1);
		var obj1 = proto.LoginRequest.decode(arr1);
		var info11 = proto.LoginRequest.toObject(obj1)
        cc.log(info11);
    }

    private testHttp(){
        var param11 = {
            phoneOrUsername : "",
            psword : "",
            deviceID : "a58c60b61643277c18b0805ca22abfcc",
            channelId : 0,
            agentCode : 0,
            platformId : 0
        }
        let message = proto.LoginRequest.create(param11);
        let messageBuf = proto.LoginRequest.encode(message).finish();
        var arr = messageBuf;


        var finalUrl = "http://172.18.11.148:80/user/login";
      //  finalUrl = finalUrl + "?" + arr;
        var xhr = cc.loader.getXMLHttpRequest();

		xhr.onabort = function() {
			cc.log('[onabort]', finalUrl);
		}
		xhr.onerror = function() {
			cc.log('[onerror]', finalUrl);
		}
		xhr.ontimeout = function() {
			cc.log('[ontimeout]', finalUrl);
		}
		xhr.onreadystatechange = function () {
            cc.log("onreadystatechange", xhr.readyState, xhr.status, xhr.responseText);
			if ( xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 207) ) {
				cc.log("[RESP]", finalUrl);
				cc.log(xhr.responseText);
			}
		};

		cc.log("---------", finalUrl);
        xhr.open("POST", finalUrl, true);
     //   xhr.responseType = 'arraybuffer';
        // xhr.setRequestHeader("Content-Type:", "application/octet-stream");
        // xhr.setRequestHeader("Accept:", "application/octet-stream");
        // xhr.setRequestHeader("Content-Type","application/x-protobuf");
		// xhr.setRequestHeader("Accept","application/x-protobuf");
        // if (xhr.overrideMimeType){
		// 	//这个是必须的，否则返回的是字符串，导致protobuf解码错误
		// 	xhr.overrideMimeType("text/plain; charset=x-user-defined");
		// }
		xhr.timeout = 8000;
		
        xhr.send(arr);
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
        HttpCore.registProcotol(http_rules, HallRequest, http_responds);
        WsCore.registProtocol(ws_rules, ws_responds);

        EventCenter.instance().listen("req_userinfo", this.req_userinfo, this);
        EventCenter.instance().listen("req_room_select_info", this.req_room_select_info, this);
        EventCenter.instance().listen("req_enter_br_room", this.req_enter_br_room, this);
    }

    private req_userinfo(data:any) {
        UIManager.toast("登录成功");
        this.m_ui.HeroUI.getComponent("HeroUI").setUserInfo(UserMgr.instance().getHero());
    }

    private req_room_select_info(info){
        cc.log(info);
    }

    private req_enter_br_room(info) {
        cc.log("------------------");
        cc.log(info);
    }

    private tests() {
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

}
