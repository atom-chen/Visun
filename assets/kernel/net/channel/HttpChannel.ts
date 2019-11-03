//---------------------------------------
// Tcp Socket封装
//---------------------------------------
import IChannel from "./IChannel";
import IProcessor from "../processor/IProcessor";
import { ConnState } from "../../basic/defines/KernelDefine";
import CHandler from "../../basic/datastruct/CHandler";


export default class HttpChannel implements IChannel {

    private _curState:ConnState = ConnState.unconnect;
    private _name : string;

    constructor(name:string) {
        this._name = name;
    }

    public setProcessor(porcessor: IProcessor): void 
    {
        
    }

    public connect(url: string, port: number, on_success?: CHandler, on_fail?: CHandler): void 
    {
        
    }

    public reconnect() : void
	{
		
    }
    
    public force_reconnect() : void
    {

    }

    public disconnect(): void {
        throw new Error("Method not implemented.");
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
    
    public setName(name:string) {
		this._name = name;
	}

	public getName() : string {
		return this._name;
    }
    
    getProcessor() : IProcessor {
        return null;
    }

}
