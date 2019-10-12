//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    PlayerInfo = 15,
    UserList = 16,
    PlayerRecord = 17,
    GameReady = 18,
    GameBet = 19,
    GameBetResult = 20,
    GameHost = 21,
    GameSuperHost = 22,
    GameRecord = 23,
    GameRecordList = 24,
    GameResult = 25,
}

export var gamecomm_packet_define = {
    15: new LeafWsPacket(15, gamecomm.PlayerInfo),
    16: new LeafWsPacket(16, gamecomm.UserList),
    17: new LeafWsPacket(17, gamecomm.PlayerRecord),
    18: new LeafWsPacket(18, gamecomm.GameReady),
    19: new LeafWsPacket(19, gamecomm.GameBet),
    20: new LeafWsPacket(20, gamecomm.GameBetResult),
    21: new LeafWsPacket(21, gamecomm.GameHost),
    22: new LeafWsPacket(22, gamecomm.GameSuperHost),
    23: new LeafWsPacket(23, gamecomm.GameRecord),
    24: new LeafWsPacket(24, gamecomm.GameRecordList),
    25: new LeafWsPacket(25, gamecomm.GameResult),
}

export class gamecomm_request {
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, VipLevel:number } ) { gamecomm_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static UserList( data:{ AllInfos:any } ) { gamecomm_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static GameReady( data:{ UserID:number, IsReady:any } ) { gamecomm_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBet( data:{ BetArea:number, BetScore:number } ) { gamecomm_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBetResult( data:{ UserID:number, State:number, Hints:string, BetArea:number, BetScore:number } ) { gamecomm_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static GameHost( data:{ IsWant:any } ) { gamecomm_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static GameSuperHost( data:{ IsWant:any } ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ Pork:any, Type:number, isWon:any } ) { gamecomm_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any } ) { gamecomm_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GameResult( data:{ Flag:number, Reason:any } ) { gamecomm_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
}

