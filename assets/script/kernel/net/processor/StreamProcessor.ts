//--------------------------------------
// 二进制流消息处理器
//--------------------------------------
import IProcessor from "./IProcessor";
import IChannel from "../channel/IChannel";

export default class StreamProcessor implements IProcessor {

    public registProtocol(protocol: any): void {
        
    }
    
    public setResponder(responder: any): void {
        
    }

    public clear(): void {
        
    }

    public setChannel(cluster: IChannel) {
        
    }

    public sendMessage(cmd: number|string, info: any): boolean {
        return false;
    }

    public onrecvBuff(buff: any): void {
        
    }

}
