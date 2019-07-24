import { DataProcessor } from "./DataProcessor";
import {msg} from "../../logic/proxy/pb/Msg"

export default class ProtobufCodec implements DataProcessor {

	encode(data: any) 
	{
		cc.log(data);
		let message = msg.Login.create(data);//构造对象
		let messageBuf = msg.Login.encode(message).finish(); //获取二进制数据，一定要注意使用finish函数
		return messageBuf;
	}

	decode(data: any) 
	{
		cc.log(data);
		// let message = msg.Login.create(data);//构造对象
		// var info = msg.Login.decode(message);
		return data;
	}

}
