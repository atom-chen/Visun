import ModelBase from "../../../../../kernel/model/ModelBase";
import { brcowcow } from "../../../../../../declares/brcowcow";
import GameManager from "../../../../../common/script/model/GameManager";
import LoginUser from "../../../../../common/script/model/LoginUser";

export default class BrnnMgr extends ModelBase {
	private static _instance:BrnnMgr = null;
    public static getInstance() : BrnnMgr {
        if(!BrnnMgr._instance) { BrnnMgr._instance = new BrnnMgr; }
        return BrnnMgr._instance;
    }
    public static delInstance() : void {
		if(BrnnMgr._instance) {
			BrnnMgr._instance.clear();
			BrnnMgr._instance = null;
		}
	}
    on_clear(): void {

    }
    
    getEnterData() : brcowcow.IBrcowcowSceneResp {
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
	
	isMeHost() : boolean {
		var enterData = this.getEnterData();
		if(enterData) {
			return enterData.HostID == LoginUser.getInstance().UserId;
		} else {
			return false;
		}
	}
}