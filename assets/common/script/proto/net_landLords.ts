//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 40,
    GameLandLordsPlayer = 41,
    GameLandLordsBegins = 42,
    GameLandLordsOutcard = 43,
    GameLandLordsOperate = 44,
    GameLandLordsAward = 45,
    GameLandLordsCheckout = 46,
}

export var landLords_packet_define = {
    40: new LeafWsPacket(40, landLords.GameLandLordsEnter),
    41: new LeafWsPacket(41, landLords.GameLandLordsPlayer),
    42: new LeafWsPacket(42, landLords.GameLandLordsBegins),
    43: new LeafWsPacket(43, landLords.GameLandLordsOutcard),
    44: new LeafWsPacket(44, landLords.GameLandLordsOperate),
    45: new LeafWsPacket(45, landLords.GameLandLordsAward),
    46: new LeafWsPacket(46, landLords.GameLandLordsCheckout),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ UserID:number, TimeStamp:number, Players:any, FreeTime:number } ) { landLords_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { landLords_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBegins( data:{ CardsBottom:any, CardsHand:any } ) { landLords_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutcard( data:{ Site:number, Cards:any, Hints:string } ) { landLords_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOperate( data:{ Code:number, Cards:any, Hints:string } ) { landLords_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ Site:number, Codes:any, GetGold:number } ) { landLords_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
}

