import ModelInterface from "../../../../kernel/model/ModelInterface";

export default class RechargeMgr implements ModelInterface {
    private static _instance:RechargeMgr = null;
    private constructor() {}
    public static instance() : RechargeMgr {
        if(!RechargeMgr._instance) { RechargeMgr._instance = new RechargeMgr; }
        return RechargeMgr._instance;
    }
    clear(): void {

    }
    
}
