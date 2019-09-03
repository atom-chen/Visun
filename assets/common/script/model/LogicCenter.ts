import LoginMgr from "./LoginMgr";
import UserMgr from "./UserMgr";
import ModelBase from "../../../kernel/model/ModelBase";


export default class LogicCenter {
    private static _instance:LogicCenter = null;

    private _managers:ModelBase[] = [];
    
    public static instance() : LogicCenter {
        if(!LogicCenter._instance){ LogicCenter._instance = new LogicCenter; }
        return LogicCenter._instance;
    }
    public static destroy() : void {
		if(LogicCenter._instance) {
			LogicCenter._instance.clear();
			LogicCenter._instance = null;
		}
	}

    //初始化逻辑数据
    //调用时机：登录前
    public init() {
        this.clear();
        this.registModel(LoginMgr);
        this.registModel(UserMgr);
    }

    //清理逻辑数据
    //调用时机：重新登录时
    public clear() {
        for(var i=0; i<this._managers.length; i++){
            this._managers[i].clear();
            if(this._managers[i]["destroy"]){
                this._managers[i]["destroy"]();
            }
        }
        this._managers.length = 0;
        this._managers = [];
    }

    public registModel(cls:any) {
        if(this._managers.indexOf( cls.instance() ) < 0){
            this._managers.push(cls.instance());
        }
    }
}

LogicCenter.instance().init();
