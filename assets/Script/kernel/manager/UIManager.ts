import * as Consts from "../../looker/Consts";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {
	private static _allUI:object = {};

	public static initWindow(layerId:Consts.LAYER, prefabName:string, callback:Function) {
		if(cc.isValid(UIManager._allUI[prefabName])){
			cc.log("allready exist: ", prefabName);
			if(callback) { callback.apply(UIManager._allUI[prefabName]); }
			return;
		}
		
		cc.loader.loadRes(prefabName, cc.Prefab, 
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
					cvs.addChild(obj, layerId);
					UIManager._allUI[prefabName] = obj;
					if(callback) { callback.apply(obj); }
				}
			});
	}

	public static showPanel(prefabName:string, callback:Function) {
		this.initWindow(Consts.LAYER.Panel, prefabName, callback);
	}
	
	public static showPopwnd(prefabName:string, callback:Function) {
		this.initWindow(Consts.LAYER.Popup, prefabName, callback);
	}
	
	public static showDialog(prefabName:string, callback:Function) {
		this.initWindow(Consts.LAYER.Dialog, prefabName, callback);
	}
	
		
	public static toast() {
			
	}
	
	public static announce() {
		
	}
	
	public static barrage() {
		
	}
}
