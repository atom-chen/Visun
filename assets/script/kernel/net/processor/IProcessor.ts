//--------------------------------------
// 网络消息处理器
//--------------------------------------
import IChannel from "../channel/IChannel";

export default interface IProcessor {
    registProtocol(protocol:any) : void;
    setChannel(cluster:IChannel) : void;
    clear() : void
    sendMessage(cmd:number|string, info:any) : boolean;
    sendPacket(cmd:number|string, packet:any) : boolean;
    flush() : void;
    onrecvBuff(buff:any) : void;
}
