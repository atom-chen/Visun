import ModelBase from "../../../../../kernel/model/ModelBase";

export default class BuyuMgr extends ModelBase {
	private static _instance:BuyuMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : BuyuMgr {
        if(!BuyuMgr._instance) { BuyuMgr._instance = new BuyuMgr; }
        return BuyuMgr._instance;
    }
    public static delInstance() : void {
		if(BuyuMgr._instance) {
			BuyuMgr._instance.clear();
			BuyuMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}