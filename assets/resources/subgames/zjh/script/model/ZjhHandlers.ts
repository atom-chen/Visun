import { zhajinhua_msgs } from "../../../../../common/script/proto/net_zhajinhua";
import ZjhMgr from "./ZjhMgr";
import { zhajinhua } from "../../../../../../declares/zhajinhua";

var ZjhHandlers = {

	[zhajinhua_msgs.ZhajinhuaAddPlayerResp] : function(param) {

	},

	[zhajinhua_msgs.ZhajinhuaDelPlayerResp] : function(param) {
		
	},

	[zhajinhua_msgs.ZhajinhuaSceneResp] : function(param) {
		
	},

	[zhajinhua_msgs.ZhajinhuaStateFreeResp] : function(param) {
		
	},

	[zhajinhua_msgs.ZhajinhuaStateStartResp] : function(param) {
		
	},

	[zhajinhua_msgs.ZhajinhuaStatePlayingResp] : function(param) {
		
	},

	[zhajinhua_msgs.ZhajinhuaStateOverResp] : function(param) {
		
	},

	[zhajinhua_msgs.ZhajinhuaHostResp] : function(param:zhajinhua.IZhajinhuaHostResp) {
		if(ZjhMgr.getInstance().getEnterData()) {
			ZjhMgr.getInstance().getEnterData().Banker = param.CurHost;
		}
	},

	[zhajinhua_msgs.ZhajinhuaReadyResp] : function(param) {
		
	},

	[zhajinhua_msgs.ZhajinhuaFollowResp] : function(param) {
		
	},

	[zhajinhua_msgs.ZhajinhuaRaiseResp] : function(param) {
		
	},

	[zhajinhua_msgs.ZhajinhuaLookResp] : function(param) {
		ZjhMgr.getInstance().getPlayer(param.UserId).IsSee = true;
	},

	[zhajinhua_msgs.ZhajinhuaCompareResp] : function(param) {
		
	},

	[zhajinhua_msgs.ZhajinhuaGiveupResp] : function(param) {
		
	},

	[zhajinhua_msgs.ZhajinhuaOverResp] : function(param) {
		
	},

};

export default ZjhHandlers;