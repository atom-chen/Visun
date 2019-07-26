import UIManager from "../../../kernel/manager/UIManager";
import WsSocket from "../../../kernel/net/WsSocket";
import Globals from "../../../looker/Globals";
import HttpCore from "../../../kernel/net/HttpCore";
import LoginMgr from "../../model/LoginMgr";
import JsonCodec from "../../../kernel/codec/JsonCodec";
import ProtobufCodec from "../../../kernel/codec/ProtobufCodec";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyUI extends cc.Component {

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

		Globals.g_ws = Globals.g_ws || new WsSocket();
        //Globals.g_ws.connect("wss://echo.websocket.org", new ProtobufCodec());
        Globals.g_ws.connect("ws://s1vce.lg98.tech:9920/websocket", new JsonCodec());
        
        HttpCore.request("req_hallinfo", null, {token:HttpCore.token,mobileType:3,gameType:0}, null);
        HttpCore.request("req_userinfo", null, {token:HttpCore.token}, null);
    }

    // update (dt) {}
}
