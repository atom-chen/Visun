//一个protobuf网络包由三个关键信息组成：
// cmd : 消息ID
// data_struct : 包体数据结构 
// fieldName : 创建出的data_struct实体对象赋值给protobuf请求体的哪个字段
export default class PacketDefine {
	cmd:number;				//消息ID
	data_struct:any;		//包体数据结构
	fieldName:string;		//字段名

	structName:string;		//包体数据结构名
	
	constructor(cmd:number, dataStruct:any, fieldName:string, structName:string){
		this.cmd = cmd;
		this.data_struct = dataStruct;
		this.fieldName = fieldName;
		this.structName = structName;
	}
}
