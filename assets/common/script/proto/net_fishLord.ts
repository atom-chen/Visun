//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 54,
    GameFishLordPlaying = 55,
    GameFishLordBetResult = 56,
    GameFishLordOver = 57,
}

export var fishLord_packet_define = {
    54: new LeafWsPacket(54, fishLord.GameFishLordEnter),
    55: new LeafWsPacket(55, fishLord.GameFishLordPlaying),
    56: new LeafWsPacket(56, fishLord.GameFishLordBetResult),
    57: new LeafWsPacket(57, fishLord.GameFishLordOver),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
}

