//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { gamecomm } from "./gamecomm";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum gamecomm_msgs {
    PlayerInfo = 14,
    CardInfo = 15,
    TimeInfo = 16,
    AreaInfo = 17,
    PlayerListInfo = 18,
    PlayerRecord = 19,
    GameRecord = 20,
    GameRecordList = 21,
    ReqEnterGame = 22,
    ReqExitGame = 23,
    ReqChangeTable = 24,
    BeOut = 25,
    NotifyChangeGold = 26,
}

export var gamecomm_packet_define = {
    14: new LeafWsPacket(14, gamecomm.PlayerInfo, "gamecomm.PlayerInfo"),
    15: new LeafWsPacket(15, gamecomm.CardInfo, "gamecomm.CardInfo"),
    16: new LeafWsPacket(16, gamecomm.TimeInfo, "gamecomm.TimeInfo"),
    17: new LeafWsPacket(17, gamecomm.AreaInfo, "gamecomm.AreaInfo"),
    18: new LeafWsPacket(18, gamecomm.PlayerListInfo, "gamecomm.PlayerListInfo"),
    19: new LeafWsPacket(19, gamecomm.PlayerRecord, "gamecomm.PlayerRecord"),
    20: new LeafWsPacket(20, gamecomm.GameRecord, "gamecomm.GameRecord"),
    21: new LeafWsPacket(21, gamecomm.GameRecordList, "gamecomm.GameRecordList"),
    22: new LeafWsPacket(22, gamecomm.ReqEnterGame, "gamecomm.ReqEnterGame"),
    23: new LeafWsPacket(23, gamecomm.ReqExitGame, "gamecomm.ReqExitGame"),
    24: new LeafWsPacket(24, gamecomm.ReqChangeTable, "gamecomm.ReqChangeTable"),
    25: new LeafWsPacket(25, gamecomm.BeOut, "gamecomm.BeOut"),
    26: new LeafWsPacket(26, gamecomm.NotifyChangeGold, "gamecomm.NotifyChangeGold"),
}

export class gamecomm_request {
    public static PlayerInfo( data:{ UserID:number, Name:string, Age:number, Sex:number, Gold:number, Level:number, Account:string, Sate:number, PlatformID:number, RoomNum:number, GameID:number, TableID:number, ChairID:number } ) { gamecomm_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static CardInfo( data:{ Cards:any, CardType:number, CardValue:number } ) { gamecomm_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static TimeInfo( data:{ TimeStamp:number, WaitTime:number, OutTime:number, TotalTime:number } ) { gamecomm_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static AreaInfo( data:{ ID:number, MyGold:number, TotalGold:number, AcquireGold:number } ) { gamecomm_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerListInfo( data:{ AllInfos:any[] } ) { gamecomm_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static PlayerRecord( data:{ User:any, Twice:number, Ranking:number, Bankroll:number, WinLos:number } ) { gamecomm_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecord( data:{ CardInfo:any, IsWon:any } ) { gamecomm_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static GameRecordList( data:{ list:any[] } ) { gamecomm_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqEnterGame( data:{ GameID:number } ) { gamecomm_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { gamecomm_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqChangeTable( data:{ GameID:number } ) { gamecomm_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static BeOut( data:{ UserID:number, GameID:number, Code:number, Hints:string } ) { gamecomm_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static NotifyChangeGold( data:{ UserID:number, Gold:number, AlterGold:number, Code:number, Reason:string } ) { gamecomm_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
}

