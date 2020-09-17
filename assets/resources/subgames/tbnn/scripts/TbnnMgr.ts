import ModelBase from "../../../../kernel/model/ModelBase";
import { tbcowcow } from "../../../../../declares/tbcowcow";
import GameManager from "../../../../common/script/model/GameManager";
import { isNil } from "../../../../kernel/utils/GlobalFuncs";
import { gamecomm } from "../../../../../declares/gamecomm";
import CommonUtil from "../../../../kernel/utils/CommonUtil";

export default class TbnnMgr extends ModelBase {
	private static _instance:TbnnMgr = null;
    public static getInstance() : TbnnMgr {
        if(!TbnnMgr._instance) { TbnnMgr._instance = new TbnnMgr; }
        return TbnnMgr._instance;
    }
    public static delInstance() : void {
		if(TbnnMgr._instance) {
			TbnnMgr._instance.clear();
			TbnnMgr._instance = null;
		}
	}
	
	on_clear(): void {
		this._players = {};
	}

	private _players : {[key:number]:tbcowcow.ITbcowcowPlayer} = {};

	getEnterData() : tbcowcow.ITbcowcowSceneResp {
        return GameManager.getInstance().getEnterData();
    }

    getDizhu() : number {
        return GameManager.getInstance().getRunningGameData().Info.LessScore;
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

	getPlayer(uid:number) : tbcowcow.ITbcowcowPlayer {
        if(isNil(uid)) { return null; }
		return this._players[uid];
    }

    getPlayerList() : {[key:number]:tbcowcow.ITbcowcowPlayer} {
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