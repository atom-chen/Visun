import UIManager from "../../../kernel/manager/UIManager";
import WsSocket from "../../../kernel/net/WsSocket";
import Globals from "../../../looker/Globals";
import HttpCore from "../../../kernel/net/HttpCore";
import LoginMgr from "../../model/LoginMgr";

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

		var ws = new WsSocket();
		ws.connect("wss://echo.websocket.org");
        Globals.g_ws = ws;
        
        HttpCore.request("req_hallinfo", null, {token:HttpCore.token,mobileType:3,gameType:0}, null);
        HttpCore.request("req_userinfo", null, {token:HttpCore.token}, null);
    }

    // update (dt) {}
}
