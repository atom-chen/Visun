import { DataProcessor } from "./DataProcessor";

const {ccclass, property} = cc._decorator;

@ccclass
export default class JsonCodec implements DataProcessor {
	
	encode(data: any) 
	{
		return JSON.stringify(data);
	}

	decode(data: any) 
	{
		return JSON.parse(data);
	}

}
