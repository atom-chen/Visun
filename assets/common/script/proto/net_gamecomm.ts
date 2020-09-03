//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    PlayerState = 20,
    PlayerInfo = 21,
    CardInfo = 22,
    TimeInfo = 23,
    AreaInfo = 24,
    PlayerListInfo = 25,
    GoldChangeInfo = 26,
    PlayerRecord = 27,
    GameRecord = 28,
    GameRecordList = 29,
    EnterGameReq = 30,
    EnterGameResp = 31,
    ExitGameReq = 32,
    ExitGameResp = 33,
    ChangeTableReq = 34,
    ChangeTableResp = 35,
    BeOutResp = 36,
}

export var gamecomm_packet_define = {
    20: new LeafWsPacket(20, gamecomm.PlayerState, "gamecomm.PlayerState"),
    21: new LeafWsPacket(21, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    22: new LeafWsPacket(22, gamecomm.CardInfo, "gamecomm.CardInfo"),
    23: new LeafWsPacket(23, gamecomm.TimeInfo, "gamecomm.TimeInfo"),
    24: new LeafWsPacket(24, gamecomm.AreaInfo, "gamecomm.AreaInfo"),
    25: new LeafWsPacket(25, gamecomm.PlayerListInfo, "gamecomm.PlayerListInfo"),
    26: new LeafWsPacket(26, gamecomm.GoldChangeInfo, "gamecomm.GoldChangeInfo"),
    27: new LeafWsPacket(27, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    28: new LeafWsPacket(28, gamecomm.GameRecord, "gamecomm.GameRecord"),
    29: new LeafWsPacket(29, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    30: new LeafWsPacket(30, gamecomm.EnterGameReq, "gamecomm.EnterGameReq"),
    31: new LeafWsPacket(31, gamecomm.EnterGameResp, "gamecomm.EnterGameResp"),
    32: new LeafWsPacket(32, gamecomm.ExitGameReq, "gamecomm.ExitGameReq"),
    33: new LeafWsPacket(33, gamecomm.ExitGameResp, "gamecomm.ExitGameResp"),
    34: new LeafWsPacket(34, gamecomm.ChangeTableReq, "gamecomm.ChangeTableReq"),
    35: new LeafWsPacket(35, gamecomm.ChangeTableResp, "gamecomm.ChangeTableResp"),
    36: new LeafWsPacket(36, gamecomm.BeOutResp, "gamecomm.BeOutResp"),
}

export class gamecomm_request {
    public static PlayerState( data:{} ) { gamecomm_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, FaceID:number, Age:number, Sex:number, Gold:number, Level:number, Account:string, Sate:any, PlatformID:number, RoomNum:number, GameID:number, TableID:number, ChairID:number } ) { gamecomm_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static CardInfo( data:{ Cards:any, CardType:number, CardValue:number } ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static TimeInfo( data:{ TimeStamp:number, WaitTime:number, OutTime:number, TotalTime:number } ) { gamecomm_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static AreaInfo( data:{ ID:number, MyGold:number, TotalGold:number, AcquireGold:number } ) { gamecomm_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerListInfo( data:{ AllInfos:any[] } ) { gamecomm_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static GoldChangeInfo( data:{ UserID:number, Gold:number, AlterGold:number, Code:number, Reason:string } ) { gamecomm_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ CardInfo:any, IsWon:any } ) { gamecomm_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameReq( data:{ GameID:number } ) { gamecomm_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameResp( data:{ GameID:number, UserInfo:any } ) { gamecomm_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static ExitGameReq( data:{ GameID:number } ) { gamecomm_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static ExitGameResp( data:{ GameID:number, UserID:number } ) { gamecomm_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static ChangeTableReq( data:{ GameID:number } ) { gamecomm_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static ChangeTableResp( data:{ GameID:number, TableID:number, UserID:number } ) { gamecomm_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static BeOutResp( data:{ UserID:number, GameID:number, Code:number, Hints:string } ) { gamecomm_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
}

