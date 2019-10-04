import { hallgw_msgs, hallgw_request } from "./net_hall";
import { login_msgs } from "./net_UserLoginSvc";
import UIManager from "../../../kernel/view/UIManager";
import LoginMgr, { LoginUser } from "../model/LoginMgr";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import TimerManager from "../../../kernel/timer/TimerManager";
import CHandler from "../../../kernel/basic/CHandler";

var proxy_hall = {

	[login_msgs.MovedGateNot] : function(param:any) {
		var wsAddr = param.wsUri;
		LoginMgr.getInstance().onGateChange(wsAddr);
	},

	[login_msgs.Msg_UserLogInResp] : function(param:any) {
		UIManager.toast("登录成功");
		CommonUtil.simpleCopy(LoginUser.getInstance(), param.data);

		TimerManager.delaySecond(1, new CHandler(this, (tmr)=>{
			hallgw_request.MsgGetGameConfigReq({PlatformId:1});
		}) );
	},

	[hallgw_msgs.MsgNoticeNotify] : function(param:any) {
		UIManager.announce(param && param.content);
	},

	[hallgw_msgs.MsgGetUserInfoResp] : function(param:any) {
		cc.log(param);
	},

	[hallgw_msgs.MsgGetGameConfigResp] : function(param:any) {
		cc.log(param);
	},

}

export default proxy_hall;