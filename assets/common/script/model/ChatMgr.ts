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


	private initChatProcessor() : IProcessor {
		var obj = ProcessorMgr.getInstance().getProcessor(ChannelDefine.chat);
		if(obj) {
			return obj;
		}
		var g_chatProcessor = ProcessorMgr.getInstance().createProcessor(ChannelDefine.chat, ProcessorType.LeafWs);
        g_chatProcessor.unregistAllCmds();
     //   g_chatProcessor.registCmds(chat_msgs);
		g_chatProcessor.getDispatcher().addObserver(ChatHandlers);
		return g_chatProcessor;
	}

	//建立网络连接
	public connectServer() {
		//建立通道 
		var wsAddr = ServerConfig.chatServer;
		cc.log("连接聊天服", wsAddr);
		var g_leafProcessor = this.initChatProcessor();
		var leafChan = ChannelMgr.getInstance().createChannel(ChannelDefine.chat, ChannelType.Ws);
		leafChan.setProcessor(g_leafProcessor);
		g_leafProcessor.setChannel(leafChan);
		leafChan.connect( wsAddr, 0, 
			new CHandler(this, ()=>{
				
			}),
			new CHandler(this, ()=>{ 
				UIManager.openDialog("chatconn_fail", "聊天服连接失败，是否重试？", (menuId:number)=>{
					if(menuId===1) {
						this.connectServer();
					}
				})
			})
		);
	}
}