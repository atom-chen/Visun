import ModelBase from "../../../../../kernel/model/ModelBase";

export default class ZjhMgr extends ModelBase {
	private static _instance:ZjhMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : ZjhMgr {
        if(!ZjhMgr._instance) { ZjhMgr._instance = new ZjhMgr; }
        return ZjhMgr._instance;
    }
    public static delInstance() : void {
		if(ZjhMgr._instance) {
			ZjhMgr._instance.clear();
			ZjhMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}