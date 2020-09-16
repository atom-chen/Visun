import ModelBase from "../../../../../kernel/model/ModelBase";
import { sangong } from "../../../../../../declares/sangong";
import GameManager from "../../../../../common/script/model/GameManager";
import { gamecomm } from "../../../../../../declares/gamecomm";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";

export default class SangongMgr extends ModelBase {
	private static _instance:SangongMgr = null;
    public static getInstance() : SangongMgr {
        if(!SangongMgr._instance) { SangongMgr._instance = new SangongMgr; }
        return SangongMgr._instance;
    }
    public static delInstance() : void {
		if(SangongMgr._instance) {
			SangongMgr._instance.clear();
			SangongMgr._instance = null;
		}
	}
    on_clear(): void {
        this._players = {};
    }

    private _players : {[key:number]:sangong.ISangongPlayer} = {};
    
    getEnterData() : sangong.ISangongSceneResp {
        return GameManager.getInstance().getEnterData();
    }

    getDizhu() : number {
        return 1;
    }
	
	clearPlayers() {
        this._players = {};
    }

    addPlayer(man:gamecomm.IPlayerInfo) {
        if(isNil(man)) { return; }
        if(isNil(this._players[man.UserID])) {
            this._players[man.UserID] = {
                MyInfo: man,
                Cards: null,
            };
        } else {
            CommonUtil.simpleCopy(this._players[man.UserID].MyInfo, man);
        }
    }

    removePlayer(uid:number) {
        if(isNil(uid)) { return; }
        this._players[uid] = null;
        delete this._players[uid];
	}

	getPlayer(uid:number) : sangong.ISangongPlayer {
        if(isNil(uid)) { return null; }
		return this._players[uid];
    }

    getPlayerList() : {[key:number]:sangong.ISangongPlayer} {
        return this._players;
    }

    fighterCnt() : number {
        var cnt = 0;
        for(var uid in this._players) {
            if(!isNil(this._players[uid])) {
                cnt++;
            }
        }
        return cnt;
    }
}