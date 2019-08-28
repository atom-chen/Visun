//--------------------------------------
// Protobuf消息处理器
//--------------------------------------
import IProcessor from "./IProcessor";
import IChannel from "../channel/IChannel";
import SingleDispatcher from "../../event/SingleDispatcher";

export default class BaseProcessor extends SingleDispatcher implements IProcessor {
	protected _channel:IChannel = null;
	protected _pb_package:any;
	public name_2_cmd:object = {};
	public cmd_2_name:object = {};
	public _send_list = [];

	public registProtocol(protocol:any) : void
	{
		this._pb_package = protocol;
		this.name_2_cmd = {};
		this.cmd_2_name = {};

		cc.log("-----------------注册ws协议-----------------");
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

	public setChannel(cluster:IChannel)
	{
		this._channel = cluster;
	}

	public clear() : void
	{
		this.removeAllResponder();
		this._channel = null;
		this.name_2_cmd = null;
		this.cmd_2_name = null;
		this._pb_package = null;
	}

	public flush() 
	{
		if(this._send_list.length <= 0) { return; }
		cc.log("flush sendlist: ", this._send_list.length);
		for(var i=1; i<this._send_list.length; i++){
			this._channel.sendBuff(this._send_list[i]);
		}
		this._send_list.length = 0;
		this._send_list = [];
	}

	public sendMessage(cmd:number|string, info:any) : boolean
	{
		return false;
	}

	public onrecvBuff(buff:any) : void
	{	
		
	}
}
