import ModelBase from "../../../kernel/model/ModelBase";

export default class LoginUser extends ModelBase {
	private static _instance:LoginUser = null;

	userid:number = 0;
	headicon:string = "";
	name:string = "";
	sign:string = "";
	coin:string = "";

	private constructor() {
		super();
	}

	public on_clear(): void {
		
	}

	public static getInstance() : LoginUser {
		if(!LoginUser._instance) { LoginUser._instance = new LoginUser; }
		return LoginUser._instance;
	}

	public static delInstance() {
		if (LoginUser._instance) {
			LoginUser._instance.clear();
			LoginUser._instance = null;
		}
	}
	
}