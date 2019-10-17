//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 29,
    GameBaccaratHost = 30,
    GameBaccaratSuperHost = 31,
    GameBaccaratBet = 32,
    GameBaccaratBetResult = 33,
    GameBaccaratOver = 34,
}

export var baccarat_packet_define = {
    29: new LeafWsPacket(29, baccarat.GameBaccaratEnter),
    30: new LeafWsPacket(30, baccarat.GameBaccaratHost),
    31: new LeafWsPacket(31, baccarat.GameBaccaratSuperHost),
    32: new LeafWsPacket(32, baccarat.GameBaccaratBet),
    33: new LeafWsPacket(33, baccarat.GameBaccaratBetResult),
    34: new LeafWsPacket(34, baccarat.GameBaccaratOver),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number, AwardAreas:any, FreeTime:number, BetTime:number, OpenTime:number } ) { baccarat_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ UserID:number, BetArea:number, BetScore:number } ) { baccarat_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any, Acquire:number } ) { baccarat_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
}

