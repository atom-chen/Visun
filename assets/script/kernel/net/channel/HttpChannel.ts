//---------------------------------------
// Tcp Socket封装
//---------------------------------------
import IChannel from "./IChannel";
import IProcessor from "../processor/IProcessor";


export default class HttpChannel implements IChannel {

    public connect(url: string, port: number, on_success?: Function, on_fail?: Function): void 
    {
        
    }

    public close(): void 
    {
        
    }

    public sendBuff(buff: any): boolean 
    {
        return false;
    }

    public sendMessage(cmd:string|number, info:any) : boolean
    {
        return false;
    }

    public setProcessor(porcessor: IProcessor): void 
    {
        
    }

    public destroy(): void 
    {
        
    }

}
