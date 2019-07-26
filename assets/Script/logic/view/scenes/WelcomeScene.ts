const {ccclass, property} = cc._decorator;

import UIManager from "../../../kernel/manager/UIManager";
import HttpCore from "../../../kernel/net/HttpCore";
import EventCenter from "../../../kernel/manager/EventCenter";
import LoginMgr from "../../model/LoginMgr";
import HttpRequests from "../../proxy/HttpRequests";

@ccclass
export default class WelcomeScene extends cc.Component {

	@property(cc.Button)
	btnEnter: cc.Button = null;

	// LIFE-CYCLE CALLBACKS:

	onLoad () {
		EventCenter.instance().listen("req_hallinfo", function(data:any){
			cc.director.loadScene("LobbyScene");
			UIManager.showPanel("lobby/prefabs/LobbyUI", null);
		}, this, false);

		this.btnEnter.node.on("click", function(){
			if(LoginMgr.instance.isLoginSucc()){
				cc.director.loadScene("LobbyScene")
				UIManager.showPanel("lobby/prefabs/LobbyUI", null);
			}
			else {
				UIManager.showDialog("lobby/prefabs/ConfirmDlg", function(){
					var scriptCpn = this.getComponent("ConfirmDlg");
					scriptCpn.reflesh(function(menuId:number){
						if(menuId===0) return;
						HttpRequests.req_hallinfo(null, {token:"",mobileType:2}, null);
					}, "請先登錄", "温馨提示");
				})
			}
		}, this);

		HttpRequests.req_hallinfo(null, {token:"",mobileType:2}, null);
	}

	onDestroy() {
		EventCenter.instance().removeByTarget(this);
	}
	
}
