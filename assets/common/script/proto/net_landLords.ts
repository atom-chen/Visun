//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 57,
    GameLandLordsPlayer = 58,
    GameLandLordsDeal = 59,
    GameLandLordsCall = 60,
    GameLandLordsDouble = 61,
    GameLandLordsTrustee = 62,
    GameLandLordsBottomCard = 63,
    GameLandLordsOutCard = 64,
    GameLandLordsAward = 65,
    GameLandLordsCheckout = 66,
}

export var landLords_packet_define = {
    57: new LeafWsPacket(57, landLords.GameLandLordsEnter, "landLords.GameLandLordsEnter"),
    58: new LeafWsPacket(58, landLords.GameLandLordsPlayer, "landLords.GameLandLordsPlayer"),
    59: new LeafWsPacket(59, landLords.GameLandLordsDeal, "landLords.GameLandLordsDeal"),
    60: new LeafWsPacket(60, landLords.GameLandLordsCall, "landLords.GameLandLordsCall"),
    61: new LeafWsPacket(61, landLords.GameLandLordsDouble, "landLords.GameLandLordsDouble"),
    62: new LeafWsPacket(62, landLords.GameLandLordsTrustee, "landLords.GameLandLordsTrustee"),
    63: new LeafWsPacket(63, landLords.GameLandLordsBottomCard, "landLords.GameLandLordsBottomCard"),
    64: new LeafWsPacket(64, landLords.GameLandLordsOutCard, "landLords.GameLandLordsOutCard"),
    65: new LeafWsPacket(65, landLords.GameLandLordsAward, "landLords.GameLandLordsAward"),
    66: new LeafWsPacket(66, landLords.GameLandLordsCheckout, "landLords.GameLandLordsCheckout"),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ TimeStamp:number, FreeTime:number, OutTime:number, CallTime:number, Free:any, Start:any, Call:any, Playing:any, Over:any, BeforeChairID:number, BeforeCards:any, Players:any[] } ) { landLords_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDeal( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCall( data:{ UserID:number, Score:number } ) { landLords_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDouble( data:{ UserID:number, Number:number } ) { landLords_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsTrustee( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBottomCard( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutCard( data:{ UserID:number, Cards:any, Hints:string } ) { landLords_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ UserID:number, Codes:any, GetGold:number } ) { landLords_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
}

