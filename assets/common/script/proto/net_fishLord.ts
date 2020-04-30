//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishLord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishLord_msgs {
    GameFishLordEnter = 63,
    GameFishLordPlaying = 64,
    GameFishLordBetResult = 65,
    GameFishLordOver = 66,
}

export var fishLord_packet_define = {
    63: new LeafWsPacket(63, fishLord.GameFishLordEnter),
    64: new LeafWsPacket(64, fishLord.GameFishLordPlaying),
    65: new LeafWsPacket(65, fishLord.GameFishLordBetResult),
    66: new LeafWsPacket(66, fishLord.GameFishLordOver),
}

export class fishLord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number[], players:string[], Countdown:number, Chips:number[], Odds:number[], BankerScore:number, PlayerScore:number, Acquire:number } ) { fishLord_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishLord_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishLord_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number[], PlayerCard:number[], BankerCard:number[], Acquire:number } ) { fishLord_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
}

