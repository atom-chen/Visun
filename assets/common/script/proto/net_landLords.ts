//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    LandLordsPlayer = 55,
    LandLordsSceneResp = 56,
    LandLordsStateFreeResp = 57,
    LandLordsStateStartResp = 58,
    LandLordsStateCallResp = 59,
    LandLordsStatePlayingResp = 60,
    LandLordsStateOverResp = 61,
    LandLordsReadyReq = 62,
    LandLordsReadyResp = 63,
    LandLordsDealResp = 64,
    LandLordsCallReq = 65,
    LandLordsCallResp = 66,
    LandLordsDoubleReq = 67,
    LandLordsDoubleResp = 68,
    LandLordsTrusteeReq = 69,
    LandLordsTrusteeResp = 70,
    LandLordsBottomCardResp = 71,
    LandLordsOutCardReq = 72,
    LandLordsOutCardResp = 73,
    LandLordsAward = 74,
    LandLordsCheckoutResp = 75,
}

export var landLords_packet_define = {
    55: new LeafWsPacket(55, landLords.LandLordsPlayer, "landLords.LandLordsPlayer"),
    56: new LeafWsPacket(56, landLords.LandLordsSceneResp, "landLords.LandLordsSceneResp"),
    57: new LeafWsPacket(57, landLords.LandLordsStateFreeResp, "landLords.LandLordsStateFreeResp"),
    58: new LeafWsPacket(58, landLords.LandLordsStateStartResp, "landLords.LandLordsStateStartResp"),
    59: new LeafWsPacket(59, landLords.LandLordsStateCallResp, "landLords.LandLordsStateCallResp"),
    60: new LeafWsPacket(60, landLords.LandLordsStatePlayingResp, "landLords.LandLordsStatePlayingResp"),
    61: new LeafWsPacket(61, landLords.LandLordsStateOverResp, "landLords.LandLordsStateOverResp"),
    62: new LeafWsPacket(62, landLords.LandLordsReadyReq, "landLords.LandLordsReadyReq"),
    63: new LeafWsPacket(63, landLords.LandLordsReadyResp, "landLords.LandLordsReadyResp"),
    64: new LeafWsPacket(64, landLords.LandLordsDealResp, "landLords.LandLordsDealResp"),
    65: new LeafWsPacket(65, landLords.LandLordsCallReq, "landLords.LandLordsCallReq"),
    66: new LeafWsPacket(66, landLords.LandLordsCallResp, "landLords.LandLordsCallResp"),
    67: new LeafWsPacket(67, landLords.LandLordsDoubleReq, "landLords.LandLordsDoubleReq"),
    68: new LeafWsPacket(68, landLords.LandLordsDoubleResp, "landLords.LandLordsDoubleResp"),
    69: new LeafWsPacket(69, landLords.LandLordsTrusteeReq, "landLords.LandLordsTrusteeReq"),
    70: new LeafWsPacket(70, landLords.LandLordsTrusteeResp, "landLords.LandLordsTrusteeResp"),
    71: new LeafWsPacket(71, landLords.LandLordsBottomCardResp, "landLords.LandLordsBottomCardResp"),
    72: new LeafWsPacket(72, landLords.LandLordsOutCardReq, "landLords.LandLordsOutCardReq"),
    73: new LeafWsPacket(73, landLords.LandLordsOutCardResp, "landLords.LandLordsOutCardResp"),
    74: new LeafWsPacket(74, landLords.LandLordsAward, "landLords.LandLordsAward"),
    75: new LeafWsPacket(75, landLords.LandLordsCheckoutResp, "landLords.LandLordsCheckoutResp"),
}

export class landLords_request {
    public static LandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsSceneResp( data:{ TimeStamp:number, Players:any[] } ) { landLords_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateFreeResp( data:{ Times:any } ) { landLords_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateStartResp( data:{ Times:any } ) { landLords_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateCallResp( data:{ Times:any, UserID:number } ) { landLords_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStatePlayingResp( data:{ Times:any, LastChairID:number, LastCards:any } ) { landLords_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateOverResp( data:{ Times:any } ) { landLords_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyReq( data:{ IsReady:any } ) { landLords_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyResp( data:{ UserId:number } ) { landLords_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDealResp( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallReq( data:{ Score:number } ) { landLords_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallResp( data:{ UserID:number, Score:number } ) { landLords_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleReq( data:{ Number:number } ) { landLords_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleResp( data:{ UserID:number, Number:number } ) { landLords_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeReq( data:{ IsTrustee:any } ) { landLords_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeResp( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsBottomCardResp( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardReq( data:{ Cards:any } ) { landLords_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardResp( data:{ UserID:number, Cards:any } ) { landLords_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsAward( data:{ UserID:number, RemainCards:any, GetGold:number } ) { landLords_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCheckoutResp( data:{ players:any[] } ) { landLords_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
}

