//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 79,
    GameMahjongPlayer = 80,
    GameMahjongBegins = 81,
    GameMahjongOutcard = 82,
    GameMahjongOperate = 83,
    GameMahjongAward = 84,
    GameMahjongCheckout = 85,
}

export var mahjong_packet_define = {
    79: new LeafWsPacket(79, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    80: new LeafWsPacket(80, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    81: new LeafWsPacket(81, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    82: new LeafWsPacket(82, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    83: new LeafWsPacket(83, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    84: new LeafWsPacket(84, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    85: new LeafWsPacket(85, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
}

