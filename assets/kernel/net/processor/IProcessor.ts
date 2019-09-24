//--------------------------------------
// 网络消息处理器
//--------------------------------------
import IChannel from "../channel/IChannel";

export default interface IProcessor {
    registProtocol(protocol:any) : void;
    registCmds(cmds:any) : void;
	unregistCmds(cmds:any) : void;
	unregistAllCmds() : void
    setChannel(cluster:IChannel) : void;
    clear() : void
    sendMessage(cmd:number|string, info:any) : boolean;
    onrecvBuff(buff:any) : void;
    
    sendHeartBeat() : void;
    setPaused(bPause:boolean) : void;
    flushSendlist() : void;
    flushRecvlist() : void;
    clearSendlist() : void;
    clearRecvlist() : void;

    setObserver(observer:any) : void
}
