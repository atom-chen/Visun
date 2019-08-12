import LoadCenter from "../load/LoadCenter";
import EventCenter from "../event/EventCenter";
import EventDef from "../../looker/EventDef";
import UIManager from "./UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SceneManager {
	public static preSceneName:string;
	public static curSceneName:string;

	public static turn2Scene(sceneName:string, onLaunched?: Function) : boolean
	{
		LoadCenter.dump(0);
		EventCenter.instance().fire(EventDef.SCENE_BEFORE_SWITCH);
		UIManager.clear();
		LoadCenter.instance().gc();
		
		this.preSceneName = this.curSceneName;
		this.curSceneName = sceneName;
		var afterLaunch = function() {
			if(this.preSceneName==="GameScene"){
				cc.loader.releaseResDir("subgames");
			}
			LoadCenter.dump(0);
			if(onLaunched) { onLaunched(); }
			EventCenter.instance().fire(EventDef.SCENE_AFTER_SWITCH);
		}
		return cc.director.loadScene(sceneName, afterLaunch.bind(this));
	}
}
