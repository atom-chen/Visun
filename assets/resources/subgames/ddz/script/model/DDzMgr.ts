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

	//---- 玩家 -----------
	resetPlayerList(playerList) {
		this._players = playerList;
		for(var i=0; i<3; i++) {
			if(playerList[i]) {
				this._players[i] = playerList[i];
				this._players[i].Pos = i;
			} else {
				this._players[i] = null;
			}
		}
		if(isNil(playerList) || playerList.length <= 0) {
			this._players.length = 0;
			this._players = [];
		}
	}

	getPlayer(uid:number) : GamePlayer {
		for(var i in this._players) {
			if(uid == this._players[i].UserID) {
				return this._players[i];
			}
		}
	}

	getPlayerByPos(pos:number) : GamePlayer
	{
		for(var userId in this._players) {
			if(this._players[userId].Pos == pos) {
				return this._players[userId];
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

}