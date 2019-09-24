//--------------------------------------
// Protobuf消息处理器
//--------------------------------------
import BaseProcessor from "./BaseProcessor";
import CommonUtil from "../../utils/CommonUtil";
import MemoryStream from "../MemoryStream";
import EventCenter from "../../event/EventCenter";
import KernelEvent from "../../looker/KernelEvent";

export default class ProtobufProcessor extends BaseProcessor {

	private isShowDebug(cmd: number|string) : boolean
	{
		return cmd != 5000 && cmd != 5001;
	}

	public sendMessage(cmd: number | string, info: any): boolean 
	{
		if (this.isNetHolded()) {
			cc.log(this._channel.getName(), "消息推入队列：", this._channel.getState(), this._paused);
			this._send_list.push(info);
			return false;
		}

		if(this.isShowDebug(cmd)) {
			cc.log(this._channel.getName(), "[send buff]", cmd);
			cc.log(CommonUtil.Bytes2Str(info));
		}

		return this._channel.sendBuff(info);
	}

	public onrecvBuff(buff: any): void 
	{
		if(typeof buff === "string") {
			//cc.log(this._channel.getName(), "[recv json]", buff);
			return;
		}

		var HEAD_SIZE = 8;

		//解析包头
		var bytes = new Uint8Array(buff);
		var memStream = new MemoryStream(bytes.length);
		memStream.write_buffer(0, bytes);

		var cmd = memStream.read_uint32(0);
		var errCode = memStream.read_int32(4);

		if(this.isShowDebug(cmd)) {
			cc.log(this._channel.getName(), "[recv buff]");
			cc.log(CommonUtil.Bytes2Str(bytes));
		}
		
		//有错误则走错误处理逻辑
		if(errCode != 0){
			cc.log(this._channel.getName(), "[net fail]", cmd, errCode);
			EventCenter.getInstance().fire( KernelEvent.NET_WS_FAIL, { CMD:cmd, code:errCode } );
			return;
		}

		//解析包体
		var packet = this._cmds[cmd];
		if(!packet) {
			cc.log(this._channel.getName(), "找不到cmd表: ", cmd);
			return;
		}

		var data = packet.unpack(bytes).data;

		if(this.isShowDebug(cmd)) {
			cc.log(this._channel.getName(), "[recv]", cmd, data);
		}

		if(this._paused)
		{
			this._fire_list.push({cmd:cmd,data:data});
			cc.log(this._channel.getName(), "push fire", this._fire_list.length);
		}
		else
		{
			this._dispatcher.fire(cmd, data);
		}
	}
	
}
