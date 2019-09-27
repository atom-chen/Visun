import LoginMgr, { LoginUser } from "./LoginMgr";
import UserMgr from "./UserMgr";
import GameManager from "./GameManager";


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

LogicCenter.getInstance().init();
