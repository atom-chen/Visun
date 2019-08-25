//--------------------------------------
// 二进制流消息处理器
//--------------------------------------
import IProcessor from "./IProcessor";
import IChannel from "../channel/IChannel";
import SingleDispatcher from "../../event/SingleDispatcher";

export default class StreamProcessor extends SingleDispatcher implements IProcessor {
	private _working:boolean = true;
	private _channel:IChannel = null;
//	private _coder:JsonCodec = new JsonCodec;
	private _pb_package:any;
	public name_2_cmd:object = {};
	public cmd_2_name:object = {};
	public _send_list = [];

	public registProtocol(protocol: any): void {
		this._pb_package = protocol;
        this.name_2_cmd = {};
        this.cmd_2_name = {};

        cc.log("-------------------------------------");
        cc.log("注册[二进制流]协议");
        var info = protocol.Request.CMD;
        for(var key in info) {
            if(isNaN(key as any)) {
                var value = info[key];
                cc.log(key, value);
                this.name_2_cmd[key] = value;
                this.cmd_2_name[value] = key;
            }
        }
	}

	public setChannel(cluster: IChannel) {
		this._channel = cluster;
	}

	public clear(): void {
		this.removeAllResponder();
        this._working = false;
        this._channel = null;
        this.name_2_cmd = null;
        this.cmd_2_name = null;
        this._pb_package = null;
	}

	public sendMessage(cmd: number|string, info: any): boolean {
		return false;
	}

	public flush(): void {
		if(this._send_list.length <= 0) { return; }
        for(var i=1; i<this._send_list.length; i++){
            this._channel.sendBuff(this._send_list[i]);
        }
        this._send_list.length = 0;
        this._send_list = [];
	}

	public onrecvBuff(buff: any): void {
		
	}

}
