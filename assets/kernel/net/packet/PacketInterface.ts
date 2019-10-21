import MemoryStream from "../../basic/MemoryStream";
import Long from "../../basic/long";

export default interface PacketInterface {
	pack(data:any, bIsPbObj:boolean) : any;
	unpack(buff:any) : any;
	unpackStream(memStream:MemoryStream) : any;
	unpackBody(bytes:Uint8Array) : any;
	sendToChannel(channelKey:string, data:any, bIsPbObj:boolean) : void;
}

//64位处理
protobuf.util.Long = Long;
protobuf.configure();