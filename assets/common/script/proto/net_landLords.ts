//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landlord } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landlord_msgs {
    GameLandLordsEnter = 36,
    GameLandLordsPlayer = 37,
    GameLandLordsBegins = 38,
    GameLandLordsOutcard = 39,
    GameLandLordsOperate = 40,
    GameLandLordsAward = 41,
    GameLandLordsCheckout = 42,
}

export var landlord_packet_define = {
    36: new LeafWsPacket(36, landlord.GameLandLordsEnter),
    37: new LeafWsPacket(37, landlord.GameLandLordsPlayer),
    38: new LeafWsPacket(38, landlord.GameLandLordsBegins),
    39: new LeafWsPacket(39, landlord.GameLandLordsOutcard),
    40: new LeafWsPacket(40, landlord.GameLandLordsOperate),
    41: new LeafWsPacket(41, landlord.GameLandLordsAward),
    42: new LeafWsPacket(42, landlord.GameLandLordsCheckout),
}

export class landlord_request {
    public static GameLandLordsEnter( data:{ UserID:number, TimeStamp:number, Players:any, FreeTime:number } ) { landlord_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { landlord_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBegins( data:{ CardsBottom:any, CardsHand:any } ) { landlord_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutcard( data:{ Site:number, Cards:any, Hints:string } ) { landlord_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOperate( data:{ Code:number, Cards:any, Hints:string } ) { landlord_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ Site:number, Codes:any, GetGold:number } ) { landlord_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any } ) { landlord_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
}

