//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    LandLordsPlayer = 59,
    LandLordsSceneResp = 60,
    LandLordsStateFreeResp = 61,
    LandLordsStateStartResp = 62,
    LandLordsStateCallResp = 63,
    LandLordsStatePlayingResp = 64,
    LandLordsStateOverResp = 65,
    LandLordsReadyReq = 66,
    LandLordsReadyResp = 67,
    LandLordsDealResp = 68,
    LandLordsCallReq = 69,
    LandLordsCallResp = 70,
    LandLordsDoubleReq = 71,
    LandLordsDoubleResp = 72,
    LandLordsTrusteeReq = 73,
    LandLordsTrusteeResp = 74,
    LandLordsBottomCardResp = 75,
    LandLordsOutCardReq = 76,
    LandLordsOutCardResp = 77,
    LandLordsAward = 78,
    LandLordsCheckoutResp = 79,
}

export var landLords_packet_define = {
    59: new LeafWsPacket(59, landLords.LandLordsPlayer, "landLords.LandLordsPlayer"),
    60: new LeafWsPacket(60, landLords.LandLordsSceneResp, "landLords.LandLordsSceneResp"),
    61: new LeafWsPacket(61, landLords.LandLordsStateFreeResp, "landLords.LandLordsStateFreeResp"),
    62: new LeafWsPacket(62, landLords.LandLordsStateStartResp, "landLords.LandLordsStateStartResp"),
    63: new LeafWsPacket(63, landLords.LandLordsStateCallResp, "landLords.LandLordsStateCallResp"),
    64: new LeafWsPacket(64, landLords.LandLordsStatePlayingResp, "landLords.LandLordsStatePlayingResp"),
    65: new LeafWsPacket(65, landLords.LandLordsStateOverResp, "landLords.LandLordsStateOverResp"),
    66: new LeafWsPacket(66, landLords.LandLordsReadyReq, "landLords.LandLordsReadyReq"),
    67: new LeafWsPacket(67, landLords.LandLordsReadyResp, "landLords.LandLordsReadyResp"),
    68: new LeafWsPacket(68, landLords.LandLordsDealResp, "landLords.LandLordsDealResp"),
    69: new LeafWsPacket(69, landLords.LandLordsCallReq, "landLords.LandLordsCallReq"),
    70: new LeafWsPacket(70, landLords.LandLordsCallResp, "landLords.LandLordsCallResp"),
    71: new LeafWsPacket(71, landLords.LandLordsDoubleReq, "landLords.LandLordsDoubleReq"),
    72: new LeafWsPacket(72, landLords.LandLordsDoubleResp, "landLords.LandLordsDoubleResp"),
    73: new LeafWsPacket(73, landLords.LandLordsTrusteeReq, "landLords.LandLordsTrusteeReq"),
    74: new LeafWsPacket(74, landLords.LandLordsTrusteeResp, "landLords.LandLordsTrusteeResp"),
    75: new LeafWsPacket(75, landLords.LandLordsBottomCardResp, "landLords.LandLordsBottomCardResp"),
    76: new LeafWsPacket(76, landLords.LandLordsOutCardReq, "landLords.LandLordsOutCardReq"),
    77: new LeafWsPacket(77, landLords.LandLordsOutCardResp, "landLords.LandLordsOutCardResp"),
    78: new LeafWsPacket(78, landLords.LandLordsAward, "landLords.LandLordsAward"),
    79: new LeafWsPacket(79, landLords.LandLordsCheckoutResp, "landLords.LandLordsCheckoutResp"),
}

export class landLords_request {
    public static LandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any, Name:string, Gold:number } ) { landLords_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsSceneResp( data:{ TimeStamp:number, Players:any[], Inning:string } ) { landLords_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateFreeResp( data:{ Times:any } ) { landLords_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateStartResp( data:{ Times:any, Inning:string } ) { landLords_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateCallResp( data:{ Times:any, UserID:number } ) { landLords_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStatePlayingResp( data:{ Times:any, LastChairID:number, LastCards:any } ) { landLords_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateOverResp( data:{ Times:any } ) { landLords_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyReq( data:{ IsReady:any } ) { landLords_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyResp( data:{ UserId:number } ) { landLords_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDealResp( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallReq( data:{ Score:number } ) { landLords_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallResp( data:{ UserID:number, Score:number } ) { landLords_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleReq( data:{ Number:number } ) { landLords_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleResp( data:{ UserID:number, Number:number } ) { landLords_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeReq( data:{ IsTrustee:any } ) { landLords_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeResp( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsBottomCardResp( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardReq( data:{ Cards:any } ) { landLords_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardResp( data:{ UserID:number, Cards:any } ) { landLords_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsAward( data:{ UserID:number, RemainCards:any, GetGold:number } ) { landLords_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCheckoutResp( data:{ players:any[] } ) { landLords_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
}

