//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    ReqEnterGame = 14,
    ReqExitGame = 15,
    PlayerInfo = 16,
    UserList = 17,
    PlayerRecord = 18,
    GameReady = 19,
    GameBet = 20,
    GameBetResult = 21,
    GameRecord = 22,
    GameRecordList = 23,
    GameResult = 24,
    NotifyChangeGold = 25,
    GameStateFree = 26,
    GameStateStart = 27,
    GameStateCall = 28,
    GameStatePlaying = 29,
    GameStateOver = 30,
    GameBeOut = 31,
    GameHost = 32,
    GameSuperHost = 33,
    GameCall = 34,
}

export var gamecomm_packet_define = {
    14: new LeafWsPacket(14, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    15: new LeafWsPacket(15, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    16: new LeafWsPacket(16, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    17: new LeafWsPacket(17, gamecomm.UserList, "gamecomm.UserList"),
    18: new LeafWsPacket(18, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    19: new LeafWsPacket(19, gamecomm.GameReady, "gamecomm.GameReady"),
    20: new LeafWsPacket(20, gamecomm.GameBet, "gamecomm.GameBet"),
    21: new LeafWsPacket(21, gamecomm.GameBetResult, "gamecomm.GameBetResult"),
    22: new LeafWsPacket(22, gamecomm.GameRecord, "gamecomm.GameRecord"),
    23: new LeafWsPacket(23, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    24: new LeafWsPacket(24, gamecomm.GameResult, "gamecomm.GameResult"),
    25: new LeafWsPacket(25, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    26: new LeafWsPacket(26, gamecomm.GameStateFree, "gamecomm.GameStateFree"),
    27: new LeafWsPacket(27, gamecomm.GameStateStart, "gamecomm.GameStateStart"),
    28: new LeafWsPacket(28, gamecomm.GameStateCall, "gamecomm.GameStateCall"),
    29: new LeafWsPacket(29, gamecomm.GameStatePlaying, "gamecomm.GameStatePlaying"),
    30: new LeafWsPacket(30, gamecomm.GameStateOver, "gamecomm.GameStateOver"),
    31: new LeafWsPacket(31, gamecomm.GameBeOut, "gamecomm.GameBeOut"),
    32: new LeafWsPacket(32, gamecomm.GameHost, "gamecomm.GameHost"),
    33: new LeafWsPacket(33, gamecomm.GameSuperHost, "gamecomm.GameSuperHost"),
    34: new LeafWsPacket(34, gamecomm.GameCall, "gamecomm.GameCall"),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, PlatformID:number, RoomNum:number, GameID:number, TableID:number, ChairID:number } ) { gamecomm_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:any } ) { gamecomm_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{} ) { gamecomm_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{} ) { gamecomm_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ UserID:number } ) { gamecomm_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{} ) { gamecomm_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{} ) { gamecomm_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:any } ) { gamecomm_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
}

