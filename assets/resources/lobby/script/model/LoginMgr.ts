import User from "./User";

export default class LoginMgr {
	public static instance:LoginMgr = new LoginMgr();

	private _token:string = "";

	public get token() : string { return this._token; }
	public set token(v:string) { this._token = v; }
	public isLoginSucc() : boolean { return this._token !== "" && User.getHeroId()!==null; }
}
