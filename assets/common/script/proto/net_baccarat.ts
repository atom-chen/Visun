//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 54,
    GameBaccaratHost = 55,
    GameBaccaratSuperHost = 56,
    GameBaccaratBet = 57,
    GameBaccaratBetResult = 58,
    GameBaccaratOver = 59,
    GameBaccaratCheckout = 60,
}

export var baccarat_packet_define = {
    54: new LeafWsPacket(54, baccarat.GameBaccaratEnter, "baccarat.GameBaccaratEnter"),
    55: new LeafWsPacket(55, baccarat.GameBaccaratHost, "baccarat.GameBaccaratHost"),
    56: new LeafWsPacket(56, baccarat.GameBaccaratSuperHost, "baccarat.GameBaccaratSuperHost"),
    57: new LeafWsPacket(57, baccarat.GameBaccaratBet, "baccarat.GameBaccaratBet"),
    58: new LeafWsPacket(58, baccarat.GameBaccaratBetResult, "baccarat.GameBaccaratBetResult"),
    59: new LeafWsPacket(59, baccarat.GameBaccaratOver, "baccarat.GameBaccaratOver"),
    60: new LeafWsPacket(60, baccarat.GameBaccaratCheckout, "baccarat.GameBaccaratCheckout"),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number, Free:any, Start:any, Playing:any, Over:any } ) { baccarat_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { baccarat_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
}

