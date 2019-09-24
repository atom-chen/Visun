import ModelBase from "../../../../kernel/model/ModelBase";

export default class RankMgr extends ModelBase {
    private static _instance:RankMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : RankMgr {
        if(!RankMgr._instance) { RankMgr._instance = new RankMgr; }
        return RankMgr._instance;
    }
    public static delInstance() : void {
		if(RankMgr._instance) {
			RankMgr._instance.clear();
			RankMgr._instance = null;
		}
	}
    on_clear(): void {

    }
    
}
