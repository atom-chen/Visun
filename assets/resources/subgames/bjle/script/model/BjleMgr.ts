import ModelBase from "../../../../../kernel/model/ModelBase";
import { baccarat } from "../../../../../../declares/baccarat";

export default class BjleMgr extends ModelBase {
    private static _instance:BjleMgr = null;
    public static getInstance() : BjleMgr{
        if(!BjleMgr._instance) { BjleMgr._instance = new BjleMgr; }
        return BjleMgr._instance;
    }
    public static delInstance() {
        if(BjleMgr._instance) { 
            BjleMgr._instance.clear(); 
            BjleMgr._instance = null;
        } 
    }
    on_clear(): void {
        
    }

    private enterData:baccarat.BaccaratSceneResp = null;
    setEnterData(data:baccarat.BaccaratSceneResp) {
        this.enterData = data;
    }
    getEnterData() : baccarat.BaccaratSceneResp {
        return this.enterData;
    }
}
