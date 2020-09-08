import ModelBase from "../../../../../kernel/model/ModelBase";
import { brtoubao } from "../../../../../../declares/brtoubao";
import GameManager from "../../../../../common/script/model/GameManager";

export default class ToubaoMgr extends ModelBase {
	private static _instance:ToubaoMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : ToubaoMgr {
        if(!ToubaoMgr._instance) { ToubaoMgr._instance = new ToubaoMgr; }
        return ToubaoMgr._instance;
    }
    public static delInstance() : void {
		if(ToubaoMgr._instance) {
			ToubaoMgr._instance.clear();
			ToubaoMgr._instance = null;
		}
	}
    on_clear(): void {

    }
    

    getEnterData() : brtoubao.IBrtoubaoSceneResp {
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