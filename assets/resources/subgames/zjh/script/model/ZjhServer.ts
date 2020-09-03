import ModelBase from "../../../../../kernel/model/ModelBase";
// import { zhajinhua } from "../../../../../../declares/zhajinhua";
// import LoginUser from "../../../../../common/script/model/LoginUser";
// import { zhajinhua_packet_define, zhajinhua_msgs } from "../../../../../common/script/proto/net_zhajinhua";
// import ProcessorMgr from "../../../../../kernel/net/processor/ProcessorMgr";
// import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
// import { newHandler, isNil } from "../../../../../kernel/utils/GlobalFuncs";
// import { ZjhFighterState } from "./ZjhDefine";
// import CommonUtil from "../../../../../kernel/utils/CommonUtil";
// import LoginMgr from "../../../../../common/script/model/LoginMgr";
// import { gamecomm } from "../../../../../../declares/gamecomm";
// import { gamecomm_msgs, gamecomm_packet_define } from "../../../../../common/script/proto/net_gamecomm";

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

	/*
	private MaxFighterCnt:number = 5;
	private _running:boolean = false;
	private _seatFighters:Array<zhajinhua.ZhajinhuaPlayer> = [];	//参战玩家序列
	private curTurn2Seat:number = 1;		//当前轮到谁
	private Banker:number = 0;
	private bottomBet:number = 500; 	//底注
	private totalBet:number = 0;
	private curGameState:number = 0;
	private jiesuanData = null;
	private curMinBet:number = 0;
	

	initFighters() {
		for(var i=0; i<5; i++) {
			var man:any = {};
			man.UserId = i+10001;
			man.IsSee = false;
			man.FightState = ZjhFighterState.idle;
			man.RecentBetMoney = 0;
			man.TotalBetMoney = 0;
			man.SeatId = i;
			man.Name = "测试"+man.UserId;
			man.Gold = 1000000;
			this._seatFighters[man.SeatId] = man;
		}
		if(!LoginMgr.getInstance().checkLogin(false)) {
			LoginUser.getInstance().UserId = this._seatFighters[1].UserId;
		} else {
			this._seatFighters[1].UserId = LoginUser.getInstance().UserId;
		}
	}

	//改变失败时返回-1，成功则返回新的金额
	changeUserMoney(uid:number, v:number, code:number, reason:string) : gamecomm.IGoldChangeInfo {
		var man = this.findById(uid);
		if(isNil(man)) { 
			return null; 
		}

		var newGold = man.Gold + v;
		if(newGold < 0) {
			return null;
		}

		man.Gold = newGold;

		return {
			UserID: uid,
			Gold: newGold,
			AlterGold: v,
			Code: code,
			Reason: reason
		};
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
		var man = null;
		var nextSeat = this.curTurn2Seat + 1;
		while(nextSeat < this.MaxFighterCnt) {
			var tmp = this.findBySeat(nextSeat);
			if(tmp && this.isFightState(tmp.SeatState)) {
				man = tmp;
				break;
			} else {
				nextSeat++;
			}
		}
		if(man) {
			return man;
		}

		nextSeat = 0;
		while(nextSeat < this.curTurn2Seat) {
			var tmp = this.findBySeat(nextSeat);
			if(tmp && this.isFightState(tmp.SeatState)) {
				man = tmp;
				break;
			} else {
				nextSeat++;
			}
		}
		return man;
	}

	//随机找一个人比牌
	randBipaiFighter(uid:number) : zhajinhua.ZhajinhuaPlayer {
		for(var i in this._seatFighters) {
			if(!isNil(this._seatFighters[i]) && this._seatFighters[i].UserId != uid) {
				if(this.isFightState(this._seatFighters[i].SeatState)) {
					return this._seatFighters[i];
				}
			}
		}
		return null;
	}

	isFightState(st:ZjhFighterState) {
		return st == ZjhFighterState.genzhu || st == ZjhFighterState.jiazhu || st == ZjhFighterState.readyed;
	}

	isLosed(uid:number) : boolean {
		var man = this.findById(uid);
		return man.SeatState == ZjhFighterState.bipaishu || man.SeatState == ZjhFighterState.qipai;
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

	fightAi(uid:number) {
		var attacker = this.findById(uid);

		var nnn = CommonUtil.getRandomInt(1,100);
		if(nnn <= 20) {
			attacker.SeatState = ZjhFighterState.qipai;
			var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaGiveupResp].pack({UserId:attacker.UserId}, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);
		}
		else if(nnn <= 40) {
			var v = this.curMinBet;
			if(this.findById(uid).IsSee) {
				v = v * 2;
			}
			var chgInfo = this.changeUserMoney(uid, -v, 0, "");

			if(isNil(chgInfo)) {
				//返回金币不足提示，并弃牌
				attacker.SeatState = ZjhFighterState.qipai;
				var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaGiveupResp].pack({UserId:attacker.UserId}, false);
				ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);
				return;
			}

			this.totalBet += v;

			attacker.SeatState = ZjhFighterState.genzhu;
			var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaFollowResp].pack({UserId:attacker.UserId, Score:this.curMinBet}, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

			var pak2 = gamecomm_packet_define[gamecomm_msgs.GoldChangeInfo].pack(chgInfo, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);
		}
		else if(nnn <= 60) {
			var raiseNum = 5000;

			var v = this.curMinBet + raiseNum;
			if(this.findById(uid).IsSee) {
				v = this.curMinBet * 2 + raiseNum;
			}
			var chgInfo = this.changeUserMoney(uid, -v, 0, "");

			if(isNil(chgInfo)) {
				//返回金币不足提示，并弃牌
				attacker.SeatState = ZjhFighterState.qipai;
				var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaGiveupResp].pack({UserId:attacker.UserId}, false);
				ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);
				return;
			}

			this.totalBet += v;
			this.curMinBet = this.curMinBet + raiseNum; //加注会提升最低下注额

			attacker.SeatState = ZjhFighterState.jiazhu;
			var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaRaiseResp].pack({UserId:attacker.UserId, Score:this.curMinBet+raiseNum}, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

			var pak2 = gamecomm_packet_define[gamecomm_msgs.GoldChangeInfo].pack(chgInfo, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);
		}
		else {
			var bipaiTarget = this.randBipaiFighter(uid);
			if(!isNil(bipaiTarget)) {
				var needMoney = this.curMinBet;
				if(bipaiTarget.IsSee) {
					needMoney = this.curMinBet * 2;
				}

				var chgInfo = this.changeUserMoney(uid, -needMoney, 0, "");

				if(isNil(chgInfo)) {
					//返回金币不足提示，并弃牌
					attacker.SeatState = ZjhFighterState.qipai;
					var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaGiveupResp].pack({UserId:attacker.UserId}, false);
					ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);
					return;
				}

				this.totalBet += needMoney;

				var winnerUid = uid;
				var loserUid = bipaiTarget.UserId;
				//比较双方牌大小，没有发牌，瞎几把比
				if(CommonUtil.getRandomInt(1,100) <= 50) {
					winnerUid = bipaiTarget.UserId;
					loserUid = uid;
				}

				this.findById(loserUid).SeatState = ZjhFighterState.bipaishu;

				var info = {
					AttackerId: uid,
					HitId: bipaiTarget.UserId,
					WinnerId: winnerUid,
				}
				var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaCompareResp].pack(info, false);
				ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

				var pak2 = gamecomm_packet_define[gamecomm_msgs.GoldChangeInfo].pack(chgInfo, false);
				ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);
			}
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
		data.Banker = this.Banker;
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

			var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaHostResp].pack({BankerID:this.Banker}, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);
		}
		else if(this.curGameState == 3) {
			var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaHostResp].pack({BankerID:this.Banker}, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak1);

			var man = this.findBySeat(this.curTurn2Seat);
			var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaStatePlayingResp].pack({UserID:man.UserId}, false);
			ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);
		}
		else if(this.curGameState == 4) {
			var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaHostResp].pack({BankerID:this.Banker}, false);
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
		this.curMinBet = this.bottomBet;
		for(var i in this._seatFighters) {
			if(!isNil(this._seatFighters[i])) {
				this._seatFighters[i].SeatState = ZjhFighterState.readyed;
				this._seatFighters[i].IsSee = false;
				this._seatFighters[i].Cards = null;
				this._seatFighters[i].RecentScore = 0;
				this._seatFighters[i].TotalScore = 0;
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
		this.Banker = this.findBySeat(zhuangSeat).UserId;
		this.curTurn2Seat = zhuangSeat;

		var pak1 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaHostResp].pack({BankerID:this.Banker}, false);
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

		TimerManager.delaySecond(3, newHandler(function(tmr, uid){
			this.fightAi(uid);

			if(this.checkFinish()) {
				TimerManager.delaySecond(0.5, newHandler(this.toFinish, this));
			} else {
				TimerManager.delaySecond(0.5, newHandler(function(tmr){
					var nextMan = this.nextMan();
					if(isNil(nextMan)) {
						this.toFinish();
					} else {
						this.toFight(tmr, nextMan.SeatId);
					}
				}, this));
			}
		}, this, man.UserId));
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
				Gold : this._seatFighters[i].Gold,
				AlterGold : 0,
				Code : 0,
			}
			
		   	if(this._seatFighters[i].UserId == winner) {
				item.AlterGold = this.totalBet;
				this._seatFighters[i].Gold += this.totalBet;
				item.Gold = this._seatFighters[i].Gold;
			}
		   	info.Infos.push(item);
		}
		this.jiesuanData = info;

		var pak2 = zhajinhua_packet_define[zhajinhua_msgs.ZhajinhuaOverResp].pack(info, false);
		ProcessorMgr.getInstance().getProcessor("game").onrecvBuff(pak2);

		TimerManager.delaySecond(3, newHandler(this.toReady, this));
	}
	*/
}