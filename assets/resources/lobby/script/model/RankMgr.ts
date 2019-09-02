import ModelBase from "../../../../kernel/model/ModelBase";

export default class RankMgr extends ModelBase {
    private static _instance:RankMgr = null;
    private constructor() {
        super();
    }
    public static instance() : RankMgr {
        if(!RankMgr._instance) { RankMgr._instance = new RankMgr; }
        return RankMgr._instance;
    }
    on_clear(): void {

    }
    
}
