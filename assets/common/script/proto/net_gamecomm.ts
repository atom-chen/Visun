//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    PlayerInfo = 12,
    UserList = 13,
    PlayerRecord = 14,
    GameRecord = 15,
    GameRecordList = 16,
    ReqEnterRoom = 17,
    RespEnterRoom = 18,
    ReqEnterGame = 19,
    RespEnterGame = 20,
    ReqExitGame = 21,
    RespExitGame = 22,
}

export var gamecomm_packet_define = {
    12: new LeafWsPacket(12, gamecomm.PlayerInfo),
    13: new LeafWsPacket(13, gamecomm.UserList),
    14: new LeafWsPacket(14, gamecomm.PlayerRecord),
    15: new LeafWsPacket(15, gamecomm.GameRecord),
    16: new LeafWsPacket(16, gamecomm.GameRecordList),
    17: new LeafWsPacket(17, gamecomm.ReqEnterRoom),
    18: new LeafWsPacket(18, gamecomm.RespEnterRoom),
    19: new LeafWsPacket(19, gamecomm.ReqEnterGame),
    20: new LeafWsPacket(20, gamecomm.RespEnterGame),
    21: new LeafWsPacket(21, gamecomm.ReqExitGame),
    22: new LeafWsPacket(22, gamecomm.RespExitGame),
}

export class gamecomm_request {
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number } ) { gamecomm_packet_define[12].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any } ) { gamecomm_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any } ) { gamecomm_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqEnterRoom( data:{ RoomNum:number, RoomKey:string } ) { gamecomm_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static RespEnterRoom( data:{} ) { gamecomm_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static RespEnterGame( data:{} ) { gamecomm_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static RespExitGame( data:{} ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
}

