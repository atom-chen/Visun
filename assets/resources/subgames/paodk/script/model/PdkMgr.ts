import ModelBase from "../../../../../kernel/model/ModelBase";

export default class PdkMgr extends ModelBase {
	private static _instance:PdkMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : PdkMgr {
        if(!PdkMgr._instance) { PdkMgr._instance = new PdkMgr; }
        return PdkMgr._instance;
    }
    public static delInstance() : void {
		if(PdkMgr._instance) {
			PdkMgr._instance.clear();
			PdkMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}