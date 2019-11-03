import MemoryStream from "../../basic/datastruct/MemoryStream";
import Long from "../../basic/datastruct/long";

export default interface PacketInterface {
	pack(data:any, bIsPbObj:boolean) : any;
	unpack(buff:any) : any;
	unpackStream(memStream:MemoryStream) : any;
	unpackBody(bytes:Uint8Array) : any;
	sendToChannel(channelKey:string, data:any, bIsPbObj:boolean) : void;
}
