//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    PlayerInfo = 20,
    ConfigInfo = 21,
    CardInfo = 22,
    TimeInfo = 23,
    AreaInfo = 24,
    InningInfo = 25,
    PlayerListInfo = 26,
    GoldChangeInfo = 27,
    PlayerRecord = 28,
    GameRecord = 29,
    GameRecordList = 30,
    SettingGameReq = 31,
    SettingGameResp = 32,
    EnterGameReq = 33,
    EnterGameResp = 34,
    ExitGameReq = 35,
    ExitGameResp = 36,
    ChangeTableReq = 37,
    ChangeTableResp = 38,
    BeOutResp = 39,
    GetInningsInfoReq = 40,
    GetInningsInfoResp = 41,
}

export var gamecomm_packet_define = {
    20: new LeafWsPacket(20, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    21: new LeafWsPacket(21, gamecomm.ConfigInfo, "gamecomm.ConfigInfo"),
    22: new LeafWsPacket(22, gamecomm.CardInfo, "gamecomm.CardInfo"),
    23: new LeafWsPacket(23, gamecomm.TimeInfo, "gamecomm.TimeInfo"),
    24: new LeafWsPacket(24, gamecomm.AreaInfo, "gamecomm.AreaInfo"),
    25: new LeafWsPacket(25, gamecomm.InningInfo, "gamecomm.InningInfo"),
    26: new LeafWsPacket(26, gamecomm.PlayerListInfo, "gamecomm.PlayerListInfo"),
    27: new LeafWsPacket(27, gamecomm.GoldChangeInfo, "gamecomm.GoldChangeInfo"),
    28: new LeafWsPacket(28, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    29: new LeafWsPacket(29, gamecomm.GameRecord, "gamecomm.GameRecord"),
    30: new LeafWsPacket(30, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    31: new LeafWsPacket(31, gamecomm.SettingGameReq, "gamecomm.SettingGameReq"),
    32: new LeafWsPacket(32, gamecomm.SettingGameResp, "gamecomm.SettingGameResp"),
    33: new LeafWsPacket(33, gamecomm.EnterGameReq, "gamecomm.EnterGameReq"),
    34: new LeafWsPacket(34, gamecomm.EnterGameResp, "gamecomm.EnterGameResp"),
    35: new LeafWsPacket(35, gamecomm.ExitGameReq, "gamecomm.ExitGameReq"),
    36: new LeafWsPacket(36, gamecomm.ExitGameResp, "gamecomm.ExitGameResp"),
    37: new LeafWsPacket(37, gamecomm.ChangeTableReq, "gamecomm.ChangeTableReq"),
    38: new LeafWsPacket(38, gamecomm.ChangeTableResp, "gamecomm.ChangeTableResp"),
    39: new LeafWsPacket(39, gamecomm.BeOutResp, "gamecomm.BeOutResp"),
    40: new LeafWsPacket(40, gamecomm.GetInningsInfoReq, "gamecomm.GetInningsInfoReq"),
    41: new LeafWsPacket(41, gamecomm.GetInningsInfoResp, "gamecomm.GetInningsInfoResp"),
}

export class gamecomm_request {
    public static PlayerInfo( data:{ UserID:number, Name:string, FaceID:number, Age:number, Sex:number, Gold:number, Level:number, Account:string, Sate:any, PlatformID:number, RoomNum:number, GameID:number, TableID:number, ChairID:number } ) { gamecomm_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static ConfigInfo( data:{ Name:string, Key:string, EnterScore:number, LessScore:number, PlayScore:number, Amount:number, MaxChair:number } ) { gamecomm_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static CardInfo( data:{ Cards:any, CardType:number, CardValue:number } ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static TimeInfo( data:{ TimeStamp:number, WaitTime:number, OutTime:number, TotalTime:number } ) { gamecomm_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static AreaInfo( data:{ ID:number, MyGold:number, TotalGold:number, AcquireGold:number } ) { gamecomm_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static InningInfo( data:{ Number:string, Name:string, Level:number, Payoff:number, TimeStamp:number } ) { gamecomm_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerListInfo( data:{ AllInfos:any[] } ) { gamecomm_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static GoldChangeInfo( data:{ UserID:number, Gold:number, AlterGold:number, Code:number, Reason:string } ) { gamecomm_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ CardInfo:any, IsWon:any } ) { gamecomm_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static SettingGameReq( data:{ Model:any, KindID:number, Info:any } ) { gamecomm_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static SettingGameResp( data:{ GameID:number, HostID:number, Info:any } ) { gamecomm_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameReq( data:{ GameID:number, GameKey:string } ) { gamecomm_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameResp( data:{ GameID:number, UserInfo:any } ) { gamecomm_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static ExitGameReq( data:{ GameID:number } ) { gamecomm_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static ExitGameResp( data:{ GameID:number, UserID:number } ) { gamecomm_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static ChangeTableReq( data:{ GameID:number } ) { gamecomm_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static ChangeTableResp( data:{ GameID:number, TableID:number, UserID:number } ) { gamecomm_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static BeOutResp( data:{ UserID:number, GameID:number, Code:number, Hints:string } ) { gamecomm_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static GetInningsInfoReq( data:{ GameID:number } ) { gamecomm_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static GetInningsInfoResp( data:{ Innings:any[], PageNum:number } ) { gamecomm_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
}

