//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 38,
    GameBaccaratHost = 39,
    GameBaccaratSuperHost = 40,
    GameBaccaratBet = 41,
    GameBaccaratBetResult = 42,
    GameBaccaratOver = 43,
    GameBaccaratCheckout = 44,
}

export var baccarat_packet_define = {
    38: new LeafWsPacket(38, baccarat.GameBaccaratEnter, "baccarat.GameBaccaratEnter"),
    39: new LeafWsPacket(39, baccarat.GameBaccaratHost, "baccarat.GameBaccaratHost"),
    40: new LeafWsPacket(40, baccarat.GameBaccaratSuperHost, "baccarat.GameBaccaratSuperHost"),
    41: new LeafWsPacket(41, baccarat.GameBaccaratBet, "baccarat.GameBaccaratBet"),
    42: new LeafWsPacket(42, baccarat.GameBaccaratBetResult, "baccarat.GameBaccaratBetResult"),
    43: new LeafWsPacket(43, baccarat.GameBaccaratOver, "baccarat.GameBaccaratOver"),
    44: new LeafWsPacket(44, baccarat.GameBaccaratCheckout, "baccarat.GameBaccaratCheckout"),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number, Free:any, Start:any, Playing:any, Over:any } ) { baccarat_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { baccarat_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
}

