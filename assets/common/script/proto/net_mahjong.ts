//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 47,
    GameMahjongPlayer = 48,
    GameMahjongBegins = 49,
    GameMahjongOutcard = 50,
    GameMahjongOperate = 51,
    GameMahjongAward = 52,
    GameMahjongCheckout = 53,
}

export var mahjong_packet_define = {
    47: new LeafWsPacket(47, mahjong.GameMahjongEnter),
    48: new LeafWsPacket(48, mahjong.GameMahjongPlayer),
    49: new LeafWsPacket(49, mahjong.GameMahjongBegins),
    50: new LeafWsPacket(50, mahjong.GameMahjongOutcard),
    51: new LeafWsPacket(51, mahjong.GameMahjongOperate),
    52: new LeafWsPacket(52, mahjong.GameMahjongAward),
    53: new LeafWsPacket(53, mahjong.GameMahjongCheckout),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
}

