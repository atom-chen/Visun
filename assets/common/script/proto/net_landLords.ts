//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    LandLordsPlayer = 63,
    LandLordsSceneResp = 64,
    LandLordsStateFreeResp = 65,
    LandLordsStateStartResp = 66,
    LandLordsStateCallResp = 67,
    LandLordsStatePlayingResp = 68,
    LandLordsStateOverResp = 69,
    LandLordsReadyReq = 70,
    LandLordsReadyResp = 71,
    LandLordsDealResp = 72,
    LandLordsCallReq = 73,
    LandLordsCallResp = 74,
    LandLordsDoubleReq = 75,
    LandLordsDoubleResp = 76,
    LandLordsTrusteeReq = 77,
    LandLordsTrusteeResp = 78,
    LandLordsBottomCardResp = 79,
    LandLordsOutCardReq = 80,
    LandLordsOutCardResp = 81,
    LandLordsAward = 82,
    LandLordsCheckoutResp = 83,
}

export var landLords_packet_define = {
    63: new LeafWsPacket(63, landLords.LandLordsPlayer, "landLords.LandLordsPlayer"),
    64: new LeafWsPacket(64, landLords.LandLordsSceneResp, "landLords.LandLordsSceneResp"),
    65: new LeafWsPacket(65, landLords.LandLordsStateFreeResp, "landLords.LandLordsStateFreeResp"),
    66: new LeafWsPacket(66, landLords.LandLordsStateStartResp, "landLords.LandLordsStateStartResp"),
    67: new LeafWsPacket(67, landLords.LandLordsStateCallResp, "landLords.LandLordsStateCallResp"),
    68: new LeafWsPacket(68, landLords.LandLordsStatePlayingResp, "landLords.LandLordsStatePlayingResp"),
    69: new LeafWsPacket(69, landLords.LandLordsStateOverResp, "landLords.LandLordsStateOverResp"),
    70: new LeafWsPacket(70, landLords.LandLordsReadyReq, "landLords.LandLordsReadyReq"),
    71: new LeafWsPacket(71, landLords.LandLordsReadyResp, "landLords.LandLordsReadyResp"),
    72: new LeafWsPacket(72, landLords.LandLordsDealResp, "landLords.LandLordsDealResp"),
    73: new LeafWsPacket(73, landLords.LandLordsCallReq, "landLords.LandLordsCallReq"),
    74: new LeafWsPacket(74, landLords.LandLordsCallResp, "landLords.LandLordsCallResp"),
    75: new LeafWsPacket(75, landLords.LandLordsDoubleReq, "landLords.LandLordsDoubleReq"),
    76: new LeafWsPacket(76, landLords.LandLordsDoubleResp, "landLords.LandLordsDoubleResp"),
    77: new LeafWsPacket(77, landLords.LandLordsTrusteeReq, "landLords.LandLordsTrusteeReq"),
    78: new LeafWsPacket(78, landLords.LandLordsTrusteeResp, "landLords.LandLordsTrusteeResp"),
    79: new LeafWsPacket(79, landLords.LandLordsBottomCardResp, "landLords.LandLordsBottomCardResp"),
    80: new LeafWsPacket(80, landLords.LandLordsOutCardReq, "landLords.LandLordsOutCardReq"),
    81: new LeafWsPacket(81, landLords.LandLordsOutCardResp, "landLords.LandLordsOutCardResp"),
    82: new LeafWsPacket(82, landLords.LandLordsAward, "landLords.LandLordsAward"),
    83: new LeafWsPacket(83, landLords.LandLordsCheckoutResp, "landLords.LandLordsCheckoutResp"),
}

export class landLords_request {
    public static LandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any, Name:string, Gold:number } ) { landLords_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsSceneResp( data:{ TimeStamp:number, Players:any[], Inning:string } ) { landLords_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateFreeResp( data:{ Times:any } ) { landLords_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateStartResp( data:{ Times:any, Inning:string } ) { landLords_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateCallResp( data:{ Times:any, UserID:number } ) { landLords_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStatePlayingResp( data:{ Times:any, LastChairID:number, LastCards:any } ) { landLords_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateOverResp( data:{ Times:any } ) { landLords_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyReq( data:{ IsReady:any } ) { landLords_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyResp( data:{ UserId:number } ) { landLords_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDealResp( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallReq( data:{ Score:number } ) { landLords_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallResp( data:{ UserID:number, Score:number } ) { landLords_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleReq( data:{ Number:number } ) { landLords_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleResp( data:{ UserID:number, Number:number } ) { landLords_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeReq( data:{ IsTrustee:any } ) { landLords_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeResp( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsBottomCardResp( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardReq( data:{ Cards:any } ) { landLords_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardResp( data:{ UserID:number, Cards:any } ) { landLords_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsAward( data:{ UserID:number, RemainCards:any, GetGold:number } ) { landLords_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCheckoutResp( data:{ players:any[] } ) { landLords_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
}

