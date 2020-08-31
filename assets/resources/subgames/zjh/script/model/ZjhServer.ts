import ModelBase from "../../../../../kernel/model/ModelBase";
import { zhajinhua } from "../../../../../../declares/zhajinhua";
import LoginUser from "../../../../../common/script/model/LoginUser";
import { zhajinhua_packet_define, zhajinhua_msgs } from "../../../../../common/script/proto/net_zhajinhua";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import { newHandler, isNil } from "../../../../../kernel/utils/GlobalFuncs";
import { ZjhFightState } from "./ZjhDefine";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import LoginMgr from "../../../../../common/script/model/LoginMgr";

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

	private MaxFighterCnt:number = 5;
	private _running:boolean = false;
	private _seatFighters:Array<zhajinhua.ZhajinhuaPlayer> = [];	//参战玩家序列
	private curTurn2Seat:number = 1;		//当前轮到谁
	private CurHost:number = 0;
	private bottomBet:number = 5; 	//底注
	private totalBet:number = 0;
	private curGameState:number = 0;
	private jiesuanData = null;
	

	initFighters() {
		for(var i=0; i<5; i++) {
			var man:any = {};
			man.UserId = i+10001;
			man.IsSee = false;
			man.FightState = ZjhFightState.idle;
			man.RecentBetMoney = 0;
			man.TotalBetMoney = 0;
			man.SeatId = i;
			this._seatFighters[man.SeatId] = man;
		}
		if(!LoginMgr.getInstance().checkLogin(false)) {
			LoginUser.getInstance().UserId = 1;
		} else {
			this._seatFighters[1].UserId = LoginUser.getInstance().UserId;
		}
	}

	fighterCnt() : number {
		var cnt = 0
		for(var i in this._seatFighters) {
			if(!isNil(this._seatFighters[i])) {
				cnt++;
			}
		}
		return cnt;
	}

	findBySeat(seatid:number) : zhajinhua.ZhajinhuaPlayer{
		return this._seatFighters[seatid];
	}

	findById(uid:number) : zhajinhua.ZhajinhuaPlayer {
		for(var i in this._seatFighters) {
			if(!isNil(this._seatFighters[i]) && this._seatFighters[i].UserId == uid) {
				return this._seatFighters[i];
			}
		}
		return null;
	}

	nextMan() : zhajinhua.ZhajinhuaPlayer {
		var nextSeat = this.curTurn2Seat+1;
		if(this.findBySeat(nextSeat)) {
			return this.findBySeat(nextSeat);
		} else {
			var minSeat = this.curTurn2Seat;
			for(var i in this._seatFighters) {
				if(!isNil(this._seatFighters[i]) && this._seatFighters[i].SeatId < minSeat) {
					minSeat = this._seatFighters[i].SeatId;
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
		for(var i in this._seatFighters) {
			if(!isNil(this._seatFighters[i]) && !this.isLosed(this._seatFighters[i].UserId)) {
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
				this.toFight(tmr, nextMan.SeatId);
			}, this));
		}
	}

	//启动
	run() {
		if(this._running) { 
			this.sendSceneInfo();
			this.sendStateInfo();
			return; 
		}

		this._running = true;

		this.initFighters();

		this.sendSceneInfo();

		TimerManager.delaySecond(3, newHandler(this.toReady, this));
	}

	sendSceneInfo() {
		var fightlist = [];
		for(var i in this._seatFighters) {
			if(!isNil(this._seatFighters[i])) {
				fightlist.push(this._seatFighters[i]);
			}
		}
		var data:any = {};
		data.CurHost = this.CurHost;
		data.MinBet = this.bottomBet;
		data.TotalBet = this.totalBet;
		data.TimeStamp = new Date().getTime();
		data.Fighters = fightlist;
		var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaSceneResp].pack(data, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);
	}
	sendStateInfo() {
		if(this.curGameState == 1) {
			var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateFreeResp].pack({}, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);
		}
		else if(this.curGameState == 2) {
			var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateStartResp].pack({}, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

			var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaHostResp].pack({CurHost:this.CurHost}, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);
		}
		else if(this.curGameState == 3) {
			var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaHostResp].pack({CurHost:this.CurHost}, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

			var man = this.findBySeat(this.curTurn2Seat);
			var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStatePlayingResp].pack({UserID:man.UserId}, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);
		}
		else if(this.curGameState == 4) {
			var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaHostResp].pack({CurHost:this.CurHost}, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

			var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateOverResp].pack({}, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);

			var pak3 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaOverResp].pack(this.jiesuanData, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak3);
		}
	}

	//准备阶段
	toReady(tmr) {
		this.curGameState = 1;
		for(var i in this._seatFighters) {
			if(!isNil(this._seatFighters[i])) {
				this._seatFighters[i].FightState = ZjhFightState.idle;
				this._seatFighters[i].IsSee = false;
				this._seatFighters[i].Cards = null;
				this._seatFighters[i].RecentBetMoney = 0;
				this._seatFighters[i].TotalBetMoney = 0;
			}
		}

		var pak = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateFreeResp].pack({}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak);

		TimerManager.delaySecond(1, newHandler(this.toBegin, this));
	}

	//开局（洗牌发牌）
	toBegin(tmr) {
		this.curGameState = 2;

		var pak = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateStartResp].pack({}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak);

		//定庄
		var zhuangSeat = 0;
		var fcnt = this.fighterCnt();
		var idx = CommonUtil.getRandomInt(0, fcnt-1);
		for(var i in this._seatFighters) {
			if(!isNil(this._seatFighters[i])) {
				idx--;
				if(idx==0) {
					zhuangSeat = this._seatFighters[i].SeatId;
				}
			}
		}
		this.CurHost = this.findBySeat(zhuangSeat).UserId;
		this.curTurn2Seat = zhuangSeat;

		var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaHostResp].pack({CurHost:this.CurHost}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

		TimerManager.delaySecond(5, newHandler(this.toFight, this, this.curTurn2Seat));
	}

	//战斗阶段
	toFight(tmr, SeatId) {
		if(this.checkFinish()) {
			TimerManager.delaySecond(0.5, newHandler(this.toFinish, this));
			return;
		}

		this.curGameState = 3;
		this.curTurn2Seat = SeatId;

		var man = this.findBySeat(this.curTurn2Seat);
		var pak = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStatePlayingResp].pack({UserID:man.UserId}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak);

		TimerManager.delaySecond(3, newHandler(this.fightAi, this, man.UserId));
	}

	//结算阶段
	toFinish() {
		this.curGameState = 4;

		var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStateOverResp].pack({}, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

		var winner = 0;
		for(var i in this._seatFighters) {
			if(!isNil(this._seatFighters[i]) && !this.isLosed(this._seatFighters[i].UserId)) {
				winner = this._seatFighters[i].UserId;
			}
		}

		//统计结算信息
		var info = {
			WinnerId: winner,
			Infos: []
		}
		for(var i in this._seatFighters) {
			var item = {
				UserID : this._seatFighters[i].UserId,
				Gold : 0,
				AlterGold : 0,
				Code : 0,
		   	}
		   	if(this._seatFighters[i].UserId == winner) {
				item.AlterGold = CommonUtil.toServerMoney(this.bottomBet*this.fighterCnt());
			} else {
				item.AlterGold = -CommonUtil.toServerMoney(this.bottomBet);
			}
		   	info.Infos.push(item);
		}
		this.jiesuanData = info;

		var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaOverResp].pack(info, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);

		TimerManager.delaySecond(3, newHandler(this.toReady, this));
	}
}