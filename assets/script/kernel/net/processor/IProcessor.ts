//--------------------------------------
// 网络消息处理器
//--------------------------------------
import IChannel from "../channel/IChannel";

export default interface IProcessor {
    registProtocol(protocol:any) : void;
    setChannel(cluster:IChannel) : void;
    clear() : void
    sendMessage(cmd:number|string, info:any) : boolean;
    onrecvBuff(buff:any) : void;

    registResponder(ptoname:string|number, func:Function, thisObj:any) : void;
    removeResponder(ptoname:string|number) : void;
    removeResponderByTarget(thisObj:any) : void;
    removeAllResponder() : void;
    response(ptoname:string|number, info:any) : void
}
