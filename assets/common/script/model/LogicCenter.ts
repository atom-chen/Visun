import LoginMgr from "./LoginMgr";
import UserMgr from "./UserMgr";
import ModelBase from "../../../kernel/model/ModelBase";


export default class LogicCenter {
    private static _instance:LogicCenter = null;

    private _managers:any[] = [];
    
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
        this.clear();
        this.registModel(LoginMgr);
        this.registModel(UserMgr);
    }

    //清理逻辑数据
    //调用时机：重新登录时
    public clear() {
        for(var i=0; i<this._managers.length; i++){
            this._managers[i].getInstance().clear();
            this._managers[i].delInstance();
        }
        this._managers.length = 0;
        this._managers = [];
    }

    public registModel(cls:any) {
        cls.getInstance();
        if(this._managers.indexOf(cls) < 0){
            this._managers.push(cls);
        }
    }
}

LogicCenter.getInstance().init();
