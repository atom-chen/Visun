//--------------------------------------
// Protobuf消息处理器
//--------------------------------------
import BaseProcessor from "./BaseProcessor";
import CommonUtil from "../../utils/CommonUtil";
import MemoryStream from "../../basic/MemoryStream";
import EventCenter from "../../event/EventCenter";
import KernelEvent from "../../looker/KernelEvent";

const HEAD_SIZE = 4;

export default class LeafTcpProcessor extends BaseProcessor {

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
			cc.log(this._name, "[send buff]", cmd);
			cc.log(CommonUtil.Bytes2Str(info));
		}

		return this._channel.sendBuff(info);
	}

	public onrecvBuff(buff: any): void 
	{
		//解析包头
		var bytes = new Uint8Array(buff);
		var memStream = new MemoryStream(HEAD_SIZE);
		memStream.safe_write_buffer(0, bytes);

		var totalLen = memStream.read_int16(0);
		var cmd = memStream.read_int16(2);
		var errCode = 0;

		if(this.isShowDebug(cmd)) {
			cc.log(this._name, "[recv buff]");
			cc.log(CommonUtil.Bytes2Str(bytes));
		}
		
		//有错误则走错误处理逻辑
		if(errCode != 0){
			cc.log(this._name, "[net fail]", cmd, errCode);
			EventCenter.getInstance().fire( KernelEvent.WS_FAIL, { cmd:cmd, errCode:errCode } );
			return;
		}

		//解析包体
		var packet = this._cmds[cmd];
		if(!packet) {
			cc.log(this._name, "找不到cmd表: ", cmd);
			return;
		}

		var data = packet.unpackBody(bytes.subarray(HEAD_SIZE));

		if(this.isShowDebug(cmd)) {
			cc.log(this._name, "[recv]", cmd, data);
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
