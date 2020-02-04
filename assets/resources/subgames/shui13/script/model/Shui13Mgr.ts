import ModelBase from "../../../../../kernel/model/ModelBase";

export default class Shui13Mgr extends ModelBase {
	private static _instance:Shui13Mgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : Shui13Mgr {
        if(!Shui13Mgr._instance) { Shui13Mgr._instance = new Shui13Mgr; }
        return Shui13Mgr._instance;
    }
    public static delInstance() : void {
		if(Shui13Mgr._instance) {
			Shui13Mgr._instance.clear();
			Shui13Mgr._instance = null;
		}
	}
    on_clear(): void {

	}
}