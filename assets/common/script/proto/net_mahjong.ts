//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 111,
    GameMahjongPlayer = 112,
    GameMahjongBegins = 113,
    GameMahjongOutcard = 114,
    GameMahjongOperate = 115,
    GameMahjongAward = 116,
    GameMahjongCheckout = 117,
}

export var mahjong_packet_define = {
    111: new LeafWsPacket(111, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    112: new LeafWsPacket(112, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    113: new LeafWsPacket(113, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    114: new LeafWsPacket(114, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    115: new LeafWsPacket(115, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    116: new LeafWsPacket(116, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    117: new LeafWsPacket(117, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[111].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[112].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[113].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[114].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[115].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[116].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[117].sendToChannel(ChannelDefine.game, data, false); }
}

