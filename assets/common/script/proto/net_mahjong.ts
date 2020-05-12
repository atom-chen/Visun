//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 115,
    GameMahjongPlayer = 116,
    GameMahjongBegins = 117,
    GameMahjongOutcard = 118,
    GameMahjongOperate = 119,
    GameMahjongAward = 120,
    GameMahjongCheckout = 121,
}

export var mahjong_packet_define = {
    115: new LeafWsPacket(115, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    116: new LeafWsPacket(116, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    117: new LeafWsPacket(117, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    118: new LeafWsPacket(118, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    119: new LeafWsPacket(119, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    120: new LeafWsPacket(120, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    121: new LeafWsPacket(121, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[115].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[116].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[117].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[118].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[119].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[120].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[121].sendToChannel(ChannelDefine.game, data, false); }
}

