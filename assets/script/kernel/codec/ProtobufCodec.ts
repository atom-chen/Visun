//---------------------------------
// protobuf格式数据编码解码
// pbjs -t static-module -w commonjs -o template.js template.proto
// pbts -o template.d.ts template.js
// https://blog.csdn.net/NRatel/article/details/84251138
// https://www.jianshu.com/p/1598bde2bb97
//---------------------------------
import DataProcessor from "./DataProcessor";

export default class ProtobufCodec implements DataProcessor {

	encode(pkg:any, mud:string, tsObj:any) 
	{
		cc.log(tsObj);
		let message = pkg[mud].create(tsObj);
		let buff = pkg[mud].encode(message).finish();
		return buff;
	}

	decode(pkg:any, mud:string, bytes:any) 
	{
		var data = new Uint8Array(bytes);
		var obj = pkg[mud].decode(data);
		var info = pkg[mud].toObject(obj);
		cc.log(info);
		return info;
	}

}
