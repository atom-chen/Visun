import ModelBase from "../../../kernel/model/ModelBase";
import UIManager from "../../../kernel/view/UIManager";
import ServerConfig from "../definer/ServerConfig";
import { ChannelType, ConnState, ProcessorType } from "../../../kernel/basic/defines/KernelDefine";
import ProcessorMgr from "../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../definer/ChannelDefine";
import ChannelMgr from "../../../kernel/net/channel/ChannelMgr";
import CHandler from "../../../kernel/basic/datastruct/CHandler";
import LoginUser from "./LoginUser";
import ViewDefine from "../definer/ViewDefine";
import EventCenter from "../../../kernel/basic/event/EventCenter";
import KernelEvent from "../../../kernel/basic/defines/KernelEvent";
import IChannel from "../../../kernel/net/channel/IChannel";
import { login_request, login_packet_define } from '../proto/net_login';
import { chat_packet_define } from "../proto/net_chat";
import { comand_packet_define } from "../proto/net_comand";
import { gamecomm_packet_define } from "../proto/net_gamecomm";
import { baccarat_packet_define } from "../proto/net_baccarat";
import { cowcow_packet_define } from "../proto/net_cowcow";
import { landLords_packet_define } from "../proto/net_landLords";
import { mahjong_packet_define } from "../proto/net_mahjong";
import { fishLord_packet_define } from "../proto/net_fishLord";
import NetHandlers from "../proxy/NetHandlers";
import IProcessor from "../../../kernel/net/processor/IProcessor";

//登陆管理
export default class LoginMgr extends ModelBase {
	private static _instance:LoginMgr = null;
	private constructor(){
		super();
		//重连逻辑
		EventCenter.getInstance().listen(KernelEvent.NET_STATE, (chan:IChannel)=>{
            if(chan.getName()===ChannelDefine.game) {
                if(chan.getState()===ConnState.reconnectfail) {
                    UIManager.openDialog("reconnectfail", "游戏连接断开，是否重连？", (menuId:number)=>{
                        if(menuId===1) {
                            chan.reconnect();
                        }
                    })
                } else if(chan.getState()===ConnState.reconnectsucc) {
					LoginMgr.getInstance().leafLogin(LoginUser.getInstance().Name, LoginUser.getInstance().Password);
				}
            }
        }, this);
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


	//获取机器码
	private getMachineCode() : string {
		return "54143213";
	}

	private initGameProcessor() : IProcessor {
		var obj = ProcessorMgr.getInstance().getProcessor(ChannelDefine.game);
		if(obj) {
			return obj;
		}
        var g_leafProcessor = ProcessorMgr.getInstance().createProcessor(ChannelDefine.game, ProcessorType.LeafWs);
		g_leafProcessor.unregistAllCmds();
        g_leafProcessor.registCmds(login_packet_define);
        g_leafProcessor.registCmds(chat_packet_define);
        g_leafProcessor.registCmds(comand_packet_define);
        g_leafProcessor.registCmds(gamecomm_packet_define);
        g_leafProcessor.registCmds(baccarat_packet_define);
        g_leafProcessor.registCmds(cowcow_packet_define);
        g_leafProcessor.registCmds(landLords_packet_define);
        g_leafProcessor.registCmds(mahjong_packet_define);
        g_leafProcessor.registCmds(fishLord_packet_define);
		g_leafProcessor.getDispatcher().addObserver(NetHandlers);
		return g_leafProcessor;
	}

	//建立网络连接
	public connectServer() {
		//建立通道 
		var wsAddr = ServerConfig.leafServer;
		cc.log("连接登陆服", wsAddr);
		var g_leafProcessor = this.initGameProcessor();
		var leafChan = ChannelMgr.getInstance().createChannel(ChannelDefine.game, ChannelType.Ws);
		leafChan.setProcessor(g_leafProcessor);
		g_leafProcessor.setChannel(leafChan);
		leafChan.connect( wsAddr, 0, 
			new CHandler(this, ()=>{
				
			}),
			new CHandler(this, ()=>{ 
				UIManager.openDialog("loginconn_fail", "登陆服连接失败，是否重试？", (menuId:number)=>{
					if(menuId===1) {
						this.connectServer();
					}
				})
			})
		);
	}

	//检测是否已经登陆
	public checkLogin(bTip: boolean): boolean {
		cc.log("用户: ", LoginUser.getInstance().UserID);
		var hasLogin = LoginUser.getInstance() !== null && LoginUser.getInstance().UserID > 0;
		if (bTip && !hasLogin) {
		//	UIManager.toast("请先登录");
			UIManager.openPopwnd(ViewDefine.UILogin, false, null);
		}
		return hasLogin;
	}

	//登陆
	public leafLogin(Account:string, Pswd:string) {
		if(!Account || Account==="") {
			UIManager.toast("请输入账号");
			return;
		}
		if(!Pswd || Pswd==="") {
			UIManager.toast("请输入密码");
			return;
		}

		this.connectServer();
		
		login_request.Login({
			Account: Account, 
			Password: Pswd, 
			SecurityCode: "4245", 
			MachineCode: this.getMachineCode()
		});
	}

	//注册
	public leafRegist(Account:string, Pswd:string, SecurityCode:string, InviteCode:string) {
		if(!Account || Account==="") {
			UIManager.toast("请输入账号");
			return;
		}
		if(!Pswd || Pswd==="") {
			UIManager.toast("请输入密码");
			return;
		}
		
		InviteCode = InviteCode || "ssss";

		this.connectServer();

		login_request.Register({
			Name : Account,
			Password : Pswd,
			SecurityCode : SecurityCode,
			MachineCode : this.getMachineCode(),
			InvitationCode : InviteCode
		})
	}

}
