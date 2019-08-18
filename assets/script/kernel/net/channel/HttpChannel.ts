//---------------------------------------
// Tcp Socket封装
//---------------------------------------
import IChannel from "./IChannel";
import IProcessor from "../processor/IProcessor";


export default class HttpChannel implements IChannel {

    connect(url: string, port: number, processor: IProcessor, on_success?: Function, on_fail?: Function): void 
    {
        
    }

    close(): void 
    {
        
    }

    sendBuff(buff: any): boolean 
    {
        return false;
    }

    sendMessage(cmd:string|number, info:any) : boolean
    {
        return false;
    }

    setProcessor(porcessor: IProcessor): void 
    {
        
    }

    destroy(): void 
    {
        
    }

}
