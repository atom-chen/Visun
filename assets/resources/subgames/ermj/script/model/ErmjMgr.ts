import ModelBase from "../../../../../kernel/model/ModelBase";

export default class ErmjMgr extends ModelBase {
	private static _instance:ErmjMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : ErmjMgr {
        if(!ErmjMgr._instance) { ErmjMgr._instance = new ErmjMgr; }
        return ErmjMgr._instance;
    }
    public static delInstance() : void {
		if(ErmjMgr._instance) {
			ErmjMgr._instance.clear();
			ErmjMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}