import ModelBase from "../../../../../kernel/model/ModelBase";
import { tuitongzi } from "../../../../../../declares/tuitongzi";
import GameManager from "../../../../../common/script/model/GameManager";

export default class BrttzMgr extends ModelBase {
	private static _instance:BrttzMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : BrttzMgr {
        if(!BrttzMgr._instance) { BrttzMgr._instance = new BrttzMgr; }
        return BrttzMgr._instance;
    }
    public static delInstance() : void {
		if(BrttzMgr._instance) {
			BrttzMgr._instance.clear();
			BrttzMgr._instance = null;
		}
	}
    on_clear(): void {

    }
    
    getEnterData() : tuitongzi.ITuitongziSceneResp {
        return GameManager.getInstance().getEnterData();
    }

    clearBets() {
        var enterData = this.getEnterData();
		if(enterData) {
			for(var i=0; i<enterData.AreaBets.length; i++) {
				enterData.AreaBets[i] = 0;
			}
			for(var i=0; i<enterData.MyBets.length; i++) {
				enterData.MyBets[i] = 0;
			}
		}
	}
}