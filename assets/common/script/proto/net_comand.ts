//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { comand } from "./comand";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum comand_msgs {
    PacketData = 27,
}

export var comand_packet_define = {
    27: new LeafWsPacket(27, comand.PacketData, "comand.PacketData"),
}

export class comand_request {
    public static PacketData( data:{ MsgID:number, TransData:any, PageNum:number } ) { comand_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
}

