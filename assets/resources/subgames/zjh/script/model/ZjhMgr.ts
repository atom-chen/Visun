import ModelBase from "../../../../../kernel/model/ModelBase";
import { zhajinhua } from "../../../../../../declares/zhajinhua";

export default class ZjhMgr extends ModelBase {
	private static _instance:ZjhMgr = null;
    private constructor() {
        super();
    }
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
        this.enterData = null;
    }
    
    private _players : {[key:number]:zhajinhua.IZhajinhuaPlayer} = {};
    private enterData:zhajinhua.IZhajinhuaSceneResp = null;
    public CurTurnTo:number = -1; 

    setEnterData(data:zhajinhua.IZhajinhuaSceneResp) {
        this.enterData = data;
    }
    getEnterData() : zhajinhua.IZhajinhuaSceneResp {
        return this.enterData;
    }

    clearPlayers() {
        this._players = {};
    }

    addPlayer(man:zhajinhua.IZhajinhuaPlayer) {
        this._players[man.UserId] = man;
    }

    removePlayer(uid:number) {
		this._players[uid] = null;
	}

	getPlayer(uid:number) : zhajinhua.IZhajinhuaPlayer {
		return this._players[uid];
    }

    getPlayerList() : {[key:number]:zhajinhua.IZhajinhuaPlayer} {
        return this._players;
    }

}