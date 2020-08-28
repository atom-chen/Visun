//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 81,
    GameFishLordPlaying = 82,
    GameFishLordBetResult = 83,
    GameFishLordOver = 84,
}

export var fishLord_packet_define = {
    81: new LeafWsPacket(81, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    82: new LeafWsPacket(82, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    83: new LeafWsPacket(83, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    84: new LeafWsPacket(84, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
}

