import ModelBase from "../../../../../kernel/model/ModelBase";

export default class JskbMgr extends ModelBase {
	private static _instance:JskbMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : JskbMgr {
        if(!JskbMgr._instance) { JskbMgr._instance = new JskbMgr; }
        return JskbMgr._instance;
    }
    public static delInstance() : void {
		if(JskbMgr._instance) {
			JskbMgr._instance.clear();
			JskbMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}