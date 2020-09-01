import ModelBase from "../../../../kernel/model/ModelBase";
import { baccarat } from "../../../../../declares/baccarat";

export default class BacarratMgr extends ModelBase{
	private static _instance:BacarratMgr = null;
    public static getInstance() : BacarratMgr {
        if(!BacarratMgr._instance) { BacarratMgr._instance = new BacarratMgr; }
        return BacarratMgr._instance;
    }
    public static delInstance() : void {
		if(BacarratMgr._instance) {
			BacarratMgr._instance.clear();
			BacarratMgr._instance = null;
		}
	}
    on_clear(): void {

    }
    
    private enterData:baccarat.IBaccaratSceneResp = null;
    setEnterData(data:baccarat.IBaccaratSceneResp) {
        this.enterData = data;
    }
    getEnterData() : baccarat.IBaccaratSceneResp {
        return this.enterData;
    }
}
