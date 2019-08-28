import BaseModel from "../../../../kernel/model/BaseModel";

export default class RankMgr implements BaseModel {
    private static _instance:RankMgr = null;
    private constructor() {}
    public static instance() : RankMgr {
        if(!RankMgr._instance) { RankMgr._instance = new RankMgr; }
        return RankMgr._instance;
    }
    clear(): void {

    }
    
}
