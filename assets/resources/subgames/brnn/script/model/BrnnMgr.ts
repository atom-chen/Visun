import ModelBase from "../../../../../kernel/model/ModelBase";
import { brcowcow } from "../../../../../../declares/brcowcow";

export default class BrnnMgr extends ModelBase {
	private static _instance:BrnnMgr = null;
    private constructor() {
        super();
    }
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
    
    private enterData = null;
    setEnterData(data:brcowcow.BrcowcowScene) {
        this.enterData = data;
    }
    getEnterData() : brcowcow.BrcowcowScene {
        return this.enterData;
    }
}