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
    GameStatusFree = 25,
    GameStatusPlaying = 26,
    GameStatusOver = 27,
    GameReady = 28,
    GameBet = 29,
    GameBetResult = 30,
    GameHost = 31,
    GameSuperHost = 32,
    GameRecord = 33,
    GameRecordList = 34,
    GameResult = 35,
    NotifyChangeGold = 36,
}

export var gamecomm_packet_define = {
    20: new LeafWsPacket(20, gamecomm.ReqEnterGame),
    21: new LeafWsPacket(21, gamecomm.ReqExitGame),
    22: new LeafWsPacket(22, gamecomm.PlayerInfo),
    23: new LeafWsPacket(23, gamecomm.UserList),
    24: new LeafWsPacket(24, gamecomm.PlayerRecord),
    25: new LeafWsPacket(25, gamecomm.GameStatusFree),
    26: new LeafWsPacket(26, gamecomm.GameStatusPlaying),
    27: new LeafWsPacket(27, gamecomm.GameStatusOver),
    28: new LeafWsPacket(28, gamecomm.GameReady),
    29: new LeafWsPacket(29, gamecomm.GameBet),
    30: new LeafWsPacket(30, gamecomm.GameBetResult),
    31: new LeafWsPacket(31, gamecomm.GameHost),
    32: new LeafWsPacket(32, gamecomm.GameSuperHost),
    33: new LeafWsPacket(33, gamecomm.GameRecord),
    34: new LeafWsPacket(34, gamecomm.GameRecordList),
    35: new LeafWsPacket(35, gamecomm.GameResult),
    36: new LeafWsPacket(36, gamecomm.NotifyChangeGold),
}

export class gamecomm_request {
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, PlatformID:number, RoomNum:number, GameID:number, TableID:number, ChairID:number } ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { gamecomm_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatusFree( data:{} ) { gamecomm_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatusPlaying( data:{} ) { gamecomm_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatusOver( data:{} ) { gamecomm_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, State:number, Hints:string, BetArea:number, BetScore:number } ) { gamecomm_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:any } ) { gamecomm_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { gamecomm_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
}

