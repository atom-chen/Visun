//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    PlayerInfo = 18,
    UserList = 19,
    PlayerRecord = 20,
    GameRecord = 21,
    GameRecordList = 22,
    ReqEnterRoom = 23,
    RespEnterRoom = 24,
    ReqEnterGame = 25,
    RespEnterGame = 26,
    ReqExitGame = 27,
    RespExitGame = 28,
}

export var gamecomm_packet_define = {
    18: new LeafWsPacket(18, gamecomm.PlayerInfo),
    19: new LeafWsPacket(19, gamecomm.UserList),
    20: new LeafWsPacket(20, gamecomm.PlayerRecord),
    21: new LeafWsPacket(21, gamecomm.GameRecord),
    22: new LeafWsPacket(22, gamecomm.GameRecordList),
    23: new LeafWsPacket(23, gamecomm.ReqEnterRoom),
    24: new LeafWsPacket(24, gamecomm.RespEnterRoom),
    25: new LeafWsPacket(25, gamecomm.ReqEnterGame),
    26: new LeafWsPacket(26, gamecomm.RespEnterGame),
    27: new LeafWsPacket(27, gamecomm.ReqExitGame),
    28: new LeafWsPacket(28, gamecomm.RespExitGame),
}

export class gamecomm_request {
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number } ) { gamecomm_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any } ) { gamecomm_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any } ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqEnterRoom( data:{ RoomNum:number, RoomKey:string } ) { gamecomm_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static RespEnterRoom( data:{} ) { gamecomm_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static RespEnterGame( data:{} ) { gamecomm_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static RespExitGame( data:{} ) { gamecomm_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
}

