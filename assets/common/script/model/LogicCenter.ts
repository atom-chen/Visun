import LoginMgr from "./LoginMgr";
import UserMgr from "./UserMgr";

export default class LogicCenter {
    private static _instance:LogicCenter = null;

    g_LoginMgr:LoginMgr;
    g_UserMgr:UserMgr;
    
    public static instance() : LogicCenter {
        if(!LogicCenter._instance){ LogicCenter._instance = new LogicCenter; }
        return LogicCenter._instance;
    }

    //初始化逻辑数据
    //调用时机：登录前
    public init(){
        this.clear();
        this.g_LoginMgr = LoginMgr.instance();
        this.g_UserMgr = UserMgr.instance();
    }

    //清理逻辑数据
    //调用时机：重新登录时
    public clear(){
        LoginMgr.instance().clear();
        UserMgr.instance().clear();
        this.g_UserMgr = null;
        this.g_LoginMgr = null;
    }
}

LogicCenter.instance().init();
