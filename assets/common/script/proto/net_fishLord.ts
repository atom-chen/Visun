//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishlord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishlord_msgs {
    GameFishLordEnter = 29,
    GameFishLordBet = 30,
    GameFishLordBetResult = 31,
    GameFishLordOver = 32,
}

export var fishlord_packet_define = {
    29: new LeafWsPacket(29, fishlord.GameFishLordEnter),
    30: new LeafWsPacket(30, fishlord.GameFishLordBet),
    31: new LeafWsPacket(31, fishlord.GameFishLordBetResult),
    32: new LeafWsPacket(32, fishlord.GameFishLordOver),
}

export class fishlord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number, players:string, Countdown:number, Chips:number, Odds:number, BankerScore:number, PlayerScore:number, Acquire:number } ) { fishlord_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBet( data:{ BetArea:number, BetScore:number } ) { fishlord_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishlord_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number, PlayerCard:number, BankerCard:number, Acquire:number } ) { fishlord_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
}

