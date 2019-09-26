import { hallgw_msgs } from "./net_hall";
import { login_msgs } from "./net_UserLoginSvc";
import UIManager from "../../../kernel/view/UIManager";
import LoginMgr, { LoginUser } from "../model/LoginMgr";

var proxy_hall = {

	[login_msgs.MovedGateNot] : function(param:any) {
		var wsAddr = param.wsUri;
		LoginMgr.getInstance().onGateChange(wsAddr);
	},

	[login_msgs.Msg_UserLogInResp] : function(param:any) {
		cc.log("登录成功");
		cc.log(param);
		UIManager.toast("new 登录成功");

		var data = param.data;
		for(var k in data) {
			LoginUser.getInstance()[k] = data[k];
		}
	},

	[hallgw_msgs.Msg_BroadcastNotice] : function(param:any) {
		UIManager.announce(param && param.content);
	},

	[hallgw_msgs.Msg_GetUserInfoResp] : function(param:any) {
		cc.log(param);
	},

	[hallgw_msgs.Msg_GetGameConfigResp] : function(param:any) {
		cc.log(param);
	},

}

export default proxy_hall;