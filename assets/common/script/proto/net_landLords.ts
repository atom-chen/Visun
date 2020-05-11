//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 96,
    GameLandLordsPlayer = 97,
    GameLandLordsDeal = 98,
    GameLandLordsCall = 99,
    GameLandLordsDouble = 100,
    GameLandLordsTrustee = 101,
    GameLandLordsBottomCard = 102,
    GameLandLordsOutCard = 103,
    GameLandLordsAward = 104,
    GameLandLordsCheckout = 105,
}

export var landLords_packet_define = {
    96: new LeafWsPacket(96, landLords.GameLandLordsEnter, "landLords.GameLandLordsEnter"),
    97: new LeafWsPacket(97, landLords.GameLandLordsPlayer, "landLords.GameLandLordsPlayer"),
    98: new LeafWsPacket(98, landLords.GameLandLordsDeal, "landLords.GameLandLordsDeal"),
    99: new LeafWsPacket(99, landLords.GameLandLordsCall, "landLords.GameLandLordsCall"),
    100: new LeafWsPacket(100, landLords.GameLandLordsDouble, "landLords.GameLandLordsDouble"),
    101: new LeafWsPacket(101, landLords.GameLandLordsTrustee, "landLords.GameLandLordsTrustee"),
    102: new LeafWsPacket(102, landLords.GameLandLordsBottomCard, "landLords.GameLandLordsBottomCard"),
    103: new LeafWsPacket(103, landLords.GameLandLordsOutCard, "landLords.GameLandLordsOutCard"),
    104: new LeafWsPacket(104, landLords.GameLandLordsAward, "landLords.GameLandLordsAward"),
    105: new LeafWsPacket(105, landLords.GameLandLordsCheckout, "landLords.GameLandLordsCheckout"),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ TimeStamp:number, FreeTime:number, OutTime:number, CallTime:number, Free:any, Start:any, Call:any, Playing:any, Over:any, BeforeChairID:number, BeforeCards:any, Players:any[] } ) { landLords_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDeal( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCall( data:{ UserID:number, Score:number } ) { landLords_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDouble( data:{ UserID:number, Number:number } ) { landLords_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsTrustee( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBottomCard( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutCard( data:{ UserID:number, Cards:any, Hints:string } ) { landLords_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ UserID:number, Codes:any, GetGold:number } ) { landLords_packet_define[104].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[105].sendToChannel(ChannelDefine.game, data, false); }
}

