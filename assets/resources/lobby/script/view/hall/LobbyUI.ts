import http_rules from "../../proxy/http_rules";
import SubgameEntry from "../../utils/SubgameEntry";
import GameConfig from "../../utils/GameConfig";
import UIManager from "../../../../../script/kernel/gui/UIManager";
import HttpCore from "../../../../../script/kernel/net/HttpCore";
import EventCenter from "../../../../../script/launcher/EventCenter";
import BaseComp from "../../../../../script/launcher/view/BaseComp";
import PlatformUtil from "../../../../../script/launcher/PlatformUtil";
import CommonUtils from "../../../../../script/kernel/utils/CommonUtils";
import User from "../../model/User";
import WsHandler from "../../../../../script/kernel/net/WsHandler";
import ws_rules from "../../proxy/ws_rules";
import ws_responds from "../../proxy/ws_responds";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyUI extends BaseComp {
    @property(cc.Button)
    btn_user: cc.Button = null;
    @property(cc.Button)
    btn_ddz: cc.Button = null;
    @property(cc.Button)
    btn_brnn: cc.Button = null;
    @property(cc.Button)
    btn_fqzs: cc.Button = null;
    @property(cc.Button)
    btn_zjh: cc.Button = null;
    @property(cc.Layout)
    draglayyer: cc.Layout = null;
    @property(cc.Node)
    circlenode: cc.Node = null;

	onLoad () 
	{
        this.btn_user.node.on("click", function(){
            UIManager.openPopwnd("lobby/prefabs/LoginUI", null);
        }, this);

        var gameBtnList = [
            { id:GameConfig["40000040"].id, btn:"btn_ddz" },
            { id:GameConfig["90000040"].id, btn:"btn_brnn" },
            { id:GameConfig["80000044"].id, btn:"btn_fqzs" },
            { id:GameConfig["40070012"].id, btn:"btn_zjh" },
        ]
        
        var dtAngle = 360/12;
        var startAngle = 180-dtAngle/2;
        var R = 500;
        for(var i=0; i<gameBtnList.length; i++) {
            var cfg = gameBtnList[i];
            var bton = this[cfg.btn];
            bton.gameId = cfg.id;
            bton.node.on("click", function(){
                SubgameEntry.instance().enterGame(this.gameId);
            }, bton);
            var curAngle = startAngle - i * dtAngle;
            // bton.node.x = R * Math.cos(curAngle * Math.PI / 180);
            // bton.node.y = R * Math.sin(curAngle * Math.PI / 180);
        }
        
        this.initNet();

        this.draglayyer.node.on(cc.Node.EventType.TOUCH_MOVE, function(event){
            var dx = event.touch.getDelta().x;
            this.circlenode.angle -= dx*0.05;
        }, this);
    }

    private initNet() {
        HttpCore.registProcotol(http_rules);
        WsHandler.registProtocol(ws_rules, ws_responds);

        EventCenter.instance().listen("req_userinfo", this.req_userinfo, this);
        EventCenter.instance().listen("req_room_select_info", this.req_room_select_info, this);
        EventCenter.instance().listen("req_enter_room", this.req_enter_room, this);

        var param = { 
            deviceID : PlatformUtil.getDeviceId(), 
            platformId : 3
        };
        HttpCore.request("req_youke_login", null, param);
    }

    private req_userinfo(data:any) {
        UIManager.toast("登录成功");
        var allNodes = {};
        CommonUtils.traverseNodes(this.node, allNodes);
        allNodes["HeroUI"].getComponent("HeroUI").setUserInfo(User.getHero());
    }

    private req_room_select_info(info){
        cc.log(info);
    }

    private req_enter_room(info) {
        cc.log("------------------");
        cc.log(info);
    }

}
