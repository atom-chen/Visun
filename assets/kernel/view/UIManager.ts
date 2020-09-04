//---------------------------------
// UI管理器
//---------------------------------
import CommonUtil from "../utils/CommonUtil";
import { LayerDefine } from "../basic/defines/KernelDefine";
import KernelUIDefine from "../basic/defines/KernelUIDefine";
import BaseComponent from "./BaseComponent";
import EventCenter from "../basic/event/EventCenter";
import KernelEvent from "../basic/defines/KernelEvent";
import SceneManager from "./SceneManager";
import { isNil } from "../utils/GlobalFuncs";

export default class UIManager {
	private static _allUI = {};  				//面板和弹窗
	private static _allDialog = {};
	private static _toastList:any[] = [];
	private static _waitList = [];



	public static clear() {
		this._toastList.length = 0;
		this._toastList = [];
		this._allDialog = {};
		this._allUI = {};
	}

	public static onSceneAfterSwitch() {
		for(var i in UIManager._waitList) {
			var info = UIManager._waitList[i];
			UIManager[info.op].apply(UIManager, info.arglist);
		}
		UIManager._waitList.length = 0;
		UIManager._waitList = [];
	}

	public static callSetViewData(obj:any, args:any[]){
	//	if(args===null || args===undefined) { return; }
		var compList = obj["_components"];
		if(compList) {
			for (var i in compList) {
				if(compList[i].setViewData) {
				//	cc.log("setViewData", args);
					compList[i].setViewData.apply(compList[i], args);
				}
			}
		}
	}

	private static configUI(wnd:cc.Node, parent:cc.Node, zIndex:LayerDefine, bModal:boolean, bCloseWhenClickMask:boolean) : cc.Node {
		if(isNil(parent) || !cc.isValid(parent)) {
			cc.warn("父节点已经失效");
			return wnd;
		}
		if(isNil(wnd.parent) || wnd.parent!==parent) {
			wnd.parent = parent;
		}
		wnd.zIndex = zIndex;
		wnd.active = true;
		if(bModal) {
			CommonUtil.setModal(wnd, bCloseWhenClickMask);
		}
		return wnd;
	}

	//创建窗口
	private static showSingleton(respath:string, parent:cc.Node, zIndex:LayerDefine, bModal:boolean, bCloseWhenClickMask:boolean, args:any[]) {
		if(UIManager._allUI[respath] && cc.isValid(UIManager._allUI[respath], true)){
			cc.log("allready exist: ", respath);
			var wnd = UIManager._allUI[respath];

			UIManager.configUI(wnd, parent || cc.find("Canvas"), zIndex, bModal, bCloseWhenClickMask);

			UIManager.callSetViewData(wnd, args);

			if(zIndex===LayerDefine.Panel){
				EventCenter.getInstance().fire(KernelEvent.UI_LOADING_FINISH);
			}

			return;
		}

		// if(SceneManager.isSwitching()) {
		// 	UIManager._waitList.push({op:"showSingleton", arglist:[respath, parent, zIndex, bModal, bCloseWhenClickMask, args]});
		// 	return;
		// }

		var completeCallback = function(err, loadedResource) {
			if( err ) { cc.log( '载入预制资源失败:' + err ); return; }
			var cvs = cc.find("Canvas");
			if( !cvs ) { cc.log("没有Canvas", respath); return; }
			
			parent = parent || cvs;
			var obj = null;

			if(UIManager._allUI[respath] && cc.isValid(UIManager._allUI[respath], true)) {
				obj = UIManager._allUI[respath];
			} else {
				obj = cc.instantiate(loadedResource);
				if(!obj) { 
					cc.log("实例化预制体失败", respath); 
					return; 
				}
				parent.addChild(obj, zIndex);
				UIManager._allUI[respath] = obj;
			}

			UIManager.configUI(obj, parent, zIndex, bModal, bCloseWhenClickMask);
			
			UIManager.callSetViewData(obj, args);

			if(zIndex===LayerDefine.Panel){
				EventCenter.getInstance().fire(KernelEvent.UI_LOADING_FINISH);
			}
		}

		if(cc.loader.getRes(respath, cc.Prefab)){
			completeCallback(null, cc.loader.getRes(respath, cc.Prefab));
			if(zIndex===LayerDefine.Panel){
				EventCenter.getInstance().fire(KernelEvent.UI_LOADING_FINISH);
			}
			return;
		}

		cc.loader.loadRes(respath, cc.Prefab, 
				(completeCnt:number, totalCnt:number, item:any)=>{
					if(zIndex===LayerDefine.Panel){
					//	cc.log("进度: ", respath, completeCnt, totalCnt);
						EventCenter.getInstance().fire(KernelEvent.UI_LOADING_PROGRESS, completeCnt, totalCnt);
					}
				}, 
				completeCallback );
	}

	//打开面板
	public static openPanel(respath:string, ...args:any[]) {
		this.showSingleton(respath, null, LayerDefine.Panel, true, false, args);
	}
	
	//打开弹窗
	public static openPopwnd(respath:string, bCloseWhenClickMask:boolean, ...args:any[]) {
		this.showSingleton(respath, null, LayerDefine.Popup, true, bCloseWhenClickMask, args);
	}

	//关闭窗口
	public static closeWindow(respath:string) {
		var wnd = this._allUI[respath];
		this._allUI[respath] = null;
		if(wnd) { wnd.destroy(); }
	}

	//关闭窗口
	public static closeWindowNode(obj:any) {
		this.onWindowClose(obj);
		obj.destroy();
	}

	//监听到UI销毁时调用
	public static onWindowClose(obj:any) {
		for(var respath in this._allUI) {
			if(obj===this._allUI[respath]){
				this._allUI[respath] = null;
				cc.log("_allUI 监听到UI销毁", respath);
				return;
			}
		}
		for(var dlgName in this._allDialog) {
			if(obj===this._allDialog[dlgName]){
				this._allDialog[dlgName] = null;
				cc.log("_allDialog 监听到UI销毁", dlgName);
				return;
			}
		}
	}

	public static getWindow(respath:string):any{
		return UIManager._allUI[respath];
	}
	

	//-----------------------------------------------------------------


	public static openDialog(dlgName:string, content:string, dlgType:number, callback:(menuId:number)=>void, title:string|null=null, okTxt:string|null=null, cancelTxt:string|null=null) {
		if(cc.isValid(UIManager._allDialog[dlgName])){
			cc.log("allready exist: ", dlgName);
			return;
		}

		if(SceneManager.isSwitching()) {
			UIManager._waitList.push({op:"openDialog", arglist:[dlgName, content, dlgType, callback, title, okTxt, cancelTxt]});
			cc.log("场景切换中，延迟显示界面：", dlgName);
			return;
		}
		
		cc.loader.loadRes(KernelUIDefine.ConfirmDlg, cc.Prefab, 
		(completeCnt:number, totalCnt:number, item:any)=>{
			//cc.log("进度: ", completeCnt, totalCnt);
		}, 
		(err, loadedResource)=>{
			if( err ) { cc.log( '载入预制资源失败:' + err ); return; }
			var cvs = cc.find("Canvas");
			if( !cvs ) { cc.log("没有Canvas"); return; }

			var obj = UIManager._allUI[dlgName];

			if(!cc.isValid(obj)) {
				obj = cc.instantiate(loadedResource);
				if(!obj) { cc.log("实例化预制体失败"); return; }
				UIManager._allUI[dlgName] = obj;
				cvs.addChild(obj, LayerDefine.Dialog);
				CommonUtil.setModal(obj, false);
			} 

			UIManager._allDialog[dlgName] = obj;
			
			var logicComp = obj.getComponent(BaseComponent)
			if(logicComp) {
				logicComp.setViewData(dlgType, callback, content, title, okTxt, cancelTxt);
			}
		});
	}

	//-----------------------------------------------------------------
	
	public static toast(content:string) {
		if(SceneManager.isSwitching()) {
			cc.log("场景切换过程中，略过toast: ", content);
			return;
		}
		if(content===undefined||content===null||content==="") { return; }
		if(UIManager._toastList[0] && UIManager._toastList[0].getComponent(BaseComponent).label_cont.string === content){
			return;
		}
		
		var completeCallback = function(errorMessage, loadedResource) {
			if( errorMessage ) { cc.log( '载入预制资源失败:' + errorMessage ); return; }
			var cvs = cc.find("Canvas");
			if( !cvs ) { cc.log("没有Canvas"); return; }
			var obj = cc.instantiate(loadedResource);
			if(!obj) { cc.log("实例化失败"); return; }
			
			//往上挪
			var idx = 1;
			for(var j=UIManager._toastList.length-1; j>=0; j--){
				UIManager._toastList[j].y = 30 + 66*idx;
				idx++;
			}
			//插入
			cvs.addChild(obj, LayerDefine.Tips);
			UIManager._toastList.push(obj);
			obj.y = 30;
			//刷新数据并定时销毁
			var scriptCpn = obj.getComponent(BaseComponent);
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
		if(cc.loader.getRes(KernelUIDefine.UIToast, cc.Prefab)) {
			completeCallback(null, cc.loader.getRes(KernelUIDefine.UIToast, cc.Prefab));
			return;
		}
		cc.loader.loadRes(KernelUIDefine.UIToast, cc.Prefab, completeCallback);
	}
	
	public static announce(content:string) {
		
	}
	
	public static barrage() {
		
	}

}
