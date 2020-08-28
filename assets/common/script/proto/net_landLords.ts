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
    LandLordsStateFree = 60,
    LandLordsStateStart = 61,
    LandLordsStateCall = 62,
    LandLordsStatePlaying = 63,
    LandLordsStateOver = 64,
    LandLordsPlayer = 65,
    LandLordsDeal = 66,
    LandLordsCall = 67,
    LandLordsDouble = 68,
    LandLordsTrustee = 69,
    LandLordsBottomCard = 70,
    LandLordsOutCard = 71,
    LandLordsAward = 72,
    LandLordsCheckout = 73,
}

export var landLords_packet_define = {
    57: new LeafWsPacket(57, landLords.LandLordsEnter, "landLords.LandLordsEnter"),
    58: new LeafWsPacket(58, landLords.LandLordsReadyReq, "landLords.LandLordsReadyReq"),
    59: new LeafWsPacket(59, landLords.LandLordsReadyResp, "landLords.LandLordsReadyResp"),
    60: new LeafWsPacket(60, landLords.LandLordsStateFree, "landLords.LandLordsStateFree"),
    61: new LeafWsPacket(61, landLords.LandLordsStateStart, "landLords.LandLordsStateStart"),
    62: new LeafWsPacket(62, landLords.LandLordsStateCall, "landLords.LandLordsStateCall"),
    63: new LeafWsPacket(63, landLords.LandLordsStatePlaying, "landLords.LandLordsStatePlaying"),
    64: new LeafWsPacket(64, landLords.LandLordsStateOver, "landLords.LandLordsStateOver"),
    65: new LeafWsPacket(65, landLords.LandLordsPlayer, "landLords.LandLordsPlayer"),
    66: new LeafWsPacket(66, landLords.LandLordsDeal, "landLords.LandLordsDeal"),
    67: new LeafWsPacket(67, landLords.LandLordsCall, "landLords.LandLordsCall"),
    68: new LeafWsPacket(68, landLords.LandLordsDouble, "landLords.LandLordsDouble"),
    69: new LeafWsPacket(69, landLords.LandLordsTrustee, "landLords.LandLordsTrustee"),
    70: new LeafWsPacket(70, landLords.LandLordsBottomCard, "landLords.LandLordsBottomCard"),
    71: new LeafWsPacket(71, landLords.LandLordsOutCard, "landLords.LandLordsOutCard"),
    72: new LeafWsPacket(72, landLords.LandLordsAward, "landLords.LandLordsAward"),
    73: new LeafWsPacket(73, landLords.LandLordsCheckout, "landLords.LandLordsCheckout"),
}

export class landLords_request {
    public static LandLordsEnter( data:{ TimeStamp:number, FreeTime:number, OutTime:number, CallTime:number, Free:any, Start:any, Call:any, Playing:any, Over:any, BeforeChairID:number, BeforeCards:any, Players:any[] } ) { landLords_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyReq( data:{ IsReady:any } ) { landLords_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsReadyResp( data:{ UserId:number } ) { landLords_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateFree( data:{ Times:any } ) { landLords_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateStart( data:{ Times:any } ) { landLords_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateCall( data:{ Times:any, UserID:number } ) { landLords_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStatePlaying( data:{ Times:any } ) { landLords_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsStateOver( data:{ Times:any } ) { landLords_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDeal( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCall( data:{ UserID:number, Score:number } ) { landLords_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsDouble( data:{ UserID:number, Number:number } ) { landLords_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsTrustee( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsBottomCard( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsOutCard( data:{ UserID:number, Cards:any, Hints:string } ) { landLords_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsAward( data:{ UserID:number, Codes:any, GetGold:number } ) { landLords_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static LandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
}

