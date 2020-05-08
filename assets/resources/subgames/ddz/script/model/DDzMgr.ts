import ModelBase from "../../../../../kernel/model/ModelBase";
import DdzPlayer from "./DdzPlayer";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";

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

	private _players : {[key:number]:DdzPlayer} = {};
	private _zhuangId : number = 0;
	private _curAttackerId : number = null;
	public EnterData = null;

	//---- 玩家 -----------
	clearFighters() {
		this._players = {};
	}

	updateFighterList(playerList) {
		for(var i in playerList) {
			if(isNil(this._players[playerList[i].UserID])) {
				this._players[playerList[i].UserID] = new DdzPlayer();
			}
			CommonUtil.simpleCopy(this._players[playerList[i].UserID], playerList[i]);
			cc.log("更新玩家信息", this._players[playerList[i].UserID], this._players[playerList[i].UserID].ChairID);
		}
	}

	removePlayer(uid:number) {
		this._players[uid] = null;
	}

	getPlayer(uid:number) : DdzPlayer {
		return this._players[uid];
	}

	getPlayerByPos(pos:number) : DdzPlayer
	{
		for(var uid in this._players) {
			if(!isNil(this._players[uid]) && this._players[uid].ChairID == pos) {
				return this._players[uid];
			} 
		}
		return null;
	}

	getFighterList() : {[key:number]:DdzPlayer} {
		return this._players;
	}
	
	//---- 上一个玩家的出牌 -----------
	getPreout() : Array<number> {
		return null;
	}

	setCurAttacker(uid:number) {
		this._curAttackerId = uid;
		cc.log("当前操作者", uid, this._players[uid]&&this._players[uid].Name, this._players[uid]);
	}

	getCurAttacker() : DdzPlayer {
		return this.getPlayer(this._curAttackerId);
	}

	setZhuang(uid:number) : number {
		return this._zhuangId;
	}

	getZhuang() : DdzPlayer {
		return this.getPlayer(this._zhuangId);
	}

	resetStates() {
		for(var uid in this._players) {
			if(!isNil(this._players[uid])) {
				this._players[uid].IsTrustee = false;
			} 
		}
	}

	static nextPos(pos:number) : number {
		var v = pos + 1;
		if(v>3) { v = 1; }
		return v;
	}

}