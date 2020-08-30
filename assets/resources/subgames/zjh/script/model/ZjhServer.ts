import ModelBase from "../../../../../kernel/model/ModelBase";
import { zhajinhua } from "../../../../../../declares/zhajinhua";
import LoginUser from "../../../../../common/script/model/LoginUser";
import { zhajinhua_packet_define, zhajinhua_msgs } from "../../../../../common/script/proto/net_zhajinhua";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import { newHandler } from "../../../../../kernel/utils/GlobalFuncs";

export default class ZjhServer extends ModelBase {
	private static _instance:ZjhServer = null;
    public static getInstance() : ZjhServer {
        if(!ZjhServer._instance) { ZjhServer._instance = new ZjhServer; }
        return ZjhServer._instance;
    }
    public static delInstance() : void {
		if(ZjhServer._instance) {
			ZjhServer._instance.clear();
			ZjhServer._instance = null;
		}
	}
    on_clear(): void {

	}

	private _fighters:Array<zhajinhua.ZhajinhuaPlayer> = [];

	initFighters() {
		for(var i=0; i<4; i++) {
			var man:any = {};
			man.UserId = i+1;
			man.IsSee = false;
			man.FightState = 0;
			man.RecentBetMoney = 0;
			man.TotalBetMoney = 0;
			man.SeatId = i+1;
			this._fighters.push(man);
		}
		LoginUser.getInstance().UserId = 2;
		LoginUser.getInstance().UserID = 2;
	}

	findBySeat(seatid:number) : zhajinhua.ZhajinhuaPlayer{
		for(var i in this._fighters) {
			if(this._fighters[i].SeatId == seatid) {
				return this._fighters[i];
			}
		}
		return null;
	}

	run() {
		this.initFighters();
		var data:any = {};
		data.CurHost = 3;
		data.Fighters = this._fighters;
		data.MinBet = 10;
		data.TotalBet = 0;
		data.TimeStamp = new Date().getTime();
		var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaSceneResp].pack(data, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

		TimerManager.delaySecond(3, newHandler(this.toReady, this));
	}

	toReady(tmr) {
		var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateFreeResp].pack({}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);

		TimerManager.delaySecond(3, newHandler(this.toBegin, this));
	}

	toBegin(tmr) {
		var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateStartResp].pack({}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);

		var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaHostResp].pack({CurHost:3}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

		TimerManager.delaySecond(3, newHandler(this.fight, this, 3));
	}

	fight(tmr, SeatId) {
		var man = this.findBySeat(SeatId);
		var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStatePlayingResp].pack({UserID:man.UserId}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);
	}
}