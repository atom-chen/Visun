//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 74,
    GameMahjongPlayer = 75,
    GameMahjongBegins = 76,
    GameMahjongOutcard = 77,
    GameMahjongOperate = 78,
    GameMahjongAward = 79,
    GameMahjongCheckout = 80,
}

export var mahjong_packet_define = {
    74: new LeafWsPacket(74, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    75: new LeafWsPacket(75, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    76: new LeafWsPacket(76, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    77: new LeafWsPacket(77, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    78: new LeafWsPacket(78, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    79: new LeafWsPacket(79, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    80: new LeafWsPacket(80, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
}

