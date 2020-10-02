//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 84,
    GameMahjongPlayer = 85,
    GameMahjongBegins = 86,
    GameMahjongOutcard = 87,
    GameMahjongOperate = 88,
    GameMahjongAward = 89,
    GameMahjongCheckout = 90,
}

export var mahjong_packet_define = {
    84: new LeafWsPacket(84, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    85: new LeafWsPacket(85, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    86: new LeafWsPacket(86, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    87: new LeafWsPacket(87, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    88: new LeafWsPacket(88, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    89: new LeafWsPacket(89, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    90: new LeafWsPacket(90, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
}

