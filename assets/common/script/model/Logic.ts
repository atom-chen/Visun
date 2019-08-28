import LoginMgr from "./LoginMgr";
import UserMgr from "./UserMgr";

export default class Logic {
    private static _instance:Logic = null;

    g_LoginMgr:LoginMgr;
    g_UserMgr:UserMgr;
    
    public static instance() : Logic {
        if(!Logic._instance){ Logic._instance = new Logic; }
        return Logic._instance;
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

Logic.instance().init();
