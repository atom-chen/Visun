import UserMgr from "./UserMgr";
import ModelBase from "../../../kernel/model/ModelBase";

export default class LoginMgr extends ModelBase {
	private static _instance:LoginMgr = null;

	private constructor(){
		super();
	}
    public static instance() : LoginMgr {
        if(!LoginMgr._instance) { LoginMgr._instance = new LoginMgr; }
        return LoginMgr._instance;
	}
	public on_clear() {
		
	}

	public isLoginSucc() : boolean { 
		return UserMgr.instance().getHeroId() !== null;
	}
}
