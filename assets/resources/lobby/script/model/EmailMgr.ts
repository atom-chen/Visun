import ModelBase from "../../../../kernel/model/ModelBase";

export default class EmailMgr extends ModelBase {
    private static _instance:EmailMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : EmailMgr {
        if(!EmailMgr._instance) { EmailMgr._instance = new EmailMgr; }
        return EmailMgr._instance;
    }
    public static delInstance() : void {
		if(EmailMgr._instance) {
			EmailMgr._instance.clear();
			EmailMgr._instance = null;
		}
	}
    on_clear(): void {

    }
    
}
