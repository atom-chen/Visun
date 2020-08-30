//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    PlayerInfo = 17,
    CardInfo = 18,
    TimeInfo = 19,
    AreaInfo = 20,
    PlayerListInfo = 21,
    GoldChangeInfo = 22,
    PlayerRecord = 23,
    GameRecord = 24,
    GameRecordList = 25,
    EnterGameReq = 26,
    EnterGameResp = 27,
    ExitGameReq = 28,
    ExitGameResp = 29,
    ChangeTableReq = 30,
    ChangeTableResp = 31,
    BeOutResp = 32,
}

export var gamecomm_packet_define = {
    17: new LeafWsPacket(17, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    18: new LeafWsPacket(18, gamecomm.CardInfo, "gamecomm.CardInfo"),
    19: new LeafWsPacket(19, gamecomm.TimeInfo, "gamecomm.TimeInfo"),
    20: new LeafWsPacket(20, gamecomm.AreaInfo, "gamecomm.AreaInfo"),
    21: new LeafWsPacket(21, gamecomm.PlayerListInfo, "gamecomm.PlayerListInfo"),
    22: new LeafWsPacket(22, gamecomm.GoldChangeInfo, "gamecomm.GoldChangeInfo"),
    23: new LeafWsPacket(23, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    24: new LeafWsPacket(24, gamecomm.GameRecord, "gamecomm.GameRecord"),
    25: new LeafWsPacket(25, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    26: new LeafWsPacket(26, gamecomm.EnterGameReq, "gamecomm.EnterGameReq"),
    27: new LeafWsPacket(27, gamecomm.EnterGameResp, "gamecomm.EnterGameResp"),
    28: new LeafWsPacket(28, gamecomm.ExitGameReq, "gamecomm.ExitGameReq"),
    29: new LeafWsPacket(29, gamecomm.ExitGameResp, "gamecomm.ExitGameResp"),
    30: new LeafWsPacket(30, gamecomm.ChangeTableReq, "gamecomm.ChangeTableReq"),
    31: new LeafWsPacket(31, gamecomm.ChangeTableResp, "gamecomm.ChangeTableResp"),
    32: new LeafWsPacket(32, gamecomm.BeOutResp, "gamecomm.BeOutResp"),
}

export class gamecomm_request {
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, Level:number, Account:string, Sate:number, PlatformID:number, RoomNum:number, GameID:number, TableID:number, ChairID:number } ) { gamecomm_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static CardInfo( data:{ Cards:any, CardType:number, CardValue:number } ) { gamecomm_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static TimeInfo( data:{ TimeStamp:number, WaitTime:number, OutTime:number, TotalTime:number } ) { gamecomm_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static AreaInfo( data:{ ID:number, MyGold:number, TotalGold:number, AcquireGold:number } ) { gamecomm_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerListInfo( data:{ AllInfos:any[] } ) { gamecomm_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static GoldChangeInfo( data:{ UserID:number, Gold:number, AlterGold:number, Code:number, Reason:string } ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ CardInfo:any, IsWon:any } ) { gamecomm_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameReq( data:{ GameID:number } ) { gamecomm_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameResp( data:{ GameID:number, UserID:number } ) { gamecomm_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static ExitGameReq( data:{ GameID:number } ) { gamecomm_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static ExitGameResp( data:{ GameID:number, UserID:number } ) { gamecomm_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static ChangeTableReq( data:{ GameID:number } ) { gamecomm_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static ChangeTableResp( data:{ GameID:number, TableID:number, UserID:number } ) { gamecomm_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static BeOutResp( data:{ UserID:number, GameID:number, Code:number, Hints:string } ) { gamecomm_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
}

