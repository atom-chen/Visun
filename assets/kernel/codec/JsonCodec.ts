//---------------------------------
// Json格式数据编码解码
//---------------------------------
import ICodec from "./ICodec";

export default class JsonCodec implements ICodec {
	
	encode(data: any) 
	{
		return JSON.stringify(data);
	}

	decode(data: any) 
	{
		if(data===null || data===undefined) { return data; }
		if(data==="") { return {}; }
		return JSON.parse(data);
	}

}
