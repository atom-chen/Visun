import ModelBase from "../../../../kernel/model/ModelBase";
import { tbcowcow } from "../../../../../declares/tbcowcow";
import GameManager from "../../../../common/script/model/GameManager";

export default class TbnnMgr extends ModelBase {
	private static _instance:TbnnMgr = null;
    public static getInstance() : TbnnMgr {
        if(!TbnnMgr._instance) { TbnnMgr._instance = new TbnnMgr; }
        return TbnnMgr._instance;
    }
    public static delInstance() : void {
		if(TbnnMgr._instance) {
			TbnnMgr._instance.clear();
			TbnnMgr._instance = null;
		}
	}
	
	on_clear(): void {
		
	}

	getEnterData() : tbcowcow.ITbcowcowSceneResp {
        return GameManager.getInstance().getEnterData();
    }
	
}