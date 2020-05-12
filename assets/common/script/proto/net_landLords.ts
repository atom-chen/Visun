//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 105,
    GameLandLordsPlayer = 106,
    GameLandLordsDeal = 107,
    GameLandLordsCall = 108,
    GameLandLordsDouble = 109,
    GameLandLordsTrustee = 110,
    GameLandLordsBottomCard = 111,
    GameLandLordsOutCard = 112,
    GameLandLordsAward = 113,
    GameLandLordsCheckout = 114,
}

export var landLords_packet_define = {
    105: new LeafWsPacket(105, landLords.GameLandLordsEnter, "landLords.GameLandLordsEnter"),
    106: new LeafWsPacket(106, landLords.GameLandLordsPlayer, "landLords.GameLandLordsPlayer"),
    107: new LeafWsPacket(107, landLords.GameLandLordsDeal, "landLords.GameLandLordsDeal"),
    108: new LeafWsPacket(108, landLords.GameLandLordsCall, "landLords.GameLandLordsCall"),
    109: new LeafWsPacket(109, landLords.GameLandLordsDouble, "landLords.GameLandLordsDouble"),
    110: new LeafWsPacket(110, landLords.GameLandLordsTrustee, "landLords.GameLandLordsTrustee"),
    111: new LeafWsPacket(111, landLords.GameLandLordsBottomCard, "landLords.GameLandLordsBottomCard"),
    112: new LeafWsPacket(112, landLords.GameLandLordsOutCard, "landLords.GameLandLordsOutCard"),
    113: new LeafWsPacket(113, landLords.GameLandLordsAward, "landLords.GameLandLordsAward"),
    114: new LeafWsPacket(114, landLords.GameLandLordsCheckout, "landLords.GameLandLordsCheckout"),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ TimeStamp:number, FreeTime:number, OutTime:number, CallTime:number, Free:any, Start:any, Call:any, Playing:any, Over:any, BeforeChairID:number, BeforeCards:any, Players:any[] } ) { landLords_packet_define[105].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[106].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDeal( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[107].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCall( data:{ UserID:number, Score:number } ) { landLords_packet_define[108].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDouble( data:{ UserID:number, Number:number } ) { landLords_packet_define[109].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsTrustee( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[110].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBottomCard( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[111].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutCard( data:{ UserID:number, Cards:any, Hints:string } ) { landLords_packet_define[112].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ UserID:number, Codes:any, GetGold:number } ) { landLords_packet_define[113].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[114].sendToChannel(ChannelDefine.game, data, false); }
}

