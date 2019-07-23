const {ccclass, property} = cc._decorator;

import HttpCore from "../../kernel/net/HttpCore";
import WsSocket from "../../kernel/net/WsSocket";

@ccclass
export default class WelcomeScene extends cc.Component {

	@property(cc.Label)
	label: cc.Label = null;

	@property
	text: string = 'hello';

	// LIFE-CYCLE CALLBACKS:

	onLoad () {
	//	HttpCore.callGet("www.baidu.com", null, null, null, function(){});

		var ws = new WsSocket();
		ws.connect("wss://echo.websocket.org");

	}

	start () {

	}

	// update (dt) {}
}
