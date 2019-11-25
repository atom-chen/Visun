import ModelBase from "../../../../../kernel/model/ModelBase";

export default class DDzMgr extends ModelBase {
	private static _instance:DDzMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : DDzMgr {
        if(!DDzMgr._instance) { DDzMgr._instance = new DDzMgr; }
        return DDzMgr._instance;
    }
    public static delInstance() : void {
		if(DDzMgr._instance) {
			DDzMgr._instance.clear();
			DDzMgr._instance = null;
		}
	}
    on_clear(): void {

	}
	
	//---- 上一个玩家的出牌 --------------
	getPreout() : Array<number> {
		return null;
	}
}