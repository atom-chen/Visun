//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 87,
    GameFishLordPlaying = 88,
    GameFishLordBetResult = 89,
    GameFishLordOver = 90,
}

export var fishLord_packet_define = {
    87: new LeafWsPacket(87, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    88: new LeafWsPacket(88, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    89: new LeafWsPacket(89, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    90: new LeafWsPacket(90, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
}

