import ModelBase from "../../../../../kernel/model/ModelBase";
import DDzPlayer from "./DDzPlayer";
import { getPokerValue } from "../../../../../common/script/definer/PokerDefine";

export default class DDzMgr extends ModelBase {
	private static _instance:DDzMgr = null;
    private constructor() {
        super();
    }
    public static getInstance() : DDzMgr {
        if(!DDzMgr._instance) { DDzMgr._instance = new DDzMgr; }
        return DDzMgr._instance;
    }
    public static delInstance() : void {
		if(DDzMgr._instance) {
			DDzMgr._instance.clear();
			DDzMgr._instance = null;
		}
	}
    on_clear(): void {

	}

	//------------------------------------------------------------------------------

	private _players:{[key:number]:DDzPlayer};
	private _zhuangId:number = 0;

	//---- 玩家 -----------
	getPlayer(uid:number) : DDzPlayer {
		return this._players[uid];
	}

	getPlayerByPos(pos:number) : DDzPlayer
	{
		for(var userId in this._players) {
			if(this._players[userId].Pos == pos) {
				return this._players[userId];
			} 
		}
		return null;
	}
	
	//---- 上一个玩家的出牌 -----------
	getPreout() : Array<number> {
		return null;
	}

	//----庄家-----------
	setZhuangBySaizi(cardV:number) {
		var v = getPokerValue(cardV);
		var posList = [];
		for(var i in this._players) {
			posList.push(this._players[i].Pos);
		} 
		posList.sort( (a,b)=>{
			let cmp = a-b;
			if(cmp>0) return 1;
			if(cmp<0) return -1;
			return 0;
		} );
		var idx = v % posList.length;
		if(idx===0) { idx = posList.length; }
		idx = idx - 1;
		var dstPos = posList[idx];
		var dstUserId = this.getPlayerByPos(dstPos) && this.getPlayerByPos(dstPos).UserId;
		this.setZhuangjia(dstUserId);
	}
	setZhuangjia(userId:number) {
		this._zhuangId = userId;
	}
	getZhuangjia() : number {
		return this._zhuangId;
	}

	//----以庄家为起点的参战人员列表-----------
	getFighterList() : any {
		var usrlist = [];
		for(var x in this._players) {
			usrlist.push(this._players[x]);
		}
		if(usrlist.length<=0) { return usrlist; }

		usrlist.sort((a,b)=>{
			return a.Pos-b.Pos;
		});
		var p = usrlist[0];
		var xxx = 0;
		while(p.userId != this.getZhuangjia()) {
			usrlist.splice(0, 1);
			usrlist.push(p);
			p = usrlist[0];
			xxx++;
			if(xxx>=usrlist.length) { break; }
		}
		
		var posList = [];
		for(var m in usrlist) {
		//	if(usrlist[m].state != SuohaUserState.DISCARD) {
				posList.push(usrlist[m]);
		//	}
		}
		return posList;
	}
}