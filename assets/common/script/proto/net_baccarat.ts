//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 69,
    GameBaccaratHost = 70,
    GameBaccaratSuperHost = 71,
    GameBaccaratBet = 72,
    GameBaccaratBetResult = 73,
    GameBaccaratOver = 74,
    GameBaccaratCheckout = 75,
}

export var baccarat_packet_define = {
    69: new LeafWsPacket(69, baccarat.GameBaccaratEnter, "baccarat.GameBaccaratEnter"),
    70: new LeafWsPacket(70, baccarat.GameBaccaratHost, "baccarat.GameBaccaratHost"),
    71: new LeafWsPacket(71, baccarat.GameBaccaratSuperHost, "baccarat.GameBaccaratSuperHost"),
    72: new LeafWsPacket(72, baccarat.GameBaccaratBet, "baccarat.GameBaccaratBet"),
    73: new LeafWsPacket(73, baccarat.GameBaccaratBetResult, "baccarat.GameBaccaratBetResult"),
    74: new LeafWsPacket(74, baccarat.GameBaccaratOver, "baccarat.GameBaccaratOver"),
    75: new LeafWsPacket(75, baccarat.GameBaccaratCheckout, "baccarat.GameBaccaratCheckout"),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number, Free:any, Start:any, Playing:any, Over:any } ) { baccarat_packet_define[69].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { baccarat_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
}

