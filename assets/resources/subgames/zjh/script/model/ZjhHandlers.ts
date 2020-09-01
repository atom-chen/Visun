import { zhajinhua_msgs } from "../../../../../common/script/proto/net_zhajinhua";
import ZjhMgr from "./ZjhMgr";
import { zhajinhua } from "../../../../../../declares/zhajinhua";
import { ZjhFightState } from "./ZjhDefine";

var ZjhHandlers = {

	[zhajinhua_msgs.ZhajinhuaAddPlayerResp] : function(param:zhajinhua.IZhajinhuaAddPlayerResp) {
		ZjhMgr.getInstance().addPlayer(param.Player);
	},

	[zhajinhua_msgs.ZhajinhuaDelPlayerResp] : function(param:zhajinhua.IZhajinhuaDelPlayerResp) {
		ZjhMgr.getInstance().removePlayer(param.UserId);
	},

	[zhajinhua_msgs.ZhajinhuaStateFreeResp] : function(param) {
		var mans = ZjhMgr.getInstance().getPlayerList();
		if(mans) {
			for(var uid in mans) {
				mans[uid].SeatState = ZjhFightState.idle;
				mans[uid].IsSee = false;
			}
		}
	},

	[zhajinhua_msgs.ZhajinhuaStateStartResp] : function(param) {
		var mans = ZjhMgr.getInstance().getPlayerList();
		if(mans) {
			for(var uid in mans) {
				mans[uid].SeatState = ZjhFightState.readyed;
				mans[uid].IsSee = false;
			}
		}
	},

	[zhajinhua_msgs.ZhajinhuaStatePlayingResp] : function(param:zhajinhua.IZhajinhuaStatePlayingResp) {
		ZjhMgr.getInstance().CurTurnTo = param.UserID;
	},

	[zhajinhua_msgs.ZhajinhuaStateOverResp] : function(param) {
		
	},

	[zhajinhua_msgs.ZhajinhuaHostResp] : function(param:zhajinhua.IZhajinhuaHostResp) {
		if(ZjhMgr.getInstance().getEnterData()) {
			ZjhMgr.getInstance().getEnterData().Banker = param.BankerID;
		}
	},

	[zhajinhua_msgs.ZhajinhuaReadyResp] : function(param:zhajinhua.IZhajinhuaReadyResp) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.SeatState = ZjhFightState.readyed;
		}
	},

	[zhajinhua_msgs.ZhajinhuaFollowResp] : function(param:zhajinhua.IZhajinhuaFollowResp) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.SeatState = ZjhFightState.genzhu;
		}
	},

	[zhajinhua_msgs.ZhajinhuaRaiseResp] : function(param:zhajinhua.IZhajinhuaRaiseResp) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.SeatState = ZjhFightState.jiazhu;
		}
	},

	[zhajinhua_msgs.ZhajinhuaLookResp] : function(param) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.IsSee = true;
		}
	},

	[zhajinhua_msgs.ZhajinhuaCompareResp] : function(param:zhajinhua.IZhajinhuaCompareResp) {
		var loser = param.HitId;
		if(param.WinnerId == loser) {
			loser = param.AttackerId;
		}
		var man = ZjhMgr.getInstance().getPlayer(loser);
		if(man) {
			man.SeatState = ZjhFightState.bipaishu;
		}
	},

	[zhajinhua_msgs.ZhajinhuaGiveupResp] : function(param) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.SeatState = ZjhFightState.qipai;
		}
	},

	[zhajinhua_msgs.ZhajinhuaOverResp] : function(param) {
		
	},

};

export default ZjhHandlers;