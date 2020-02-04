import ModelBase from "../../../../../kernel/model/ModelBase";

export default class RedbagMgr extends ModelBase {
	private static _instance:RedbagMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : RedbagMgr {
        if(!RedbagMgr._instance) { RedbagMgr._instance = new RedbagMgr; }
        return RedbagMgr._instance;
    }
    public static delInstance() : void {
		if(RedbagMgr._instance) {
			RedbagMgr._instance.clear();
			RedbagMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}