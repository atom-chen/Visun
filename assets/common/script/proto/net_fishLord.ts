//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishlord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishlord_msgs {
    GameFishLordEnter = 32,
    GameFishLordPlaying = 33,
    GameFishLordBetResult = 34,
    GameFishLordOver = 35,
}

export var fishlord_packet_define = {
    32: new LeafWsPacket(32, fishlord.GameFishLordEnter),
    33: new LeafWsPacket(33, fishlord.GameFishLordPlaying),
    34: new LeafWsPacket(34, fishlord.GameFishLordBetResult),
    35: new LeafWsPacket(35, fishlord.GameFishLordOver),
}

export class fishlord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number, players:string, Countdown:number, Chips:number, Odds:number, BankerScore:number, PlayerScore:number, Acquire:number } ) { fishlord_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordPlaying( data:{ BetArea:number, BetScore:number } ) { fishlord_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishlord_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number, PlayerCard:number, BankerCard:number, Acquire:number } ) { fishlord_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
}

