import { DataProcessor } from "./DataProcessor";
import {proto} from "../../logic/proxy/pb/proto";

export default class ProtobufCodec implements DataProcessor {

	encode(data: any) 
	{
		cc.log(data);
		let message = proto.Login.create(data);
		let messageBuf = proto.Login.encode(message).finish();
		return messageBuf;
	}

	decode(bytes: any) 
	{
		var data = new Uint8Array(bytes)
		var obj = proto.Login.decode(data);
		var info = proto.Login.toObject(obj)
		cc.log(info);
		return info;
	}

}
