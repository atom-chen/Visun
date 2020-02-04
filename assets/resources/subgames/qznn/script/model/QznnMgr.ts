import ModelBase from "../../../../../kernel/model/ModelBase";

export default class QznnMgr extends ModelBase {
	private static _instance:QznnMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : QznnMgr {
        if(!QznnMgr._instance) { QznnMgr._instance = new QznnMgr; }
        return QznnMgr._instance;
    }
    public static delInstance() : void {
		if(QznnMgr._instance) {
			QznnMgr._instance.clear();
			QznnMgr._instance = null;
		}
	}
    on_clear(): void {

	}
}