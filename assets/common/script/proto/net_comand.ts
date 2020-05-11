//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { comand } from "./comand";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum comand_msgs {
    PacketData = 40,
}

export var comand_packet_define = {
    40: new LeafWsPacket(40, comand.PacketData, "comand.PacketData"),
}

export class comand_request {
    public static PacketData( data:{ MainID:number, SubID:number, TransData:any } ) { comand_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
}

