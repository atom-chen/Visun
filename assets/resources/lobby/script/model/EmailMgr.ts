import ModelBase from "../../../../kernel/model/ModelBase";

export default class EmailMgr extends ModelBase {
    private static _instance:EmailMgr = null;
    private constructor() {
        super();
    }
    public static instance() : EmailMgr {
        if(!EmailMgr._instance) { EmailMgr._instance = new EmailMgr; }
        return EmailMgr._instance;
    }
    on_clear(): void {

    }
    
}
