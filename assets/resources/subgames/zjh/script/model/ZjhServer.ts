import ModelBase from "../../../../../kernel/model/ModelBase";
import { zhajinhua } from "../../../../../../declares/zhajinhua";
import LoginUser from "../../../../../common/script/model/LoginUser";
import { zhajinhua_packet_define, zhajinhua_msgs } from "../../../../../common/script/proto/net_zhajinhua";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import { newHandler } from "../../../../../kernel/utils/GlobalFuncs";
import { ZjhFightState } from "./ZjhDefine";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";

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

	private _fighters:Array<zhajinhua.ZhajinhuaPlayer> = [];	//参战玩家序列
	private curSeat:number = 0;		//当前轮到谁
	private bottomBet:number = 5; 	//底注

	initFighters() {
		for(var i=1; i<5; i++) {
			var man:any = {};
			man.UserId = i;
			man.IsSee = false;
			man.FightState = ZjhFightState.idle;
			man.RecentBetMoney = 0;
			man.TotalBetMoney = 0;
			man.SeatId = i;
			this._fighters.push(man);
		}
		LoginUser.getInstance().UserId = 2;
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

	isLosed(uid:number) : boolean {
		var man = this.findById(uid);
		return man.FightState == ZjhFightState.bipaishu || man.FightState == ZjhFightState.qipai;
	}

	checkFinish() : boolean {
		var cnt = 0;
		for(var i in this._fighters) {
			if(!this.isLosed(this._fighters[i].UserId)) {
				cnt++;
			}
		}
		return cnt <= 1;
	}

	fightAi(tmr, uid:number) {
		var man = this.findById(uid);
		man.FightState = ZjhFightState.qipai;
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

	//启动
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

	//准备阶段
	toReady(tmr) {
		for(var i in this._fighters) {
			this._fighters[i].FightState = ZjhFightState.idle;
		}

		var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateFreeResp].pack({}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);

		TimerManager.delaySecond(3, newHandler(this.toBegin, this));
	}

	//开局（洗牌发牌）
	toBegin(tmr) {
		var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateStartResp].pack({}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);

		this.curSeat = 3;
		var data = {CurHost:this.findBySeat(this.curSeat).UserId};
		var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaHostResp].pack(data, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

		TimerManager.delaySecond(3, newHandler(this.fight, this, this.curSeat));
	}

	//战斗阶段
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

	//结算阶段
	toFinish() {
		var winner = 0;
		for(var i in this._fighters) {
			if(!this.isLosed(this._fighters[i].UserId)) {
				winner = this._fighters[i].UserId;
			}
		}

		var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateOverResp].pack({}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

		var info = {
			WinnerId: winner,
			Infos: []
		}
		for(var i in this._fighters) {
			var item = {
				UserID : this._fighters[i].UserId,
				Gold : 0,
				AlterGold : 0,
				Code : 0,
		   	}
		   	if(this._fighters[i].UserId == winner) {
				item.AlterGold = CommonUtil.toServerMoney(this.bottomBet*this._fighters.length);
			} else {
				item.AlterGold = -CommonUtil.toServerMoney(this.bottomBet);
			}
		   	info.Infos.push(item);
		}
		var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaOverResp].pack(info, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);

		TimerManager.delaySecond(3, newHandler(this.toReady, this));
	}
}