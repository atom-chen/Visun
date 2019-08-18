//--------------------------------------
// 网络消息处理器
//--------------------------------------
import IChannel from "../channel/IChannel";

export default interface IProcessor {
    clear() : void
    sendMessage(cmd:number|string, info:any) : boolean;
    onrecvBuff(buff:any) : void;
    setChannel(cluster:IChannel) : void;
    registProtocol(protocol:any) : void;
    setResponder(responder:any) : void;
}
