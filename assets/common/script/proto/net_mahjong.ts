//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 76,
    GameMahjongPlayer = 77,
    GameMahjongBegins = 78,
    GameMahjongOutcard = 79,
    GameMahjongOperate = 80,
    GameMahjongAward = 81,
    GameMahjongCheckout = 82,
}

export var mahjong_packet_define = {
    76: new LeafWsPacket(76, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    77: new LeafWsPacket(77, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    78: new LeafWsPacket(78, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    79: new LeafWsPacket(79, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    80: new LeafWsPacket(80, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    81: new LeafWsPacket(81, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    82: new LeafWsPacket(82, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
}

