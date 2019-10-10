import MemoryStream from "./MemoryStream";

export default interface PacketInterface {
	pack(data:any, bIsPbObj:boolean) : any;
	unpack(buff:any) : any;
	unpackStream(memStream:MemoryStream) : any;
	sendToChannel(channelKey:string, data:any, bIsPbObj:boolean) : void;
}