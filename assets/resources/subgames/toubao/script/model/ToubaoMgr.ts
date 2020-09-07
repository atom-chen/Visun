import ModelBase from "../../../../../kernel/model/ModelBase";
import { brtoubao } from "../../../../../../declares/brtoubao";

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
    

    private enterData:brtoubao.IBrtoubaoSceneResp = null;
    setEnterData(data:brtoubao.IBrtoubaoSceneResp) {
        this.enterData = data;
    }
    getEnterData() : brtoubao.IBrtoubaoSceneResp {
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