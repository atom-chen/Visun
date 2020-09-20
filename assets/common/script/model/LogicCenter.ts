//---------------------------------
// 模块管理器
//---------------------------------
import LoginMgr from "./LoginMgr";
import GameManager from "./GameManager";
import LoginUser from "./LoginUser";
import HttpCore from "../../../kernel/net/HttpCore";
import ServerConfig from "../definer/ServerConfig";
import http_rules from "../proto/http_rules";
import HallRequest from "../proto/HallRequest";
import HallRespond from "../proxy/HallRespond";
import EventCenter from "../../../kernel/basic/event/EventCenter";
import KernelEvent from "../../../kernel/basic/defines/KernelEvent";
import UIManager from "../../../kernel/view/UIManager";


//模块管理器
export default class LogicCenter {
    private static _instance:LogicCenter = null;

    private _managers:any[] = [];

    private constructor() {
        //初始化Http协议
        HttpCore.setMainUrl(ServerConfig.mainHttpUrl);
        HttpCore.registProcotol(http_rules, HallRequest, HallRespond);
    }
    
    public static getInstance() : LogicCenter {
        if(!LogicCenter._instance){ LogicCenter._instance = new LogicCenter; }
        return LogicCenter._instance;
    }
    public static delInstance() : void {
		if(LogicCenter._instance) {
			LogicCenter._instance.clear();
			LogicCenter._instance = null;
		}
	}

    //初始化逻辑数据
    //调用时机：登录前
    public init() {
        this.registModel(LoginMgr);
        this.registModel(LoginUser);
        this.registModel(GameManager);
    }

    //清理逻辑数据
    //调用时机：重新登录时
    public clear() {
        for(var i=0; i<this._managers.length; i++){
            this._managers[i].getInstance().clear();
            this._managers[i].delInstance();
            cc.log("unregist model ", i+1);
        }
        this._managers.length = 0;
        this._managers = [];
    }

    
    public registModel(cls:any) {
        if(!cls.delInstance) { cc.error("no delInstance", cls); }
        cls.getInstance();
        if(this._managers.indexOf(cls) < 0){
            this._managers.push(cls);
            cc.log("regist model ", this._managers.length);
        }
    }

    public unregistModel(cls:any) {
        var idx = this._managers.indexOf(cls);
        if(idx >= 0) {
            this._managers.splice(idx);
            cls.getInstance().clear();
            cls.delInstance();
            cc.log("unregist model ", this._managers.length);
        }
    }
}

LogicCenter.getInstance();
