import { DataProcessor } from "./DataProcessor";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ProtobufCodec implements DataProcessor {

	encode(data: any) 
	{
		throw new Error("Method not implemented.");
	}

	decode(data: any) 
	{
		throw new Error("Method not implemented.");
	}

}
