import LoadCenter from "../load/LoadCenter";
import EventCenter from "../event/EventCenter";
import KernelEvent from "../../kernel/looker/KernelEvent";
import UIManager from "./UIManager";
import Adaptor from "../adaptor/Adaptor";

export default class SceneManager {
	private constructor() {}
	public static preSceneName:string;
	public static curSceneName:string;

	public static turn2Scene(sceneName:string, onLaunched?: Function) : boolean
	{
		EventCenter.getInstance().fire(KernelEvent.SCENE_BEFORE_SWITCH);
		cc.log("--------释放旧资源--------")
		var cvs = cc.find("Canvas");
		LoadCenter.getInstance().retainNodeRes(cvs);
		LoadCenter.getInstance().releaseNodeRes(cvs);
		UIManager.clear();
	//	cvs.removeAllChildren(); //这样会导致组件的onDestroy调不到
		
		this.preSceneName = this.curSceneName;
		this.curSceneName = sceneName;
		cc.log("-----切换场景开始: ", this.preSceneName, "--->", this.curSceneName);

		cc.director.preloadScene(sceneName, 
			(completeCount:number, totalCount:number, item:any)=>{

			}, 
			(err:Error, rsc:cc.SceneAsset)=>{
				var afterLaunch = function() {
					cc.log("-----切换场景完成: ", this.preSceneName, "--->", this.curSceneName);
					Adaptor.adaptScreen();
					LoadCenter.getInstance().gc();
					if(onLaunched) { onLaunched(); }
					EventCenter.getInstance().fire(KernelEvent.SCENE_AFTER_SWITCH);
				}
				return cc.director.loadScene(sceneName, afterLaunch.bind(this));
			}
		);
		return true;
	}
}
