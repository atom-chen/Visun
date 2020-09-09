import ModelBase from "../../../../../kernel/model/ModelBase";
import { sangong } from "../../../../../../declares/sangong";
import GameManager from "../../../../../common/script/model/GameManager";

export default class SangongMgr extends ModelBase {
	private static _instance:SangongMgr = null;
    public static getInstance() : SangongMgr {
        if(!SangongMgr._instance) { SangongMgr._instance = new SangongMgr; }
        return SangongMgr._instance;
    }
    public static delInstance() : void {
		if(SangongMgr._instance) {
			SangongMgr._instance.clear();
			SangongMgr._instance = null;
		}
	}
    on_clear(): void {

    }
    
    getEnterData() : sangong.ISangongSceneResp {
        return GameManager.getInstance().getEnterData();
    }
}