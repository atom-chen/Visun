const {ccclass, property} = cc._decorator;

import HttpCore from "../../kernel/net/HttpCore";
import WsSocket from "../../kernel/net/WsSocket";

@ccclass
export default class WelcomeScene extends cc.Component {

	@property(cc.Button)
	btnEnter: cc.Button = null;

	// LIFE-CYCLE CALLBACKS:

	onLoad () {
	//	HttpCore.callGet("www.baidu.com", null, null, null, function(){});

		var ws = new WsSocket();
		ws.connect("wss://echo.websocket.org");

		this.btnEnter.node.on("click", function(){
			cc.director.loadScene("LobbyScene")
		}, this);

	}

	start () {

	}

	// update (dt) {}
}
