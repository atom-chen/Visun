//--------------------------------------
// Protobuf消息处理器
//--------------------------------------
import IProcessor from "./IProcessor";
import IChannel from "../channel/IChannel";
import SingleDispatcher from "../../event/SingleDispatcher";

export default class BaseProcessor extends SingleDispatcher implements IProcessor {
	protected _paused:boolean = false;
	protected _channel:IChannel = null;
	protected _pb_package:any;
	public name_2_cmd:object = {};
	public cmd_2_name:object = {};
	protected _send_list = [];
	protected _fire_list = [];

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
			//	cc.log(key, value);
				this.name_2_cmd[key] = value;
				this.cmd_2_name[value] = key;
			}
		}
	}

	public isValidCmd(cmd:number|string) : boolean 
	{
		if(!this.cmd_2_name[cmd]) {
			cc.log(this._channel.getName(), "未定义该协议", cmd);
			return false;
		}
		return true;
	}

	public setChannel(cluster:IChannel)
	{
		this._channel = cluster;
	}

	public clear() : void
	{
		this.clearSendlist();
		this.clearRecvlist();
		this.removeAllResponder();
		this._channel = null;
		this.name_2_cmd = null;
		this.cmd_2_name = null;
		this._pb_package = null;
	}

	public clearSendlist() : void
	{
		this._send_list.length = 0;
		this._send_list = [];
	}

	public clearRecvlist() : void
	{
		this._fire_list.length = 0;
		this._fire_list = [];
	}

	setPaused(bPause:boolean) : void
	{
		this._paused = bPause;
		this.flushRecvlist();
		this.flushSendlist();
	}

	public flushRecvlist() 
	{
		if(this._paused) { return; }
		if(this._fire_list.length <= 0) { return; }
		cc.log(this._channel.getName(), "flush firelist", this._fire_list.length);
		for(var i=0, len=this._fire_list.length; i<len; i++){
			this.response(this._fire_list[i].cmd, this._fire_list[i].data);
		}
		this._fire_list.length = 0;
		this._fire_list = [];
	}

	public flushSendlist() 
	{
		if(this._paused) { return; }
		if(this._send_list.length <= 0) { return; }
		cc.log(this._channel.getName(), "flush sendlist: ", this._send_list.length);
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

	sendHeartBeat() : void
	{
		
	}
}
