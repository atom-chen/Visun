import ModelBase from "../../../../kernel/model/ModelBase";

export default class RechargeMgr extends ModelBase {
    private static _instance:RechargeMgr = null;
    private constructor() {
        super();
    }
    public static instance() : RechargeMgr {
        if(!RechargeMgr._instance) { RechargeMgr._instance = new RechargeMgr; }
        return RechargeMgr._instance;
    }
    public static destroy() : void {
		if(RechargeMgr._instance) {
			RechargeMgr._instance.clear();
			RechargeMgr._instance = null;
		}
	}
    on_clear(): void {

    }
    
}
