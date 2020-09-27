import ModelBase from "../../../../kernel/model/ModelBase";


export default class JszjhMgr extends ModelBase {
	private static _instance:JszjhMgr = null;
    public static getInstance() : JszjhMgr {
        if(!JszjhMgr._instance) { JszjhMgr._instance = new JszjhMgr; }
        return JszjhMgr._instance;
    }
    public static delInstance() : void {
		if(JszjhMgr._instance) {
			JszjhMgr._instance.clear();
			JszjhMgr._instance = null;
		}
	}
	
	on_clear(): void {
		
	}
	
}