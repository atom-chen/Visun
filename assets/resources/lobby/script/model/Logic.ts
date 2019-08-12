import EventCenter from "../../../../script/kernel/event/EventCenter";
import LoginMgr from "./LoginMgr";
import UserMgr from "./UserMgr";

export default class Logic {
    private static _instance:Logic = null;
    private constructor() {}
    public static instance() : Logic {
        if(!Logic._instance){ Logic._instance = new Logic; }
        return Logic._instance;
    }

    //初始化逻辑数据
    //调用时机：登录前
    public initDatas(){
        this.clearDatas();

        EventCenter.instance();
        LoginMgr.instance();
        UserMgr.instance();
    }

    //清理逻辑数据
    //调用时机：重新登录时
    public clearDatas(){
        EventCenter.destroy();
        LoginMgr.destroy();
        UserMgr.destroy();
    }
}
