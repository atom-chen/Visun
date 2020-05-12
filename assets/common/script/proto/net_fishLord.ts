//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 122,
    GameFishLordPlaying = 123,
    GameFishLordBetResult = 124,
    GameFishLordOver = 125,
}

export var fishLord_packet_define = {
    122: new LeafWsPacket(122, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    123: new LeafWsPacket(123, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    124: new LeafWsPacket(124, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    125: new LeafWsPacket(125, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[122].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[123].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[124].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[125].sendToChannel(ChannelDefine.game, data, false); }
}

