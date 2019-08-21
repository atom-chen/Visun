//--------------------------------------
// 网络消息处理器
//--------------------------------------
import IChannel from "../channel/IChannel";
import ISingleDispatcher from "../../event/ISingleDispatcher";

export default interface IProcessor extends ISingleDispatcher {
    registProtocol(protocol:any) : void;
    setChannel(cluster:IChannel) : void;
    clear() : void
    sendMessage(cmd:number|string, info:any) : boolean;
    sendPacket(cmd:number|string, packet:any) : boolean;
    onrecvBuff(buff:any) : void;
}
