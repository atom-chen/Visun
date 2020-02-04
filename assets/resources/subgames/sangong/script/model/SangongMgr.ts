import ModelBase from "../../../../../kernel/model/ModelBase";

export default class SangongMgr extends ModelBase {
	private static _instance:SangongMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : SangongMgr {
        if(!SangongMgr._instance) { SangongMgr._instance = new SangongMgr; }
        return SangongMgr._instance;
    }
    public static delInstance() : void {
		if(SangongMgr._instance) {
			SangongMgr._instance.clear();
			SangongMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}