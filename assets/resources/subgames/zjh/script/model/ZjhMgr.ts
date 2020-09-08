import ModelBase from "../../../../../kernel/model/ModelBase";
import { zhajinhua } from "../../../../../../declares/zhajinhua";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import { ZjhGameState } from "./ZjhDefine";
import { gamecomm } from "../../../../../../declares/gamecomm";
import GameManager from "../../../../../common/script/model/GameManager";

export default class ZjhMgr extends ModelBase {
	private static _instance:ZjhMgr = null;
    public static getInstance() : ZjhMgr {
        if(!ZjhMgr._instance) { ZjhMgr._instance = new ZjhMgr; }
        return ZjhMgr._instance;
    }
    public static delInstance() : void {
		if(ZjhMgr._instance) {
			ZjhMgr._instance.clear();
			ZjhMgr._instance = null;
		}
    }
    
    on_clear(): void {
        this._players = {};
    }
    
    private _players : {[key:number]:zhajinhua.IZhajinhuaPlayer} = {};
    public GameState:ZjhGameState = ZjhGameState.ready;
    public CurTurnTo:number = -1;
    

    getEnterData() : zhajinhua.IZhajinhuaSceneResp {
        return GameManager.getInstance().getEnterData();
    }

    clearPlayers() {
        this._players = {};
    }

    addPlayer(man:zhajinhua.IZhajinhuaPlayer) {
        if(isNil(this._players[(man.MyInfo as gamecomm.IPlayerInfo).UserID])) {
            this._players[(man.MyInfo as gamecomm.IPlayerInfo).UserID] = man;
        } else {
            CommonUtil.simpleCopy(this._players[(man.MyInfo as gamecomm.IPlayerInfo).UserID], man);
        }
    }

    removePlayer(uid:number) {
        this._players[uid] = null;
        delete this._players[uid];
	}

	getPlayer(uid:number) : zhajinhua.IZhajinhuaPlayer {
		return this._players[uid];
    }

    getPlayerList() : {[key:number]:zhajinhua.IZhajinhuaPlayer} {
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