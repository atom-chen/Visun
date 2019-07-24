import UIManager from "../../../kernel/manager/UIManager";
import WsSocket from "../../../kernel/net/WsSocket";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

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

    start () {
        this.btn_ddz.node.on("click", function(){
			UIManager.showDialog("prefabs/ConfirmDlg", function(){
				var scriptCpn = this.getComponent("ConfirmDlg");
				scriptCpn.reflesh(function(menuId:number){
					if(menuId===0) return;
					cc.director.loadScene("WelcomeScene")
				}, "我是内容哦", "温馨提示");
			})
        }, this);
        this.btn_brnn.node.on("click", function(){
			UIManager.showDialog("prefabs/ConfirmDlg", function(){
				var scriptCpn = this.getComponent("ConfirmDlg");
				scriptCpn.reflesh(function(menuId:number){
					if(menuId===0) return;
					cc.director.loadScene("WelcomeScene")
				}, "我是内容哦", "温馨提示");
			})
        }, this);
        this.btn_fqzs.node.on("click", function(){
			UIManager.showDialog("prefabs/ConfirmDlg", function(){
				var scriptCpn = this.getComponent("ConfirmDlg");
				scriptCpn.reflesh(function(menuId:number){
					if(menuId===0) return;
					cc.director.loadScene("WelcomeScene")
				}, "我是内容哦", "温馨提示");
			})
        }, this);
        this.btn_zjh.node.on("click", function(){
			UIManager.showDialog("prefabs/ConfirmDlg", function(){
				var scriptCpn = this.getComponent("ConfirmDlg");
				scriptCpn.reflesh(function(menuId:number){
					if(menuId===0) return;
					cc.director.loadScene("WelcomeScene")
				}, "我是内容哦", "温馨提示");
			})
		}, this);
    }

    // update (dt) {}
}
