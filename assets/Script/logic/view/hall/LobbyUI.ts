import UIManager from "../../../kernel/manager/UIManager";
import WsSocket from "../../../kernel/net/WsSocket";
import Globals from "../../../looker/Globals";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyScene extends cc.Component {

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
			UIManager.showPanel("subgames/ddz/prefabs/ddz_ui", function(){})
		}, this);
		
        this.btn_brnn.node.on("click", function(){
			UIManager.showPanel("subgames/brnn/prefabs/brnn_ui", function(){})
		}, this);
		
        this.btn_fqzs.node.on("click", function(){
			UIManager.showPanel("subgames/fqzs/prefabs/fqzs_ui", function(){})
		}, this);
		
        this.btn_zjh.node.on("click", function(){
            UIManager.showPanel("subgames/zjh/prefabs/zjh_ui", function(){})
			Globals.g_ws.sendData({name: "hello", pwd: "pwd"});
		}, this);

		var ws = new WsSocket();
		ws.connect("wss://echo.websocket.org");
		Globals.g_ws = ws;
    }

    // update (dt) {}
}
