//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    BaccaratSceneResp = 27,
    BaccaratStateFreeResp = 28,
    BaccaratStateStartResp = 29,
    BaccaratStatePlayingResp = 30,
    BaccaratStateOverResp = 31,
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
    27: new LeafWsPacket(27, baccarat.BaccaratSceneResp, "baccarat.BaccaratSceneResp"),
    28: new LeafWsPacket(28, baccarat.BaccaratStateFreeResp, "baccarat.BaccaratStateFreeResp"),
    29: new LeafWsPacket(29, baccarat.BaccaratStateStartResp, "baccarat.BaccaratStateStartResp"),
    30: new LeafWsPacket(30, baccarat.BaccaratStatePlayingResp, "baccarat.BaccaratStatePlayingResp"),
    31: new LeafWsPacket(31, baccarat.BaccaratStateOverResp, "baccarat.BaccaratStateOverResp"),
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
    public static BaccaratSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { baccarat_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateFreeResp( data:{ Times:any } ) { baccarat_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateStartResp( data:{ Times:any } ) { baccarat_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStatePlayingResp( data:{ Times:any } ) { baccarat_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOverResp( data:{ Times:any } ) { baccarat_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostReq( data:{ IsWant:any } ) { baccarat_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostReq( data:{ IsWant:any } ) { baccarat_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetReq( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { baccarat_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratOverResp( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratCheckoutResp( data:{ MyAcquire:number, BankerAcquire:number, PlayerAcquire:number, DrawAcquire:number } ) { baccarat_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
}

