//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 90,
    GameMahjongPlayer = 91,
    GameMahjongBegins = 92,
    GameMahjongOutcard = 93,
    GameMahjongOperate = 94,
    GameMahjongAward = 95,
    GameMahjongCheckout = 96,
}

export var mahjong_packet_define = {
    90: new LeafWsPacket(90, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    91: new LeafWsPacket(91, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    92: new LeafWsPacket(92, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    93: new LeafWsPacket(93, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    94: new LeafWsPacket(94, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    95: new LeafWsPacket(95, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    96: new LeafWsPacket(96, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
}

