//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    LandLordsPlayer = 56,
    LandLordsSceneResp = 57,
    LandLordsStateFreeResp = 58,
    LandLordsStateStartResp = 59,
    LandLordsStateCallResp = 60,
    LandLordsStatePlayingResp = 61,
    LandLordsStateOverResp = 62,
    LandLordsReadyReq = 63,
    LandLordsReadyResp = 64,
    LandLordsDealResp = 65,
    LandLordsCallReq = 66,
    LandLordsCallResp = 67,
    LandLordsDoubleReq = 68,
    LandLordsDoubleResp = 69,
    LandLordsTrusteeReq = 70,
    LandLordsTrusteeResp = 71,
    LandLordsBottomCardResp = 72,
    LandLordsOutCardReq = 73,
    LandLordsOutCardResp = 74,
    LandLordsAward = 75,
    LandLordsCheckoutResp = 76,
}

export var landLords_packet_define = {
    56: new LeafWsPacket(56, landLords.LandLordsPlayer, "landLords.LandLordsPlayer"),
    57: new LeafWsPacket(57, landLords.LandLordsSceneResp, "landLords.LandLordsSceneResp"),
    58: new LeafWsPacket(58, landLords.LandLordsStateFreeResp, "landLords.LandLordsStateFreeResp"),
    59: new LeafWsPacket(59, landLords.LandLordsStateStartResp, "landLords.LandLordsStateStartResp"),
    60: new LeafWsPacket(60, landLords.LandLordsStateCallResp, "landLords.LandLordsStateCallResp"),
    61: new LeafWsPacket(61, landLords.LandLordsStatePlayingResp, "landLords.LandLordsStatePlayingResp"),
    62: new LeafWsPacket(62, landLords.LandLordsStateOverResp, "landLords.LandLordsStateOverResp"),
    63: new LeafWsPacket(63, landLords.LandLordsReadyReq, "landLords.LandLordsReadyReq"),
    64: new LeafWsPacket(64, landLords.LandLordsReadyResp, "landLords.LandLordsReadyResp"),
    65: new LeafWsPacket(65, landLords.LandLordsDealResp, "landLords.LandLordsDealResp"),
    66: new LeafWsPacket(66, landLords.LandLordsCallReq, "landLords.LandLordsCallReq"),
    67: new LeafWsPacket(67, landLords.LandLordsCallResp, "landLords.LandLordsCallResp"),
    68: new LeafWsPacket(68, landLords.LandLordsDoubleReq, "landLords.LandLordsDoubleReq"),
    69: new LeafWsPacket(69, landLords.LandLordsDoubleResp, "landLords.LandLordsDoubleResp"),
    70: new LeafWsPacket(70, landLords.LandLordsTrusteeReq, "landLords.LandLordsTrusteeReq"),
    71: new LeafWsPacket(71, landLords.LandLordsTrusteeResp, "landLords.LandLordsTrusteeResp"),
    72: new LeafWsPacket(72, landLords.LandLordsBottomCardResp, "landLords.LandLordsBottomCardResp"),
    73: new LeafWsPacket(73, landLords.LandLordsOutCardReq, "landLords.LandLordsOutCardReq"),
    74: new LeafWsPacket(74, landLords.LandLordsOutCardResp, "landLords.LandLordsOutCardResp"),
    75: new LeafWsPacket(75, landLords.LandLordsAward, "landLords.LandLordsAward"),
    76: new LeafWsPacket(76, landLords.LandLordsCheckoutResp, "landLords.LandLordsCheckoutResp"),
}

export class landLords_request {
    public static LandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsSceneResp( data:{ TimeStamp:number, Players:any[] } ) { landLords_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateFreeResp( data:{ Times:any } ) { landLords_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateStartResp( data:{ Times:any } ) { landLords_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateCallResp( data:{ Times:any, UserID:number } ) { landLords_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStatePlayingResp( data:{ Times:any, LastChairID:number, LastCards:any } ) { landLords_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateOverResp( data:{ Times:any } ) { landLords_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyReq( data:{ IsReady:any } ) { landLords_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyResp( data:{ UserId:number } ) { landLords_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDealResp( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallReq( data:{ Score:number } ) { landLords_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallResp( data:{ UserID:number, Score:number } ) { landLords_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleReq( data:{ Number:number } ) { landLords_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleResp( data:{ UserID:number, Number:number } ) { landLords_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeReq( data:{ IsTrustee:any } ) { landLords_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeResp( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsBottomCardResp( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardReq( data:{ Cards:any } ) { landLords_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardResp( data:{ UserID:number, Cards:any } ) { landLords_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsAward( data:{ UserID:number, RemainCards:any, GetGold:number } ) { landLords_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCheckoutResp( data:{ players:any[] } ) { landLords_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
}

