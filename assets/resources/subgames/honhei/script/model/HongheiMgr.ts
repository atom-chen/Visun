import ModelBase from "../../../../../kernel/model/ModelBase";

export default class HongheiMgr extends ModelBase {
	private static _instance:HongheiMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : HongheiMgr {
        if(!HongheiMgr._instance) { HongheiMgr._instance = new HongheiMgr; }
        return HongheiMgr._instance;
    }
    public static delInstance() : void {
		if(HongheiMgr._instance) {
			HongheiMgr._instance.clear();
			HongheiMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}