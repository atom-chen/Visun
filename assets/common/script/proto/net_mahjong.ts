//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 62,
    GameMahjongPlayer = 63,
    GameMahjongBegins = 64,
    GameMahjongOutcard = 65,
    GameMahjongOperate = 66,
    GameMahjongAward = 67,
    GameMahjongCheckout = 68,
}

export var mahjong_packet_define = {
    62: new LeafWsPacket(62, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    63: new LeafWsPacket(63, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    64: new LeafWsPacket(64, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    65: new LeafWsPacket(65, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    66: new LeafWsPacket(66, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    67: new LeafWsPacket(67, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    68: new LeafWsPacket(68, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
}

