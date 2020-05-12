//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    ReqEnterGame = 64,
    ReqExitGame = 65,
    ReqChangeTable = 66,
    PlayerInfo = 67,
    UserList = 68,
    PlayerRecord = 69,
    GameReady = 70,
    GameBet = 71,
    GameBetResult = 72,
    GameRecord = 73,
    GameRecordList = 74,
    GameResult = 75,
    NotifyChangeGold = 76,
    GameStateFree = 77,
    GameStateStart = 78,
    GameStatePlaying = 79,
    GameStateOver = 80,
    GameStateCall = 81,
    GameBeOut = 82,
    GameHost = 83,
    GameSuperHost = 84,
    GameCall = 85,
}

export var gamecomm_packet_define = {
    64: new LeafWsPacket(64, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    65: new LeafWsPacket(65, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    66: new LeafWsPacket(66, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    67: new LeafWsPacket(67, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    68: new LeafWsPacket(68, gamecomm.UserList, "gamecomm.UserList"),
    69: new LeafWsPacket(69, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    70: new LeafWsPacket(70, gamecomm.GameReady, "gamecomm.GameReady"),
    71: new LeafWsPacket(71, gamecomm.GameBet, "gamecomm.GameBet"),
    72: new LeafWsPacket(72, gamecomm.GameBetResult, "gamecomm.GameBetResult"),
    73: new LeafWsPacket(73, gamecomm.GameRecord, "gamecomm.GameRecord"),
    74: new LeafWsPacket(74, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    75: new LeafWsPacket(75, gamecomm.GameResult, "gamecomm.GameResult"),
    76: new LeafWsPacket(76, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    77: new LeafWsPacket(77, gamecomm.GameStateFree, "gamecomm.GameStateFree"),
    78: new LeafWsPacket(78, gamecomm.GameStateStart, "gamecomm.GameStateStart"),
    79: new LeafWsPacket(79, gamecomm.GameStatePlaying, "gamecomm.GameStatePlaying"),
    80: new LeafWsPacket(80, gamecomm.GameStateOver, "gamecomm.GameStateOver"),
    81: new LeafWsPacket(81, gamecomm.GameStateCall, "gamecomm.GameStateCall"),
    82: new LeafWsPacket(82, gamecomm.GameBeOut, "gamecomm.GameBeOut"),
    83: new LeafWsPacket(83, gamecomm.GameHost, "gamecomm.GameHost"),
    84: new LeafWsPacket(84, gamecomm.GameSuperHost, "gamecomm.GameSuperHost"),
    85: new LeafWsPacket(85, gamecomm.GameCall, "gamecomm.GameCall"),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, ChairID:number } ) { gamecomm_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:string } ) { gamecomm_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ TimeStamp:number, WaitTime:number, UserID:number } ) { gamecomm_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:string } ) { gamecomm_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
}

