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
	private curSeat:number = 0;

	initFighters() {
		for(var i=1; i<5; i++) {
			var man:any = {};
			man.UserId = i;
			man.IsSee = false;
			man.FightState = 0;
			man.RecentBetMoney = 0;
			man.TotalBetMoney = 0;
			man.SeatId = i;
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

	findById(uid:number) : zhajinhua.ZhajinhuaPlayer {
		for(var i in this._fighters) {
			if(this._fighters[i].UserId == uid) {
				return this._fighters[i];
			}
		}
		return null;
	}

	nextMan() : zhajinhua.ZhajinhuaPlayer {
		var nextSeat = this.curSeat+1;
		if(this.findBySeat(nextSeat)) {
			return this.findBySeat(nextSeat);
		} else {
			var minSeat = this.curSeat;
			for(var i in this._fighters) {
				if(this._fighters[i].SeatId < minSeat) {
					minSeat = this._fighters[i].SeatId;
				}
			}
			return this.findBySeat(minSeat);
		}
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
		for(var i in this._fighters) {
			this._fighters[i].FightState = 0;
		}

		var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateFreeResp].pack({}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);

		TimerManager.delaySecond(3, newHandler(this.toBegin, this));
	}

	toBegin(tmr) {
		var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateStartResp].pack({}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);

		this.curSeat = 3;
		var data = {CurHost:this.findBySeat(this.curSeat).UserId};
		var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaHostResp].pack(data, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

		TimerManager.delaySecond(3, newHandler(this.fight, this, this.curSeat));
	}

	checkFinish() : boolean {
		var cnt = 0;
		for(var i in this._fighters) {
			if(!(this._fighters[i].FightState == 3 || this._fighters[i].FightState == 4)) {
				cnt++;
			}
		}
		return cnt <= 1;
	}
	fightAi(tmr, uid:number) {
		var man = this.findById(uid);
		man.FightState = 3;
		var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaGiveupResp].pack({UserId:man.UserId}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

		if(this.checkFinish()) {
			TimerManager.delaySecond(0.5, newHandler(this.toFinish, this));
		} else {
			TimerManager.delaySecond(0.5, newHandler(function(tmr){
				var nextMan = this.nextMan();
				this.fight(tmr, nextMan.SeatId);
			}, this));
		}
	}
	fight(tmr, SeatId) {
		if(this.checkFinish()) {
			TimerManager.delaySecond(0.5, newHandler(this.toFinish, this));
			return;
		}
		this.curSeat = SeatId;
		var man = this.findBySeat(SeatId);
		var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStatePlayingResp].pack({UserID:man.UserId}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

		TimerManager.delaySecond(3, newHandler(this.fightAi, this, man.UserId));
	}

	toFinish() {
		var winner = 0;
		for(var i in this._fighters) {
			if(!(this._fighters[i].FightState == 3 || this._fighters[i].FightState == 4)) {
				winner = this._fighters[i].UserId;
			}
		}

		var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateOverResp].pack({}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

		TimerManager.delaySecond(3, newHandler(this.toReady, this));
	}
}