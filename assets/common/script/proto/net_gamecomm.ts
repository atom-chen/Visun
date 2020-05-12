//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    ReqEnterGame = 65,
    ReqExitGame = 66,
    ReqChangeTable = 67,
    PlayerInfo = 68,
    UserList = 69,
    PlayerRecord = 70,
    GameReady = 71,
    GameBet = 72,
    GameBetResult = 73,
    GameRecord = 74,
    GameRecordList = 75,
    GameResult = 76,
    NotifyChangeGold = 77,
    GameStateFree = 78,
    GameStateStart = 79,
    GameStatePlaying = 80,
    GameStateOver = 81,
    GameStateCall = 82,
    GameBeOut = 83,
    GameHost = 84,
    GameSuperHost = 85,
    GameCall = 86,
}

export var gamecomm_packet_define = {
    65: new LeafWsPacket(65, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    66: new LeafWsPacket(66, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    67: new LeafWsPacket(67, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    68: new LeafWsPacket(68, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    69: new LeafWsPacket(69, gamecomm.UserList, "gamecomm.UserList"),
    70: new LeafWsPacket(70, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    71: new LeafWsPacket(71, gamecomm.GameReady, "gamecomm.GameReady"),
    72: new LeafWsPacket(72, gamecomm.GameBet, "gamecomm.GameBet"),
    73: new LeafWsPacket(73, gamecomm.GameBetResult, "gamecomm.GameBetResult"),
    74: new LeafWsPacket(74, gamecomm.GameRecord, "gamecomm.GameRecord"),
    75: new LeafWsPacket(75, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    76: new LeafWsPacket(76, gamecomm.GameResult, "gamecomm.GameResult"),
    77: new LeafWsPacket(77, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    78: new LeafWsPacket(78, gamecomm.GameStateFree, "gamecomm.GameStateFree"),
    79: new LeafWsPacket(79, gamecomm.GameStateStart, "gamecomm.GameStateStart"),
    80: new LeafWsPacket(80, gamecomm.GameStatePlaying, "gamecomm.GameStatePlaying"),
    81: new LeafWsPacket(81, gamecomm.GameStateOver, "gamecomm.GameStateOver"),
    82: new LeafWsPacket(82, gamecomm.GameStateCall, "gamecomm.GameStateCall"),
    83: new LeafWsPacket(83, gamecomm.GameBeOut, "gamecomm.GameBeOut"),
    84: new LeafWsPacket(84, gamecomm.GameHost, "gamecomm.GameHost"),
    85: new LeafWsPacket(85, gamecomm.GameSuperHost, "gamecomm.GameSuperHost"),
    86: new LeafWsPacket(86, gamecomm.GameCall, "gamecomm.GameCall"),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, ChairID:number } ) { gamecomm_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:string } ) { gamecomm_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ TimeStamp:number, WaitTime:number, UserID:number } ) { gamecomm_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:string } ) { gamecomm_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
}

