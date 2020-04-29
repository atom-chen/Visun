//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 13,
    GameBaccaratHost = 14,
    GameBaccaratSuperHost = 15,
    GameBaccaratBet = 16,
    GameBaccaratBetResult = 17,
    GameBaccaratOver = 18,
    GameBaccaratCheckout = 19,
}

export var baccarat_packet_define = {
    13: new LeafWsPacket(13, baccarat.GameBaccaratEnter),
    14: new LeafWsPacket(14, baccarat.GameBaccaratHost),
    15: new LeafWsPacket(15, baccarat.GameBaccaratSuperHost),
    16: new LeafWsPacket(16, baccarat.GameBaccaratBet),
    17: new LeafWsPacket(17, baccarat.GameBaccaratBetResult),
    18: new LeafWsPacket(18, baccarat.GameBaccaratOver),
    19: new LeafWsPacket(19, baccarat.GameBaccaratCheckout),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { baccarat_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number, State:number, Hints:string } ) { baccarat_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
}

