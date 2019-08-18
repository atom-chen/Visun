import IChannel from "../channel/IChannel";

export default interface IProcessor {
    setChannel(channel:IChannel) : void;
    sendMessage(cmd:string|number, info:any) : boolean;
    onrecvBuff(buff:any) : void;
    registProtocol(protocol:object) : void;
    clear() : void;
}
