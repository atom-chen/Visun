//---------------------------------------
// Tcp Socket封装
//---------------------------------------
import IChannel from "./IChannel";
import IProcessor from "../processor/IProcessor";
import { ConnState } from "../Define";


export default class TcpChannel implements IChannel {

    private _curState:ConnState = ConnState.unconnect;

    public connect(url: string, port: number, processor: IProcessor, on_success?: Function, on_fail?: Function): void 
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
