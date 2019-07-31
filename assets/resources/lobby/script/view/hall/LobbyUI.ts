import UIManager from "../../../../../script/kernel/manager/UIManager";
import HttpCore from "../../../../../script/kernel/net/HttpCore";
import WsSocket from "../../../../../script/kernel/net/WsSocket";
import JsonCodec from "../../../../../script/kernel/codec/JsonCodec";
import EventCenter from "../../../../../script/launcher/EventCenter";
import BaseComp from "../../../../../script/launcher/view/BaseComp";
import rule_login from "../../proxy/rules/rule_login";
import SubgameEntry from "../../utils/SubgameEntry";
import GameConfig from "../../utils/GameConfig";

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
            { id:GameConfig.ddz.id, btn:"btn_ddz" },
            { id:GameConfig.brnn.id, btn:"btn_brnn" },
            { id:GameConfig.fqzs.id, btn:"btn_fqzs" },
            { id:GameConfig.zjh.id, btn:"btn_zjh" },
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
        HttpCore.registProcotols(rule_login);
		
		EventCenter.instance().listen("req_hallinfo", this.req_hallinfo, this);
        EventCenter.instance().listen("req_userinfo", this.req_userinfo, this);
        
        HttpCore.request("req_hallinfo", null, {token:HttpCore.token,mobileType:3,gameType:0}, null);
        
        //WsSocket.instance().connect("wss://echo.websocket.org", new ProtobufCodec());
        WsSocket.instance().connect("ws://s1vce.lg98.tech:9920/websocket", new JsonCodec());
    }

    private req_hallinfo(data:any) {
        HttpCore.request("req_userinfo", null, {token:HttpCore.token}, null);
    }

    private req_userinfo(data:any) {
        cc.log(data);
    }

}
