//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { comand } from "./comand";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum comand_msgs {
    PacketData = 32,
}

export var comand_packet_define = {
    32: new LeafWsPacket(32, comand.PacketData, "comand.PacketData"),
}

export class comand_request {
    public static PacketData( data:{ MainID:number, SubID:number, TransData:any } ) { comand_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
}

