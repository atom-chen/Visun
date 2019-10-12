import UIManager from "../../../kernel/view/UIManager";
import LoginSihaiMgr from "../model/LoginSihaiMgr";
import CommonUtil from "../../../kernel/utils/CommonUtil";
import TimerManager from "../../../kernel/timer/TimerManager";
import CHandler from "../../../kernel/basic/CHandler";
import LoginUser from "../model/LoginUser";
import LogicCenter from "../model/LogicCenter";
import { login_msgs } from "../proto/net_UserLoginSvc";
import { hallgw_request, hallgw_msgs } from "../proto/net_hall";

var proxy_hall = {

	[login_msgs.MovedGateNot] : function(param:any) {
		var wsAddr = param.wsUri;
		LoginSihaiMgr.getInstance().onGateChange(wsAddr);
	},

	[login_msgs.UserLogInResp] : function(param:any) {
		LogicCenter.getInstance().init();
		
		UIManager.toast("登录成功");
		param.data.coin = parseFloat(param.data.coin);
		CommonUtil.simpleCopy(LoginUser.getInstance(), param.data);

		TimerManager.delaySecond(1, new CHandler(this, (tmr)=>{
			hallgw_request.MsgGetUserInfoReq({Id:LoginUser.getInstance().userid});
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