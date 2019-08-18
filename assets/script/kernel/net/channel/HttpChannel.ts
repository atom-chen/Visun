import IChannel from "./IChannel";

export default class HttpChannel implements IChannel {
    public connect(url: string, port: number, processor: import("../processor/IProcessor").default, on_success?: Function, on_fail?: Function): void {
        throw new Error("Method not implemented.");
    }    
    public close(): void {
        throw new Error("Method not implemented.");
    }
    public setProcessor(): void {
        throw new Error("Method not implemented.");
    }
    public sendBuff(buff: any): void {
        throw new Error("Method not implemented.");
    }
    public sendMessage(cmd: string | number, info: any): boolean {
        throw new Error("Method not implemented.");
    }
}
