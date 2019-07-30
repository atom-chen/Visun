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

	start () 
	{
        this.btn_user.node.on("click", function(){
			UIManager.showPopwnd("lobby/prefabs/LoginUI", null);
        }, this);
        
        this.btn_ddz.node.on("click", function(){
			SubgameEntry.instance().enterGame(GameConfig.ddz.id);
		}, this);
		
        this.btn_brnn.node.on("click", function(){
			SubgameEntry.instance().enterGame(GameConfig.brnn.id);
		}, this);
		
        this.btn_fqzs.node.on("click", function(){
			SubgameEntry.instance().enterGame(GameConfig.fqzs.id);
		}, this);
		
        this.btn_zjh.node.on("click", function(){
            SubgameEntry.instance().enterGame(GameConfig.zjh.id);
			WsSocket.instance().sendData({name: "hello", pwd: "pwd"});
        }, this);
        
        this.initNet();
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
