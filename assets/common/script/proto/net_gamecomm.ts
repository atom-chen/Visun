//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    ReqEnterGame = 14,
    ReqExitGame = 15,
    ReqChangeTable = 16,
    PlayerInfo = 17,
    UserList = 18,
    PlayerRecord = 19,
    GameReady = 20,
    GameBet = 21,
    GameBetResult = 22,
    GameRecord = 23,
    GameRecordList = 24,
    GameResult = 25,
    NotifyChangeGold = 26,
    GameStateFree = 27,
    GameStateStart = 28,
    GameStateCall = 29,
    GameStatePlaying = 30,
    GameStateOver = 31,
    GameBeOut = 32,
    GameHost = 33,
    GameSuperHost = 34,
    GameCall = 35,
}

export var gamecomm_packet_define = {
    14: new LeafWsPacket(14, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    15: new LeafWsPacket(15, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    16: new LeafWsPacket(16, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    17: new LeafWsPacket(17, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    18: new LeafWsPacket(18, gamecomm.UserList, "gamecomm.UserList"),
    19: new LeafWsPacket(19, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    20: new LeafWsPacket(20, gamecomm.GameReady, "gamecomm.GameReady"),
    21: new LeafWsPacket(21, gamecomm.GameBet, "gamecomm.GameBet"),
    22: new LeafWsPacket(22, gamecomm.GameBetResult, "gamecomm.GameBetResult"),
    23: new LeafWsPacket(23, gamecomm.GameRecord, "gamecomm.GameRecord"),
    24: new LeafWsPacket(24, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    25: new LeafWsPacket(25, gamecomm.GameResult, "gamecomm.GameResult"),
    26: new LeafWsPacket(26, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    27: new LeafWsPacket(27, gamecomm.GameStateFree, "gamecomm.GameStateFree"),
    28: new LeafWsPacket(28, gamecomm.GameStateStart, "gamecomm.GameStateStart"),
    29: new LeafWsPacket(29, gamecomm.GameStateCall, "gamecomm.GameStateCall"),
    30: new LeafWsPacket(30, gamecomm.GameStatePlaying, "gamecomm.GameStatePlaying"),
    31: new LeafWsPacket(31, gamecomm.GameStateOver, "gamecomm.GameStateOver"),
    32: new LeafWsPacket(32, gamecomm.GameBeOut, "gamecomm.GameBeOut"),
    33: new LeafWsPacket(33, gamecomm.GameHost, "gamecomm.GameHost"),
    34: new LeafWsPacket(34, gamecomm.GameSuperHost, "gamecomm.GameSuperHost"),
    35: new LeafWsPacket(35, gamecomm.GameCall, "gamecomm.GameCall"),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, PlatformID:number, RoomNum:number, GameID:number, TableID:number, ChairID:number } ) { gamecomm_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:any } ) { gamecomm_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{} ) { gamecomm_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{} ) { gamecomm_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ UserID:number } ) { gamecomm_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{} ) { gamecomm_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{} ) { gamecomm_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:any } ) { gamecomm_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
}

