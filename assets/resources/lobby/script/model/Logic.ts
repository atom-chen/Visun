import EventCenter from "../../../../script/kernel/event/EventCenter";
import LoginMgr from "./LoginMgr";
import UserMgr from "./UserMgr";

export default class Logic {
    private static _instance:Logic = null;

    g_EventMgr:EventCenter;
    g_LoginMgr:LoginMgr;
    g_UserMgr:UserMgr;

    private constructor() {
        this.g_EventMgr = EventCenter.instance();
    }
    public static instance() : Logic {
        if(!Logic._instance){ Logic._instance = new Logic; }
        return Logic._instance;
    }

    //初始化逻辑数据
    //调用时机：登录前
    public initDatas(){
        this.clearDatas();
        this.g_LoginMgr = LoginMgr.instance();
        this.g_UserMgr = UserMgr.instance();
    }

    //清理逻辑数据
    //调用时机：重新登录时
    public clearDatas(){
        LoginMgr.destroy();
        UserMgr.destroy();
        this.g_UserMgr = null;
        this.g_LoginMgr = null;
    }
}
