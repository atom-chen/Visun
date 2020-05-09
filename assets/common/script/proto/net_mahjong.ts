//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 78,
    GameMahjongPlayer = 79,
    GameMahjongBegins = 80,
    GameMahjongOutcard = 81,
    GameMahjongOperate = 82,
    GameMahjongAward = 83,
    GameMahjongCheckout = 84,
}

export var mahjong_packet_define = {
    78: new LeafWsPacket(78, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    79: new LeafWsPacket(79, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    80: new LeafWsPacket(80, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    81: new LeafWsPacket(81, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    82: new LeafWsPacket(82, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    83: new LeafWsPacket(83, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    84: new LeafWsPacket(84, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
}

