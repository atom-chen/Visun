//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 91,
    GameBaccaratHost = 92,
    GameBaccaratSuperHost = 93,
    GameBaccaratBet = 94,
    GameBaccaratBetResult = 95,
    GameBaccaratOver = 96,
    GameBaccaratCheckout = 97,
}

export var baccarat_packet_define = {
    91: new LeafWsPacket(91, baccarat.GameBaccaratEnter, "baccarat.GameBaccaratEnter"),
    92: new LeafWsPacket(92, baccarat.GameBaccaratHost, "baccarat.GameBaccaratHost"),
    93: new LeafWsPacket(93, baccarat.GameBaccaratSuperHost, "baccarat.GameBaccaratSuperHost"),
    94: new LeafWsPacket(94, baccarat.GameBaccaratBet, "baccarat.GameBaccaratBet"),
    95: new LeafWsPacket(95, baccarat.GameBaccaratBetResult, "baccarat.GameBaccaratBetResult"),
    96: new LeafWsPacket(96, baccarat.GameBaccaratOver, "baccarat.GameBaccaratOver"),
    97: new LeafWsPacket(97, baccarat.GameBaccaratCheckout, "baccarat.GameBaccaratCheckout"),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number, Free:any, Start:any, Playing:any, Over:any } ) { baccarat_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { baccarat_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
}

