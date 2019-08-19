//--------------------------------------
// 网络通道：客户端和服务端进行网络通讯的一条管道
// 每条通道即一个协议簇(websocket/http/tcp/udp)
// 协议簇处理和服务端的网络连接和原始数据的收发
// 每个channel有一个Processer,进行原始数据的编码和解码
//
// 设计原由：做到上层逻辑，只关心建立连接和发送+接收消息
//          不用关心底层是用的http还是websocket或tcp或其他
//          也不用关心消息是用json还是protobuf或自定义二进制流
//--------------------------------------
import IProcessor from "../processor/IProcessor";

export default interface IChannel {
    setProcessor(porcessor:IProcessor) : void;
    connect(url:string, port:number, on_success?:Function, on_fail?:Function) : void;
    close() : void;
    sendBuff(buff:any) : boolean;
    sendMessage(cmd:string|number, info:any) : boolean;
    destroy() : void;
}
