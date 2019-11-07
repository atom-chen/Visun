import LoadCenter from "../load/LoadCenter";
import EventCenter from "../basic/event/EventCenter";
import KernelEvent from "../basic/defines/KernelEvent";
import UIManager from "./UIManager";
import Adaptor from "../adaptor/Adaptor";

export default class SceneManager {
	private constructor() {}
	public static preSceneName:string;
	public static curSceneName:string;
	private static _switching:boolean = false;

	public static isSwitching() : boolean {
		return SceneManager._switching;
	}

	public static turn2Scene(sceneName:string, onLaunched?: Function) : boolean
	{
		if(sceneName === this.curSceneName) {
			cc.warn("禁止多次进入相同场景", sceneName);
			return false;
		}
		if(this._switching) {
			cc.warn("禁止嵌套调用turn2Scene", sceneName, this.curSceneName);
			return false;
		}
		this._switching = true;
		this.preSceneName = this.curSceneName;
		this.curSceneName = sceneName;
		cc.log("-----切换场景开始: ", this.preSceneName, "--->", this.curSceneName);

		EventCenter.getInstance().fire(KernelEvent.SCENE_BEFORE_SWITCH);
		cc.log("--------释放旧资源--------")
		var cvs = cc.find("Canvas");
		LoadCenter.getInstance().retainNodeRes(cvs);
		LoadCenter.getInstance().releaseNodeRes(cvs);
		UIManager.clear();
	//	cvs.removeAllChildren(); //这样会导致组件的onDestroy调不到

		cc.director.preloadScene(sceneName, 
			(completeCount:number, totalCount:number, item:any)=>{

			}, 
			(err:Error, rsc:cc.SceneAsset)=>{
				var afterLaunch = function() {
					cc.log("-----切换场景完成: ", this.preSceneName, "--->", this.curSceneName);
					Adaptor.adaptScreen();
					LoadCenter.getInstance().gc();
					SceneManager._switching = false;
					if(onLaunched) { onLaunched(); }
					EventCenter.getInstance().fire(KernelEvent.SCENE_AFTER_SWITCH);
				}
				return cc.director.loadScene(sceneName, afterLaunch.bind(this));
			}
		);
		return true;
	}
}
