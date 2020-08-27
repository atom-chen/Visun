//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    PlayerInfo = 14,
    UserList = 15,
    CardInfo = 16,
    MoneyCalculateInfo = 17,
    ReqEnterGame = 18,
    ReqExitGame = 19,
    ReqChangeTable = 20,
    PlayerRecord = 21,
    GameReady = 22,
    GameBet = 23,
    GameBetResult = 24,
    GameRecord = 25,
    GameRecordList = 26,
    GameResult = 27,
    NotifyChangeGold = 28,
    GameStateFree = 29,
    GameStateStart = 30,
    GameStatePlaying = 31,
    GameStateOver = 32,
    GameStateCall = 33,
    GameBeOut = 34,
    GameHost = 35,
    GameSuperHost = 36,
    GameCall = 37,
}

export var gamecomm_packet_define = {
    14: new LeafWsPacket(14, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    15: new LeafWsPacket(15, gamecomm.UserList, "gamecomm.UserList"),
    16: new LeafWsPacket(16, gamecomm.CardInfo, "gamecomm.CardInfo"),
    17: new LeafWsPacket(17, gamecomm.MoneyCalculateInfo, "gamecomm.MoneyCalculateInfo"),
    18: new LeafWsPacket(18, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    19: new LeafWsPacket(19, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    20: new LeafWsPacket(20, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    21: new LeafWsPacket(21, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    22: new LeafWsPacket(22, gamecomm.GameReady, "gamecomm.GameReady"),
    23: new LeafWsPacket(23, gamecomm.GameBet, "gamecomm.GameBet"),
    24: new LeafWsPacket(24, gamecomm.GameBetResult, "gamecomm.GameBetResult"),
    25: new LeafWsPacket(25, gamecomm.GameRecord, "gamecomm.GameRecord"),
    26: new LeafWsPacket(26, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    27: new LeafWsPacket(27, gamecomm.GameResult, "gamecomm.GameResult"),
    28: new LeafWsPacket(28, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    29: new LeafWsPacket(29, gamecomm.GameStateFree, "gamecomm.GameStateFree"),
    30: new LeafWsPacket(30, gamecomm.GameStateStart, "gamecomm.GameStateStart"),
    31: new LeafWsPacket(31, gamecomm.GameStatePlaying, "gamecomm.GameStatePlaying"),
    32: new LeafWsPacket(32, gamecomm.GameStateOver, "gamecomm.GameStateOver"),
    33: new LeafWsPacket(33, gamecomm.GameStateCall, "gamecomm.GameStateCall"),
    34: new LeafWsPacket(34, gamecomm.GameBeOut, "gamecomm.GameBeOut"),
    35: new LeafWsPacket(35, gamecomm.GameHost, "gamecomm.GameHost"),
    36: new LeafWsPacket(36, gamecomm.GameSuperHost, "gamecomm.GameSuperHost"),
    37: new LeafWsPacket(37, gamecomm.GameCall, "gamecomm.GameCall"),
}

export class gamecomm_request {
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, ChairID:number } ) { gamecomm_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static CardInfo( data:{ Cards:any, CardType:number } ) { gamecomm_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static MoneyCalculateInfo( data:{ UserID:number, Money:number, ChangeValue:number, Reason:string } ) { gamecomm_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:any } ) { gamecomm_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ TimeStamp:number, WaitTime:number, UserID:number } ) { gamecomm_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:any } ) { gamecomm_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
}

