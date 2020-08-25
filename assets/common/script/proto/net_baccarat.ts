//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 51,
    GameBaccaratHost = 52,
    GameBaccaratSuperHost = 53,
    GameBaccaratBet = 54,
    GameBaccaratBetResult = 55,
    GameBaccaratOver = 56,
    GameBaccaratCheckout = 57,
}

export var baccarat_packet_define = {
    51: new LeafWsPacket(51, baccarat.GameBaccaratEnter, "baccarat.GameBaccaratEnter"),
    52: new LeafWsPacket(52, baccarat.GameBaccaratHost, "baccarat.GameBaccaratHost"),
    53: new LeafWsPacket(53, baccarat.GameBaccaratSuperHost, "baccarat.GameBaccaratSuperHost"),
    54: new LeafWsPacket(54, baccarat.GameBaccaratBet, "baccarat.GameBaccaratBet"),
    55: new LeafWsPacket(55, baccarat.GameBaccaratBetResult, "baccarat.GameBaccaratBetResult"),
    56: new LeafWsPacket(56, baccarat.GameBaccaratOver, "baccarat.GameBaccaratOver"),
    57: new LeafWsPacket(57, baccarat.GameBaccaratCheckout, "baccarat.GameBaccaratCheckout"),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number, Free:any, Start:any, Playing:any, Over:any } ) { baccarat_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { baccarat_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
}

