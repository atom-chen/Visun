//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 65,
    GameFishLordPlaying = 66,
    GameFishLordBetResult = 67,
    GameFishLordOver = 68,
}

export var fishLord_packet_define = {
    65: new LeafWsPacket(65, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    66: new LeafWsPacket(66, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    67: new LeafWsPacket(67, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    68: new LeafWsPacket(68, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
}

