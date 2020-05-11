//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 70,
    GameBaccaratHost = 71,
    GameBaccaratSuperHost = 72,
    GameBaccaratBet = 73,
    GameBaccaratBetResult = 74,
    GameBaccaratOver = 75,
    GameBaccaratCheckout = 76,
}

export var baccarat_packet_define = {
    70: new LeafWsPacket(70, baccarat.GameBaccaratEnter, "baccarat.GameBaccaratEnter"),
    71: new LeafWsPacket(71, baccarat.GameBaccaratHost, "baccarat.GameBaccaratHost"),
    72: new LeafWsPacket(72, baccarat.GameBaccaratSuperHost, "baccarat.GameBaccaratSuperHost"),
    73: new LeafWsPacket(73, baccarat.GameBaccaratBet, "baccarat.GameBaccaratBet"),
    74: new LeafWsPacket(74, baccarat.GameBaccaratBetResult, "baccarat.GameBaccaratBetResult"),
    75: new LeafWsPacket(75, baccarat.GameBaccaratOver, "baccarat.GameBaccaratOver"),
    76: new LeafWsPacket(76, baccarat.GameBaccaratCheckout, "baccarat.GameBaccaratCheckout"),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number, Free:any, Start:any, Playing:any, Over:any } ) { baccarat_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { baccarat_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
}

