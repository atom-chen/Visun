//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { fishlord } from "./fishLord";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum fishlord_msgs {
    GameFishLordEnter = 35,
    GameFishLordBet = 36,
    GameFishLordBetResult = 37,
    GameFishLordOver = 38,
}

export var fishlord_packet_define = {
    35: new LeafWsPacket(35, fishlord.GameFishLordEnter),
    36: new LeafWsPacket(36, fishlord.GameFishLordBet),
    37: new LeafWsPacket(37, fishlord.GameFishLordBetResult),
    38: new LeafWsPacket(38, fishlord.GameFishLordOver),
}

export class fishlord_request {
    public static GameFishLordEnter( data:{ AwardAreas:number, players:string, Countdown:number, Chips:number, Odds:number, BankerScore:number, PlayerScore:number, Acquire:number } ) { fishlord_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBet( data:{ BetArea:number, BetScore:number } ) { fishlord_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordBetResult( data:{ State:number, Hints:string } ) { fishlord_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static GameFishLordOver( data:{ AwardArea:number, PlayerCard:number, BankerCard:number, Acquire:number } ) { fishlord_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
}

