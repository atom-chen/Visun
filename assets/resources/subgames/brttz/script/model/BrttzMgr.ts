import ModelBase from "../../../../../kernel/model/ModelBase";

export default class BrttzMgr extends ModelBase {
	private static _instance:BrttzMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : BrttzMgr {
        if(!BrttzMgr._instance) { BrttzMgr._instance = new BrttzMgr; }
        return BrttzMgr._instance;
    }
    public static delInstance() : void {
		if(BrttzMgr._instance) {
			BrttzMgr._instance.clear();
			BrttzMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}