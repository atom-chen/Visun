//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 23,
    GameBaccaratHost = 24,
    GameBaccaratSuperHost = 25,
    GameBaccaratBet = 26,
    GameBaccaratBetResult = 27,
    GameBaccaratOver = 28,
}

export var baccarat_packet_define = {
    23: new LeafWsPacket(23, baccarat.GameBaccaratEnter),
    24: new LeafWsPacket(24, baccarat.GameBaccaratHost),
    25: new LeafWsPacket(25, baccarat.GameBaccaratSuperHost),
    26: new LeafWsPacket(26, baccarat.GameBaccaratBet),
    27: new LeafWsPacket(27, baccarat.GameBaccaratBetResult),
    28: new LeafWsPacket(28, baccarat.GameBaccaratOver),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number, AwardAreas:any, FreeTime:number, BetTime:number, OpenTime:number } ) { baccarat_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number } ) { baccarat_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any, Acquire:number } ) { baccarat_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
}

