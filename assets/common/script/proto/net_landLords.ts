//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 52,
    GameLandLordsPlayer = 53,
    GameLandLordsDeal = 54,
    GameLandLordsCall = 55,
    GameLandLordsDouble = 56,
    GameLandLordsTrustee = 57,
    GameLandLordsBottomCard = 58,
    GameLandLordsOutCard = 59,
    GameLandLordsAward = 60,
    GameLandLordsCheckout = 61,
}

export var landLords_packet_define = {
    52: new LeafWsPacket(52, landLords.GameLandLordsEnter, "landLords.GameLandLordsEnter"),
    53: new LeafWsPacket(53, landLords.GameLandLordsPlayer, "landLords.GameLandLordsPlayer"),
    54: new LeafWsPacket(54, landLords.GameLandLordsDeal, "landLords.GameLandLordsDeal"),
    55: new LeafWsPacket(55, landLords.GameLandLordsCall, "landLords.GameLandLordsCall"),
    56: new LeafWsPacket(56, landLords.GameLandLordsDouble, "landLords.GameLandLordsDouble"),
    57: new LeafWsPacket(57, landLords.GameLandLordsTrustee, "landLords.GameLandLordsTrustee"),
    58: new LeafWsPacket(58, landLords.GameLandLordsBottomCard, "landLords.GameLandLordsBottomCard"),
    59: new LeafWsPacket(59, landLords.GameLandLordsOutCard, "landLords.GameLandLordsOutCard"),
    60: new LeafWsPacket(60, landLords.GameLandLordsAward, "landLords.GameLandLordsAward"),
    61: new LeafWsPacket(61, landLords.GameLandLordsCheckout, "landLords.GameLandLordsCheckout"),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ TimeStamp:number, FreeTime:number, OutTime:number, CallTime:number, Free:any, Start:any, Call:any, Playing:any, Over:any, BeforeChairID:number, BeforeCards:any, Players:any[] } ) { landLords_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDeal( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCall( data:{ UserID:number, Score:number } ) { landLords_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDouble( data:{ UserID:number, Number:number } ) { landLords_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsTrustee( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBottomCard( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutCard( data:{ UserID:number, Cards:any, Hints:string } ) { landLords_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ UserID:number, Codes:any, GetGold:number } ) { landLords_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
}

