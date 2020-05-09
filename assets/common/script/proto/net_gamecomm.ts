//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    ReqEnterGame = 32,
    ReqExitGame = 33,
    ReqChangeTable = 34,
    PlayerInfo = 35,
    UserList = 36,
    PlayerRecord = 37,
    GameReady = 38,
    GameBet = 39,
    GameBetResult = 40,
    GameRecord = 41,
    GameRecordList = 42,
    GameResult = 43,
    NotifyChangeGold = 44,
    GameStateFree = 45,
    GameStateStart = 46,
    GameStatePlaying = 47,
    GameStateOver = 48,
    GameStateCall = 49,
    GameBeOut = 50,
    GameHost = 51,
    GameSuperHost = 52,
    GameCall = 53,
}

export var gamecomm_packet_define = {
    32: new LeafWsPacket(32, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    33: new LeafWsPacket(33, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    34: new LeafWsPacket(34, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    35: new LeafWsPacket(35, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    36: new LeafWsPacket(36, gamecomm.UserList, "gamecomm.UserList"),
    37: new LeafWsPacket(37, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    38: new LeafWsPacket(38, gamecomm.GameReady, "gamecomm.GameReady"),
    39: new LeafWsPacket(39, gamecomm.GameBet, "gamecomm.GameBet"),
    40: new LeafWsPacket(40, gamecomm.GameBetResult, "gamecomm.GameBetResult"),
    41: new LeafWsPacket(41, gamecomm.GameRecord, "gamecomm.GameRecord"),
    42: new LeafWsPacket(42, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    43: new LeafWsPacket(43, gamecomm.GameResult, "gamecomm.GameResult"),
    44: new LeafWsPacket(44, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    45: new LeafWsPacket(45, gamecomm.GameStateFree, "gamecomm.GameStateFree"),
    46: new LeafWsPacket(46, gamecomm.GameStateStart, "gamecomm.GameStateStart"),
    47: new LeafWsPacket(47, gamecomm.GameStatePlaying, "gamecomm.GameStatePlaying"),
    48: new LeafWsPacket(48, gamecomm.GameStateOver, "gamecomm.GameStateOver"),
    49: new LeafWsPacket(49, gamecomm.GameStateCall, "gamecomm.GameStateCall"),
    50: new LeafWsPacket(50, gamecomm.GameBeOut, "gamecomm.GameBeOut"),
    51: new LeafWsPacket(51, gamecomm.GameHost, "gamecomm.GameHost"),
    52: new LeafWsPacket(52, gamecomm.GameSuperHost, "gamecomm.GameSuperHost"),
    53: new LeafWsPacket(53, gamecomm.GameCall, "gamecomm.GameCall"),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, ChairID:number } ) { gamecomm_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:string } ) { gamecomm_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ TimeStamp:number, WaitTime:number, UserID:number } ) { gamecomm_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:string } ) { gamecomm_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
}

