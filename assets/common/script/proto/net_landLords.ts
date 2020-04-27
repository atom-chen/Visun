//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 44,
    GameLandLordsPlayer = 45,
    GameLandLordsBegins = 46,
    GameLandLordsOutcard = 47,
    GameLandLordsOperate = 48,
    GameLandLordsAward = 49,
    GameLandLordsCheckout = 50,
}

export var landLords_packet_define = {
    44: new LeafWsPacket(44, landLords.GameLandLordsEnter),
    45: new LeafWsPacket(45, landLords.GameLandLordsPlayer),
    46: new LeafWsPacket(46, landLords.GameLandLordsBegins),
    47: new LeafWsPacket(47, landLords.GameLandLordsOutcard),
    48: new LeafWsPacket(48, landLords.GameLandLordsOperate),
    49: new LeafWsPacket(49, landLords.GameLandLordsAward),
    50: new LeafWsPacket(50, landLords.GameLandLordsCheckout),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ UserID:number, TimeStamp:number, Players:any, FreeTime:number } ) { landLords_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, Site:number, Cards:any, IsBanker:any } ) { landLords_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBegins( data:{ CardsBottom:any, CardsHand:any } ) { landLords_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutcard( data:{ Site:number, Cards:any, Hints:string } ) { landLords_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOperate( data:{ Code:number, Cards:any, Hints:string } ) { landLords_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ Site:number, Codes:any, GetGold:number } ) { landLords_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
}

