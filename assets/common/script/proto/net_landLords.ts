//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 69,
    GameLandLordsPlayer = 70,
    GameLandLordsDeal = 71,
    GameLandLordsCall = 72,
    GameLandLordsDouble = 73,
    GameLandLordsTrustee = 74,
    GameLandLordsBottomCard = 75,
    GameLandLordsOutCard = 76,
    GameLandLordsAward = 77,
    GameLandLordsCheckout = 78,
}

export var landLords_packet_define = {
    69: new LeafWsPacket(69, landLords.GameLandLordsEnter, "landLords.GameLandLordsEnter"),
    70: new LeafWsPacket(70, landLords.GameLandLordsPlayer, "landLords.GameLandLordsPlayer"),
    71: new LeafWsPacket(71, landLords.GameLandLordsDeal, "landLords.GameLandLordsDeal"),
    72: new LeafWsPacket(72, landLords.GameLandLordsCall, "landLords.GameLandLordsCall"),
    73: new LeafWsPacket(73, landLords.GameLandLordsDouble, "landLords.GameLandLordsDouble"),
    74: new LeafWsPacket(74, landLords.GameLandLordsTrustee, "landLords.GameLandLordsTrustee"),
    75: new LeafWsPacket(75, landLords.GameLandLordsBottomCard, "landLords.GameLandLordsBottomCard"),
    76: new LeafWsPacket(76, landLords.GameLandLordsOutCard, "landLords.GameLandLordsOutCard"),
    77: new LeafWsPacket(77, landLords.GameLandLordsAward, "landLords.GameLandLordsAward"),
    78: new LeafWsPacket(78, landLords.GameLandLordsCheckout, "landLords.GameLandLordsCheckout"),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ TimeStamp:number, FreeTime:number, OutTime:number, CallTime:number, Free:any, Start:any, Call:any, Playing:any, Over:any, BeforeChairID:number, BeforeCards:any, Players:any[] } ) { landLords_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDeal( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCall( data:{ UserID:number, Score:number } ) { landLords_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDouble( data:{ UserID:number, Number:number } ) { landLords_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsTrustee( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBottomCard( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutCard( data:{ UserID:number, Cards:any, Hints:string } ) { landLords_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ UserID:number, Codes:any, GetGold:number } ) { landLords_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
}

