//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 48,
    GameLandLordsPlayer = 49,
    GameLandLordsDeal = 50,
    GameLandLordsCall = 51,
    GameLandLordsBottomCard = 52,
    GameLandLordsOutCard = 53,
    GameLandLordsOperate = 54,
    GameLandLordsAward = 55,
    GameLandLordsCheckout = 56,
}

export var landLords_packet_define = {
    48: new LeafWsPacket(48, landLords.GameLandLordsEnter),
    49: new LeafWsPacket(49, landLords.GameLandLordsPlayer),
    50: new LeafWsPacket(50, landLords.GameLandLordsDeal),
    51: new LeafWsPacket(51, landLords.GameLandLordsCall),
    52: new LeafWsPacket(52, landLords.GameLandLordsBottomCard),
    53: new LeafWsPacket(53, landLords.GameLandLordsOutCard),
    54: new LeafWsPacket(54, landLords.GameLandLordsOperate),
    55: new LeafWsPacket(55, landLords.GameLandLordsAward),
    56: new LeafWsPacket(56, landLords.GameLandLordsCheckout),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ TimeStamp:number, FreeTime:number, OutTime:number, CallTime:number, Free:any, Start:any, Call:any, Playing:any, Over:any } ) { landLords_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, Cards:any, IsBanker:any } ) { landLords_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDeal( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCall( data:{ UserID:number, Score:number } ) { landLords_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBottomCard( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutCard( data:{ UserID:number, Cards:any, Hints:string } ) { landLords_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOperate( data:{ Code:number, Cards:any, Hints:string } ) { landLords_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ UserID:number, Codes:any, GetGold:number } ) { landLords_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
}

