//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 35,
    GameBaccaratHost = 36,
    GameBaccaratSuperHost = 37,
    GameBaccaratBet = 38,
    GameBaccaratBetResult = 39,
    GameBaccaratOver = 40,
    GameBaccaratCheckout = 41,
}

export var baccarat_packet_define = {
    35: new LeafWsPacket(35, baccarat.GameBaccaratEnter, "baccarat.GameBaccaratEnter"),
    36: new LeafWsPacket(36, baccarat.GameBaccaratHost, "baccarat.GameBaccaratHost"),
    37: new LeafWsPacket(37, baccarat.GameBaccaratSuperHost, "baccarat.GameBaccaratSuperHost"),
    38: new LeafWsPacket(38, baccarat.GameBaccaratBet, "baccarat.GameBaccaratBet"),
    39: new LeafWsPacket(39, baccarat.GameBaccaratBetResult, "baccarat.GameBaccaratBetResult"),
    40: new LeafWsPacket(40, baccarat.GameBaccaratOver, "baccarat.GameBaccaratOver"),
    41: new LeafWsPacket(41, baccarat.GameBaccaratCheckout, "baccarat.GameBaccaratCheckout"),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number, Free:any, Start:any, Playing:any, Over:any } ) { baccarat_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { baccarat_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
}

