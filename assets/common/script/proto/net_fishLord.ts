//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 100,
    GameFishLordPlaying = 101,
    GameFishLordBetResult = 102,
    GameFishLordOver = 103,
}

export var fishLord_packet_define = {
    100: new LeafWsPacket(100, fishLord.GameFishLordEnter, "fishLord.GameFishLordEnter"),
    101: new LeafWsPacket(101, fishLord.GameFishLordPlaying, "fishLord.GameFishLordPlaying"),
    102: new LeafWsPacket(102, fishLord.GameFishLordBetResult, "fishLord.GameFishLordBetResult"),
    103: new LeafWsPacket(103, fishLord.GameFishLordOver, "fishLord.GameFishLordOver"),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
}

