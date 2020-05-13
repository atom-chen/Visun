import ModelBase from "../../../kernel/model/ModelBase";
import { isNil } from "../../../kernel/utils/GlobalFuncs";

export default class ChatMgr extends ModelBase {
	private static _instance:ChatMgr = null;
    public static getInstance() : ChatMgr {
        if(!ChatMgr._instance) { ChatMgr._instance = new ChatMgr; }
        return ChatMgr._instance;
	}
	public static delInstance() : void {
		if(ChatMgr._instance) {
			ChatMgr._instance.clear();
			ChatMgr._instance = null;
		}
	}
	public on_clear() {
		
	}


	private _chatUser:number = 0;
	private _chatGroup:number = 0;
	private _groupRecords:{[key:number]:Array<any>};
	private _privateRecords:{[key:number]:Array<any>};

	setChatingTarget(uid:number, grpId:number) {
		this._chatUser = uid;
		this._chatGroup = grpId;
	}
	getChatGroup():number {
		return this._chatGroup;
	}
	getChatUser() : number {
		return this._chatUser;
	}
	getChatingTarget(): string {
		if(!isNil(this._chatUser) && this._chatUser !== 0) {
			return "用户：" + this._chatUser;
		}
		if(!isNil(this._chatGroup)) {
			return "群：" + this._chatGroup;
		}
		return "";
	}

	recordGroupMsg(grpId:number, msg:any) {
		if(!this._groupRecords[grpId]) {
			this._groupRecords[grpId] = [];
		}
		this._groupRecords[grpId].push(msg);
	}

	recordPrivateMsg(uid:number, msg:any) {
		if(!this._privateRecords[uid]) {
			this._privateRecords[uid] = [];
		}
		this._privateRecords[uid].push(msg);
	}

	loadGroupMsg(grpId:number) : Array<any> {
		return this._groupRecords[grpId];
	}

	loadPrivateMsg(uid:number) : Array<any> {
		return this._privateRecords[uid];
	}

}