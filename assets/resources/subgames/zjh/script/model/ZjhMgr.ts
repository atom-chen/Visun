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

    }
    
    private _players : {[key:number]:zhajinhua.ZhajinhuaPlayer} = {};
	private _zhuangId : number = 0;
	private _curAttackerId : number = null;
	private enterData:zhajinhua.ZhajinhuaSceneResp = null;

    setEnterData(data:zhajinhua.ZhajinhuaSceneResp) {
        this.enterData = data;
    }
    getEnterData() : zhajinhua.ZhajinhuaSceneResp {
        return this.enterData;
    }

    addPlayer(man) {
        this._players[man.UserId] = man;
    }

    removePlayer(uid:number) {
		this._players[uid] = null;
	}

	getPlayer(uid:number) : zhajinhua.ZhajinhuaPlayer {
		return this._players[uid];
	}
}