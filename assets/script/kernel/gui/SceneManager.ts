import LoadCenter from "../load/LoadCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SceneManager {
	public static turn2Scene(sceneName:string, onLaunched?: Function) : boolean
	{
		LoadCenter.dump();
		return cc.director.loadScene(sceneName, onLaunched);
	}
}
