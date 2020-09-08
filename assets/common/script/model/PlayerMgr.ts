import ModelBase from "../../../kernel/model/ModelBase";
import { gamecomm } from "../../../../declares/gamecomm";
import { isNil } from "../../../kernel/utils/GlobalFuncs";
import CommonUtil from "../../../kernel/utils/CommonUtil";

export default class PlayerMgr extends ModelBase {
	private static _instance:PlayerMgr = null;
    public static getInstance() : PlayerMgr {
        if(!PlayerMgr._instance) { PlayerMgr._instance = new PlayerMgr; }
        return PlayerMgr._instance;
	}
	public static delInstance() : void {
		if(PlayerMgr._instance) {
			PlayerMgr._instance.clear();
			PlayerMgr._instance = null;
		}
	}

	on_clear(): void {
		
	}

	private allInfo:{[key:number]:gamecomm.IPlayerInfo} = {};

	updateInfo(uid:number, data:gamecomm.IPlayerInfo) {
		if(isNil(this.allInfo)) {
			this.allInfo[uid] = {};
		}
		CommonUtil.simpleCopy(this.allInfo[uid], data);
	}

	getInfo(uid:number) : gamecomm.IPlayerInfo {
		return this.allInfo[uid];
	}

	playerHead(uid:number) : number {
		if(this.allInfo[uid]) {
			if(isNil(this.allInfo[uid].FaceID)) {
				if(isNil(this.allInfo[uid].Sex)) {
					return 0;
				} else {
					return this.allInfo[uid].Sex;
				}
			} else {
				return this.allInfo[uid].FaceID;
			}
		} else {
			return 0;
		}
	}

	playerName(uid:number) : string {
		if(this.allInfo[uid]) {
			if(isNil(this.allInfo[uid].Name)) {
				return ""+uid;
			} else {
				return this.allInfo[uid].Name;
			}
		} else {
			return ""+uid;
		}
	}

	playerMoney(uid:number) : number {
		if(this.allInfo[uid]) {
			if(isNil(this.allInfo[uid].Gold)) {
				return 0;
			} else {
				return this.allInfo[uid].Gold;
			}
		} else {
			return 0;
		}
	}

}