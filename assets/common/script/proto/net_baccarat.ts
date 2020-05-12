//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 87,
    GameBaccaratHost = 88,
    GameBaccaratSuperHost = 89,
    GameBaccaratBet = 90,
    GameBaccaratBetResult = 91,
    GameBaccaratOver = 92,
    GameBaccaratCheckout = 93,
}

export var baccarat_packet_define = {
    87: new LeafWsPacket(87, baccarat.GameBaccaratEnter, "baccarat.GameBaccaratEnter"),
    88: new LeafWsPacket(88, baccarat.GameBaccaratHost, "baccarat.GameBaccaratHost"),
    89: new LeafWsPacket(89, baccarat.GameBaccaratSuperHost, "baccarat.GameBaccaratSuperHost"),
    90: new LeafWsPacket(90, baccarat.GameBaccaratBet, "baccarat.GameBaccaratBet"),
    91: new LeafWsPacket(91, baccarat.GameBaccaratBetResult, "baccarat.GameBaccaratBetResult"),
    92: new LeafWsPacket(92, baccarat.GameBaccaratOver, "baccarat.GameBaccaratOver"),
    93: new LeafWsPacket(93, baccarat.GameBaccaratCheckout, "baccarat.GameBaccaratCheckout"),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number, Free:any, Start:any, Playing:any, Over:any } ) { baccarat_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { baccarat_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
}

