//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 82,
    GameBaccaratHost = 83,
    GameBaccaratSuperHost = 84,
    GameBaccaratBet = 85,
    GameBaccaratBetResult = 86,
    GameBaccaratOver = 87,
    GameBaccaratCheckout = 88,
}

export var baccarat_packet_define = {
    82: new LeafWsPacket(82, baccarat.GameBaccaratEnter, "baccarat.GameBaccaratEnter"),
    83: new LeafWsPacket(83, baccarat.GameBaccaratHost, "baccarat.GameBaccaratHost"),
    84: new LeafWsPacket(84, baccarat.GameBaccaratSuperHost, "baccarat.GameBaccaratSuperHost"),
    85: new LeafWsPacket(85, baccarat.GameBaccaratBet, "baccarat.GameBaccaratBet"),
    86: new LeafWsPacket(86, baccarat.GameBaccaratBetResult, "baccarat.GameBaccaratBetResult"),
    87: new LeafWsPacket(87, baccarat.GameBaccaratOver, "baccarat.GameBaccaratOver"),
    88: new LeafWsPacket(88, baccarat.GameBaccaratCheckout, "baccarat.GameBaccaratCheckout"),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number, Free:any, Start:any, Playing:any, Over:any } ) { baccarat_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { baccarat_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
}

