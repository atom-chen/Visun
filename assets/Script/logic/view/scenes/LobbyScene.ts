import UIManager from "../../../kernel/manager/UIManager";
import WsSocket from "../../../kernel/net/WsSocket";
import Globals from "../../../looker/Globals";
import * as Consts from "../../../looker/Consts";

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

	start () 
	{
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
			cc.loader.loadRes("subgames/brnn/prefabs/brnn_ui", cc.Prefab, 
				function(completeCnt:number, totalCnt:number, item:any){
					cc.log("进度: ", completeCnt, totalCnt);
				}, 
				function(errorMessage, loadedResource){
					if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
					if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; } 
	
					var cvs = cc.find("Canvas");
					if( !cvs ) { cc.log("没有Canvas"); return; }
	
					var obj = cc.instantiate(loadedResource);
					
					if(obj) {
						cvs.addChild(obj, Consts.LAYER.Panel);
					}
				});
		}, this);
		
        this.btn_fqzs.node.on("click", function(){
			cc.loader.loadRes("subgames/fqzs/prefabs/fqzs_ui", cc.Prefab, 
				function(completeCnt:number, totalCnt:number, item:any){
					cc.log("进度: ", completeCnt, totalCnt);
				}, 
				function(errorMessage, loadedResource){
					if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
					if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; } 
	
					var cvs = cc.find("Canvas");
					if( !cvs ) { cc.log("没有Canvas"); return; }
	
					var obj = cc.instantiate(loadedResource);
					
					if(obj) {
						cvs.addChild(obj, Consts.LAYER.Panel);
					}
				});
		}, this);
		
        this.btn_zjh.node.on("click", function(){
			Globals.g_ws.sendData({name: "hello", pwd: "pwd"});
		}, this);

		var ws = new WsSocket();
		ws.connect("wss://echo.websocket.org");
		Globals.g_ws = ws;
    }

    // update (dt) {}
}
