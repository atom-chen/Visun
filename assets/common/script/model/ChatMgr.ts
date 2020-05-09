import ModelBase from "../../../kernel/model/ModelBase";
import EventCenter from "../../../kernel/basic/event/EventCenter";
import KernelEvent from "../../../kernel/basic/defines/KernelEvent";
import IChannel from "../../../kernel/net/channel/IChannel";
import ChannelDefine from "../definer/ChannelDefine";
import { ConnState } from "../../../kernel/basic/defines/KernelDefine";
import UIManager from "../../../kernel/view/UIManager";

export default class ChatMgr extends ModelBase {
	private static _instance:ChatMgr = null;
	private constructor(){
		super();
		//重连逻辑
		EventCenter.getInstance().listen(KernelEvent.NET_STATE, (chan:IChannel)=>{
            if(chan.getName()===ChannelDefine.chat) {
                if(chan.getState()===ConnState.reconnectfail) {
                    UIManager.openDialog("chatReconnectfail", "聊天连接断开，是否重连？", (menuId:number)=>{
                        if(menuId===1) {
                            chan.reconnect();
                        }
                    });
				}
            }
        }, this);
	}
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
}