const {ccclass, property} = cc._decorator;

@ccclass
export default class JsonCodec extends cc.Component {

	public static encode(info:any) {
		return JSON.stringify(info);
	}

	public static decode(data:string) {
		return JSON.parse(data);
	}

}
