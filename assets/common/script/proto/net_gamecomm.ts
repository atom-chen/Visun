//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    FailResponse = 11,
    PlayerInfo = 12,
    PlayerList = 13,
    ReqEnterGame = 14,
    RespEnterGame = 15,
    ReqExitGame = 16,
    RespExitGame = 17,
}

export var gamecomm_packet_define = {
    11: new LeafWsPacket(11, gamecomm.FailResponse),
    12: new LeafWsPacket(12, gamecomm.PlayerInfo),
    13: new LeafWsPacket(13, gamecomm.PlayerList),
    14: new LeafWsPacket(14, gamecomm.ReqEnterGame),
    15: new LeafWsPacket(15, gamecomm.RespEnterGame),
    16: new LeafWsPacket(16, gamecomm.ReqExitGame),
    17: new LeafWsPacket(17, gamecomm.RespExitGame),
}

export class gamecomm_request {
    public static FailResponse( data:{ ReqMsgId:number, ErrorCode:number, Tips:string } ) { gamecomm_packet_define[11].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Sex:number, VipLevel:number, Money:number, Head:string } ) { gamecomm_packet_define[12].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerList( data:{ AllInfos:any } ) { gamecomm_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqEnterGame( data:{ GameType:number } ) { gamecomm_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static RespEnterGame( data:{ IsSuccess:number, Reason:string } ) { gamecomm_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameType:number } ) { gamecomm_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static RespExitGame( data:{ IsSuccess:number, Reason:string } ) { gamecomm_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
}

