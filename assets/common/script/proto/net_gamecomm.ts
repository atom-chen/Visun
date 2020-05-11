//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    ReqEnterGame = 60,
    ReqExitGame = 61,
    ReqChangeTable = 62,
    PlayerInfo = 63,
    UserList = 64,
    PlayerRecord = 65,
    GameReady = 66,
    GameBet = 67,
    GameBetResult = 68,
    GameRecord = 69,
    GameRecordList = 70,
    GameResult = 71,
    NotifyChangeGold = 72,
    GameStateFree = 73,
    GameStateStart = 74,
    GameStatePlaying = 75,
    GameStateOver = 76,
    GameStateCall = 77,
    GameBeOut = 78,
    GameHost = 79,
    GameSuperHost = 80,
    GameCall = 81,
}

export var gamecomm_packet_define = {
    60: new LeafWsPacket(60, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    61: new LeafWsPacket(61, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    62: new LeafWsPacket(62, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    63: new LeafWsPacket(63, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    64: new LeafWsPacket(64, gamecomm.UserList, "gamecomm.UserList"),
    65: new LeafWsPacket(65, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    66: new LeafWsPacket(66, gamecomm.GameReady, "gamecomm.GameReady"),
    67: new LeafWsPacket(67, gamecomm.GameBet, "gamecomm.GameBet"),
    68: new LeafWsPacket(68, gamecomm.GameBetResult, "gamecomm.GameBetResult"),
    69: new LeafWsPacket(69, gamecomm.GameRecord, "gamecomm.GameRecord"),
    70: new LeafWsPacket(70, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    71: new LeafWsPacket(71, gamecomm.GameResult, "gamecomm.GameResult"),
    72: new LeafWsPacket(72, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    73: new LeafWsPacket(73, gamecomm.GameStateFree, "gamecomm.GameStateFree"),
    74: new LeafWsPacket(74, gamecomm.GameStateStart, "gamecomm.GameStateStart"),
    75: new LeafWsPacket(75, gamecomm.GameStatePlaying, "gamecomm.GameStatePlaying"),
    76: new LeafWsPacket(76, gamecomm.GameStateOver, "gamecomm.GameStateOver"),
    77: new LeafWsPacket(77, gamecomm.GameStateCall, "gamecomm.GameStateCall"),
    78: new LeafWsPacket(78, gamecomm.GameBeOut, "gamecomm.GameBeOut"),
    79: new LeafWsPacket(79, gamecomm.GameHost, "gamecomm.GameHost"),
    80: new LeafWsPacket(80, gamecomm.GameSuperHost, "gamecomm.GameSuperHost"),
    81: new LeafWsPacket(81, gamecomm.GameCall, "gamecomm.GameCall"),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, ChairID:number } ) { gamecomm_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:string } ) { gamecomm_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ TimeStamp:number, WaitTime:number, UserID:number } ) { gamecomm_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:string } ) { gamecomm_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
}

