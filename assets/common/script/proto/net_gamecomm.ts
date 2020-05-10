//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    ReqEnterGame = 33,
    ReqExitGame = 34,
    ReqChangeTable = 35,
    PlayerInfo = 36,
    UserList = 37,
    PlayerRecord = 38,
    GameReady = 39,
    GameBet = 40,
    GameBetResult = 41,
    GameRecord = 42,
    GameRecordList = 43,
    GameResult = 44,
    NotifyChangeGold = 45,
    GameStateFree = 46,
    GameStateStart = 47,
    GameStatePlaying = 48,
    GameStateOver = 49,
    GameStateCall = 50,
    GameBeOut = 51,
    GameHost = 52,
    GameSuperHost = 53,
    GameCall = 54,
}

export var gamecomm_packet_define = {
    33: new LeafWsPacket(33, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    34: new LeafWsPacket(34, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    35: new LeafWsPacket(35, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    36: new LeafWsPacket(36, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    37: new LeafWsPacket(37, gamecomm.UserList, "gamecomm.UserList"),
    38: new LeafWsPacket(38, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    39: new LeafWsPacket(39, gamecomm.GameReady, "gamecomm.GameReady"),
    40: new LeafWsPacket(40, gamecomm.GameBet, "gamecomm.GameBet"),
    41: new LeafWsPacket(41, gamecomm.GameBetResult, "gamecomm.GameBetResult"),
    42: new LeafWsPacket(42, gamecomm.GameRecord, "gamecomm.GameRecord"),
    43: new LeafWsPacket(43, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    44: new LeafWsPacket(44, gamecomm.GameResult, "gamecomm.GameResult"),
    45: new LeafWsPacket(45, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
    46: new LeafWsPacket(46, gamecomm.GameStateFree, "gamecomm.GameStateFree"),
    47: new LeafWsPacket(47, gamecomm.GameStateStart, "gamecomm.GameStateStart"),
    48: new LeafWsPacket(48, gamecomm.GameStatePlaying, "gamecomm.GameStatePlaying"),
    49: new LeafWsPacket(49, gamecomm.GameStateOver, "gamecomm.GameStateOver"),
    50: new LeafWsPacket(50, gamecomm.GameStateCall, "gamecomm.GameStateCall"),
    51: new LeafWsPacket(51, gamecomm.GameBeOut, "gamecomm.GameBeOut"),
    52: new LeafWsPacket(52, gamecomm.GameHost, "gamecomm.GameHost"),
    53: new LeafWsPacket(53, gamecomm.GameSuperHost, "gamecomm.GameSuperHost"),
    54: new LeafWsPacket(54, gamecomm.GameCall, "gamecomm.GameCall"),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, ChairID:number } ) { gamecomm_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:string } ) { gamecomm_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{ TimeStamp:number, WaitTime:number } ) { gamecomm_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ TimeStamp:number, WaitTime:number, UserID:number } ) { gamecomm_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:string } ) { gamecomm_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
}

