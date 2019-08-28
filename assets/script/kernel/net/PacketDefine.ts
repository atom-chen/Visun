import ChannelMgr from "./channel/ChannelMgr";
import IChannel from "./channel/IChannel";

//一个protobuf网络包由三个关键信息组成：
// cmd : 消息ID
// data_struct : 包体数据结构 
// fieldName : 创建出的data_struct实体对象赋值给protobuf请求体的哪个字段
export default class PacketDefine {
	pb_package:any;
	cmd:number;				//消息ID
	data_struct:any;		//包体数据结构
	fieldName:string;		//字段名

	structName:string;		//包体数据结构名
	
	constructor(pkg:any, cmd:number, dataStruct:any, fieldName:string, structName:string){
		this.pb_package = pkg;
		this.cmd = cmd;
		this.data_struct = dataStruct;
		this.fieldName = fieldName;
		this.structName = structName;
	}

	public createPacket(data:any, bIsPbObj:boolean) 
	{
		var req = this.pb_package.Request.create();
        req.cmd = this.cmd;
        if(bIsPbObj) { 
			req[this.fieldName] = data; 
		} else { 
			if(this.data_struct){
				req[this.fieldName] = this.data_struct.create(data); 
			}
			else{
				req[this.fieldName] = this.pb_package[this.structName].create(data);
			}
		}
		return req;
	}

	public sendToChannel(channelKey:string, data:any, bIsPbObj:boolean)
	{
		var channel_game:IChannel = ChannelMgr.instance().getChannel(channelKey);
        if(!channel_game) { return; }
        var req = this.createPacket(data, bIsPbObj);
        channel_game.sendMessage(req.cmd, req);
	}
}