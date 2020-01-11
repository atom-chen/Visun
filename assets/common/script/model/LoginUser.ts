import ModelBase from "../../../kernel/model/ModelBase";

//登陆用户
export default class LoginUser extends ModelBase {
	private static _instance:LoginUser = null;

	UserID: number = 0;			//用户ID
	Accounts:string = "";		//帐号
	Password:string = "";		//密码
	Name:string = "";			//昵称
	FaceID:number = 0;			//头像
	Gender:number = 0;			//性别
	Age:number = 0;				//年龄
	Level:number = 0;			//VIP级别
	Money:number = 0;			//金币
	PassPortID:string = "";		//证件号
	Compellation:string = "";	//真实名字
	AgentID:number = 0;			//代理标识
	SpreaderGameID:number = 0; 	//推荐标识
	ClientAddr:number = 0;		//连接地址
	MachineCode:string = "";	//机器序列

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

	public getMoney() : number {
		return this.Money;
	}
	
}