//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 93,
    GameMahjongPlayer = 94,
    GameMahjongBegins = 95,
    GameMahjongOutcard = 96,
    GameMahjongOperate = 97,
    GameMahjongAward = 98,
    GameMahjongCheckout = 99,
}

export var mahjong_packet_define = {
    93: new LeafWsPacket(93, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    94: new LeafWsPacket(94, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    95: new LeafWsPacket(95, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    96: new LeafWsPacket(96, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    97: new LeafWsPacket(97, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    98: new LeafWsPacket(98, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    99: new LeafWsPacket(99, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
}

