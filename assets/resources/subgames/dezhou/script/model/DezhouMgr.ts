import ModelBase from "../../../../../kernel/model/ModelBase";

export default class DezhouMgr extends ModelBase {
	private static _instance:DezhouMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : DezhouMgr {
        if(!DezhouMgr._instance) { DezhouMgr._instance = new DezhouMgr; }
        return DezhouMgr._instance;
    }
    public static delInstance() : void {
		if(DezhouMgr._instance) {
			DezhouMgr._instance.clear();
			DezhouMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}