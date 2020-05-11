//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 113,
    GameFishLordPlaying = 114,
    GameFishLordBetResult = 115,
    GameFishLordOver = 116,
}

export var fishLord_packet_define = {
    113: new LeafWsPacket(113, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    114: new LeafWsPacket(114, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    115: new LeafWsPacket(115, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    116: new LeafWsPacket(116, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[113].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[114].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[115].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[116].sendToChannel(ChannelDefine.game, data, false); }
}

