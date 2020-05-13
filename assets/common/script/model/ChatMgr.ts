import ModelBase from "../../../kernel/model/ModelBase";
import EventCenter from "../../../kernel/basic/event/EventCenter";
import KernelEvent from "../../../kernel/basic/defines/KernelEvent";
import IChannel from "../../../kernel/net/channel/IChannel";
import ChannelDefine from "../definer/ChannelDefine";
import { ConnState, ChannelType, ProcessorType } from "../../../kernel/basic/defines/KernelDefine";
import UIManager from "../../../kernel/view/UIManager";
import ServerConfig from "../definer/ServerConfig";
import ProcessorMgr from "../../../kernel/net/processor/ProcessorMgr";
import ChannelMgr from "../../../kernel/net/channel/ChannelMgr";
import CHandler from "../../../kernel/basic/datastruct/CHandler";
import IProcessor from "../../../kernel/net/processor/IProcessor";
import ChatHandlers from "../proxy/ChatHandlers";
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

	private _chatUser:number;
	private _chatGroup:number = 0;
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
}