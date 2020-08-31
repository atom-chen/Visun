import ModelBase from "../../../../../kernel/model/ModelBase";
import { zhajinhua } from "../../../../../../declares/zhajinhua";
import LoginUser from "../../../../../common/script/model/LoginUser";
import { zhajinhua_packet_define, zhajinhua_msgs } from "../../../../../common/script/proto/net_zhajinhua";
import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import { newHandler } from "../../../../../kernel/utils/GlobalFuncs";
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
	private _fighters:Array<zhajinhua.ZhajinhuaPlayer> = [];	//参战玩家序列
	private curTurn2Seat:number = 1;		//当前轮到谁
	private CurHost:number = 0;
	private bottomBet:number = 5; 	//底注
	private totalBet:number = 0;
	private curGameState:number = 0;
	private jiesuanData = null;
	

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
		if(!LoginMgr.getInstance().checkLogin(false)) {
			LoginUser.getInstance().UserId = 2;
		} else {
			this._fighters[2].UserId = LoginUser.getInstance().UserId;
		}
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
		var nextSeat = this.curTurn2Seat+1;
		if(this.findBySeat(nextSeat)) {
			return this.findBySeat(nextSeat);
		} else {
			var minSeat = this.curTurn2Seat;
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
		var data:any = {};
		data.CurHost = this.CurHost;
		data.MinBet = this.bottomBet;
		data.TotalBet = this.totalBet;
		data.TimeStamp = new Date().getTime();
		data.Fighters = this._fighters;
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
		for(var i in this._fighters) {
			this._fighters[i].FightState = ZjhFightState.idle;
			this._fighters[i].IsSee = false;
			this._fighters[i].Cards = null;
			this._fighters[i].RecentBetMoney = 0;
			this._fighters[i].TotalBetMoney = 0;
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
		var zhuangSeat = CommonUtil.getRandomInt(1, this._fighters.length);
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
		for(var i in this._fighters) {
			if(!this.isLosed(this._fighters[i].UserId)) {
				winner = this._fighters[i].UserId;
			}
		}

		//统计结算信息
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
		this.jiesuanData = info;

		var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaOverResp].pack(info, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);

		TimerManager.delaySecond(3, newHandler(this.toReady, this));
	}
}