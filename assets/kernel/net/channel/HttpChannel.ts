//---------------------------------------
// Tcp Socket封装
//---------------------------------------
import IChannel from "./IChannel";
import IProcessor from "../processor/IProcessor";
import { ConnState } from "../../looker/KernelDefine";


export default class HttpChannel implements IChannel {

    private _curState:ConnState = ConnState.unconnect;

    public setProcessor(porcessor: IProcessor): void 
    {
        
    }

    public registProtocol(protocol:any) : void
	{
		
	}

    public connect(url: string, port: number, on_success?: Function, on_fail?: Function): void 
    {
        
    }

    public close(): void 
    {
        
    }

    public sendMessage(cmd:string|number, info:any) : boolean
    {
        return false;
    }

    public sendBuff(buff: any): boolean 
    {
        return false;
    }

    public destroy(): void 
    {
        
    }

    public getState() : ConnState 
	{
		return this._curState;
	}

}
