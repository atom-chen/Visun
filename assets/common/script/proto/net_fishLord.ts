//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 58,
    GameFishLordPlaying = 59,
    GameFishLordBetResult = 60,
    GameFishLordOver = 61,
}

export var fishLord_packet_define = {
    58: new LeafWsPacket(58, fishLord.GameFishLordEnter),
    59: new LeafWsPacket(59, fishLord.GameFishLordPlaying),
    60: new LeafWsPacket(60, fishLord.GameFishLordBetResult),
    61: new LeafWsPacket(61, fishLord.GameFishLordOver),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
}

