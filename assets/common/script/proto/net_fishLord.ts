//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 101,
    GameFishLordPlaying = 102,
    GameFishLordBetResult = 103,
    GameFishLordOver = 104,
}

export var fishLord_packet_define = {
    101: new LeafWsPacket(101, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    102: new LeafWsPacket(102, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    103: new LeafWsPacket(103, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    104: new LeafWsPacket(104, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[104].sendToChannel(ChannelDefine.game, data, false); }
}

