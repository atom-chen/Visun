import ModelBase from "../../../../../kernel/model/ModelBase";
import GameManager from "../../../../../common/script/model/GameManager";
import { qzcowcow } from "../../../../../../declares/qzcowcow";
import { gamecomm } from "../../../../../../declares/gamecomm";
import { isNil } from "../../../../../kernel/utils/GlobalFuncs";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";

export default class QznnMgr extends ModelBase {
	private static _instance:QznnMgr = null;
    public static getInstance() : QznnMgr {
        if(!QznnMgr._instance) { QznnMgr._instance = new QznnMgr; }
        return QznnMgr._instance;
    }
    public static delInstance() : void {
		if(QznnMgr._instance) {
			QznnMgr._instance.clear();
			QznnMgr._instance = null;
		}
	}
    on_clear(): void {
        this._players = {};
    }

    private _players : {[key:number]:qzcowcow.IQzcowcowPlayer} = {};
    
    getEnterData() : qzcowcow.IQzcowcowSceneResp {
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

	getPlayer(uid:number) : qzcowcow.IQzcowcowPlayer {
        if(isNil(uid)) { return null; }
		return this._players[uid];
    }

    getPlayerList() : {[key:number]:qzcowcow.IQzcowcowPlayer} {
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