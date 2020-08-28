//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    LandLordsPlayer = 47,
    LandLordsScene = 48,
    LandLordsStateFree = 49,
    LandLordsStateStart = 50,
    LandLordsStateCall = 51,
    LandLordsStatePlaying = 52,
    LandLordsStateOver = 53,
    LandLordsReadyReq = 54,
    LandLordsReadyResp = 55,
    LandLordsDealResp = 56,
    LandLordsCallReq = 57,
    LandLordsCallResp = 58,
    LandLordsDoubleReq = 59,
    LandLordsDoubleResp = 60,
    LandLordsTrusteeReq = 61,
    LandLordsTrusteeResp = 62,
    LandLordsBottomCardResp = 63,
    LandLordsOutCardReq = 64,
    LandLordsOutCardResp = 65,
    LandLordsAward = 66,
    LandLordsCheckoutResp = 67,
}

export var landLords_packet_define = {
    47: new LeafWsPacket(47, landLords.LandLordsPlayer, "landLords.LandLordsPlayer"),
    48: new LeafWsPacket(48, landLords.LandLordsScene, "landLords.LandLordsScene"),
    49: new LeafWsPacket(49, landLords.LandLordsStateFree, "landLords.LandLordsStateFree"),
    50: new LeafWsPacket(50, landLords.LandLordsStateStart, "landLords.LandLordsStateStart"),
    51: new LeafWsPacket(51, landLords.LandLordsStateCall, "landLords.LandLordsStateCall"),
    52: new LeafWsPacket(52, landLords.LandLordsStatePlaying, "landLords.LandLordsStatePlaying"),
    53: new LeafWsPacket(53, landLords.LandLordsStateOver, "landLords.LandLordsStateOver"),
    54: new LeafWsPacket(54, landLords.LandLordsReadyReq, "landLords.LandLordsReadyReq"),
    55: new LeafWsPacket(55, landLords.LandLordsReadyResp, "landLords.LandLordsReadyResp"),
    56: new LeafWsPacket(56, landLords.LandLordsDealResp, "landLords.LandLordsDealResp"),
    57: new LeafWsPacket(57, landLords.LandLordsCallReq, "landLords.LandLordsCallReq"),
    58: new LeafWsPacket(58, landLords.LandLordsCallResp, "landLords.LandLordsCallResp"),
    59: new LeafWsPacket(59, landLords.LandLordsDoubleReq, "landLords.LandLordsDoubleReq"),
    60: new LeafWsPacket(60, landLords.LandLordsDoubleResp, "landLords.LandLordsDoubleResp"),
    61: new LeafWsPacket(61, landLords.LandLordsTrusteeReq, "landLords.LandLordsTrusteeReq"),
    62: new LeafWsPacket(62, landLords.LandLordsTrusteeResp, "landLords.LandLordsTrusteeResp"),
    63: new LeafWsPacket(63, landLords.LandLordsBottomCardResp, "landLords.LandLordsBottomCardResp"),
    64: new LeafWsPacket(64, landLords.LandLordsOutCardReq, "landLords.LandLordsOutCardReq"),
    65: new LeafWsPacket(65, landLords.LandLordsOutCardResp, "landLords.LandLordsOutCardResp"),
    66: new LeafWsPacket(66, landLords.LandLordsAward, "landLords.LandLordsAward"),
    67: new LeafWsPacket(67, landLords.LandLordsCheckoutResp, "landLords.LandLordsCheckoutResp"),
}

export class landLords_request {
    public static LandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsScene( data:{ TimeStamp:number, Players:any[] } ) { landLords_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateFree( data:{ Times:any } ) { landLords_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateStart( data:{ Times:any } ) { landLords_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateCall( data:{ Times:any, UserID:number } ) { landLords_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStatePlaying( data:{ Times:any, LastChairID:number, LastCards:any } ) { landLords_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateOver( data:{ Times:any } ) { landLords_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyReq( data:{ IsReady:any } ) { landLords_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyResp( data:{ UserId:number } ) { landLords_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDealResp( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallReq( data:{ Score:number } ) { landLords_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallResp( data:{ UserID:number, Score:number } ) { landLords_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleReq( data:{ Number:number } ) { landLords_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleResp( data:{ UserID:number, Number:number } ) { landLords_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeReq( data:{ IsTrustee:any } ) { landLords_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeResp( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsBottomCardResp( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardReq( data:{ Cards:any } ) { landLords_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardResp( data:{ UserID:number, Cards:any } ) { landLords_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsAward( data:{ UserID:number, RemainCards:any, GetGold:number } ) { landLords_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCheckoutResp( data:{ players:any[] } ) { landLords_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
}

