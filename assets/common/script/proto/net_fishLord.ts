//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 74,
    GameFishLordPlaying = 75,
    GameFishLordBetResult = 76,
    GameFishLordOver = 77,
}

export var fishLord_packet_define = {
    74: new LeafWsPacket(74, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    75: new LeafWsPacket(75, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    76: new LeafWsPacket(76, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    77: new LeafWsPacket(77, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
}

