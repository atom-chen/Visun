//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    ReqEnterGame = 29,
    ReqExitGame = 30,
    ReqChangeTable = 31,
    PlayerInfo = 32,
    UserList = 33,
    PlayerRecord = 34,
    GameReady = 35,
    GameBet = 36,
    GameBetResult = 37,
    GameRecord = 38,
    GameRecordList = 39,
    GameResult = 40,
    NotifyChangeGold = 41,
    GameStateFree = 42,
    GameStateStart = 43,
    GameStatePlaying = 44,
    GameStateOver = 45,
    GameStateCall = 46,
    GameBeOut = 47,
    GameHost = 48,
    GameSuperHost = 49,
    GameCall = 50,
}

export var gamecomm_packet_define = {
    29: new LeafWsPacket(29, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    30: new LeafWsPacket(30, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    31: new LeafWsPacket(31, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    32: new LeafWsPacket(32, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    33: new LeafWsPacket(33, gamecomm.UserList, "gamecomm.UserList"),
    34: new LeafWsPacket(34, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    35: new LeafWsPacket(35, gamecomm.GameReady, "gamecomm.GameReady"),
    36: new LeafWsPacket(36, gamecomm.GameBet, "gamecomm.GameBet"),
    37: new LeafWsPacket(37, gamecomm.GameBetResult, "gamecomm.GameBetResult"),
    38: new LeafWsPacket(38, gamecomm.GameRecord, "gamecomm.GameRecord"),
    39: new LeafWsPacket(39, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    40: new LeafWsPacket(40, gamecomm.GameResult, "gamecomm.GameResult"),
    41: new LeafWsPacket(41, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    42: new LeafWsPacket(42, gamecomm.GameStateFree, "gamecomm.GameStateFree"),
    43: new LeafWsPacket(43, gamecomm.GameStateStart, "gamecomm.GameStateStart"),
    44: new LeafWsPacket(44, gamecomm.GameStatePlaying, "gamecomm.GameStatePlaying"),
    45: new LeafWsPacket(45, gamecomm.GameStateOver, "gamecomm.GameStateOver"),
    46: new LeafWsPacket(46, gamecomm.GameStateCall, "gamecomm.GameStateCall"),
    47: new LeafWsPacket(47, gamecomm.GameBeOut, "gamecomm.GameBeOut"),
    48: new LeafWsPacket(48, gamecomm.GameHost, "gamecomm.GameHost"),
    49: new LeafWsPacket(49, gamecomm.GameSuperHost, "gamecomm.GameSuperHost"),
    50: new LeafWsPacket(50, gamecomm.GameCall, "gamecomm.GameCall"),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, ChairID:number } ) { gamecomm_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:any } ) { gamecomm_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ TimeStamp:number, WaitTime:number, UserID:number } ) { gamecomm_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:any } ) { gamecomm_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
}

