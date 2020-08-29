//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 71,
    GameMahjongPlayer = 72,
    GameMahjongBegins = 73,
    GameMahjongOutcard = 74,
    GameMahjongOperate = 75,
    GameMahjongAward = 76,
    GameMahjongCheckout = 77,
}

export var mahjong_packet_define = {
    71: new LeafWsPacket(71, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    72: new LeafWsPacket(72, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    73: new LeafWsPacket(73, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    74: new LeafWsPacket(74, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    75: new LeafWsPacket(75, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    76: new LeafWsPacket(76, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    77: new LeafWsPacket(77, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
}

