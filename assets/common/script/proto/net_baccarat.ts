//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 86,
    GameBaccaratHost = 87,
    GameBaccaratSuperHost = 88,
    GameBaccaratBet = 89,
    GameBaccaratBetResult = 90,
    GameBaccaratOver = 91,
    GameBaccaratCheckout = 92,
}

export var baccarat_packet_define = {
    86: new LeafWsPacket(86, baccarat.GameBaccaratEnter, "baccarat.GameBaccaratEnter"),
    87: new LeafWsPacket(87, baccarat.GameBaccaratHost, "baccarat.GameBaccaratHost"),
    88: new LeafWsPacket(88, baccarat.GameBaccaratSuperHost, "baccarat.GameBaccaratSuperHost"),
    89: new LeafWsPacket(89, baccarat.GameBaccaratBet, "baccarat.GameBaccaratBet"),
    90: new LeafWsPacket(90, baccarat.GameBaccaratBetResult, "baccarat.GameBaccaratBetResult"),
    91: new LeafWsPacket(91, baccarat.GameBaccaratOver, "baccarat.GameBaccaratOver"),
    92: new LeafWsPacket(92, baccarat.GameBaccaratCheckout, "baccarat.GameBaccaratCheckout"),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number, Free:any, Start:any, Playing:any, Over:any } ) { baccarat_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { baccarat_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
}

