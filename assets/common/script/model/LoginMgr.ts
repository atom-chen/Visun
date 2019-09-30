import UserMgr from "./UserMgr";
import ModelBase from "../../../kernel/model/ModelBase";
import UIManager from "../../../kernel/view/UIManager";
import HttpCore from "../../../kernel/net/HttpCore";
import ServerConfig from "../definer/ServerConfig";
import EventCenter from "../../../kernel/event/EventCenter";
import KernelEvent from "../../../kernel/looker/KernelEvent";
import { HttpResult, ProcessorType, ChannelType, ConnState } from "../../../kernel/looker/KernelDefine";
import ProcessorMgr from "../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../definer/ChannelDefine";
import ChannelMgr from "../../../kernel/net/channel/ChannelMgr";
import proxy_hall from "../proxy/proxy_hall";
import CHandler from "../../../kernel/basic/CHandler";
import { hallgw_packet_define } from "../proxy/net_hall";
import { login_msgs, login_packet_define, login_request } from "../proxy/net_UserLoginSvc";
import { room_packet_define } from "../proxy/net_RoomProto";


export class LoginUser extends ModelBase {
	private static _instance:LoginUser = null;

	userid:number = 0;			//会员id
	headicon:string;      		//商户名称
	name:string;        		//会员名称
	sign:string;            	//token
	coin:string;            	//以上分金额

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



export default class LoginMgr extends ModelBase {
	private static _instance:LoginMgr = null;
	private _hall_ws_list = null;

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

	public isLoginSucc() : boolean { 
		return UserMgr.getInstance().getHeroId() !== null;
	}

	public checkLogin(bTip: boolean): boolean {
		var hasLogin = LoginUser.getInstance().userid !== 0;
		if (bTip && !hasLogin) {
			UIManager.toast("请先登录");
		}
		return hasLogin;
	}


	private onNetFail(info) {
		if(info.CMD === login_msgs.Msg_UserLogInResp) {
			UIManager.toast("登录失败");
		}
		else if(info.CMD === login_msgs.Msg_SysError) {
			UIManager.toast("系统错误");
		}
		else if(info.CMD === login_msgs.CheckTokenRes) {
			//session过期，需重新登录
			if(info.code === 404) {
				LoginMgr.getInstance().loginAsYouke();
			}
		}
	}

	private onNetWorkChange(net:any)
    {
        if(ChannelDefine.hall == net.getName())
        {
            cc.log("网络状态 "+net.getName()+":"+net.getState());
            //重连成功
            if(net.getState() == ConnState.reconnectsucc)
            {
				if(!LoginMgr.getInstance().checkLogin(false)) {
					cc.log("尚未登录");
					this.sendLoginRequest();
					return;
				}
                login_request.CheckTokenReq({ uid:LoginUser.getInstance().userid, token:LoginUser.getInstance().sign });
            }
            //3次重连失败 弹提示框 
            if(net.getState() == ConnState.reconnectfail)
            {
                UIManager.openDialog("reconnect_cfm", "与服务器断开连接，请重新尝试", (flag)=>{
                    if(flag == 1) {
                        net.reconnect();
					}
                });
            }
        }
    }
	
	public connectLoginServer() {
		HttpCore.callGet(ServerConfig.gateServer, null, null, (iCode:HttpResult, data:any)=>{
			EventCenter.getInstance().listen(KernelEvent.NET_WS_FAIL, this.onNetFail, this);
			EventCenter.getInstance().listen(KernelEvent.NET_STATE, this.onNetWorkChange, this);

			//获取可用服务器列表
			cc.log(iCode, data);
			var wsAddr;
			if(iCode===HttpResult.Succ) {
				var addrList = JSON.parse(data);
				this._hall_ws_list = addrList;
				wsAddr = addrList[0];
			}
			if(wsAddr===null || wsAddr===undefined) {
				UIManager.toast("获取服务器地址失败，请稍后重试");
				return;
			}

			//建立大厅通道 
			cc.log("连接大厅", wsAddr);
			var g_HallProcessor = ProcessorMgr.getInstance().createProcessor(ChannelDefine.hall, ProcessorType.Protobuff);
			var channel_hall = ChannelMgr.getInstance().createChannel(ChannelDefine.hall, ChannelType.Ws);
			channel_hall.setProcessor(g_HallProcessor);
			channel_hall.getProcessor().unregistAllCmds();
			channel_hall.getProcessor().registCmds(hallgw_packet_define);
			channel_hall.getProcessor().registCmds(login_packet_define);
			channel_hall.getProcessor().registCmds(room_packet_define);
			channel_hall.getProcessor().getDispatcher().setObserver(proxy_hall);
			//channel_hall.getProcessor().setHeartbeatFunc(()=>{ hallgw_request.Msg_HeartReq(null); })
			channel_hall.connect( wsAddr, 0, new CHandler(this, this.onConnLoginServerSucc), new CHandler(this, this.onConnLoginServerFail) );

			//发送登录请求
			this.sendLoginRequest();
		});
	}

	public onGateChange(wsAddr:string) {
		//建立大厅通道 
		cc.log("连接大厅", wsAddr);
		var g_HallProcessor = ProcessorMgr.getInstance().createProcessor(ChannelDefine.hall, ProcessorType.Protobuff);
		var channel_hall = ChannelMgr.getInstance().createChannel(ChannelDefine.hall, ChannelType.Ws);
		channel_hall.setProcessor(g_HallProcessor);
		//g_HallProcessor.setHeartbeatFunc(()=>{ login_request.Msg_HeartReq(null); });
		channel_hall.close();
		channel_hall.connect( wsAddr, 0, new CHandler(this, this.onConnLoginServerSucc), new CHandler(this, this.onConnLoginServerFail) );
		if(!LoginMgr.getInstance().checkLogin(false)) {
			login_request.CheckTokenReq({uid:LoginUser.getInstance().userid, token:LoginUser.getInstance().sign});
		}
	}

	private onConnLoginServerSucc() {
		cc.log("连接大厅ws成功");
	//	UIManager.toast("连接大厅ws成功");
	}

	private onConnLoginServerFail() {
		cc.log("连接大厅ws失败");
		UIManager.toast("连接大厅失败");
	}

	private sendLoginRequest() {
		//发送登录请求
		var info = {
			token : "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJHZW50Lk5pIiwic3ViIjoicGlwcGEiLCJpYXQiOjE1NjkwNjQ1OTgsImV4cCI6MTU2OTA2ODE5OH0.wdtu0aT6hzv2tR_Jeu-xMiAXiNJYk1r77XkZmXU7oMXf04IZo_Mk0J69VV-RhFMFNm2WesUwOBou5VMBzL9mQA"
		};
		login_request.Msg_UserLogInReq(info);
	}

	//游客登录
	public loginAsYouke(): void {
		if(this.checkLogin(false)) { return; }
		this.connectLoginServer();
	}

	//账号登录
	public loginByAccount(): void {
		if(this.checkLogin(false)) { return; }
		this.connectLoginServer();
	}
}
