import ModelBase from "../../../../../kernel/model/ModelBase";

export default class ErbaMgr extends ModelBase {
	private static _instance:ErbaMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : ErbaMgr {
        if(!ErbaMgr._instance) { ErbaMgr._instance = new ErbaMgr; }
        return ErbaMgr._instance;
    }
    public static delInstance() : void {
		if(ErbaMgr._instance) {
			ErbaMgr._instance.clear();
			ErbaMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}