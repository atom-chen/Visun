import ModelBase from "../../../kernel/model/ModelBase";
import UIManager from "../../../kernel/view/UIManager";
import ServerConfig from "../definer/ServerConfig";
import { ChannelType } from "../../../kernel/looker/KernelDefine";
import ProcessorMgr from "../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../definer/ChannelDefine";
import ChannelMgr from "../../../kernel/net/channel/ChannelMgr";
import CHandler from "../../../kernel/basic/CHandler";
import LoginUser from "./LoginUser";
import { login_request } from "../proto/net_login";
import ViewDefine from "../definer/ViewDefine";


export default class LoginMgr extends ModelBase {
	private static _instance:LoginMgr = null;
	private constructor(){
		super();
	}
    public static getInstance() : LoginMgr {
        if(!LoginMgr._instance) { LoginMgr._instance = new LoginMgr; }
        return LoginMgr._instance;
	}
	public static delInstance() : void {
		if(LoginMgr._instance) {
			LoginMgr._instance.clear();
			LoginMgr._instance = null;
		}
	}
	public on_clear() {
		
	}


	public checkLogin(bTip: boolean): boolean {
		var hasLogin = LoginUser.getInstance() !== null && LoginUser.getInstance().Accounts !== "";
		if (bTip && !hasLogin) {
		//	UIManager.toast("请先登录");
			UIManager.openPopwnd(ViewDefine.LoginUI.path, null);
		}
		return hasLogin;
	}

	public leafLogin(Account:string, Pswd:string) {
		if(!Account || Account==="") {
			UIManager.toast("请输入账号");
			return;
		}
		if(!Pswd || Pswd==="") {
			UIManager.toast("请输入密码");
			return;
		}

		this.connectLeaf();
		login_request.ReqLogin({
			Account: Account, 
			Password: Pswd, 
			SecurityCode: "4245", 
			MachineCode: this.getMachineCode()
		});
	}

	public leafRegist(Account:string, Pswd:string, InviteCode:string) {
		if(!Account || Account==="") {
			UIManager.toast("请输入账号");
			return;
		}
		if(!Pswd || Pswd==="") {
			UIManager.toast("请输入密码");
			return;
		}
		
		InviteCode = InviteCode || "ssss";

		this.connectLeaf();
		login_request.ReqRegister({
			Account: Account, 
			Password: Pswd, 
			SecurityCode: "2323", 
		});
	}
	
	public connectLeaf() {
		//建立通道 
		var wsAddr = ServerConfig.leafServer;
		cc.log("连接leaf", wsAddr);
		var g_leafProcessor = ProcessorMgr.getInstance().getProcessor(ChannelDefine.game);
		var leafChan = ChannelMgr.getInstance().createChannel(ChannelDefine.game, ChannelType.Ws);
		leafChan.setProcessor(g_leafProcessor);
		g_leafProcessor.setChannel(leafChan);
		leafChan.connect( wsAddr, 0, null,
			new CHandler(this, ()=>{ 
				UIManager.openDialog("login_fail", "连接失败，是否重试？", (menuId:number)=>{
					if(menuId===1) {
						this.connectLeaf();
					}
				})
			})
		);
	}

	private getMachineCode() : string {
		return "54143213";
	}

}
