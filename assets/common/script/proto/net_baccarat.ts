//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 63,
    GameBaccaratHost = 64,
    GameBaccaratSuperHost = 65,
    GameBaccaratBet = 66,
    GameBaccaratBetResult = 67,
    GameBaccaratOver = 68,
    GameBaccaratCheckout = 69,
}

export var baccarat_packet_define = {
    63: new LeafWsPacket(63, baccarat.GameBaccaratEnter, "baccarat.GameBaccaratEnter"),
    64: new LeafWsPacket(64, baccarat.GameBaccaratHost, "baccarat.GameBaccaratHost"),
    65: new LeafWsPacket(65, baccarat.GameBaccaratSuperHost, "baccarat.GameBaccaratSuperHost"),
    66: new LeafWsPacket(66, baccarat.GameBaccaratBet, "baccarat.GameBaccaratBet"),
    67: new LeafWsPacket(67, baccarat.GameBaccaratBetResult, "baccarat.GameBaccaratBetResult"),
    68: new LeafWsPacket(68, baccarat.GameBaccaratOver, "baccarat.GameBaccaratOver"),
    69: new LeafWsPacket(69, baccarat.GameBaccaratCheckout, "baccarat.GameBaccaratCheckout"),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number, Free:any, Start:any, Playing:any, Over:any } ) { baccarat_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { baccarat_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
}

