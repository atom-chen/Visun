//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 15,
    GameBaccaratHost = 16,
    GameBaccaratSuperHost = 17,
    GameBaccaratBet = 18,
    GameBaccaratBetResult = 19,
    GameBaccaratOver = 20,
    GameBaccaratCheckout = 21,
}

export var baccarat_packet_define = {
    15: new LeafWsPacket(15, baccarat.GameBaccaratEnter),
    16: new LeafWsPacket(16, baccarat.GameBaccaratHost),
    17: new LeafWsPacket(17, baccarat.GameBaccaratSuperHost),
    18: new LeafWsPacket(18, baccarat.GameBaccaratBet),
    19: new LeafWsPacket(19, baccarat.GameBaccaratBetResult),
    20: new LeafWsPacket(20, baccarat.GameBaccaratOver),
    21: new LeafWsPacket(21, baccarat.GameBaccaratCheckout),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { baccarat_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ State:number, Hints:string } ) { baccarat_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
}

