//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 48,
    GameMahjongPlayer = 49,
    GameMahjongBegins = 50,
    GameMahjongOutcard = 51,
    GameMahjongOperate = 52,
    GameMahjongAward = 53,
    GameMahjongCheckout = 54,
}

export var mahjong_packet_define = {
    48: new LeafWsPacket(48, mahjong.GameMahjongEnter),
    49: new LeafWsPacket(49, mahjong.GameMahjongPlayer),
    50: new LeafWsPacket(50, mahjong.GameMahjongBegins),
    51: new LeafWsPacket(51, mahjong.GameMahjongOutcard),
    52: new LeafWsPacket(52, mahjong.GameMahjongOperate),
    53: new LeafWsPacket(53, mahjong.GameMahjongAward),
    54: new LeafWsPacket(54, mahjong.GameMahjongCheckout),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
}

