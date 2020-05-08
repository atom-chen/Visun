import ModelBase from "../../../../../kernel/model/ModelBase";
import GamePlayer from "../../../../../common/script/model/GamePlayer";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";

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

	private _players : Array<GamePlayer> = [];
	private _zhuangId : number = 0;
	private _curAttackerId : number = null;
	public EnterData = null;
	public IsAuto : boolean = false;

	//---- 玩家 -----------
	resetPlayerList(playerList) {
		this._players = playerList;
		if(isNil(playerList) || playerList.length <= 0) {
			this._players.length = 0;
			this._players = [];
		}
	}

	removePlayer(uid:number) {
		for(var i in this._players) {
			if(!isNil(this._players[i]) && uid == this._players[i].UserID) {
				this._players.splice(parseInt(i), 1);
				break;
			}
		}
	}

	getPlayer(uid:number) : GamePlayer {
		for(var i in this._players) {
			if(!isNil(this._players[i]) && uid == this._players[i].UserID) {
				return this._players[i];
			}
		}
		return null;
	}

	getPlayerByPos(pos:number) : GamePlayer
	{
		for(var idx in this._players) {
			if(!isNil(this._players[idx]) && this._players[idx].ChairID == pos) {
				return this._players[idx];
			} 
		}
		return null;
	}

	getPlayerList() : Array<GamePlayer> {
		return this._players;
	}
	
	//---- 上一个玩家的出牌 -----------
	getPreout() : Array<number> {
		return null;
	}

	setCurAttacker(uid:number) {
		this._curAttackerId = uid;
	}

	getCurAttacker() : GamePlayer {
		return this.getPlayer(this._curAttackerId);
	}

	setZhuang(uid:number) : number {
		return this._zhuangId;
	}

	getZhuang() : GamePlayer {
		return this.getPlayer(this._zhuangId);
	}

}