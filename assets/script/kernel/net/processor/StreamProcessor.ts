//--------------------------------------
// 二进制流消息处理器
//--------------------------------------
import BaseProcessor from "./BaseProcessor";

export default class StreamProcessor extends BaseProcessor {

	public sendMessage(cmd: number|string, info: any): boolean {
		return false;
	}

	public onrecvBuff(buff: any): void {
		
	}

}
