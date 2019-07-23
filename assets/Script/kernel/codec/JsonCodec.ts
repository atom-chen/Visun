const {ccclass, property} = cc._decorator;

@ccclass
export default class JsonCodec extends cc.Component {

	public static encode(info:any) : string
	{
		return JSON.stringify(info);
	}

	public static decode(data:string) : object
	{
		return JSON.parse(data);
	}

}
