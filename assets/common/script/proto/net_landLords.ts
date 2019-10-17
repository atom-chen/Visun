//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landlord } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landlord_msgs {
    GameLandLordsEnter = 39,
    GameLandLordsPlayer = 40,
    GameLandLordsReady = 41,
    GameLandLordsBegins = 42,
    GameLandLordsOutcard = 43,
    GameLandLordsOperate = 44,
    GameLandLordsAward = 45,
    GameLandLordsCheckout = 46,
}

export var landlord_packet_define = {
    39: new LeafWsPacket(39, landlord.GameLandLordsEnter),
    40: new LeafWsPacket(40, landlord.GameLandLordsPlayer),
    41: new LeafWsPacket(41, landlord.GameLandLordsReady),
    42: new LeafWsPacket(42, landlord.GameLandLordsBegins),
    43: new LeafWsPacket(43, landlord.GameLandLordsOutcard),
    44: new LeafWsPacket(44, landlord.GameLandLordsOperate),
    45: new LeafWsPacket(45, landlord.GameLandLordsAward),
    46: new LeafWsPacket(46, landlord.GameLandLordsCheckout),
}

export class landlord_request {
    public static GameLandLordsEnter( data:{ UserID:number, TimeStamp:number, Players:any, FreeTime:number } ) { landlord_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { landlord_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsReady( data:{ IsReady:any, UserID:number } ) { landlord_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBegins( data:{ CardsBottom:any, CardsHand:any } ) { landlord_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutcard( data:{ Site:number, Cards:any, Hints:string } ) { landlord_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOperate( data:{ Code:number, Cards:any, Hints:string } ) { landlord_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ Site:number, Codes:any, GetGold:number } ) { landlord_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any } ) { landlord_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
}

