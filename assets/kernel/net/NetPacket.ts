//----------------------------------------------------
//一个protobuf网络包由两个关键信息组成：
// cmd : 消息ID
// data_struct : 包体数据结构
//----------------------------------------------------
import MemoryStream from "./MemoryStream";
import ChannelMgr from "./channel/ChannelMgr";
import { HEAD_SIZE } from "../looker/KernelDefine";


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
		
		var bytes_body = null;

		if(this.data_struct !== null && this.data_struct!==undefined) {
			var body = data;
			if( !bIsPbObj ) { body = this.data_struct.create(data); } 
			var buff_body = this.data_struct.encode(body).finish();
			bytes_body = new Uint8Array(buff_body);
		}

		if(bytes_body !== null) {
			var memStream = new MemoryStream(HEAD_SIZE + bytes_body.length);
			memStream.write_uint32(0, this.cmd);
			memStream.write_int32(4, 0);
			memStream.write_buffer(HEAD_SIZE, bytes_body);
			var buffSend = new Uint8Array(memStream.buffer);
			// cc.log("pack", this.unpack(buffSend));
			return buffSend;
		}
		else {
			var memStream = new MemoryStream(HEAD_SIZE);
			memStream.write_uint32(0, this.cmd);
			memStream.write_int32(4, 0);
			var buffSend = new Uint8Array(memStream.buffer);
			// cc.log("pack", this.unpack(buffSend));
			return buffSend;
		}
	}

	unpack(buff:Uint8Array) : any
	{
		if(buff===undefined || buff === null) {
			return { cmd:0, errCode:1, data:null };
		}

		//解析包头
		var memStream = new MemoryStream(buff.length);
		memStream.write_buffer(0, buff);

		var cmd = memStream.read_uint32(0);
		var errCode = memStream.read_int32(4);
		var data = null;

		//解析包体
		if(errCode == 0){
			if(this.data_struct!==null && this.data_struct!==undefined) {
				var tmp = new Uint8Array(memStream.buffer, HEAD_SIZE);
				data = this.data_struct.toObject(this.data_struct.decode(tmp), {defaults:true});
			}
		}
		
		return {
			cmd : cmd,
			errCode : errCode,
			data : data
		};
	}

	unpackStream(memStream:MemoryStream) : any
	{
		if(memStream===undefined || memStream === null) {
			return { cmd:0, errCode:1, data:null };
		}

		//解析包头
		var cmd = memStream.read_uint32(0);
		var errCode = memStream.read_int32(4);
		var data = null;

		//解析包体
		if(errCode == 0){
			if(this.data_struct!==null && this.data_struct!==undefined) {
				var tmp = new Uint8Array(memStream.buffer, HEAD_SIZE);
				data = this.data_struct.toObject(this.data_struct.decode(tmp), {defaults:true});
			}
		}
		
		return {
			cmd : cmd,
			errCode : errCode,
			data : data
		};
	}

	unpackBody(bytes:Uint8Array) : any
	{
		if(bytes===null || bytes===undefined) {
			return null;
		}
		if(this.data_struct!==null && this.data_struct!==undefined) {
			return this.data_struct.toObject(this.data_struct.decode(bytes), {defaults:true});
		}
		return null;
	}

	public sendToChannel(channelKey:string, data:any, bIsPbObj:boolean)
	{
		var dstChannel = ChannelMgr.getInstance().getChannel(channelKey);
        if(!dstChannel) { cc.log("channel not created: ", channelKey); return; }
        var buff = this.pack(data, bIsPbObj);
        dstChannel.sendMessage(this.cmd, buff);
	}

}