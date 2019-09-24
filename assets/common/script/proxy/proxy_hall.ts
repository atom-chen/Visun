import { hallgw_msgs } from "./net_hall";
import { login_msgs } from "./net_UserLoginSvc";
import UIManager from "../../../kernel/view/UIManager";

var proxy_hall = {

	[login_msgs.Msg_UserLogInResp] : function(param:any) {
		cc.log("登录成功");
		cc.log(param);
		UIManager.toast("new 登录成功");
	},

	[hallgw_msgs.Msg_NoticeNotify] : function(param:any) {
		UIManager.announce(param && param.content);
	},

	[hallgw_msgs.Msg_UserInfoResp] : function(param:any) {
		cc.log(param);
	},

	[hallgw_msgs.Msg_GameListResp] : function(param:any) {
		cc.log(param);
	},

}

export default proxy_hall;