import ModelBase from "../../../../../kernel/model/ModelBase";

export default class FqzsMgr extends ModelBase {
	private static _instance:FqzsMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : FqzsMgr {
        if(!FqzsMgr._instance) { FqzsMgr._instance = new FqzsMgr; }
        return FqzsMgr._instance;
    }
    public static delInstance() : void {
		if(FqzsMgr._instance) {
			FqzsMgr._instance.clear();
			FqzsMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}