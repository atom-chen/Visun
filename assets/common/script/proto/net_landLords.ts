//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 65,
    GameLandLordsPlayer = 66,
    GameLandLordsDeal = 67,
    GameLandLordsCall = 68,
    GameLandLordsDouble = 69,
    GameLandLordsTrustee = 70,
    GameLandLordsBottomCard = 71,
    GameLandLordsOutCard = 72,
    GameLandLordsAward = 73,
    GameLandLordsCheckout = 74,
}

export var landLords_packet_define = {
    65: new LeafWsPacket(65, landLords.GameLandLordsEnter, "landLords.GameLandLordsEnter"),
    66: new LeafWsPacket(66, landLords.GameLandLordsPlayer, "landLords.GameLandLordsPlayer"),
    67: new LeafWsPacket(67, landLords.GameLandLordsDeal, "landLords.GameLandLordsDeal"),
    68: new LeafWsPacket(68, landLords.GameLandLordsCall, "landLords.GameLandLordsCall"),
    69: new LeafWsPacket(69, landLords.GameLandLordsDouble, "landLords.GameLandLordsDouble"),
    70: new LeafWsPacket(70, landLords.GameLandLordsTrustee, "landLords.GameLandLordsTrustee"),
    71: new LeafWsPacket(71, landLords.GameLandLordsBottomCard, "landLords.GameLandLordsBottomCard"),
    72: new LeafWsPacket(72, landLords.GameLandLordsOutCard, "landLords.GameLandLordsOutCard"),
    73: new LeafWsPacket(73, landLords.GameLandLordsAward, "landLords.GameLandLordsAward"),
    74: new LeafWsPacket(74, landLords.GameLandLordsCheckout, "landLords.GameLandLordsCheckout"),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ TimeStamp:number, FreeTime:number, OutTime:number, CallTime:number, Free:any, Start:any, Call:any, Playing:any, Over:any, BeforeChairID:number, BeforeCards:any, Players:any[] } ) { landLords_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDeal( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCall( data:{ UserID:number, Score:number } ) { landLords_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDouble( data:{ UserID:number, Number:number } ) { landLords_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsTrustee( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBottomCard( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutCard( data:{ UserID:number, Cards:any, Hints:string } ) { landLords_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ UserID:number, Codes:any, GetGold:number } ) { landLords_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
}

