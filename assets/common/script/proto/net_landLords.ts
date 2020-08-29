//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    LandLordsPlayer = 50,
    LandLordsSceneResp = 51,
    LandLordsStateFreeResp = 52,
    LandLordsStateStartResp = 53,
    LandLordsStateCallResp = 54,
    LandLordsStatePlayingResp = 55,
    LandLordsStateOverResp = 56,
    LandLordsReadyReq = 57,
    LandLordsReadyResp = 58,
    LandLordsDealResp = 59,
    LandLordsCallReq = 60,
    LandLordsCallResp = 61,
    LandLordsDoubleReq = 62,
    LandLordsDoubleResp = 63,
    LandLordsTrusteeReq = 64,
    LandLordsTrusteeResp = 65,
    LandLordsBottomCardResp = 66,
    LandLordsOutCardReq = 67,
    LandLordsOutCardResp = 68,
    LandLordsAward = 69,
    LandLordsCheckoutResp = 70,
}

export var landLords_packet_define = {
    50: new LeafWsPacket(50, landLords.LandLordsPlayer, "landLords.LandLordsPlayer"),
    51: new LeafWsPacket(51, landLords.LandLordsSceneResp, "landLords.LandLordsSceneResp"),
    52: new LeafWsPacket(52, landLords.LandLordsStateFreeResp, "landLords.LandLordsStateFreeResp"),
    53: new LeafWsPacket(53, landLords.LandLordsStateStartResp, "landLords.LandLordsStateStartResp"),
    54: new LeafWsPacket(54, landLords.LandLordsStateCallResp, "landLords.LandLordsStateCallResp"),
    55: new LeafWsPacket(55, landLords.LandLordsStatePlayingResp, "landLords.LandLordsStatePlayingResp"),
    56: new LeafWsPacket(56, landLords.LandLordsStateOverResp, "landLords.LandLordsStateOverResp"),
    57: new LeafWsPacket(57, landLords.LandLordsReadyReq, "landLords.LandLordsReadyReq"),
    58: new LeafWsPacket(58, landLords.LandLordsReadyResp, "landLords.LandLordsReadyResp"),
    59: new LeafWsPacket(59, landLords.LandLordsDealResp, "landLords.LandLordsDealResp"),
    60: new LeafWsPacket(60, landLords.LandLordsCallReq, "landLords.LandLordsCallReq"),
    61: new LeafWsPacket(61, landLords.LandLordsCallResp, "landLords.LandLordsCallResp"),
    62: new LeafWsPacket(62, landLords.LandLordsDoubleReq, "landLords.LandLordsDoubleReq"),
    63: new LeafWsPacket(63, landLords.LandLordsDoubleResp, "landLords.LandLordsDoubleResp"),
    64: new LeafWsPacket(64, landLords.LandLordsTrusteeReq, "landLords.LandLordsTrusteeReq"),
    65: new LeafWsPacket(65, landLords.LandLordsTrusteeResp, "landLords.LandLordsTrusteeResp"),
    66: new LeafWsPacket(66, landLords.LandLordsBottomCardResp, "landLords.LandLordsBottomCardResp"),
    67: new LeafWsPacket(67, landLords.LandLordsOutCardReq, "landLords.LandLordsOutCardReq"),
    68: new LeafWsPacket(68, landLords.LandLordsOutCardResp, "landLords.LandLordsOutCardResp"),
    69: new LeafWsPacket(69, landLords.LandLordsAward, "landLords.LandLordsAward"),
    70: new LeafWsPacket(70, landLords.LandLordsCheckoutResp, "landLords.LandLordsCheckoutResp"),
}

export class landLords_request {
    public static LandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsSceneResp( data:{ TimeStamp:number, Players:any[] } ) { landLords_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateFreeResp( data:{ Times:any } ) { landLords_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateStartResp( data:{ Times:any } ) { landLords_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateCallResp( data:{ Times:any, UserID:number } ) { landLords_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStatePlayingResp( data:{ Times:any, LastChairID:number, LastCards:any } ) { landLords_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateOverResp( data:{ Times:any } ) { landLords_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyReq( data:{ IsReady:any } ) { landLords_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyResp( data:{ UserId:number } ) { landLords_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDealResp( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallReq( data:{ Score:number } ) { landLords_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallResp( data:{ UserID:number, Score:number } ) { landLords_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleReq( data:{ Number:number } ) { landLords_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleResp( data:{ UserID:number, Number:number } ) { landLords_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeReq( data:{ IsTrustee:any } ) { landLords_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeResp( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsBottomCardResp( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardReq( data:{ Cards:any } ) { landLords_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardResp( data:{ UserID:number, Cards:any } ) { landLords_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsAward( data:{ UserID:number, RemainCards:any, GetGold:number } ) { landLords_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCheckoutResp( data:{ players:any[] } ) { landLords_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
}

