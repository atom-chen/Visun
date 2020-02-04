import ModelBase from "../../../../../kernel/model/ModelBase";

export default class LonghuMgr extends ModelBase {
	private static _instance:LonghuMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : LonghuMgr {
        if(!LonghuMgr._instance) { LonghuMgr._instance = new LonghuMgr; }
        return LonghuMgr._instance;
    }
    public static delInstance() : void {
		if(LonghuMgr._instance) {
			LonghuMgr._instance.clear();
			LonghuMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}