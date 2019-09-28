import LoadCenter from "../load/LoadCenter";
import EventCenter from "../event/EventCenter";
import KernelEvent from "../../kernel/looker/KernelEvent";
import UIManager from "./UIManager";
import Adaptor from "../adaptor/Adaptor";
import TimerManager from "../timer/TimerManager";
import CHandler from "../basic/CHandler";
import KernelUIDefine from "../looker/KernelUIDefine";

export default class SceneManager {
	private constructor() {}
	public static preSceneName:string;
	public static curSceneName:string;

	public static turn2Scene(sceneName:string, onLaunched?: Function) : boolean
	{
		EventCenter.getInstance().fire(KernelEvent.SCENE_BEFORE_SWITCH);
		UIManager.showLoading();
		cc.log("--------释放旧资源--------")
		var cvs = cc.find("Canvas");
		LoadCenter.getInstance().retainNodeRes(cvs);
		LoadCenter.getInstance().releaseNodeRes(cvs);
		UIManager.clear();
	//	cvs.removeAllChildren(); //这样会导致组件的onDestroy调不到
		cc.log("-----切换场景-----", this.curSceneName, "--->", sceneName);
		this.preSceneName = this.curSceneName;
		this.curSceneName = sceneName;

		var afterLaunch = function() {
			Adaptor.adaptScreen();
			LoadCenter.getInstance().gc();
			if(onLaunched) { onLaunched(); }
			EventCenter.getInstance().fire(KernelEvent.SCENE_AFTER_SWITCH);
		}
		return cc.director.loadScene(sceneName, afterLaunch.bind(this));
	}
}
