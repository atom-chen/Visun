//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { mahjong } from "./mahjong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum mahjong_msgs {
    GameMahjongEnter = 106,
    GameMahjongPlayer = 107,
    GameMahjongBegins = 108,
    GameMahjongOutcard = 109,
    GameMahjongOperate = 110,
    GameMahjongAward = 111,
    GameMahjongCheckout = 112,
}

export var mahjong_packet_define = {
    106: new LeafWsPacket(106, mahjong.GameMahjongEnter, "mahjong.GameMahjongEnter"),
    107: new LeafWsPacket(107, mahjong.GameMahjongPlayer, "mahjong.GameMahjongPlayer"),
    108: new LeafWsPacket(108, mahjong.GameMahjongBegins, "mahjong.GameMahjongBegins"),
    109: new LeafWsPacket(109, mahjong.GameMahjongOutcard, "mahjong.GameMahjongOutcard"),
    110: new LeafWsPacket(110, mahjong.GameMahjongOperate, "mahjong.GameMahjongOperate"),
    111: new LeafWsPacket(111, mahjong.GameMahjongAward, "mahjong.GameMahjongAward"),
    112: new LeafWsPacket(112, mahjong.GameMahjongCheckout, "mahjong.GameMahjongCheckout"),
}

export class mahjong_request {
    public static GameMahjongEnter( data:{ userInfo:any, TimeStamp:number, FreeTime:number } ) { mahjong_packet_define[106].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { mahjong_packet_define[107].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongBegins( data:{ Dice:any, PlayersInfo:any[] } ) { mahjong_packet_define[108].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOutcard( data:{ Site:number, Cards:any, Hints:string } ) { mahjong_packet_define[109].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongOperate( data:{ Code:number, Cards:any, Hints:string } ) { mahjong_packet_define[110].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongAward( data:{ Site:number, Codes:any, GetGold:number } ) { mahjong_packet_define[111].sendToChannel(ChannelDefine.game, data, false); }
    public static GameMahjongCheckout( data:{ players:any[] } ) { mahjong_packet_define[112].sendToChannel(ChannelDefine.game, data, false); }
}

