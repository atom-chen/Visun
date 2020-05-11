//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    ReqEnterGame = 48,
    ReqExitGame = 49,
    ReqChangeTable = 50,
    PlayerInfo = 51,
    UserList = 52,
    PlayerRecord = 53,
    GameReady = 54,
    GameBet = 55,
    GameBetResult = 56,
    GameRecord = 57,
    GameRecordList = 58,
    GameResult = 59,
    NotifyChangeGold = 60,
    GameStateFree = 61,
    GameStateStart = 62,
    GameStatePlaying = 63,
    GameStateOver = 64,
    GameStateCall = 65,
    GameBeOut = 66,
    GameHost = 67,
    GameSuperHost = 68,
    GameCall = 69,
}

export var gamecomm_packet_define = {
    48: new LeafWsPacket(48, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    49: new LeafWsPacket(49, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    50: new LeafWsPacket(50, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    51: new LeafWsPacket(51, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    52: new LeafWsPacket(52, gamecomm.UserList, "gamecomm.UserList"),
    53: new LeafWsPacket(53, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    54: new LeafWsPacket(54, gamecomm.GameReady, "gamecomm.GameReady"),
    55: new LeafWsPacket(55, gamecomm.GameBet, "gamecomm.GameBet"),
    56: new LeafWsPacket(56, gamecomm.GameBetResult, "gamecomm.GameBetResult"),
    57: new LeafWsPacket(57, gamecomm.GameRecord, "gamecomm.GameRecord"),
    58: new LeafWsPacket(58, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    59: new LeafWsPacket(59, gamecomm.GameResult, "gamecomm.GameResult"),
    60: new LeafWsPacket(60, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    61: new LeafWsPacket(61, gamecomm.GameStateFree, "gamecomm.GameStateFree"),
    62: new LeafWsPacket(62, gamecomm.GameStateStart, "gamecomm.GameStateStart"),
    63: new LeafWsPacket(63, gamecomm.GameStatePlaying, "gamecomm.GameStatePlaying"),
    64: new LeafWsPacket(64, gamecomm.GameStateOver, "gamecomm.GameStateOver"),
    65: new LeafWsPacket(65, gamecomm.GameStateCall, "gamecomm.GameStateCall"),
    66: new LeafWsPacket(66, gamecomm.GameBeOut, "gamecomm.GameBeOut"),
    67: new LeafWsPacket(67, gamecomm.GameHost, "gamecomm.GameHost"),
    68: new LeafWsPacket(68, gamecomm.GameSuperHost, "gamecomm.GameSuperHost"),
    69: new LeafWsPacket(69, gamecomm.GameCall, "gamecomm.GameCall"),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, ChairID:number } ) { gamecomm_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:string } ) { gamecomm_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ TimeStamp:number, WaitTime:number, UserID:number } ) { gamecomm_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:string } ) { gamecomm_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
}

