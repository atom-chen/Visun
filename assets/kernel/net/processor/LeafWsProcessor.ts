//--------------------------------------
// Protobuf消息处理器
// id(2字节) + body
//--------------------------------------
import BaseProcessor from "./BaseProcessor";
import MemoryStream from "../../basic/datastruct/MemoryStream";


const HEAD_SIZE = 2;

export default class LeafWsProcessor extends BaseProcessor {

	private isShowDebug(cmd: number|string) : boolean
	{
		return true;
	}

	public sendMessage(cmd: number | string, buff: any): boolean 
	{
		if (this.isNetHolded()) {
			cc.log(cc.js.formatStr("%s [push send] %s(%d) bytes:%d", this._name, this._cmds[cmd].debugName(), cmd, buff.length));
			this._send_list.push(buff);
			return false;
		}

		if(this.isShowDebug(cmd)) {
			cc.log(cc.js.formatStr("%s [send] %s(%d) bytes:%d", this._name, this._cmds[cmd].debugName(), cmd, buff.length));
		//	cc.log(CommonUtil.Bytes2Str(info));
		}

		return this._channel.sendBuff(buff);
	}

	public onrecvBuff(buff: any): void 
	{
		//解析包头
		var bytes = new Uint8Array(buff);
		var memStream = new MemoryStream(HEAD_SIZE);
		memStream.safe_write_buffer(0, bytes);

		var cmd = memStream.read_int16(0);

		//解析包体
		var packet = this._cmds[cmd];
		if(!packet) {
			cc.log(this._name, "找不到cmd表: ", cmd);
			return;
		}

		var data = packet.unpackBody(bytes.subarray(HEAD_SIZE));

		if(this.isShowDebug(cmd)) {
			if(this._paused) {
				cc.log(cc.js.formatStr("%s [push recv] %s(%d) bytes:%d", this._name, this._cmds[cmd].debugName(), cmd, bytes.length));
			} else {
				cc.log(cc.js.formatStr("%s [recv] %s(%d) bytes:%d", this._name, this._cmds[cmd].debugName(), cmd, bytes.length));
			}
		//	cc.log(CommonUtil.Bytes2Str(bytes));
			cc.log(data);
		}

		if(this._paused) {
			this._fire_list.push({cmd:cmd,data:data});
		} else {
			this._dispatcher.fire(cmd, data);
		}
	}
	
}
