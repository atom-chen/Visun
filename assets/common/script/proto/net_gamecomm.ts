//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    PlayerInfo = 15,
    CardInfo = 16,
    TimeInfo = 17,
    UserList = 18,
    ReqEnterGame = 19,
    ReqExitGame = 20,
    ReqChangeTable = 21,
    NotifyChangeGold = 22,
    MoneyCalculateInfo = 23,
    StateReady = 24,
    StateFree = 25,
    StateStart = 26,
    StatePlaying = 27,
    StateOver = 28,
    StateCall = 29,
    Host = 30,
    HostEx = 31,
    Call = 32,
    BeOut = 33,
    Bet = 34,
    BetResult = 35,
    PlayerRecord = 36,
    GameRecord = 37,
    GameRecordList = 38,
}

export var gamecomm_packet_define = {
    15: new LeafWsPacket(15, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    16: new LeafWsPacket(16, gamecomm.CardInfo, "gamecomm.CardInfo"),
    17: new LeafWsPacket(17, gamecomm.TimeInfo, "gamecomm.TimeInfo"),
    18: new LeafWsPacket(18, gamecomm.UserList, "gamecomm.UserList"),
    19: new LeafWsPacket(19, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    20: new LeafWsPacket(20, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    21: new LeafWsPacket(21, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    22: new LeafWsPacket(22, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    23: new LeafWsPacket(23, gamecomm.MoneyCalculateInfo, "gamecomm.MoneyCalculateInfo"),
    24: new LeafWsPacket(24, gamecomm.StateReady, "gamecomm.StateReady"),
    25: new LeafWsPacket(25, gamecomm.StateFree, "gamecomm.StateFree"),
    26: new LeafWsPacket(26, gamecomm.StateStart, "gamecomm.StateStart"),
    27: new LeafWsPacket(27, gamecomm.StatePlaying, "gamecomm.StatePlaying"),
    28: new LeafWsPacket(28, gamecomm.StateOver, "gamecomm.StateOver"),
    29: new LeafWsPacket(29, gamecomm.StateCall, "gamecomm.StateCall"),
    30: new LeafWsPacket(30, gamecomm.Host, "gamecomm.Host"),
    31: new LeafWsPacket(31, gamecomm.HostEx, "gamecomm.HostEx"),
    32: new LeafWsPacket(32, gamecomm.Call, "gamecomm.Call"),
    33: new LeafWsPacket(33, gamecomm.BeOut, "gamecomm.BeOut"),
    34: new LeafWsPacket(34, gamecomm.Bet, "gamecomm.Bet"),
    35: new LeafWsPacket(35, gamecomm.BetResult, "gamecomm.BetResult"),
    36: new LeafWsPacket(36, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    37: new LeafWsPacket(37, gamecomm.GameRecord, "gamecomm.GameRecord"),
    38: new LeafWsPacket(38, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
}

export class gamecomm_request {
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, ChairID:number } ) { gamecomm_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static CardInfo( data:{ Cards:any, CardType:number, CardValue:number } ) { gamecomm_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static TimeInfo( data:{ TimeStamp:number, WaitTime:number, OutTime:number, TotalTime:number } ) { gamecomm_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static MoneyCalculateInfo( data:{ UserID:number, Money:number, ChangeValue:number, Reason:string } ) { gamecomm_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static StateReady( data:{ Times:any } ) { gamecomm_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static StateFree( data:{ Times:any } ) { gamecomm_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static StateStart( data:{ Times:any } ) { gamecomm_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static StatePlaying( data:{ Times:any } ) { gamecomm_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static StateOver( data:{ Times:any } ) { gamecomm_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static StateCall( data:{ Times:any, UserID:number } ) { gamecomm_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static Host( data:{ IsWant:any } ) { gamecomm_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static HostEx( data:{ IsWant:any } ) { gamecomm_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static Call( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static BeOut( data:{ UserID:number, Code:number, Hints:any } ) { gamecomm_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static Bet( data:{ AreaId:number, Money:number } ) { gamecomm_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static BetResult( data:{ UserId:number, AreaId:number, Money:number } ) { gamecomm_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
}

