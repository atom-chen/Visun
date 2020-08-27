//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 67,
    GameMahjongPlayer = 68,
    GameMahjongBegins = 69,
    GameMahjongOutcard = 70,
    GameMahjongOperate = 71,
    GameMahjongAward = 72,
    GameMahjongCheckout = 73,
}

export var mahjong_packet_define = {
    67: new LeafWsPacket(67, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    68: new LeafWsPacket(68, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    69: new LeafWsPacket(69, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    70: new LeafWsPacket(70, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    71: new LeafWsPacket(71, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    72: new LeafWsPacket(72, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    73: new LeafWsPacket(73, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
}

