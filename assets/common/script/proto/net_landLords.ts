//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    LandLordsEnter = 57,
    LandLordsReadyReq = 58,
    LandLordsReadyResp = 59,
    LandLordsPlayer = 60,
    LandLordsDeal = 61,
    LandLordsCall = 62,
    LandLordsDouble = 63,
    LandLordsTrustee = 64,
    LandLordsBottomCard = 65,
    LandLordsOutCard = 66,
    LandLordsAward = 67,
    LandLordsCheckout = 68,
}

export var landLords_packet_define = {
    57: new LeafWsPacket(57, landLords.LandLordsEnter, "landLords.LandLordsEnter"),
    58: new LeafWsPacket(58, landLords.LandLordsReadyReq, "landLords.LandLordsReadyReq"),
    59: new LeafWsPacket(59, landLords.LandLordsReadyResp, "landLords.LandLordsReadyResp"),
    60: new LeafWsPacket(60, landLords.LandLordsPlayer, "landLords.LandLordsPlayer"),
    61: new LeafWsPacket(61, landLords.LandLordsDeal, "landLords.LandLordsDeal"),
    62: new LeafWsPacket(62, landLords.LandLordsCall, "landLords.LandLordsCall"),
    63: new LeafWsPacket(63, landLords.LandLordsDouble, "landLords.LandLordsDouble"),
    64: new LeafWsPacket(64, landLords.LandLordsTrustee, "landLords.LandLordsTrustee"),
    65: new LeafWsPacket(65, landLords.LandLordsBottomCard, "landLords.LandLordsBottomCard"),
    66: new LeafWsPacket(66, landLords.LandLordsOutCard, "landLords.LandLordsOutCard"),
    67: new LeafWsPacket(67, landLords.LandLordsAward, "landLords.LandLordsAward"),
    68: new LeafWsPacket(68, landLords.LandLordsCheckout, "landLords.LandLordsCheckout"),
}

export class landLords_request {
    public static LandLordsEnter( data:{ TimeStamp:number, FreeTime:number, OutTime:number, CallTime:number, Free:any, Start:any, Call:any, Playing:any, Over:any, BeforeChairID:number, BeforeCards:any, Players:any[] } ) { landLords_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyReq( data:{ IsReady:any } ) { landLords_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyResp( data:{ UserId:number } ) { landLords_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDeal( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCall( data:{ UserID:number, Score:number } ) { landLords_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDouble( data:{ UserID:number, Number:number } ) { landLords_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrustee( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsBottomCard( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCard( data:{ UserID:number, Cards:any, Hints:string } ) { landLords_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsAward( data:{ UserID:number, Codes:any, GetGold:number } ) { landLords_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
}

