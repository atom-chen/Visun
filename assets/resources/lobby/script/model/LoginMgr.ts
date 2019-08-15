import UserMgr from "./UserMgr";

export default class LoginMgr {
	private static _instance:LoginMgr = null;

	private constructor(){}
    public static instance() : LoginMgr {
        if(!LoginMgr._instance) { LoginMgr._instance = new LoginMgr; }
        return LoginMgr._instance;
	}
	public static destroy() {
		if(LoginMgr._instance){
			LoginMgr._instance = null;
		}
	}

	public isLoginSucc() : boolean { 
		return UserMgr.instance().getHeroId()!==null; 
	}
}
