//----------------------------------------------------
//一个protobuf网络包由两个关键信息组成：
// cmd : 消息ID
// data_struct : 包体数据结构
//----------------------------------------------------

import MemoryStream from "./MemoryStream";
import ChannelMgr from "./channel/ChannelMgr";


export default class NetPacket {
	protected cmd:number;				//消息ID
	protected data_struct:any;			//包体数据结构

	constructor(cmd:number, dataStruct:any){
		this.cmd = cmd;
		this.data_struct = dataStruct;
	}

	pack(data:any, bIsPbObj:boolean) : Uint8Array
	{
		if(data===undefined || data===null) {
			data = {};
		}

		var HEAD_SIZE = 8;
		
		var body = data;
		if( !bIsPbObj ) { body = this.data_struct.create(data); } 
		var buff_body = this.data_struct.encode(body).finish();
		var bytes_body = new Uint8Array(buff_body);
		var buffSend = bytes_body;

		var memStream = new MemoryStream(HEAD_SIZE + buffSend.length);
		memStream.write_buffer(HEAD_SIZE, buffSend);
		memStream.write_int32(0, this.cmd);
		memStream.write_int32(4, 0);

		buffSend = new Uint8Array(memStream.buffer);
		// cc.log("pack", this.unpack(buffSend));
		return buffSend;
	}

	unpack(buff:any) : any
	{
		if(buff===undefined || buff === null) {
			return { cmd:0, errCode:1, data:null };
		}

		//解析包头
		var HEAD_SIZE = 8;
		var bytes = new Uint8Array(buff);
		var memStream = new MemoryStream(bytes.length);
		memStream.write_buffer(0, bytes);

		var cmd = memStream.read_uint32(0);
		var errCode = memStream.read_uint32(4);
		var data = null;

		//解析包体
		if(errCode == 0){
			var tmp = new Uint8Array(memStream.buffer, HEAD_SIZE);
			var body = this.data_struct.decode(tmp);
			var defaults = { defaults: true };
			data = this.data_struct.toObject(body, defaults);
		}
		
		return {
			cmd : cmd,
			errCode : errCode,
			data : data
		};
	}

	public sendToChannel(channelKey:string, data:any, bIsPbObj:boolean)
	{
		var dstChannel = ChannelMgr.getInstance().getChannel(channelKey);
        if(!dstChannel) { cc.log("channel not created: ", channelKey); return; }
        var buff = this.pack(data, bIsPbObj);
        dstChannel.sendMessage(this.cmd, buff);
	}

}