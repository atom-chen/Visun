//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 67,
    GameFishLordPlaying = 68,
    GameFishLordBetResult = 69,
    GameFishLordOver = 70,
}

export var fishLord_packet_define = {
    67: new LeafWsPacket(67, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    68: new LeafWsPacket(68, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    69: new LeafWsPacket(69, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    70: new LeafWsPacket(70, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
}

