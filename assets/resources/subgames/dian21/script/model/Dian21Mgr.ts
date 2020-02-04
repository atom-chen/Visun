import ModelBase from "../../../../../kernel/model/ModelBase";

export default class Dian21Mgr extends ModelBase {
	private static _instance:Dian21Mgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : Dian21Mgr {
        if(!Dian21Mgr._instance) { Dian21Mgr._instance = new Dian21Mgr; }
        return Dian21Mgr._instance;
    }
    public static delInstance() : void {
		if(Dian21Mgr._instance) {
			Dian21Mgr._instance.clear();
			Dian21Mgr._instance = null;
		}
	}
    on_clear(): void {

	}
}