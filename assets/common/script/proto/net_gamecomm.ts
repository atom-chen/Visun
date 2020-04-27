//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { go } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum go_msgs {
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

export var go_packet_define = {
    20: new LeafWsPacket(20, go.ReqEnterGame),
    21: new LeafWsPacket(21, go.ReqExitGame),
    22: new LeafWsPacket(22, go.PlayerInfo),
    23: new LeafWsPacket(23, go.UserList),
    24: new LeafWsPacket(24, go.PlayerRecord),
    25: new LeafWsPacket(25, go.GameStatusFree),
    26: new LeafWsPacket(26, go.GameStatusPlaying),
    27: new LeafWsPacket(27, go.GameStatusOver),
    28: new LeafWsPacket(28, go.GameReady),
    29: new LeafWsPacket(29, go.GameBet),
    30: new LeafWsPacket(30, go.GameBetResult),
    31: new LeafWsPacket(31, go.GameHost),
    32: new LeafWsPacket(32, go.GameSuperHost),
    33: new LeafWsPacket(33, go.GameRecord),
    34: new LeafWsPacket(34, go.GameRecordList),
    35: new LeafWsPacket(35, go.GameResult),
    36: new LeafWsPacket(36, go.NotifyChangeGold),
}

export class go_request {
    public static ReqEnterGame( data:{ GameID:number } ) { go_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { go_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number, Account:string, Sate:number, PlatformID:number, RoomNum:number, GameID:number } ) { go_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any[] } ) { go_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { go_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatusFree( data:{} ) { go_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatusPlaying( data:{} ) { go_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static GameStatusOver( data:{} ) { go_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { go_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { go_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, State:number, Hints:string, BetArea:number, BetScore:number } ) { go_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { go_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { go_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { go_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { go_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:any } ) { go_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, Code:number } ) { go_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
}

