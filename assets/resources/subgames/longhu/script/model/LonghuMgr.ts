import ModelBase from "../../../../../kernel/model/ModelBase";
import { tigerXdragon } from "../../../../../../declares/tigerXdragon";
import GameManager from "../../../../../common/script/model/GameManager";

export default class LonghuMgr extends ModelBase {
	private static _instance:LonghuMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : LonghuMgr {
        if(!LonghuMgr._instance) { LonghuMgr._instance = new LonghuMgr; }
        return LonghuMgr._instance;
    }
    public static delInstance() : void {
		if(LonghuMgr._instance) {
			LonghuMgr._instance.clear();
			LonghuMgr._instance = null;
		}
	}
    on_clear(): void {

    }
    
    getEnterData() : tigerXdragon.ITigerXdragonSceneResp {
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