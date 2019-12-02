//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { zhajinhua } from "./zhajinhua";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum zhajinhua_msgs {
    ReqZhajinhuaReady = 20,
    RespZhajinhuaReady = 21,
    ReqZhajinhuaFollow = 22,
    RespZhajinhuaFollow = 23,
    ReqZhajinhuaRaise = 24,
    RespZhajinhuaRaise = 25,
    ReqZhajinhuaLook = 26,
    RespZhajinhuaLook = 27,
    ReqZhajinhuaCompare = 28,
    RespZhajinhuaCompare = 29,
    ReqZhajinhuaGiveup = 30,
    RespZhajinhuaGiveup = 31,
}

export var zhajinhua_packet_define = {
    20: new LeafWsPacket(20, zhajinhua.ReqZhajinhuaReady),
    21: new LeafWsPacket(21, zhajinhua.RespZhajinhuaReady),
    22: new LeafWsPacket(22, zhajinhua.ReqZhajinhuaFollow),
    23: new LeafWsPacket(23, zhajinhua.RespZhajinhuaFollow),
    24: new LeafWsPacket(24, zhajinhua.ReqZhajinhuaRaise),
    25: new LeafWsPacket(25, zhajinhua.RespZhajinhuaRaise),
    26: new LeafWsPacket(26, zhajinhua.ReqZhajinhuaLook),
    27: new LeafWsPacket(27, zhajinhua.RespZhajinhuaLook),
    28: new LeafWsPacket(28, zhajinhua.ReqZhajinhuaCompare),
    29: new LeafWsPacket(29, zhajinhua.RespZhajinhuaCompare),
    30: new LeafWsPacket(30, zhajinhua.ReqZhajinhuaGiveup),
    31: new LeafWsPacket(31, zhajinhua.RespZhajinhuaGiveup),
}

export class zhajinhua_request {
    public static ReqZhajinhuaReady( data:{} ) { zhajinhua_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static RespZhajinhuaReady( data:{ UserID:number } ) { zhajinhua_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqZhajinhuaFollow( data:{ Money:number } ) { zhajinhua_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static RespZhajinhuaFollow( data:{ UserID:number, Money:number } ) { zhajinhua_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqZhajinhuaRaise( data:{ Money:number } ) { zhajinhua_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static RespZhajinhuaRaise( data:{ UserID:number, Money:number } ) { zhajinhua_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqZhajinhuaLook( data:{} ) { zhajinhua_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static RespZhajinhuaLook( data:{ UserID:number, Cards:number[] } ) { zhajinhua_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqZhajinhuaCompare( data:{ HitId:number } ) { zhajinhua_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static RespZhajinhuaCompare( data:{ AttackerId:number, HitId:number, AttackerCards:number[], HitCards:number[], AttackerCardType:number, HitCardType:number, WinnerId:number } ) { zhajinhua_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqZhajinhuaGiveup( data:{} ) { zhajinhua_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static RespZhajinhuaGiveup( data:{ UserID:number } ) { zhajinhua_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
}

