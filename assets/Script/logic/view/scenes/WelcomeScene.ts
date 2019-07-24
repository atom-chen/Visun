const {ccclass, property} = cc._decorator;

import UIManager from "../../../kernel/manager/UIManager";

@ccclass
export default class WelcomeScene extends cc.Component {

	@property(cc.Button)
	btnEnter: cc.Button = null;

	// LIFE-CYCLE CALLBACKS:

	onLoad () {
		this.btnEnter.node.on("click", function(){
			UIManager.showDialog("prefabs/ConfirmDlg", function(){
				var scriptCpn = this.getComponent("ConfirmDlg");
				scriptCpn.reflesh(function(menuId:number){
					if(menuId===0) return;
					cc.director.loadScene("LobbyScene")
				}, "我是内容我是内容我是内容我是内容我是", "温馨提示");
			})
		}, this);
	}
	
}
