//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 97,
    GameFishLordPlaying = 98,
    GameFishLordBetResult = 99,
    GameFishLordOver = 100,
}

export var fishLord_packet_define = {
    97: new LeafWsPacket(97, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    98: new LeafWsPacket(98, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    99: new LeafWsPacket(99, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    100: new LeafWsPacket(100, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
}

