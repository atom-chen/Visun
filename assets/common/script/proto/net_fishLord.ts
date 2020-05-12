//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 117,
    GameFishLordPlaying = 118,
    GameFishLordBetResult = 119,
    GameFishLordOver = 120,
}

export var fishLord_packet_define = {
    117: new LeafWsPacket(117, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    118: new LeafWsPacket(118, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    119: new LeafWsPacket(119, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    120: new LeafWsPacket(120, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[117].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[118].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[119].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[120].sendToChannel(ChannelDefine.game, data, false); }
}

