//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 69,
    GameFishLordPlaying = 70,
    GameFishLordBetResult = 71,
    GameFishLordOver = 72,
}

export var fishLord_packet_define = {
    69: new LeafWsPacket(69, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    70: new LeafWsPacket(70, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    71: new LeafWsPacket(71, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    72: new LeafWsPacket(72, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
}

