//--------------------------------------
// 二进制流消息处理器
//--------------------------------------
import IProcessor from "./IProcessor";
import IChannel from "../channel/IChannel";

export default class StreamProcessor implements IProcessor {

    registProtocol(protocol: any): void {
        
    }
    
    setResponder(responder: any): void {
        
    }

    clear(): void {
        
    }

    setChannel(cluster: IChannel) {
        
    }

    sendMessage(cmd: number|string, info: any): boolean {
        return false;
    }

    onrecvBuff(buff: any): void {
        
    }

}
