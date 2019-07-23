const {ccclass, property} = cc._decorator;

import HttpCore from "../../kernel/net/HttpCore";
import WsSocket from "../../kernel/net/WsSocket";
import UIManager from "../../kernel/manager/UIManager";

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
			//cc.director.loadScene("LobbyScene")
			UIManager.showDialog("prefabs/ConfirmDlg", function(){
				var scriptCpn = this.getComponent("ConfirmDlg");
				scriptCpn.reflesh(function(menuId:number){
					cc.log("select ", menuId);
				}, "我是内容哦", "温馨提示");
			})
		}, this);

	}

	start () {

	}

	// update (dt) {}
}
