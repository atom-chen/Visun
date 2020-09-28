//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    LandLordsPlayer = 62,
    LandLordsSceneResp = 63,
    LandLordsStateFreeResp = 64,
    LandLordsStateStartResp = 65,
    LandLordsStateCallResp = 66,
    LandLordsStatePlayingResp = 67,
    LandLordsStateOverResp = 68,
    LandLordsReadyReq = 69,
    LandLordsReadyResp = 70,
    LandLordsDealResp = 71,
    LandLordsCallReq = 72,
    LandLordsCallResp = 73,
    LandLordsDoubleReq = 74,
    LandLordsDoubleResp = 75,
    LandLordsTrusteeReq = 76,
    LandLordsTrusteeResp = 77,
    LandLordsBottomCardResp = 78,
    LandLordsOutCardReq = 79,
    LandLordsOutCardResp = 80,
    LandLordsAward = 81,
    LandLordsCheckoutResp = 82,
}

export var landLords_packet_define = {
    62: new LeafWsPacket(62, landLords.LandLordsPlayer, "landLords.LandLordsPlayer"),
    63: new LeafWsPacket(63, landLords.LandLordsSceneResp, "landLords.LandLordsSceneResp"),
    64: new LeafWsPacket(64, landLords.LandLordsStateFreeResp, "landLords.LandLordsStateFreeResp"),
    65: new LeafWsPacket(65, landLords.LandLordsStateStartResp, "landLords.LandLordsStateStartResp"),
    66: new LeafWsPacket(66, landLords.LandLordsStateCallResp, "landLords.LandLordsStateCallResp"),
    67: new LeafWsPacket(67, landLords.LandLordsStatePlayingResp, "landLords.LandLordsStatePlayingResp"),
    68: new LeafWsPacket(68, landLords.LandLordsStateOverResp, "landLords.LandLordsStateOverResp"),
    69: new LeafWsPacket(69, landLords.LandLordsReadyReq, "landLords.LandLordsReadyReq"),
    70: new LeafWsPacket(70, landLords.LandLordsReadyResp, "landLords.LandLordsReadyResp"),
    71: new LeafWsPacket(71, landLords.LandLordsDealResp, "landLords.LandLordsDealResp"),
    72: new LeafWsPacket(72, landLords.LandLordsCallReq, "landLords.LandLordsCallReq"),
    73: new LeafWsPacket(73, landLords.LandLordsCallResp, "landLords.LandLordsCallResp"),
    74: new LeafWsPacket(74, landLords.LandLordsDoubleReq, "landLords.LandLordsDoubleReq"),
    75: new LeafWsPacket(75, landLords.LandLordsDoubleResp, "landLords.LandLordsDoubleResp"),
    76: new LeafWsPacket(76, landLords.LandLordsTrusteeReq, "landLords.LandLordsTrusteeReq"),
    77: new LeafWsPacket(77, landLords.LandLordsTrusteeResp, "landLords.LandLordsTrusteeResp"),
    78: new LeafWsPacket(78, landLords.LandLordsBottomCardResp, "landLords.LandLordsBottomCardResp"),
    79: new LeafWsPacket(79, landLords.LandLordsOutCardReq, "landLords.LandLordsOutCardReq"),
    80: new LeafWsPacket(80, landLords.LandLordsOutCardResp, "landLords.LandLordsOutCardResp"),
    81: new LeafWsPacket(81, landLords.LandLordsAward, "landLords.LandLordsAward"),
    82: new LeafWsPacket(82, landLords.LandLordsCheckoutResp, "landLords.LandLordsCheckoutResp"),
}

export class landLords_request {
    public static LandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any, Name:string, Gold:number } ) { landLords_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsSceneResp( data:{ TimeStamp:number, Players:any[], Inning:string } ) { landLords_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateFreeResp( data:{ Times:any } ) { landLords_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateStartResp( data:{ Times:any, Inning:string } ) { landLords_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateCallResp( data:{ Times:any, UserID:number } ) { landLords_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStatePlayingResp( data:{ Times:any, LastChairID:number, LastCards:any } ) { landLords_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateOverResp( data:{ Times:any } ) { landLords_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyReq( data:{ IsReady:any } ) { landLords_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyResp( data:{ UserId:number } ) { landLords_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDealResp( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallReq( data:{ Score:number } ) { landLords_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallResp( data:{ UserID:number, Score:number } ) { landLords_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleReq( data:{ Number:number } ) { landLords_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleResp( data:{ UserID:number, Number:number } ) { landLords_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeReq( data:{ IsTrustee:any } ) { landLords_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeResp( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsBottomCardResp( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardReq( data:{ Cards:any } ) { landLords_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardResp( data:{ UserID:number, Cards:any } ) { landLords_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsAward( data:{ UserID:number, RemainCards:any, GetGold:number } ) { landLords_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCheckoutResp( data:{ players:any[] } ) { landLords_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
}

