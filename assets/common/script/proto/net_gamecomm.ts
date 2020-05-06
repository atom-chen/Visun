//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    ReqEnterGame = 20,
    ReqExitGame = 21,
    PlayerInfo = 22,
    UserList = 23,
    PlayerRecord = 24,
    GameReady = 25,
    GameBet = 26,
    GameBetResult = 27,
    GameRecord = 28,
    GameRecordList = 29,
    GameResult = 30,
    NotifyChangeGold = 31,
    GameStateFree = 32,
    GameStateStart = 33,
    GameStateCall = 34,
    GameStatePlaying = 35,
    GameStateOver = 36,
    GameBeOut = 37,
    GameHost = 38,
    GameSuperHost = 39,
    GameCall = 40,
}

export var gamecomm_packet_define = {
    20: new LeafWsPacket(20, gamecomm.ReqEnterGame),
    21: new LeafWsPacket(21, gamecomm.ReqExitGame),
    22: new LeafWsPacket(22, gamecomm.PlayerInfo),
    23: new LeafWsPacket(23, gamecomm.UserList),
    24: new LeafWsPacket(24, gamecomm.PlayerRecord),
    25: new LeafWsPacket(25, gamecomm.GameReady),
    26: new LeafWsPacket(26, gamecomm.GameBet),
    27: new LeafWsPacket(27, gamecomm.GameBetResult),
    28: new LeafWsPacket(28, gamecomm.GameRecord),
    29: new LeafWsPacket(29, gamecomm.GameRecordList),
    30: new LeafWsPacket(30, gamecomm.GameResult),
    31: new LeafWsPacket(31, gamecomm.NotifyChangeGold),
    32: new LeafWsPacket(32, gamecomm.GameStateFree),
    33: new LeafWsPacket(33, gamecomm.GameStateStart),
    34: new LeafWsPacket(34, gamecomm.GameStateCall),
    35: new LeafWsPacket(35, gamecomm.GameStatePlaying),
    36: new LeafWsPacket(36, gamecomm.GameStateOver),
    37: new LeafWsPacket(37, gamecomm.GameBeOut),
    38: new LeafWsPacket(38, gamecomm.GameHost),
    39: new LeafWsPacket(39, gamecomm.GameSuperHost),
    40: new LeafWsPacket(40, gamecomm.GameCall),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, PlatformID:number, RoomNum:number, GameID:number, TableID:number, ChairID:number } ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { gamecomm_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:any } ) { gamecomm_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateFree( data:{} ) { gamecomm_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateStart( data:{} ) { gamecomm_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateCall( data:{ UserID:number } ) { gamecomm_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatePlaying( data:{} ) { gamecomm_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStateOver( data:{} ) { gamecomm_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBeOut( data:{ UserID:number, Code:number, Hints:any } ) { gamecomm_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCall( data:{ UserID:number, Score:number } ) { gamecomm_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
}

