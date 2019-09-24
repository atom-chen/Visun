import UserMgr from "./UserMgr";
import ModelBase from "../../../kernel/model/ModelBase";
import { hallgw_packet_define } from "../proxy/net_hall";
import { login_msgs, login_packet_define, login_request } from "../proxy/net_UserLoginSvc";
import UIManager from "../../../kernel/view/UIManager";
import HttpCore from "../../../kernel/net/HttpCore";
import ServerConfig from "../definer/ServerConfig";
import EventCenter from "../../../kernel/event/EventCenter";
import KernelEvent from "../../../kernel/looker/KernelEvent";
import { HttpResult, ProcessorType, ChannelType } from "../../../kernel/looker/KernelDefine";
import ProcessorMgr from "../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../definer/ChannelDefine";
import ChannelMgr from "../../../kernel/net/channel/ChannelMgr";
import { login } from "../proto/UserLoginSvc";
import { hallgw } from "../proto/hall";
import proxy_hall from "../proxy/proxy_hall";
import CHandler from "../../../kernel/basic/CHandler";
import faultylabs from "../../../kernel/utils/MD5Util";

export default class LoginMgr extends ModelBase {
	private static _instance:LoginMgr = null;
	private _hall_ws_list = null;

	private constructor(){
		super();
		hallgw_packet_define[login_msgs.Msg_GsPackage] = login_packet_define[login_msgs.Msg_GsPackage];
		hallgw_packet_define[login_msgs.Msg_UserLogInResp] = login_packet_define[login_msgs.Msg_UserLogInResp];
	}
    public static instance() : LoginMgr {
        if(!LoginMgr._instance) { LoginMgr._instance = new LoginMgr; }
        return LoginMgr._instance;
	}
	public static destroy() : void {
		if(LoginMgr._instance) {
			LoginMgr._instance.clear();
			LoginMgr._instance = null;
		}
	}
	public on_clear() {
		
	}

	public isLoginSucc() : boolean { 
		return UserMgr.instance().getHeroId() !== null;
	}


	private onNetFail(info) {
		if(info.CMD === login_msgs.Msg_UserLogInResp) {
			UIManager.toast("登录失败");
		}
		else if(info.CMD === login_msgs.Msg_SysError) {
			UIManager.toast("系统错误");
		}
	}
	
	public connectLoginServer() {
		HttpCore.callGet(ServerConfig.gateServer, null, null, (iCode:HttpResult, data:any)=>{
			EventCenter.instance().listen(KernelEvent.NET_WS_FAIL, this.onNetFail, this);

			//获取可用服务器列表
			cc.log(iCode, data);
			var wsAddr;
			if(iCode===HttpResult.Succ) {
				var addrList = JSON.parse(data);
				this._hall_ws_list = addrList;
				if(addrList[0]) {
					wsAddr = "ws://" + addrList[0].ip + ":" + addrList[0].port;
				}
			}
			if(wsAddr===null || wsAddr===undefined) {
				UIManager.toast("获取服务器地址失败，请稍后重试");
				return;
			}

			//建立大厅通道 
			cc.log("连接大厅", wsAddr);
			var g_HallProcessor = ProcessorMgr.instance().createProcessor(ChannelDefine.hall, ProcessorType.Protobuff);
			var channel_hall = ChannelMgr.instance().createChannel(ChannelDefine.hall, ChannelType.Ws);
			channel_hall.setProcessor(g_HallProcessor);
			channel_hall.registProtocol(null);
			channel_hall.getProcessor().registCmds(hallgw_packet_define);
			channel_hall.getProcessor().setObserver(proxy_hall);
			//channel_hall.getProcessor().setHeartbeatFunc(()=>{ hallgw_request.Msg_HeartReq(null); })
			channel_hall.connect( wsAddr, 0, new CHandler(this, this.onConnLoginServerSucc), new CHandler(this, this.onConnLoginServerFail) );

			//发送登录请求
			this.sendLoginRequest();
		});
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
//			address : "aaaa",				// 登录地址: 由LoginSvc提供
			logType : 0,					// 登录类型: 由客户端提供??? 或者写死???
			memberId : 136589,				// 会员ID: 由客户端提供
			memberLoginDevice : 12345,		// 登录设备: 由客户端提供
//			memberLoginIp : "bbbb",			// 登录IP: 由网关提供
//			memberLoginTime : "111222",		// 登录时间: 由LoginSvc提供
//			memverLogOutTIme : "222333",	// 登出时间: 由LoginSvc提供
			merchantId : 0,					// 平台ID: 由客户端提供
			merchantMemberId : 12345,		// 平台会员ID: ???
//			merchantName : "aaddss",		// 平台名称
//			remark : "fffggg",				// 备注
			token : "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJHZW50Lk5pIiwic3ViIjoicGlwcGEiLCJpYXQiOjE1NjkwNjQ1OTgsImV4cCI6MTU2OTA2ODE5OH0.wdtu0aT6hzv2tR_Jeu-xMiAXiNJYk1r77XkZmXU7oMXf04IZo_Mk0J69VV-RhFMFNm2WesUwOBou5VMBzL9mQA"
		};

		var body = login.UserLogInReq.create(info);
		var buff_body = login.UserLogInReq.encode(body).finish();
		var bytes_body = new Uint8Array(buff_body);
		var sendInfo = {
			enBody: bytes_body,
			sign: faultylabs.MD5(bytes_body)
		}
		login_request.Msg_GsPackage(sendInfo);
	}

	//游客登录
	public loginAsYouke(): void {
		this.connectLoginServer();
	}

	//账号登录
	public loginByAccount(): void {
		this.connectLoginServer();
	}
}
