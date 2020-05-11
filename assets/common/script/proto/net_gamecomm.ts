//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    ReqEnterGame = 47,
    ReqExitGame = 48,
    ReqChangeTable = 49,
    PlayerInfo = 50,
    UserList = 51,
    PlayerRecord = 52,
    GameReady = 53,
    GameBet = 54,
    GameBetResult = 55,
    GameRecord = 56,
    GameRecordList = 57,
    GameResult = 58,
    NotifyChangeGold = 59,
    GameStateFree = 60,
    GameStateStart = 61,
    GameStatePlaying = 62,
    GameStateOver = 63,
    GameStateCall = 64,
    GameBeOut = 65,
    GameHost = 66,
    GameSuperHost = 67,
    GameCall = 68,
}

export var gamecomm_packet_define = {
    47: new LeafWsPacket(47, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    48: new LeafWsPacket(48, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    49: new LeafWsPacket(49, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    50: new LeafWsPacket(50, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    51: new LeafWsPacket(51, gamecomm.UserList, "gamecomm.UserList"),
    52: new LeafWsPacket(52, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    53: new LeafWsPacket(53, gamecomm.GameReady, "gamecomm.GameReady"),
    54: new LeafWsPacket(54, gamecomm.GameBet, "gamecomm.GameBet"),
    55: new LeafWsPacket(55, gamecomm.GameBetResult, "gamecomm.GameBetResult"),
    56: new LeafWsPacket(56, gamecomm.GameRecord, "gamecomm.GameRecord"),
    57: new LeafWsPacket(57, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    58: new LeafWsPacket(58, gamecomm.GameResult, "gamecomm.GameResult"),
    59: new LeafWsPacket(59, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    60: new LeafWsPacket(60, gamecomm.GameStateFree, "gamecomm.GameStateFree"),
    61: new LeafWsPacket(61, gamecomm.GameStateStart, "gamecomm.GameStateStart"),
    62: new LeafWsPacket(62, gamecomm.GameStatePlaying, "gamecomm.GameStatePlaying"),
    63: new LeafWsPacket(63, gamecomm.GameStateOver, "gamecomm.GameStateOver"),
    64: new LeafWsPacket(64, gamecomm.GameStateCall, "gamecomm.GameStateCall"),
    65: new LeafWsPacket(65, gamecomm.GameBeOut, "gamecomm.GameBeOut"),
    66: new LeafWsPacket(66, gamecomm.GameHost, "gamecomm.GameHost"),
    67: new LeafWsPacket(67, gamecomm.GameSuperHost, "gamecomm.GameSuperHost"),
    68: new LeafWsPacket(68, gamecomm.GameCall, "gamecomm.GameCall"),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, ChairID:number } ) { gamecomm_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:string } ) { gamecomm_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ TimeStamp:number, WaitTime:number, UserID:number } ) { gamecomm_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:string } ) { gamecomm_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
}

