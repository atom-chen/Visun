import { LoginState } from "../../../../Script/looker/Consts";


export default class LoginMgr {
	public static instance:LoginMgr = new LoginMgr();

	private _curState:LoginState = LoginState.unlogin;
	private _token:string = "";

	public get token() : string { return this._token; }
	public set token(v:string) { this._token = v; }
	public isLoginSucc() : boolean { return this._token !== ""; }
}
