import IProcessor from "../processor/IProcessor";

export default interface IChannel {
    connect(url:string, port:number, processor:IProcessor, on_success?:Function, on_fail?:Function) : void;
    close() : void;
    setProcessor() : void;
    sendBuff(buff:any) : void;
    sendMessage(cmd:string|number, info:any) : boolean;
}
