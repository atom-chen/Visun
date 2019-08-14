//---------------------------------
// protobuf格式数据编码解码
// pbjs -t static-module -w commonjs -o template.js template.proto
// pbts -o template.d.ts template.js　
// https://blog.csdn.net/NRatel/article/details/84251138
// https://www.jianshu.com/p/1598bde2bb97
//---------------------------------
import DataProcessor from "./DataProcessor";

export default class ProtobufCodec implements DataProcessor {

	encode(proto:any, mud:string, data:any) 
	{
		cc.log(data);
		let message = proto[mud].create(data);
		let messageBuf = proto[mud].encode(message).finish();
		return messageBuf;
	}

	decode(proto:any, mud:string, bytes:any) 
	{
		var data = new Uint8Array(bytes);
		var obj = proto[mud].decode(data);
		var info = proto[mud].toObject(obj);
		cc.log(info);
		return info;
	}

}
