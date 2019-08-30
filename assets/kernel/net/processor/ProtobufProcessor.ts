//--------------------------------------
// Protobuf消息处理器
//--------------------------------------
import BaseProcessor from "./BaseProcessor";
import { ConnState } from "../../looker/KernelDefine";

export default class ProtobufProcessor extends BaseProcessor {

	public sendMessage(cmd:number|string, info:any) : boolean
	{
		if(!this.isValidCmd(cmd)){ return false; }
		
		var buff = this._pb_package.Request.encode(info).finish();

		if (this._channel.getState() != ConnState.connectsucc && this._channel.getState() != ConnState.reconnectsucc || this._paused) {
			cc.log(this._channel.getName(), "消息推入队列：", this._channel.getState(), this._paused);
			this._send_list.push(buff);
			return;
		}

		// for debug
		var obj = this._pb_package.Request.decode(buff);
		var info = this._pb_package.Request.toObject(obj);
		cc.log("[send]", info);

		this._channel.sendBuff(buff);
		return true;
	}

	public onrecvBuff(buff:any) : void
	{	
		//二进制流 转 obj
		var bytes = new Uint8Array(buff);
		var obj = this._pb_package.Response.decode(bytes);
		var info = this._pb_package.Response.toObject(obj);
		cc.log(this._channel.getName(), "[recv]", info);

		var cmd = info.cmd;
		var data = info.data;

		if(this._paused)
		{
			this._fire_list.push({cmd:cmd, data:data});
			cc.log(this._channel.getName(), "push fire", this._fire_list.length);
		}
		else{
			this.response(cmd, data);
		}
	}
}
