//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 110,
    GameMahjongPlayer = 111,
    GameMahjongBegins = 112,
    GameMahjongOutcard = 113,
    GameMahjongOperate = 114,
    GameMahjongAward = 115,
    GameMahjongCheckout = 116,
}

export var mahjong_packet_define = {
    110: new LeafWsPacket(110, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    111: new LeafWsPacket(111, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    112: new LeafWsPacket(112, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    113: new LeafWsPacket(113, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    114: new LeafWsPacket(114, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    115: new LeafWsPacket(115, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    116: new LeafWsPacket(116, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[110].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[111].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[112].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[113].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[114].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[115].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[116].sendToChannel(ChannelDefine.game, data, false); }
}

