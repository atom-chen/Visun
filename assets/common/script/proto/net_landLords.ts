//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 100,
    GameLandLordsPlayer = 101,
    GameLandLordsDeal = 102,
    GameLandLordsCall = 103,
    GameLandLordsDouble = 104,
    GameLandLordsTrustee = 105,
    GameLandLordsBottomCard = 106,
    GameLandLordsOutCard = 107,
    GameLandLordsAward = 108,
    GameLandLordsCheckout = 109,
}

export var landLords_packet_define = {
    100: new LeafWsPacket(100, landLords.GameLandLordsEnter, "landLords.GameLandLordsEnter"),
    101: new LeafWsPacket(101, landLords.GameLandLordsPlayer, "landLords.GameLandLordsPlayer"),
    102: new LeafWsPacket(102, landLords.GameLandLordsDeal, "landLords.GameLandLordsDeal"),
    103: new LeafWsPacket(103, landLords.GameLandLordsCall, "landLords.GameLandLordsCall"),
    104: new LeafWsPacket(104, landLords.GameLandLordsDouble, "landLords.GameLandLordsDouble"),
    105: new LeafWsPacket(105, landLords.GameLandLordsTrustee, "landLords.GameLandLordsTrustee"),
    106: new LeafWsPacket(106, landLords.GameLandLordsBottomCard, "landLords.GameLandLordsBottomCard"),
    107: new LeafWsPacket(107, landLords.GameLandLordsOutCard, "landLords.GameLandLordsOutCard"),
    108: new LeafWsPacket(108, landLords.GameLandLordsAward, "landLords.GameLandLordsAward"),
    109: new LeafWsPacket(109, landLords.GameLandLordsCheckout, "landLords.GameLandLordsCheckout"),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ TimeStamp:number, FreeTime:number, OutTime:number, CallTime:number, Free:any, Start:any, Call:any, Playing:any, Over:any, BeforeChairID:number, BeforeCards:any, Players:any[] } ) { landLords_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDeal( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCall( data:{ UserID:number, Score:number } ) { landLords_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDouble( data:{ UserID:number, Number:number } ) { landLords_packet_define[104].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsTrustee( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[105].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBottomCard( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[106].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutCard( data:{ UserID:number, Cards:any, Hints:string } ) { landLords_packet_define[107].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ UserID:number, Codes:any, GetGold:number } ) { landLords_packet_define[108].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[109].sendToChannel(ChannelDefine.game, data, false); }
}

