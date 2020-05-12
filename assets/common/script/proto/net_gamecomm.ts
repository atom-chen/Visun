//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    ReqEnterGame = 69,
    ReqExitGame = 70,
    ReqChangeTable = 71,
    PlayerInfo = 72,
    UserList = 73,
    PlayerRecord = 74,
    GameReady = 75,
    GameBet = 76,
    GameBetResult = 77,
    GameRecord = 78,
    GameRecordList = 79,
    GameResult = 80,
    NotifyChangeGold = 81,
    GameStateFree = 82,
    GameStateStart = 83,
    GameStatePlaying = 84,
    GameStateOver = 85,
    GameStateCall = 86,
    GameBeOut = 87,
    GameHost = 88,
    GameSuperHost = 89,
    GameCall = 90,
}

export var gamecomm_packet_define = {
    69: new LeafWsPacket(69, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    70: new LeafWsPacket(70, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    71: new LeafWsPacket(71, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    72: new LeafWsPacket(72, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    73: new LeafWsPacket(73, gamecomm.UserList, "gamecomm.UserList"),
    74: new LeafWsPacket(74, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    75: new LeafWsPacket(75, gamecomm.GameReady, "gamecomm.GameReady"),
    76: new LeafWsPacket(76, gamecomm.GameBet, "gamecomm.GameBet"),
    77: new LeafWsPacket(77, gamecomm.GameBetResult, "gamecomm.GameBetResult"),
    78: new LeafWsPacket(78, gamecomm.GameRecord, "gamecomm.GameRecord"),
    79: new LeafWsPacket(79, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    80: new LeafWsPacket(80, gamecomm.GameResult, "gamecomm.GameResult"),
    81: new LeafWsPacket(81, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    82: new LeafWsPacket(82, gamecomm.GameStateFree, "gamecomm.GameStateFree"),
    83: new LeafWsPacket(83, gamecomm.GameStateStart, "gamecomm.GameStateStart"),
    84: new LeafWsPacket(84, gamecomm.GameStatePlaying, "gamecomm.GameStatePlaying"),
    85: new LeafWsPacket(85, gamecomm.GameStateOver, "gamecomm.GameStateOver"),
    86: new LeafWsPacket(86, gamecomm.GameStateCall, "gamecomm.GameStateCall"),
    87: new LeafWsPacket(87, gamecomm.GameBeOut, "gamecomm.GameBeOut"),
    88: new LeafWsPacket(88, gamecomm.GameHost, "gamecomm.GameHost"),
    89: new LeafWsPacket(89, gamecomm.GameSuperHost, "gamecomm.GameSuperHost"),
    90: new LeafWsPacket(90, gamecomm.GameCall, "gamecomm.GameCall"),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, ChairID:number } ) { gamecomm_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:string } ) { gamecomm_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ TimeStamp:number, WaitTime:number, UserID:number } ) { gamecomm_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:string } ) { gamecomm_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
}

