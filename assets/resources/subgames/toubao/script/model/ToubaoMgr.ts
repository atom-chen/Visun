import ModelBase from "../../../../../kernel/model/ModelBase";

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
}