//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 51,
    GameMahjongPlayer = 52,
    GameMahjongBegins = 53,
    GameMahjongOutcard = 54,
    GameMahjongOperate = 55,
    GameMahjongAward = 56,
    GameMahjongCheckout = 57,
}

export var mahjong_packet_define = {
    51: new LeafWsPacket(51, mahjong.GameMahjongEnter),
    52: new LeafWsPacket(52, mahjong.GameMahjongPlayer),
    53: new LeafWsPacket(53, mahjong.GameMahjongBegins),
    54: new LeafWsPacket(54, mahjong.GameMahjongOutcard),
    55: new LeafWsPacket(55, mahjong.GameMahjongOperate),
    56: new LeafWsPacket(56, mahjong.GameMahjongAward),
    57: new LeafWsPacket(57, mahjong.GameMahjongCheckout),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
}

