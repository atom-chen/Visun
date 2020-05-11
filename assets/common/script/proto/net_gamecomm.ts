//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    ReqEnterGame = 41,
    ReqExitGame = 42,
    ReqChangeTable = 43,
    PlayerInfo = 44,
    UserList = 45,
    PlayerRecord = 46,
    GameReady = 47,
    GameBet = 48,
    GameBetResult = 49,
    GameRecord = 50,
    GameRecordList = 51,
    GameResult = 52,
    NotifyChangeGold = 53,
    GameStateFree = 54,
    GameStateStart = 55,
    GameStatePlaying = 56,
    GameStateOver = 57,
    GameStateCall = 58,
    GameBeOut = 59,
    GameHost = 60,
    GameSuperHost = 61,
    GameCall = 62,
}

export var gamecomm_packet_define = {
    41: new LeafWsPacket(41, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    42: new LeafWsPacket(42, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    43: new LeafWsPacket(43, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    44: new LeafWsPacket(44, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    45: new LeafWsPacket(45, gamecomm.UserList, "gamecomm.UserList"),
    46: new LeafWsPacket(46, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    47: new LeafWsPacket(47, gamecomm.GameReady, "gamecomm.GameReady"),
    48: new LeafWsPacket(48, gamecomm.GameBet, "gamecomm.GameBet"),
    49: new LeafWsPacket(49, gamecomm.GameBetResult, "gamecomm.GameBetResult"),
    50: new LeafWsPacket(50, gamecomm.GameRecord, "gamecomm.GameRecord"),
    51: new LeafWsPacket(51, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    52: new LeafWsPacket(52, gamecomm.GameResult, "gamecomm.GameResult"),
    53: new LeafWsPacket(53, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    54: new LeafWsPacket(54, gamecomm.GameStateFree, "gamecomm.GameStateFree"),
    55: new LeafWsPacket(55, gamecomm.GameStateStart, "gamecomm.GameStateStart"),
    56: new LeafWsPacket(56, gamecomm.GameStatePlaying, "gamecomm.GameStatePlaying"),
    57: new LeafWsPacket(57, gamecomm.GameStateOver, "gamecomm.GameStateOver"),
    58: new LeafWsPacket(58, gamecomm.GameStateCall, "gamecomm.GameStateCall"),
    59: new LeafWsPacket(59, gamecomm.GameBeOut, "gamecomm.GameBeOut"),
    60: new LeafWsPacket(60, gamecomm.GameHost, "gamecomm.GameHost"),
    61: new LeafWsPacket(61, gamecomm.GameSuperHost, "gamecomm.GameSuperHost"),
    62: new LeafWsPacket(62, gamecomm.GameCall, "gamecomm.GameCall"),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, ChairID:number } ) { gamecomm_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:string } ) { gamecomm_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ TimeStamp:number, WaitTime:number, UserID:number } ) { gamecomm_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:string } ) { gamecomm_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
}

