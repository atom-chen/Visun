//----------------------------------------------------
//一个protobuf网络包由两个关键信息组成：
// cmd : 消息ID
// data_struct : 包体数据结构
//----------------------------------------------------
import MemoryStream from "./MemoryStream";
import ChannelMgr from "./channel/ChannelMgr";
import PacketInterface from "./PacketInterface";
import {leafcomand} from "../../common/script/proto/leafcomand"


const HEAD_SIZE = 4;


export default class LeafWsPacket implements PacketInterface{
	protected cmd:number;				//消息ID
	protected data_struct:any;			//包体数据结构
	protected mainId: number;
	protected subId: number;

	constructor(cmd:number, dataStruct:any, MainID:number, SubID:number){
		this.cmd = cmd;
		this.data_struct = dataStruct;
		this.mainId = MainID;
		this.subId = SubID;
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

			var extdata = leafcomand.PacketData.create({
				MainID : this.mainId,
				SubID : this.subId,
				TransData : bytes_body
			});
			bytes_body = new Uint8Array( leafcomand.PacketData.encode(extdata).finish() );
		}

		if(bytes_body !== null) {
			var memStream = new MemoryStream(HEAD_SIZE + bytes_body.length);
			memStream.write_int32(0, this.cmd);
			memStream.write_buffer(HEAD_SIZE, bytes_body);
			var buffSend = new Uint8Array(memStream.buffer);
			// cc.log("pack", this.unpack(buffSend));
			return buffSend;
		}
		else {
			var memStream = new MemoryStream(HEAD_SIZE);
			memStream.write_uint32(0, this.cmd);
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
		var cmd = memStream.read_uint32(0);
		var errCode = 0;
		var MainID = 0;
		var SubID = 0;
		var data = null;

		//解析包体
		if(errCode == 0){
			if(this.data_struct!==null && this.data_struct!==undefined) {
				var tmp = new Uint8Array(memStream.buffer, HEAD_SIZE);
				try {
					var extdata = leafcomand.PacketData.decode(tmp);
					var extInfo = leafcomand.PacketData.toObject(extdata, {defaults:true,longs:Number});
					MainID = extInfo.MainID;
					SubID = extInfo.SubID;
					tmp = extInfo.TransData;

					var body = this.data_struct.decode(tmp);
					data = this.data_struct.toObject(body, {defaults:true,longs:Number});
				}
				catch(err) {
					cc.warn("unpack fail", cmd, err);
				}
			}
		}
		
		cc.log(cmd, errCode, MainID, SubID, data);

		return {
			cmd : cmd,
			errCode : errCode,
			MainID : MainID,
			SubID : SubID,
			data : data
		};
	}

	unpackBody(bytes:Uint8Array) : any
	{
		if(bytes===null || bytes===undefined) {
			return null;
		}
		var MainID = 0;
		var SubID = 0;
		var data = null;
		if(this.data_struct!==null && this.data_struct!==undefined) {
			try {
				var extdata = leafcomand.PacketData.decode(bytes);
				var extInfo = leafcomand.PacketData.toObject(extdata, {defaults:true,longs:Number});
				MainID = extInfo.MainID;
				SubID = extInfo.SubID;
				bytes = extInfo.TransData;

				var body = this.data_struct.decode(bytes);
				data = this.data_struct.toObject(body, {defaults:true,longs:Number});

				return {
					MainID : MainID,
					SubID : SubID,
					data : data
				}
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