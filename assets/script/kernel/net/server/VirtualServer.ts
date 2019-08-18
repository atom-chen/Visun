// 模拟服务器， 方便客户端调试
export default interface VirtualServer {
    sendMessage(cmd:string|number, info:any) : void
    onRecvBuff(buff:any) : void;
}
