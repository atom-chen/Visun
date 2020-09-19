import ModelBase from "../../../../../kernel/model/ModelBase";
import { baccarat } from "../../../../../../declares/baccarat";
import GameManager from "../../../../../common/script/model/GameManager";

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

    getEnterData() : baccarat.IBaccaratSceneResp {
        return GameManager.getInstance().getEnterData();
    }

    clearBets() {
        var enterData = this.getEnterData();
		if(enterData) {
			if(enterData.AreaBets) {
				for(var i=0; i<enterData.AreaBets.length; i++) {
					enterData.AreaBets[i] = 0;
				}
			}
			if(enterData.MyBets) {
				for(var i=0; i<enterData.MyBets.length; i++) {
					enterData.MyBets[i] = 0;
				}
			}
		}
    }
}
