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

    clearBets() {
		if(this.enterData) {
			for(var i=0; i<this.enterData.AreaBets.length; i++) {
				this.enterData.AreaBets[i] = 0;
			}
			for(var i=0; i<this.enterData.MyBets.length; i++) {
				this.enterData.MyBets[i] = 0;
			}
		}
    }
}
