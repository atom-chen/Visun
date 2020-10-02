//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 91,
    GameFishLordPlaying = 92,
    GameFishLordBetResult = 93,
    GameFishLordOver = 94,
}

export var fishLord_packet_define = {
    91: new LeafWsPacket(91, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    92: new LeafWsPacket(92, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    93: new LeafWsPacket(93, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    94: new LeafWsPacket(94, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
}

