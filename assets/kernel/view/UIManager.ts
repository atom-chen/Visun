//---------------------------------
// UI管理器
//---------------------------------
import CommonUtils from "../utils/CommonUtils";
import { LayerDefine } from "../looker/KernelDefine";

export default class UIManager {
	private static _allUI = {};  				//面板和弹窗
	private static _panel_stack:any[] = [];  	//面板栈

	private static _allDialog = {};

	private static _toastList:any[] = [];



	public static clear() {
		this._toastList.length = 0;
		this._toastList = [];
		this._panel_stack.length = 0;
		this._panel_stack = [];
		this._allDialog = {};
		this._allUI = {};
	}

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

	//创建窗口的唯一接口
	public static initWindow(layerId:LayerDefine, prefabName:string, bModal:boolean, bCloseWhenClickMask:boolean, callback:Function, args:any[]) {
		if(cc.isValid(UIManager._allUI[prefabName])){
			cc.log("allready exist: ", prefabName);
			var wnd = UIManager._allUI[prefabName];
			wnd.zIndex = layerId;
			wnd.active = true;
			if(layerId==LayerDefine.Panel){
				if(UIManager._panel_stack.indexOf(wnd) < 0) {
					UIManager._panel_stack.push(wnd);
				}
			}
			if(layerId!=LayerDefine.Panel){
				var idx = UIManager._panel_stack.indexOf(wnd);
				if(idx >= 0) {
					UIManager._panel_stack.splice(idx, 1);
				}
			}
			UIManager.callReflesh(wnd, args);
			if(callback) { callback(wnd); }
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

			if(layerId===LayerDefine.Panel){
				UIManager._panel_stack.push(obj);
			}

			UIManager.callReflesh(obj, args);
			if(callback) { callback.apply(obj); }
		});
	}

	//打开面板
	public static openPanel(prefabName:string, callback:Function, ...args:any[]) {
		this.initWindow(LayerDefine.Panel, prefabName, true, false, callback, args);
	}
	
	//打开弹窗
	public static openPopwnd(prefabName:string, callback:Function, ...args:any[]) {
		this.initWindow(LayerDefine.Popup, prefabName, true, true, callback, args);
	}

	//关闭窗口
	public static closeWindow(prefabName:string) {
		var wnd = this._allUI[prefabName];
		var idx = this._panel_stack.indexOf(wnd);
		if(idx >= 0) {
			this._panel_stack.splice(idx, 1);
			this.showLastPanel();
		}
		if(this._allUI[prefabName]) {
			this._allUI[prefabName].destroy();
			this._allUI[prefabName] = null;
		}
	}

	//关闭窗口
	public static closeWindowNode(obj:any) {
		this.onWindowClose(obj);
		obj.destroy();
	}

	//监听到UI销毁时调用
	public static onWindowClose(obj:any) {
		var isPanel:boolean = false;
		for(var i=this._panel_stack.length-1; i>=0; i--){
			if(obj===this._panel_stack[i] || !cc.isValid(this._panel_stack[i], true)){
				this._panel_stack.splice(i, 1);
				cc.log("_panel_stack 监听到UI销毁时调用");
				isPanel = true;
				break;
			}
		}
		for(var prefabName in this._allUI) {
			if(obj===this._allUI[prefabName]){
				this._allUI[prefabName] = null;
				cc.log("_allUI 监听到UI销毁时调用");
				break;
			}
		}
		for(var dlgName in this._allDialog) {
			if(obj===this._allDialog[dlgName]){
				this._allDialog[dlgName] = null;
				cc.log("_allDialog 监听到UI销毁时调用");
				break;
			}
		}
		if(isPanel) {
			this.showLastPanel();
		}
	}

	public static showLastPanel(){
		if(this._panel_stack.length <= 0) { return; }
		this.hideAllPanels();
		var last = this._panel_stack[this._panel_stack.length-1];
		last.active = true;
	}

	public static hideAllPanels() {
		for( var k=0; k<this._panel_stack.length; k++) {
			this._panel_stack[k].active = false;
		}
	}
	

	//-----------------------------------------------------------------


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

			cvs.addChild(obj, LayerDefine.Dialog);
			UIManager._allDialog[dlgName] = obj;
			
			obj.getComponent("ConfirmDlg").reflesh(callback, content, title, okTxt, cancelTxt); 
		});
	}

	//-----------------------------------------------------------------
	
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
			cvs.addChild(obj, LayerDefine.Tips);
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

	//-----------------------------------------------------------------
	
	public static announce() {
		
	}

	//-----------------------------------------------------------------
	
	public static barrage() {
		
	}
}
