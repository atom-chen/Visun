import ModelInterface from "../../../../kernel/model/ModelInterface";

export default class EmailMgr implements ModelInterface {
    private static _instance:EmailMgr = null;
    private constructor() {}
    public static instance() : EmailMgr {
        if(!EmailMgr._instance) { EmailMgr._instance = new EmailMgr; }
        return EmailMgr._instance;
    }
    clear(): void {

    }
    
}
