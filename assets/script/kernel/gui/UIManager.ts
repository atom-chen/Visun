//---------------------------------
// UI管理器
//---------------------------------
import * as Consts from "../../looker/Consts";
import CommonUtils from "../utils/CommonUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIManager {
	private static _allUI = {};
	private static _allDialog = {};
	private static _toastList:any[] = [];

	public static callReflesh(obj:any, args:any[]){
		var compList = obj["_components"];
		if(compList) {
			for (var i in compList) {
				if(compList[i].reflesh) {
					cc.log("reflesh", args);
					compList[i].reflesh.apply(compList[i], args);
				}
			}
		}
	}

	public static initWindow(layerId:Consts.LAYER, prefabName:string, bModal:boolean, bCloseWhenClickMask:boolean, callback:Function, args:any[]) {
		if(cc.isValid(UIManager._allUI[prefabName])){
			cc.log("allready exist: ", prefabName);
			UIManager.callReflesh(UIManager._allUI[prefabName], args);
			if(callback) { callback.apply(UIManager._allUI[prefabName]); }
			return;
		}
		
		cc.loader.loadRes(prefabName, cc.Prefab, 
		(completeCnt:number, totalCnt:number, item:any)=>{
			//cc.log("进度: ", completeCnt, totalCnt);
		}, 
		(err, loadedResource)=>{
			if( err ) { cc.log( '载入预制资源失败:' + err ); return; }
			var cvs = cc.find("Canvas");
			if( !cvs ) { cc.log("没有Canvas"); return; }
			var obj = cc.instantiate(loadedResource);
			if(!obj) { cc.log("实例化预制体失败"); return; }

			if(bModal) { 
				CommonUtils.setModal(obj, bCloseWhenClickMask); 
			}

			cvs.addChild(obj, layerId);
			UIManager._allUI[prefabName] = obj;

			UIManager.callReflesh(obj, args);
			if(callback) { callback.apply(obj); }
		});
	}

	public static openPanel(prefabName:string, callback:Function, ...args:any[]) {
		this.initWindow(Consts.LAYER.Panel, prefabName, true, false, callback, args);
	}
	
	public static openPopwnd(prefabName:string, callback:Function, ...args:any[]) {
		this.initWindow(Consts.LAYER.Popup, prefabName, true, true, callback, args);
	}

	public static hidePanelsExcept(obj:cc.Node) {
		for( var k in this._allUI) {
			if(this._allUI[k] !== obj) {
				this._allUI[k].active = false;
			}
		}
	}
	

	public static openDialog(dlgName:string, callback:(menuId:number)=>void, content:string, title:string|null=null, okTxt:string|null=null, cancelTxt:string|null=null) {
		if(cc.isValid(UIManager._allDialog[dlgName])){
			cc.log("allready exist: ", dlgName);
			return;
		}
		
		cc.loader.loadRes("launcher/prefabs/ConfirmDlg", cc.Prefab, 
		(completeCnt:number, totalCnt:number, item:any)=>{
			//cc.log("进度: ", completeCnt, totalCnt);
		}, 
		(err, loadedResource)=>{
			if( err ) { cc.log( '载入预制资源失败:' + err ); return; }
			var cvs = cc.find("Canvas");
			if( !cvs ) { cc.log("没有Canvas"); return; }
			var obj = cc.instantiate(loadedResource);
			if(!obj) { cc.log("实例化预制体失败"); return; }

			CommonUtils.setModal(obj, false); 

			cvs.addChild(obj, Consts.LAYER.Dialog);
			UIManager._allDialog[dlgName] = obj;
			
			obj.getComponent("ConfirmDlg").reflesh(callback, content, title, okTxt, cancelTxt); 
		});
	}
	
	public static toast(content:string) {
		if(content===undefined||content===null) { return; }
		var completeCallback = function(errorMessage, loadedResource) {
			if( errorMessage ) { cc.log( '载入预制资源失败:' + errorMessage ); return; }
			var cvs = cc.find("Canvas");
			if( !cvs ) { cc.log("没有Canvas"); return; }
			var obj = cc.instantiate(loadedResource);
			if(!obj) { cc.log("实例化失败"); return; }
			
			//往上挪
			var idx = 1;
			for(var j=UIManager._toastList.length-1; j>=0; j--){
				UIManager._toastList[j].y = 38*idx;
				idx++;
			}
			//插入
			cvs.addChild(obj, Consts.LAYER.Tips);
			UIManager._toastList.push(obj);
			obj.y = 0;
			//刷新数据并定时销毁
			var scriptCpn = obj.getComponent("Toast");
			scriptCpn.setContent(content);
			scriptCpn.scheduleOnce(function() {
				for(var i=0; i<UIManager._toastList.length; i++) {
					if(UIManager._toastList[i]===obj) {
						UIManager._toastList.splice(i,1);
						break;
					}
				}
				this.node.destroy();
			}, 2);
		}
		cc.loader.loadRes("common/prefabs/Toast", cc.Prefab, completeCallback);
	}
	
	public static announce() {
		
	}
	
	public static barrage() {
		
	}
}
