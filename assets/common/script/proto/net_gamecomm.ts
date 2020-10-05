//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    PlayerInfo = 28,
    CardInfo = 29,
    TimeInfo = 30,
    AreaInfo = 31,
    InningInfo = 32,
    PlayerListInfo = 33,
    GoldChangeInfo = 34,
    PlayerRecord = 35,
    GameRecord = 36,
    GameRecordList = 37,
    EnterGameReq = 38,
    EnterGameResp = 39,
    ExitGameReq = 40,
    ExitGameResp = 41,
    ChangeTableReq = 42,
    ChangeTableResp = 43,
    BeOutResp = 44,
    GetInningsInfoReq = 45,
    GetInningsInfoResp = 46,
    GameOverReq = 47,
    GameOverResp = 48,
}

export var gamecomm_packet_define = {
    28: new LeafWsPacket(28, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    29: new LeafWsPacket(29, gamecomm.CardInfo, "gamecomm.CardInfo"),
    30: new LeafWsPacket(30, gamecomm.TimeInfo, "gamecomm.TimeInfo"),
    31: new LeafWsPacket(31, gamecomm.AreaInfo, "gamecomm.AreaInfo"),
    32: new LeafWsPacket(32, gamecomm.InningInfo, "gamecomm.InningInfo"),
    33: new LeafWsPacket(33, gamecomm.PlayerListInfo, "gamecomm.PlayerListInfo"),
    34: new LeafWsPacket(34, gamecomm.GoldChangeInfo, "gamecomm.GoldChangeInfo"),
    35: new LeafWsPacket(35, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    36: new LeafWsPacket(36, gamecomm.GameRecord, "gamecomm.GameRecord"),
    37: new LeafWsPacket(37, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    38: new LeafWsPacket(38, gamecomm.EnterGameReq, "gamecomm.EnterGameReq"),
    39: new LeafWsPacket(39, gamecomm.EnterGameResp, "gamecomm.EnterGameResp"),
    40: new LeafWsPacket(40, gamecomm.ExitGameReq, "gamecomm.ExitGameReq"),
    41: new LeafWsPacket(41, gamecomm.ExitGameResp, "gamecomm.ExitGameResp"),
    42: new LeafWsPacket(42, gamecomm.ChangeTableReq, "gamecomm.ChangeTableReq"),
    43: new LeafWsPacket(43, gamecomm.ChangeTableResp, "gamecomm.ChangeTableResp"),
    44: new LeafWsPacket(44, gamecomm.BeOutResp, "gamecomm.BeOutResp"),
    45: new LeafWsPacket(45, gamecomm.GetInningsInfoReq, "gamecomm.GetInningsInfoReq"),
    46: new LeafWsPacket(46, gamecomm.GetInningsInfoResp, "gamecomm.GetInningsInfoResp"),
    47: new LeafWsPacket(47, gamecomm.GameOverReq, "gamecomm.GameOverReq"),
    48: new LeafWsPacket(48, gamecomm.GameOverResp, "gamecomm.GameOverResp"),
}

export class gamecomm_request {
    public static PlayerInfo( data:{ UserID:number, Name:string, FaceID:number, Age:number, Sex:number, Gold:number, Level:number, Account:string, Sate:any, PlatformID:number, RoomNum:number, GameID:number, TableID:number, ChairID:number } ) { gamecomm_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static CardInfo( data:{ Cards:any, CardType:number, CardValue:number } ) { gamecomm_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static TimeInfo( data:{ TimeStamp:number, WaitTime:number, OutTime:number, TotalTime:number } ) { gamecomm_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static AreaInfo( data:{ ID:number, MyGold:number, TotalGold:number, AcquireGold:number } ) { gamecomm_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static InningInfo( data:{ Number:string, Name:string, Level:number, Payoff:number, TimeStamp:number } ) { gamecomm_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerListInfo( data:{ AllInfos:any[] } ) { gamecomm_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GoldChangeInfo( data:{ UserID:number, Gold:number, AlterGold:number, Code:number, Reason:string } ) { gamecomm_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ CardInfo:any, IsWon:any } ) { gamecomm_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameReq( data:{ GameID:number, Password:string, ChairNum:number } ) { gamecomm_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameResp( data:{ GameID:number, ChairNum:number, UserInfo:any } ) { gamecomm_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static ExitGameReq( data:{ GameID:number } ) { gamecomm_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static ExitGameResp( data:{ GameID:number, UserID:number } ) { gamecomm_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static ChangeTableReq( data:{ GameID:number } ) { gamecomm_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static ChangeTableResp( data:{ GameID:number, TableNum:number, UserID:number } ) { gamecomm_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static BeOutResp( data:{ UserID:number, GameID:number, Code:number, Hints:string } ) { gamecomm_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GetInningsInfoReq( data:{ GameID:number } ) { gamecomm_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GetInningsInfoResp( data:{ Innings:any[], PageNum:number } ) { gamecomm_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameOverReq( data:{ GameID:number } ) { gamecomm_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameOverResp( data:{ Innings:any[], PageNum:number } ) { gamecomm_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
}

