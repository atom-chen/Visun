import protocols from "../../proxy/rules/rule_login";
import UIManager from "../../../../../Script/kernel/manager/UIManager";
import Globals from "../../../../../Script/looker/Globals";
import HttpCore from "../../../../../Script/kernel/net/HttpCore";
import WsSocket from "../../../../../Script/kernel/net/WsSocket";
import JsonCodec from "../../../../../Script/kernel/codec/JsonCodec";
import EventCenter from "../../../../../Script/launcher/EventCenter";
import BaseComp from "../../../../../Script/launcher/view/BaseComp";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyUI extends BaseComp {

    @property(cc.Button)
    btn_ddz: cc.Button = null;
    @property(cc.Button)
    btn_brnn: cc.Button = null;
    @property(cc.Button)
    btn_fqzs: cc.Button = null;
    @property(cc.Button)
    btn_zjh: cc.Button = null;
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

	start () 
	{
        this.btn_ddz.node.on("click", function(){
			UIManager.showPanel("subgames/ddz/prefabs/ddz_ui", null);
		}, this);
		
        this.btn_brnn.node.on("click", function(){
			UIManager.showPanel("subgames/brnn/prefabs/brnn_ui", null);
		}, this);
		
        this.btn_fqzs.node.on("click", function(){
			UIManager.showPanel("subgames/fqzs/prefabs/fqzs_ui", null);
		}, this);
		
        this.btn_zjh.node.on("click", function(){
            UIManager.showPanel("subgames/zjh/prefabs/zjh_ui", null);
            
			Globals.g_ws.sendData({name: "hello", pwd: "pwd"});
        }, this);
        

        HttpCore.registProcotols(protocols);
		
		EventCenter.instance().listen("req_hallinfo", this.req_hallinfo, this, false);
        EventCenter.instance().listen("req_userinfo", this.req_userinfo, this, false);
        
        HttpCore.request("req_hallinfo", null, {token:HttpCore.token,mobileType:3,gameType:0}, null);
        HttpCore.request("req_userinfo", null, {token:HttpCore.token}, null);

        Globals.g_ws = Globals.g_ws || new WsSocket();
        //Globals.g_ws.connect("wss://echo.websocket.org", new ProtobufCodec());
        Globals.g_ws.connect("ws://s1vce.lg98.tech:9920/websocket", new JsonCodec());
    }

    private req_hallinfo(data:any) {
        cc.log(data);
    }

    private req_userinfo(data:any) {
        cc.log(data);
    }

    // update (dt) {}
}
