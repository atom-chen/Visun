import MemoryStream from "./MemoryStream";

export default interface PacketInterface {
	pack(data:any, bIsPbObj:boolean) : any;
	unpack(buff:any) : any;
	unpackStream(memStream:MemoryStream) : any;
	unpackBody(bytes:Uint8Array) : any;
	sendToChannel(channelKey:string, data:any, bIsPbObj:boolean) : void;
}