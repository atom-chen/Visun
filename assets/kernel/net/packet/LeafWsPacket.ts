//----------------------------------------------------
//一个protobuf网络包由两个关键信息组成：
// cmd : 消息ID
// data_struct : 包体数据结构
//----------------------------------------------------
import MemoryStream from "../../basic/datastruct/MemoryStream";
import ChannelMgr from "../channel/ChannelMgr";
import PacketInterface from "./PacketInterface";


const HEAD_SIZE = 2;


export default class LeafWsPacket implements PacketInterface{
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
			memStream.write_int16(0, this.cmd);
			memStream.write_buffer(HEAD_SIZE, bytes_body);
			var buffSend = new Uint8Array(memStream.buffer);
			// cc.log("pack", this.unpack(buffSend));
			return buffSend;
		}
		else {
			var memStream = new MemoryStream(HEAD_SIZE);
			memStream.write_int16(0, this.cmd);
			var buffSend = new Uint8Array(memStream.buffer);
			// cc.log("pack", this.unpack(buffSend));
			return buffSend;
		}
	}

	unpack(buff:any) : any
	{
		if(buff===undefined || buff === null) {
			return { cmd:0, errCode:1, data:null };
		}

		var bytes = new Uint8Array(buff);
		var memStream = new MemoryStream(bytes.length);
		memStream.write_buffer(0, bytes);
		return this.unpackStream(memStream);
	}

	public unpackStream(memStream:MemoryStream) : any
	{
		if(memStream===undefined || memStream === null) {
			return { cmd:0, errCode:1, data:null };
		}

		//解析包头
		var cmd = memStream.read_int16(0);
		var errCode = 0;
		var data = null;

		//解析包体
		if(errCode == 0){
			if(this.data_struct!==null && this.data_struct!==undefined) {
				try {
					var tmp = new Uint8Array(memStream.buffer, HEAD_SIZE);
					var body = this.data_struct.decode(tmp);
					data = this.data_struct.toObject(body, {defaults:true,longs:Number});
				}
				catch(err) {
					cc.warn("unpack fail", cmd, err);
				}
			}
		}
		
		cc.log(cmd, errCode, data);

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

		var data = null;
		if(this.data_struct!==null && this.data_struct!==undefined) {
			try {
				var body = this.data_struct.decode(bytes);
				data = this.data_struct.toObject(body, {defaults:true,longs:Number});
				return data;
			}
			catch(err) {
				cc.warn("unpack fail", err);
			}
		}
		return null;
	}

	public sendToChannel(channelKey:string, data:any, bIsPbObj:boolean)
	{
		var dstChannel = ChannelMgr.getInstance().getChannel(channelKey);
		if(!dstChannel) { cc.warn("..... channel not created: ", channelKey); return; }
		cc.log(channelKey, "pack", this.cmd, data);
        var buff = this.pack(data, bIsPbObj);
        dstChannel.sendMessage(this.cmd, buff);
	}

}