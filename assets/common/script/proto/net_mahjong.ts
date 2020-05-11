//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 87,
    GameMahjongPlayer = 88,
    GameMahjongBegins = 89,
    GameMahjongOutcard = 90,
    GameMahjongOperate = 91,
    GameMahjongAward = 92,
    GameMahjongCheckout = 93,
}

export var mahjong_packet_define = {
    87: new LeafWsPacket(87, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    88: new LeafWsPacket(88, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    89: new LeafWsPacket(89, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    90: new LeafWsPacket(90, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    91: new LeafWsPacket(91, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    92: new LeafWsPacket(92, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    93: new LeafWsPacket(93, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
}

