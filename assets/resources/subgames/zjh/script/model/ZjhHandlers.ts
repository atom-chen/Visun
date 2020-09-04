import { zhajinhua_msgs } from "../../../../../common/script/proto/net_zhajinhua";
import ZjhMgr from "./ZjhMgr";
import { zhajinhua } from "../../../../../../declares/zhajinhua";
import { ZjhFighterState, ZjhGameState } from "./ZjhDefine";
import { gamecomm_msgs } from "../../../../../common/script/proto/net_gamecomm";
import { gamecomm } from "../../../../../../declares/gamecomm";
import GameManager from "../../../../../common/script/model/GameManager";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";

var ZjhHandlers = {

	[gamecomm_msgs.EnterGameResp] : function(param:gamecomm.IEnterGameResp) {
		var man:any = {};
		man.MyInfo = param.UserInfo;
		ZjhMgr.getInstance().addPlayer(man);
	},

	[gamecomm_msgs.ExitGameResp] : function(param:gamecomm.IExitGameResp) {
		ZjhMgr.getInstance().removePlayer(param.UserID);
	},

	[zhajinhua_msgs.EnterGameZjhResp] : function(param:zhajinhua.IEnterGameZjhResp) {
		ZjhMgr.getInstance().addPlayer(param.Player);
	},

	[zhajinhua_msgs.ZhajinhuaStateFreeResp] : function(param:zhajinhua.IZhajinhuaStateFreeResp) {
		ZjhMgr.getInstance().GameState = ZjhGameState.ready;
		var mans = ZjhMgr.getInstance().getPlayerList();
		if(mans) {
			for(var uid in mans) {
				mans[uid].IsSee = false;
			}
		}
	},

	[zhajinhua_msgs.ZhajinhuaStateStartResp] : function(param:zhajinhua.IZhajinhuaStateStartResp) {
		ZjhMgr.getInstance().GameState = ZjhGameState.started;
		var mans = ZjhMgr.getInstance().getPlayerList();
		if(mans) {
			for(var uid in mans) {
				mans[uid].IsSee = false;
			}
		}
	},

	[zhajinhua_msgs.ZhajinhuaStatePlayingResp] : function(param:zhajinhua.IZhajinhuaStatePlayingResp) {
		ZjhMgr.getInstance().GameState = ZjhGameState.fighting;
		ZjhMgr.getInstance().CurTurnTo = param.UserID;
	},

	[zhajinhua_msgs.ZhajinhuaStateOverResp] : function(param) {
		ZjhMgr.getInstance().GameState = ZjhGameState.settle;
	},

	[zhajinhua_msgs.ZhajinhuaHostResp] : function(param:zhajinhua.IZhajinhuaHostResp) {
		if(ZjhMgr.getInstance().getEnterData()) {
			ZjhMgr.getInstance().getEnterData().Banker = param.BankerID;
		}
	},

	[zhajinhua_msgs.ZhajinhuaReadyResp] : function(param:zhajinhua.IZhajinhuaReadyResp) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.MyInfo.Sate = ZjhFighterState.readyed;
		}
	},

	[zhajinhua_msgs.ZhajinhuaFollowResp] : function(param:zhajinhua.IZhajinhuaFollowResp) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.MyInfo.Sate = ZjhFighterState.genzhu;
			man.MyInfo.Gold -= param.Score;
			ZjhMgr.getInstance().getEnterData().TotalScore += param.Score;
		}
	},

	[zhajinhua_msgs.ZhajinhuaRaiseResp] : function(param:zhajinhua.IZhajinhuaRaiseResp) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.MyInfo.Sate = ZjhFighterState.jiazhu;
			man.MyInfo.Gold -= param.Score;
			ZjhMgr.getInstance().getEnterData().TotalScore += param.Score;
		}
	},

	[zhajinhua_msgs.ZhajinhuaCompareResp] : function(param:zhajinhua.IZhajinhuaCompareResp) {
		var loser = param.HitId;
		if(param.WinnerId == loser) {
			loser = param.AttackerId;
		}
		var man = ZjhMgr.getInstance().getPlayer(loser);
		if(man) {
			man.MyInfo.Sate = ZjhFighterState.bipaishu;
		}

		var attacker = ZjhMgr.getInstance().getPlayer(param.AttackerId);
		if(attacker && param["Score"]) {
			attacker.MyInfo.Gold -= param["Score"];
			ZjhMgr.getInstance().getEnterData().TotalScore += param["Score"];
		}
	},

	[zhajinhua_msgs.ZhajinhuaGiveupResp] : function(param) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.MyInfo.Sate = ZjhFighterState.qipai;
		}
	},

	[zhajinhua_msgs.ZhajinhuaLookResp] : function(param) {
		var man = ZjhMgr.getInstance().getPlayer(param.UserId);
		if(man) {
			man.IsSee = true;
		}
	},

	[zhajinhua_msgs.ZhajinhuaOverResp] : function(param:zhajinhua.IZhajinhuaOverResp) {
		if(param.Infos) {
            for(var i in param.Infos) {
                for(var j in param.Infos[i].Compares) {
                    var cur = param.Infos[i];
                    var uid = cur.Compares[j];
					var cardlist = cur.Cards && cur.Cards.Cards;
					var man = ZjhMgr.getInstance().getPlayer(uid);
                    if(isNil(cardlist) || cardlist.length <= 0) {
						if(isNil(man.Cards)) {
							man.Cards = { Cards:[] };
						}
                        cardlist = man.Cards.Cards;
                    } else {
						if(isNil(man.Cards)) {
							man.Cards = { Cards:[] };
						}
						man.Cards.Cards = cardlist;
					}
                }
            }
        }
	},

};

export default ZjhHandlers;