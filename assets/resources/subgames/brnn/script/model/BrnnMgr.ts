import ModelBase from "../../../../../kernel/model/ModelBase";
import { brcowcow } from "../../../../../../declares/brcowcow";

export default class BrnnMgr extends ModelBase {
	private static _instance:BrnnMgr = null;
    public static getInstance() : BrnnMgr {
        if(!BrnnMgr._instance) { BrnnMgr._instance = new BrnnMgr; }
        return BrnnMgr._instance;
    }
    public static delInstance() : void {
		if(BrnnMgr._instance) {
			BrnnMgr._instance.clear();
			BrnnMgr._instance = null;
		}
	}
    on_clear(): void {

    }
    
    private enterData:brcowcow.BrcowcowSceneResp = null;
    setEnterData(data:brcowcow.BrcowcowSceneResp) {
        this.enterData = data;
    }
    getEnterData() : brcowcow.BrcowcowSceneResp {
        return this.enterData;
    }
}