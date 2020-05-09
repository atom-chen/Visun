//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 68,
    GameLandLordsPlayer = 69,
    GameLandLordsDeal = 70,
    GameLandLordsCall = 71,
    GameLandLordsDouble = 72,
    GameLandLordsTrustee = 73,
    GameLandLordsBottomCard = 74,
    GameLandLordsOutCard = 75,
    GameLandLordsAward = 76,
    GameLandLordsCheckout = 77,
}

export var landLords_packet_define = {
    68: new LeafWsPacket(68, landLords.GameLandLordsEnter, "landLords.GameLandLordsEnter"),
    69: new LeafWsPacket(69, landLords.GameLandLordsPlayer, "landLords.GameLandLordsPlayer"),
    70: new LeafWsPacket(70, landLords.GameLandLordsDeal, "landLords.GameLandLordsDeal"),
    71: new LeafWsPacket(71, landLords.GameLandLordsCall, "landLords.GameLandLordsCall"),
    72: new LeafWsPacket(72, landLords.GameLandLordsDouble, "landLords.GameLandLordsDouble"),
    73: new LeafWsPacket(73, landLords.GameLandLordsTrustee, "landLords.GameLandLordsTrustee"),
    74: new LeafWsPacket(74, landLords.GameLandLordsBottomCard, "landLords.GameLandLordsBottomCard"),
    75: new LeafWsPacket(75, landLords.GameLandLordsOutCard, "landLords.GameLandLordsOutCard"),
    76: new LeafWsPacket(76, landLords.GameLandLordsAward, "landLords.GameLandLordsAward"),
    77: new LeafWsPacket(77, landLords.GameLandLordsCheckout, "landLords.GameLandLordsCheckout"),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ TimeStamp:number, FreeTime:number, OutTime:number, CallTime:number, Free:any, Start:any, Call:any, Playing:any, Over:any, BeforeChairID:number, BeforeCards:any, Players:any[] } ) { landLords_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDeal( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCall( data:{ UserID:number, Score:number } ) { landLords_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDouble( data:{ UserID:number, Number:number } ) { landLords_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsTrustee( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBottomCard( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutCard( data:{ UserID:number, Cards:any, Hints:string } ) { landLords_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ UserID:number, Codes:any, GetGold:number } ) { landLords_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
}

