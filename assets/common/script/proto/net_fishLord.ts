//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 78,
    GameFishLordPlaying = 79,
    GameFishLordBetResult = 80,
    GameFishLordOver = 81,
}

export var fishLord_packet_define = {
    78: new LeafWsPacket(78, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    79: new LeafWsPacket(79, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    80: new LeafWsPacket(80, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    81: new LeafWsPacket(81, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
}

