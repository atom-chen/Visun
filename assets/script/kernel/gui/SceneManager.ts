import LoadCenter from "../load/LoadCenter";
import EventCenter from "../event/EventCenter";
import EventDef from "../../looker/EventDef";
import UIManager from "./UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SceneManager {
	public static turn2Scene(sceneName:string, onLaunched?: Function) : boolean
	{
	//	LoadCenter.dump();
		EventCenter.instance().fire(EventDef.SCENE_BEFORE_SWITCH);
		UIManager.clear();
		LoadCenter.instance().gc();
		var afterLaunch = function() {
			if(onLaunched) { onLaunched(); }
			EventCenter.instance().fire(EventDef.SCENE_AFTER_SWITCH);
		}
		return cc.director.loadScene(sceneName, afterLaunch);
	}
}
