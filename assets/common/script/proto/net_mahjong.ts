//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 43,
    GameMahjongPlayer = 44,
    GameMahjongBegins = 45,
    GameMahjongOutcard = 46,
    GameMahjongOperate = 47,
    GameMahjongAward = 48,
    GameMahjongCheckout = 49,
}

export var mahjong_packet_define = {
    43: new LeafWsPacket(43, mahjong.GameMahjongEnter),
    44: new LeafWsPacket(44, mahjong.GameMahjongPlayer),
    45: new LeafWsPacket(45, mahjong.GameMahjongBegins),
    46: new LeafWsPacket(46, mahjong.GameMahjongOutcard),
    47: new LeafWsPacket(47, mahjong.GameMahjongOperate),
    48: new LeafWsPacket(48, mahjong.GameMahjongAward),
    49: new LeafWsPacket(49, mahjong.GameMahjongCheckout),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any } ) { mahjong_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any } ) { mahjong_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
}

