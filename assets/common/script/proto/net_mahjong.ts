//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 60,
    GameMahjongPlayer = 61,
    GameMahjongBegins = 62,
    GameMahjongOutcard = 63,
    GameMahjongOperate = 64,
    GameMahjongAward = 65,
    GameMahjongCheckout = 66,
}

export var mahjong_packet_define = {
    60: new LeafWsPacket(60, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    61: new LeafWsPacket(61, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    62: new LeafWsPacket(62, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    63: new LeafWsPacket(63, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    64: new LeafWsPacket(64, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    65: new LeafWsPacket(65, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    66: new LeafWsPacket(66, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
}

