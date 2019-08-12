import UserMgr from "./UserMgr";

export default class LoginMgr {
	private static _instance:LoginMgr = null;

	private _token:string = "";

	private constructor(){}
    public static instance() : LoginMgr {
        if(!LoginMgr._instance) { LoginMgr._instance = new LoginMgr; }
        return LoginMgr._instance;
	}
	public static destroy() {
		LoginMgr._instance = null;
	}

	public get token() : string { return this._token; }
	public set token(v:string) { this._token = v; }
	public isLoginSucc() : boolean { return this._token !== "" && UserMgr.instance().getHeroId()!==null; }
}
