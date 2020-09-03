//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 85,
    GameFishLordPlaying = 86,
    GameFishLordBetResult = 87,
    GameFishLordOver = 88,
}

export var fishLord_packet_define = {
    85: new LeafWsPacket(85, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    86: new LeafWsPacket(86, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    87: new LeafWsPacket(87, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    88: new LeafWsPacket(88, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
}

