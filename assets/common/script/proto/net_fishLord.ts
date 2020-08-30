//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 83,
    GameFishLordPlaying = 84,
    GameFishLordBetResult = 85,
    GameFishLordOver = 86,
}

export var fishLord_packet_define = {
    83: new LeafWsPacket(83, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    84: new LeafWsPacket(84, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    85: new LeafWsPacket(85, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    86: new LeafWsPacket(86, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
}

