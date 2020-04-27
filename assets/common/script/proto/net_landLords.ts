//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 41,
    GameLandLordsPlayer = 42,
    GameLandLordsBegins = 43,
    GameLandLordsOutcard = 44,
    GameLandLordsOperate = 45,
    GameLandLordsAward = 46,
    GameLandLordsCheckout = 47,
}

export var landLords_packet_define = {
    41: new LeafWsPacket(41, landLords.GameLandLordsEnter),
    42: new LeafWsPacket(42, landLords.GameLandLordsPlayer),
    43: new LeafWsPacket(43, landLords.GameLandLordsBegins),
    44: new LeafWsPacket(44, landLords.GameLandLordsOutcard),
    45: new LeafWsPacket(45, landLords.GameLandLordsOperate),
    46: new LeafWsPacket(46, landLords.GameLandLordsAward),
    47: new LeafWsPacket(47, landLords.GameLandLordsCheckout),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ UserID:number, TimeStamp:number, Players:any, FreeTime:number } ) { landLords_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { landLords_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBegins( data:{ CardsBottom:any, CardsHand:any } ) { landLords_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutcard( data:{ Site:number, Cards:any, Hints:string } ) { landLords_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOperate( data:{ Code:number, Cards:any, Hints:string } ) { landLords_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ Site:number, Codes:any, GetGold:number } ) { landLords_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
}

