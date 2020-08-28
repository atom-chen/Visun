//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    BaccaratScene = 27,
    BaccaratStateFree = 28,
    BaccaratStateStart = 29,
    BaccaratStatePlaying = 30,
    BaccaratStateOver = 31,
    BaccaratHostReq = 32,
    BaccaratHostResp = 33,
    BaccaratSuperHostReq = 34,
    BaccaratSuperHostResp = 35,
    BaccaratBetReq = 36,
    BaccaratBetResp = 37,
    BaccaratOverResp = 38,
    BaccaratCheckoutResp = 39,
}

export var baccarat_packet_define = {
    27: new LeafWsPacket(27, baccarat.BaccaratScene, "baccarat.BaccaratScene"),
    28: new LeafWsPacket(28, baccarat.BaccaratStateFree, "baccarat.BaccaratStateFree"),
    29: new LeafWsPacket(29, baccarat.BaccaratStateStart, "baccarat.BaccaratStateStart"),
    30: new LeafWsPacket(30, baccarat.BaccaratStatePlaying, "baccarat.BaccaratStatePlaying"),
    31: new LeafWsPacket(31, baccarat.BaccaratStateOver, "baccarat.BaccaratStateOver"),
    32: new LeafWsPacket(32, baccarat.BaccaratHostReq, "baccarat.BaccaratHostReq"),
    33: new LeafWsPacket(33, baccarat.BaccaratHostResp, "baccarat.BaccaratHostResp"),
    34: new LeafWsPacket(34, baccarat.BaccaratSuperHostReq, "baccarat.BaccaratSuperHostReq"),
    35: new LeafWsPacket(35, baccarat.BaccaratSuperHostResp, "baccarat.BaccaratSuperHostResp"),
    36: new LeafWsPacket(36, baccarat.BaccaratBetReq, "baccarat.BaccaratBetReq"),
    37: new LeafWsPacket(37, baccarat.BaccaratBetResp, "baccarat.BaccaratBetResp"),
    38: new LeafWsPacket(38, baccarat.BaccaratOverResp, "baccarat.BaccaratOverResp"),
    39: new LeafWsPacket(39, baccarat.BaccaratCheckoutResp, "baccarat.BaccaratCheckoutResp"),
}

export class baccarat_request {
    public static BaccaratScene( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { baccarat_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateFree( data:{ Times:any } ) { baccarat_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateStart( data:{ Times:any } ) { baccarat_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStatePlaying( data:{ Times:any } ) { baccarat_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOver( data:{ Times:any } ) { baccarat_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostReq( data:{ IsWant:any } ) { baccarat_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostReq( data:{ IsWant:any } ) { baccarat_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetReq( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { baccarat_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratOverResp( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratCheckoutResp( data:{ MyAcquire:number, BankerAcquire:number, PlayerAcquire:number, DrawAcquire:number } ) { baccarat_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
}

