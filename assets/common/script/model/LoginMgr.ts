import ModelInterface from "../../../kernel/model/ModelInterface";
import UserMgr from "./UserMgr";

export default class LoginMgr implements ModelInterface {
	private static _instance:LoginMgr = null;

	private constructor(){}
    public static instance() : LoginMgr {
        if(!LoginMgr._instance) { LoginMgr._instance = new LoginMgr; }
        return LoginMgr._instance;
	}
	public clear() {
		
	}

	public isLoginSucc() : boolean { 
		return UserMgr.instance().getHeroId() !== null;
	}
}
