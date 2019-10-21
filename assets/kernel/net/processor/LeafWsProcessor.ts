//--------------------------------------
// Protobuf消息处理器
//--------------------------------------
import BaseProcessor from "./BaseProcessor";
import CommonUtil from "../../utils/CommonUtil";
import MemoryStream from "../../basic/MemoryStream";


const HEAD_SIZE = 2;

export default class LeafWsProcessor extends BaseProcessor {

	private isShowDebug(cmd: number|string) : boolean
	{
		return true;
	}

	public sendMessage(cmd: number | string, info: any): boolean 
	{
		if (this.isNetHolded()) {
			cc.log(this._name, "消息推入队列：", this._channel.getState(), this._paused);
			this._send_list.push(info);
			return false;
		}

		if(this.isShowDebug(cmd)) {
			cc.log(this._name, "[send buff]", cmd, info.length);
		//	cc.log(CommonUtil.Bytes2Str(info));
		}

		return this._channel.sendBuff(info);
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
			cc.log(this._name, "[recv]", cmd, bytes.length, data);
		//	cc.log(CommonUtil.Bytes2Str(bytes));
		}

		if(this._paused)
		{
			this._fire_list.push({cmd:cmd,data:data});
			cc.log(this._name, "push fire", this._fire_list.length);
		}
		else
		{
			this._dispatcher.fire(cmd, data);
		}
	}
	
}
