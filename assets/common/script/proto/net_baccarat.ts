//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    GameBaccaratEnter = 26,
    GameBaccaratHost = 27,
    GameBaccaratSuperHost = 28,
    GameBaccaratBet = 29,
    GameBaccaratBetResult = 30,
    GameBaccaratOver = 31,
}

export var baccarat_packet_define = {
    26: new LeafWsPacket(26, baccarat.GameBaccaratEnter),
    27: new LeafWsPacket(27, baccarat.GameBaccaratHost),
    28: new LeafWsPacket(28, baccarat.GameBaccaratSuperHost),
    29: new LeafWsPacket(29, baccarat.GameBaccaratBet),
    30: new LeafWsPacket(30, baccarat.GameBaccaratBetResult),
    31: new LeafWsPacket(31, baccarat.GameBaccaratOver),
}

export class baccarat_request {
    public static GameBaccaratEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number, AwardAreas:any, FreeTime:number, BetTime:number, OpenTime:number } ) { baccarat_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBet( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratBetResult( data:{ State:number, Hints:string } ) { baccarat_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any, Acquire:number } ) { baccarat_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
}

