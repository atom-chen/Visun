//--------------------------------------
// 二进制流消息处理器
//--------------------------------------
import IProcessor from "./IProcessor";
import IChannel from "../channel/IChannel";
import SingleDispatcher from "../../event/SingleDispatcher";

export default class StreamProcessor extends SingleDispatcher implements IProcessor {

    public registProtocol(protocol: any): void {
        
    }

    public setChannel(cluster: IChannel) {
        
    }

    public clear(): void {
        
    }

    public sendMessage(cmd: number|string, info: any): boolean {
        return false;
    }

    public flush(): void {
        
    }

    public onrecvBuff(buff: any): void {
        
    }

}
