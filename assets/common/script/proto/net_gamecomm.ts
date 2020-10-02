//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    PlayerInfo = 22,
    CardInfo = 23,
    TimeInfo = 24,
    AreaInfo = 25,
    InningInfo = 26,
    PlayerListInfo = 27,
    GoldChangeInfo = 28,
    PlayerRecord = 29,
    GameRecord = 30,
    GameRecordList = 31,
    EnterGameReq = 32,
    EnterGameResp = 33,
    ExitGameReq = 34,
    ExitGameResp = 35,
    ChangeTableReq = 36,
    ChangeTableResp = 37,
    BeOutResp = 38,
    GetInningsInfoReq = 39,
    GetInningsInfoResp = 40,
    GameOverReq = 41,
    GameOverResp = 42,
}

export var gamecomm_packet_define = {
    22: new LeafWsPacket(22, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    23: new LeafWsPacket(23, gamecomm.CardInfo, "gamecomm.CardInfo"),
    24: new LeafWsPacket(24, gamecomm.TimeInfo, "gamecomm.TimeInfo"),
    25: new LeafWsPacket(25, gamecomm.AreaInfo, "gamecomm.AreaInfo"),
    26: new LeafWsPacket(26, gamecomm.InningInfo, "gamecomm.InningInfo"),
    27: new LeafWsPacket(27, gamecomm.PlayerListInfo, "gamecomm.PlayerListInfo"),
    28: new LeafWsPacket(28, gamecomm.GoldChangeInfo, "gamecomm.GoldChangeInfo"),
    29: new LeafWsPacket(29, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    30: new LeafWsPacket(30, gamecomm.GameRecord, "gamecomm.GameRecord"),
    31: new LeafWsPacket(31, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    32: new LeafWsPacket(32, gamecomm.EnterGameReq, "gamecomm.EnterGameReq"),
    33: new LeafWsPacket(33, gamecomm.EnterGameResp, "gamecomm.EnterGameResp"),
    34: new LeafWsPacket(34, gamecomm.ExitGameReq, "gamecomm.ExitGameReq"),
    35: new LeafWsPacket(35, gamecomm.ExitGameResp, "gamecomm.ExitGameResp"),
    36: new LeafWsPacket(36, gamecomm.ChangeTableReq, "gamecomm.ChangeTableReq"),
    37: new LeafWsPacket(37, gamecomm.ChangeTableResp, "gamecomm.ChangeTableResp"),
    38: new LeafWsPacket(38, gamecomm.BeOutResp, "gamecomm.BeOutResp"),
    39: new LeafWsPacket(39, gamecomm.GetInningsInfoReq, "gamecomm.GetInningsInfoReq"),
    40: new LeafWsPacket(40, gamecomm.GetInningsInfoResp, "gamecomm.GetInningsInfoResp"),
    41: new LeafWsPacket(41, gamecomm.GameOverReq, "gamecomm.GameOverReq"),
    42: new LeafWsPacket(42, gamecomm.GameOverResp, "gamecomm.GameOverResp"),
}

export class gamecomm_request {
    public static PlayerInfo( data:{ UserID:number, Name:string, FaceID:number, Age:number, Sex:number, Gold:number, Level:number, Account:string, Sate:any, PlatformID:number, RoomNum:number, GameID:number, TableID:number, ChairID:number } ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static CardInfo( data:{ Cards:any, CardType:number, CardValue:number } ) { gamecomm_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static TimeInfo( data:{ TimeStamp:number, WaitTime:number, OutTime:number, TotalTime:number } ) { gamecomm_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static AreaInfo( data:{ ID:number, MyGold:number, TotalGold:number, AcquireGold:number } ) { gamecomm_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static InningInfo( data:{ Number:string, Name:string, Level:number, Payoff:number, TimeStamp:number } ) { gamecomm_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerListInfo( data:{ AllInfos:any[] } ) { gamecomm_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GoldChangeInfo( data:{ UserID:number, Gold:number, AlterGold:number, Code:number, Reason:string } ) { gamecomm_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ CardInfo:any, IsWon:any } ) { gamecomm_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameReq( data:{ GameID:number, GameKey:string } ) { gamecomm_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameResp( data:{ GameID:number, UserInfo:any } ) { gamecomm_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static ExitGameReq( data:{ GameID:number } ) { gamecomm_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static ExitGameResp( data:{ GameID:number, UserID:number } ) { gamecomm_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static ChangeTableReq( data:{ GameID:number } ) { gamecomm_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static ChangeTableResp( data:{ GameID:number, TableID:number, UserID:number } ) { gamecomm_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static BeOutResp( data:{ UserID:number, GameID:number, Code:number, Hints:string } ) { gamecomm_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GetInningsInfoReq( data:{ GameID:number } ) { gamecomm_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static GetInningsInfoResp( data:{ Innings:any[], PageNum:number } ) { gamecomm_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static GameOverReq( data:{ GameID:number } ) { gamecomm_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GameOverResp( data:{ Innings:any[], PageNum:number } ) { gamecomm_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
}

