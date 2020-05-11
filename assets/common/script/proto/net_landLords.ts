//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 77,
    GameLandLordsPlayer = 78,
    GameLandLordsDeal = 79,
    GameLandLordsCall = 80,
    GameLandLordsDouble = 81,
    GameLandLordsTrustee = 82,
    GameLandLordsBottomCard = 83,
    GameLandLordsOutCard = 84,
    GameLandLordsAward = 85,
    GameLandLordsCheckout = 86,
}

export var landLords_packet_define = {
    77: new LeafWsPacket(77, landLords.GameLandLordsEnter, "landLords.GameLandLordsEnter"),
    78: new LeafWsPacket(78, landLords.GameLandLordsPlayer, "landLords.GameLandLordsPlayer"),
    79: new LeafWsPacket(79, landLords.GameLandLordsDeal, "landLords.GameLandLordsDeal"),
    80: new LeafWsPacket(80, landLords.GameLandLordsCall, "landLords.GameLandLordsCall"),
    81: new LeafWsPacket(81, landLords.GameLandLordsDouble, "landLords.GameLandLordsDouble"),
    82: new LeafWsPacket(82, landLords.GameLandLordsTrustee, "landLords.GameLandLordsTrustee"),
    83: new LeafWsPacket(83, landLords.GameLandLordsBottomCard, "landLords.GameLandLordsBottomCard"),
    84: new LeafWsPacket(84, landLords.GameLandLordsOutCard, "landLords.GameLandLordsOutCard"),
    85: new LeafWsPacket(85, landLords.GameLandLordsAward, "landLords.GameLandLordsAward"),
    86: new LeafWsPacket(86, landLords.GameLandLordsCheckout, "landLords.GameLandLordsCheckout"),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ TimeStamp:number, FreeTime:number, OutTime:number, CallTime:number, Free:any, Start:any, Call:any, Playing:any, Over:any, BeforeChairID:number, BeforeCards:any, Players:any[] } ) { landLords_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDeal( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCall( data:{ UserID:number, Score:number } ) { landLords_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDouble( data:{ UserID:number, Number:number } ) { landLords_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsTrustee( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBottomCard( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutCard( data:{ UserID:number, Cards:any, Hints:string } ) { landLords_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ UserID:number, Codes:any, GetGold:number } ) { landLords_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
}

