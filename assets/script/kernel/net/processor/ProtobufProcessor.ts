//--------------------------------------
// Protobuf消息处理器
//--------------------------------------
import { ConnState } from "../Define";
import BaseProcessor from "./BaseProcessor";

export default class ProtobufProcessor extends BaseProcessor {

	public sendMessage(cmd:number|string, info:any) : boolean
	{
		if(!this.cmd_2_name[cmd]) {
			cc.error("未定义该协议", cmd);
			return;
		}
		
		var buff = this._pb_package.Request.encode(info).finish();

		if(this._channel.getState() !== ConnState.connected){
			cc.log("消息推入队列。 当前连接状态：", this._channel.getState());
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
		cc.log("[recv]", info);

		var cmd = info.cmd;
		var data = info.data;

		this.response(cmd, data);
	}
}
