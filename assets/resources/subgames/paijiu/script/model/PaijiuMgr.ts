import ModelBase from "../../../../../kernel/model/ModelBase";

export default class PaijiuMgr extends ModelBase {
	private static _instance:PaijiuMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : PaijiuMgr {
        if(!PaijiuMgr._instance) { PaijiuMgr._instance = new PaijiuMgr; }
        return PaijiuMgr._instance;
    }
    public static delInstance() : void {
		if(PaijiuMgr._instance) {
			PaijiuMgr._instance.clear();
			PaijiuMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}