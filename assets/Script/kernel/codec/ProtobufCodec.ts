import { DataProcessor } from "./DataProcessor";
import {proto} from "../../logic/proxy/pb/proto"

export default class ProtobufCodec implements DataProcessor {

	encode(data: any) 
	{
		cc.log(data);
		let message = proto.Login.create(data);
		let messageBuf = proto.Login.encode(message).finish();
		return messageBuf;
	}

	decode(data: any) 
	{
		cc.log(data);
		// let message = proto.Login.create(data);//构造对象
		// var info = proto.Login.decode(message);
		return data;
	}

}
