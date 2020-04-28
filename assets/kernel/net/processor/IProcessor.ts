//--------------------------------------
// 网络消息处理器接口
//--------------------------------------
import IChannel from "../channel/IChannel";
import SingleDispatcher from "../../basic/event/SingleDispatcher";

export default interface IProcessor {
    clear() : void;

    registCmds(cmds:any) : void;
	unregistCmds(cmds:any) : void;
    unregistAllCmds() : void;
    
    setChannel(cluster:IChannel) : void;
    sendMessage(cmd:number|string, info:any) : boolean;
    onrecvBuff(buff:any) : void;
    
    setHeartbeatFunc(func:Function) : void;
    sendHeartBeat() : void;
    
    setPaused(bPause:boolean) : void;
    flushSendlist() : void;
    flushRecvlist() : void;
    clearSendlist() : void;
    clearRecvlist() : void;

    getDispatcher() : SingleDispatcher;
}
