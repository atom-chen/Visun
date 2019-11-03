//---------------------------------
// UI管理器
//---------------------------------
import CommonUtil from "../utils/CommonUtil";
import { LayerDefine } from "../basic/defines/KernelDefine";
import KernelUIDefine from "../basic/defines/KernelUIDefine";
import LoadCenter from "../load/LoadCenter";
import BaseComponent from "./BaseComponent";
import EventCenter from "../basic/event/EventCenter";
import KernelEvent from "../basic/defines/KernelEvent";

export default class UIManager {
	private static _allUI = {};  				//面板和弹窗
	private static _allDialog = {};
	private static _toastList:any[] = [];



	public static clear() {
		this._toastList.length = 0;
		this._toastList = [];
		this._allDialog = {};
		this._allUI = {};
	}

	public static callReflesh(obj:any, args:any[]){
	//	if(args===null || args===undefined) { return; }
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

	public static getWindow(respath):any{
		return UIManager._allUI[respath];
	}

	//创建窗口
	private static showSingleton(respath:string, parent:cc.Node, zIndex:LayerDefine, bModal:boolean, bCloseWhenClickMask:boolean, callback:Function, args:any[]) {
		if(cc.isValid(UIManager._allUI[respath], true)){
			cc.log("allready exist: ", respath);
			var wnd = UIManager._allUI[respath];
			if(wnd.parent===null || wnd.parent!==parent) {
				wnd.parent = parent || cc.find("Canvas");
			}
			wnd.zIndex = zIndex;
			wnd.active = true;
			UIManager.callReflesh(wnd, args);
			if(callback) { callback(wnd); }
			if(zIndex===LayerDefine.Panel){
				//	cc.log("进度: ", respath, completeCnt, totalCnt);
				EventCenter.getInstance().fire(KernelEvent.UI_LOADING, 1, 1);
			}
			return;
		}

		var completeCallback = function(err, loadedResource) {
			if( err ) { cc.log( '载入预制资源失败:' + err ); return; }
			var cvs = cc.find("Canvas");
			if( !cvs ) { cc.log("没有Canvas", respath); return; }
			var obj = cc.instantiate(loadedResource);
			if(!obj) { cc.log("实例化预制体失败", respath); return; }
			parent = parent || cvs;

			if(bModal) { 
				CommonUtil.setModal(obj, bCloseWhenClickMask); 
			}

			if(zIndex!==LayerDefine.Panel) {
				if(CommonUtil.hasEditbox(obj)) {
					cc.log("----- yes has editbox");
				}
				else {
					let key = cc.loader["_getReferenceKey"](loadedResource);
					LoadCenter.getInstance().retatinRes(key);
					LoadCenter.getInstance().retainNodeRes(obj);
					LoadCenter.getInstance().releaseRes(key);
					LoadCenter.getInstance().releaseNodeRes(obj);
					var baseComp = obj.getComponent(BaseComponent);
					if(baseComp) {
						baseComp.listenDestory((comp)=>{
						//	TimerManager.addFrameTimer(2,1, new CHandler(null, ()=>{
						//		LoadCenter.getInstance().gc();
						//	}));
						})
					}
				}
			}

			parent.addChild(obj, zIndex);
			UIManager._allUI[respath] = obj;
			UIManager.callReflesh(obj, args);
			if(callback) { callback(obj); }
		}
		if(cc.loader.getRes(respath, cc.Prefab)){
			completeCallback(null, cc.loader.getRes(respath, cc.Prefab));
			if(zIndex===LayerDefine.Panel){
				//	cc.log("进度: ", respath, completeCnt, totalCnt);
				EventCenter.getInstance().fire(KernelEvent.UI_LOADING, 1, 1);
			}
			return;
		}
		cc.loader.loadRes(respath, cc.Prefab, 
		(completeCnt:number, totalCnt:number, item:any)=>{
			if(zIndex===LayerDefine.Panel){
			//	cc.log("进度: ", respath, completeCnt, totalCnt);
				EventCenter.getInstance().fire(KernelEvent.UI_LOADING, completeCnt, totalCnt);
			}
		}, 
		completeCallback);
	}

	//打开面板
	public static openPanel(respath:string, callback:Function, ...args:any[]) {
		this.showSingleton(respath, null, LayerDefine.Panel, true, false, callback, args);
	}
	
	//打开弹窗
	public static openPopwnd(respath:string, bCloseWhenClickMask:boolean, callback:Function, ...args:any[]) {
		this.showSingleton(respath, null, LayerDefine.Popup, true, bCloseWhenClickMask, callback, args);
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
				cc.log("_allUI 监听到UI销毁时调用", respath);
				break;
			}
		}
		for(var dlgName in this._allDialog) {
			if(obj===this._allDialog[dlgName]){
				this._allDialog[dlgName] = null;
				cc.log("_allDialog 监听到UI销毁时调用", dlgName);
				break;
			}
		}
	}
	

	//-----------------------------------------------------------------


	public static openDialog(dlgName:string, content:string, callback:(menuId:number)=>void, title:string|null=null, okTxt:string|null=null, cancelTxt:string|null=null) {
		if(cc.isValid(UIManager._allDialog[dlgName])){
			cc.log("allready exist: ", dlgName);
			return;
		}
		
		cc.loader.loadRes(KernelUIDefine.dialog.path, cc.Prefab, 
		(completeCnt:number, totalCnt:number, item:any)=>{
			//cc.log("进度: ", completeCnt, totalCnt);
		}, 
		(err, loadedResource)=>{
			if( err ) { cc.log( '载入预制资源失败:' + err ); return; }
			var cvs = cc.find("Canvas");
			if( !cvs ) { cc.log("没有Canvas"); return; }
			var obj = cc.instantiate(loadedResource);
			if(!obj) { cc.log("实例化预制体失败"); return; }

			CommonUtil.setModal(obj, false); 

			cvs.addChild(obj, LayerDefine.Dialog);
			UIManager._allDialog[dlgName] = obj;
			
			var logicComp = obj.getComponent(BaseComponent)
			if(logicComp) {
				logicComp.reflesh(callback, content, title, okTxt, cancelTxt);
			}
		});
	}

	//-----------------------------------------------------------------
	
	public static toast(content:string) {
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
				UIManager._toastList[j].y = 66*idx;
				idx++;
			}
			//插入
			cvs.addChild(obj, LayerDefine.Tips);
			UIManager._toastList.push(obj);
			obj.y = 0;
			//刷新数据并定时销毁
			var scriptCpn = obj.getComponent(KernelUIDefine.toast.logicComp);
			scriptCpn.setContent(content);
			scriptCpn.scheduleOnce(function() {
				for(var i=0; i<UIManager._toastList.length; i++) {
					if(UIManager._toastList[i]===obj) {
						UIManager._toastList.splice(i,1);
						break;
					}
				}
				this.node.destroy();
			}, 1);
		}
		if(cc.loader.getRes(KernelUIDefine.toast.path, cc.Prefab)) {
			completeCallback(null, cc.loader.getRes(KernelUIDefine.toast.path, cc.Prefab));
			return;
		}
		cc.loader.loadRes(KernelUIDefine.toast.path, cc.Prefab, completeCallback);
	}
	
	public static announce(content:string) {
		
	}
	
	public static barrage() {
		
	}


	//---------------------------------------------------------

	public static showSpineAsync(respath:string, trackIndex:number, aniName:string, bLoop:boolean, parent:cc.Node, info:any) 
	{
		cc.loader.loadRes(respath, sp.SkeletonData, function(err, rsc){
			if(err) { 
				cc.log( '载入spine失败:' + err ); 
				return; 
			}
			if(!cc.isValid(parent, true)) {
				cc.log("parent已经释放");
				return;
			}
			var obj = new cc.Node();
			var sk = obj.addComponent(sp.Skeleton);
			sk.skeletonData = rsc;
			sk.premultipliedAlpha = false;
			parent.addChild(obj);
			for(var k in info) {
				obj[k] = info[k];
			}
			sk.setAnimation(trackIndex, aniName, bLoop);
		});
	}

	public static showSpriteAsync(respath:string, parent:cc.Node, info:any)
	{
		cc.loader.loadRes(respath, cc.SpriteFrame, function(err, rsc){
			if(err) { 
				cc.log( '载入spine失败:' + err ); 
				return; 
			}
			if(!cc.isValid(parent, true)) {
				cc.log("parent已经释放");
				return;
			}
			var obj = new cc.Node;
			var spr = obj.addComponent(cc.Sprite);
			spr.spriteFrame = rsc;
			parent.addChild(obj);
			for(var k in info) {
				obj[k] = info[k];
			}
		})
	}
	
}
