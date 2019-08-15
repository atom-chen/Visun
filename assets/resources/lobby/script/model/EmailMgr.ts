import BaseModel from "../../../../script/kernel/model/BaseModel";

export default class EmailMgr implements BaseModel {
    private static _instance:EmailMgr = null;
    private constructor() {}
    public static instance() : EmailMgr {
        if(!EmailMgr._instance) { EmailMgr._instance = new EmailMgr; }
        return EmailMgr._instance;
    }
    clear(): void {

    }
    
}
