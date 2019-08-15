import BaseModel from "../../../../script/kernel/model/BaseModel";
import Logic from "./Logic";

export default class LoginMgr implements BaseModel {
	private static _instance:LoginMgr = null;

	private constructor(){}
    public static instance() : LoginMgr {
        if(!LoginMgr._instance) { LoginMgr._instance = new LoginMgr; }
        return LoginMgr._instance;
	}
	public clear() {
		
	}

	public isLoginSucc() : boolean { 
		return Logic.instance().g_UserMgr.getHeroId() !== null;
	}
}
