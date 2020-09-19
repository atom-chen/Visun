import GameManager from "../../../../common/script/model/GameManager";
import ModelBase from "../../../../kernel/model/ModelBase";

export default class RedblackMgr extends ModelBase {
	private static _instance:RedblackMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : RedblackMgr {
        if(!RedblackMgr._instance) { RedblackMgr._instance = new RedblackMgr; }
        return RedblackMgr._instance;
    }
    public static delInstance() : void {
		if(RedblackMgr._instance) {
			RedblackMgr._instance.clear();
			RedblackMgr._instance = null;
		}
	}
    on_clear(): void {

	}

	getEnterData() : redblack.IRedblackSceneResp {
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