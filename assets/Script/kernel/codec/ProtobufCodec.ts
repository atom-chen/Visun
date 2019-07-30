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
