//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 56,
    GameMahjongPlayer = 57,
    GameMahjongBegins = 58,
    GameMahjongOutcard = 59,
    GameMahjongOperate = 60,
    GameMahjongAward = 61,
    GameMahjongCheckout = 62,
}

export var mahjong_packet_define = {
    56: new LeafWsPacket(56, mahjong.GameMahjongEnter),
    57: new LeafWsPacket(57, mahjong.GameMahjongPlayer),
    58: new LeafWsPacket(58, mahjong.GameMahjongBegins),
    59: new LeafWsPacket(59, mahjong.GameMahjongOutcard),
    60: new LeafWsPacket(60, mahjong.GameMahjongOperate),
    61: new LeafWsPacket(61, mahjong.GameMahjongAward),
    62: new LeafWsPacket(62, mahjong.GameMahjongCheckout),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
}

