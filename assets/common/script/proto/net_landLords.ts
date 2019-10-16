//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landlord } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landlord_msgs {
    GameLandLordsEnter = 33,
    GameLandLordsPlayer = 34,
    GameLandLordsReady = 35,
    GameLandLordsBegins = 36,
    GameLandLordsOutcard = 37,
    GameLandLordsOperate = 38,
    GameLandLordsAward = 39,
    GameLandLordsCheckout = 40,
}

export var landlord_packet_define = {
    33: new LeafWsPacket(33, landlord.GameLandLordsEnter),
    34: new LeafWsPacket(34, landlord.GameLandLordsPlayer),
    35: new LeafWsPacket(35, landlord.GameLandLordsReady),
    36: new LeafWsPacket(36, landlord.GameLandLordsBegins),
    37: new LeafWsPacket(37, landlord.GameLandLordsOutcard),
    38: new LeafWsPacket(38, landlord.GameLandLordsOperate),
    39: new LeafWsPacket(39, landlord.GameLandLordsAward),
    40: new LeafWsPacket(40, landlord.GameLandLordsCheckout),
}

export class landlord_request {
    public static GameLandLordsEnter( data:{ UserID:number, TimeStamp:number, Players:any, FreeTime:number } ) { landlord_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { landlord_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsReady( data:{ IsReady:any, UserID:number } ) { landlord_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBegins( data:{ CardsBottom:any, CardsHand:any } ) { landlord_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutcard( data:{ Site:number, Cards:any, Hints:string } ) { landlord_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOperate( data:{ Code:number, Cards:any, Hints:string } ) { landlord_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ Site:number, Codes:any, GetGold:number } ) { landlord_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any } ) { landlord_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
}

