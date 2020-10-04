//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    LandLordsPlayer = 69,
    LandLordsSceneResp = 70,
    LandLordsStateFreeResp = 71,
    LandLordsStateStartResp = 72,
    LandLordsStateCallResp = 73,
    LandLordsStatePlayingResp = 74,
    LandLordsStateOverResp = 75,
    LandLordsReadyReq = 76,
    LandLordsReadyResp = 77,
    LandLordsDealResp = 78,
    LandLordsCallReq = 79,
    LandLordsCallResp = 80,
    LandLordsDoubleReq = 81,
    LandLordsDoubleResp = 82,
    LandLordsTrusteeReq = 83,
    LandLordsTrusteeResp = 84,
    LandLordsBottomCardResp = 85,
    LandLordsOutCardReq = 86,
    LandLordsOutCardResp = 87,
    LandLordsAward = 88,
    LandLordsCheckoutResp = 89,
}

export var landLords_packet_define = {
    69: new LeafWsPacket(69, landLords.LandLordsPlayer, "landLords.LandLordsPlayer"),
    70: new LeafWsPacket(70, landLords.LandLordsSceneResp, "landLords.LandLordsSceneResp"),
    71: new LeafWsPacket(71, landLords.LandLordsStateFreeResp, "landLords.LandLordsStateFreeResp"),
    72: new LeafWsPacket(72, landLords.LandLordsStateStartResp, "landLords.LandLordsStateStartResp"),
    73: new LeafWsPacket(73, landLords.LandLordsStateCallResp, "landLords.LandLordsStateCallResp"),
    74: new LeafWsPacket(74, landLords.LandLordsStatePlayingResp, "landLords.LandLordsStatePlayingResp"),
    75: new LeafWsPacket(75, landLords.LandLordsStateOverResp, "landLords.LandLordsStateOverResp"),
    76: new LeafWsPacket(76, landLords.LandLordsReadyReq, "landLords.LandLordsReadyReq"),
    77: new LeafWsPacket(77, landLords.LandLordsReadyResp, "landLords.LandLordsReadyResp"),
    78: new LeafWsPacket(78, landLords.LandLordsDealResp, "landLords.LandLordsDealResp"),
    79: new LeafWsPacket(79, landLords.LandLordsCallReq, "landLords.LandLordsCallReq"),
    80: new LeafWsPacket(80, landLords.LandLordsCallResp, "landLords.LandLordsCallResp"),
    81: new LeafWsPacket(81, landLords.LandLordsDoubleReq, "landLords.LandLordsDoubleReq"),
    82: new LeafWsPacket(82, landLords.LandLordsDoubleResp, "landLords.LandLordsDoubleResp"),
    83: new LeafWsPacket(83, landLords.LandLordsTrusteeReq, "landLords.LandLordsTrusteeReq"),
    84: new LeafWsPacket(84, landLords.LandLordsTrusteeResp, "landLords.LandLordsTrusteeResp"),
    85: new LeafWsPacket(85, landLords.LandLordsBottomCardResp, "landLords.LandLordsBottomCardResp"),
    86: new LeafWsPacket(86, landLords.LandLordsOutCardReq, "landLords.LandLordsOutCardReq"),
    87: new LeafWsPacket(87, landLords.LandLordsOutCardResp, "landLords.LandLordsOutCardResp"),
    88: new LeafWsPacket(88, landLords.LandLordsAward, "landLords.LandLordsAward"),
    89: new LeafWsPacket(89, landLords.LandLordsCheckoutResp, "landLords.LandLordsCheckoutResp"),
}

export class landLords_request {
    public static LandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any, Name:string, Gold:number } ) { landLords_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsSceneResp( data:{ TimeStamp:number, Players:any[], Inning:string } ) { landLords_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateFreeResp( data:{ Times:any } ) { landLords_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateStartResp( data:{ Times:any, Inning:string } ) { landLords_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateCallResp( data:{ Times:any, UserID:number } ) { landLords_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStatePlayingResp( data:{ Times:any, LastChairID:number, LastCards:any } ) { landLords_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateOverResp( data:{ Times:any } ) { landLords_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyReq( data:{ IsReady:any } ) { landLords_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyResp( data:{ UserId:number } ) { landLords_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDealResp( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallReq( data:{ Score:number } ) { landLords_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCallResp( data:{ UserID:number, Score:number } ) { landLords_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleReq( data:{ Number:number } ) { landLords_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDoubleResp( data:{ UserID:number, Number:number } ) { landLords_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeReq( data:{ IsTrustee:any } ) { landLords_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrusteeResp( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsBottomCardResp( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardReq( data:{ Cards:any } ) { landLords_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCardResp( data:{ UserID:number, Cards:any } ) { landLords_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsAward( data:{ UserID:number, RemainCards:any, GetGold:number } ) { landLords_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCheckoutResp( data:{ players:any[] } ) { landLords_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
}

