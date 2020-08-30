//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    BaccaratSceneResp = 30,
    BaccaratStateStartResp = 31,
    BaccaratStatePlayingResp = 32,
    BaccaratStateOpenResp = 33,
    BaccaratStateOverResp = 34,
    BaccaratHostReq = 35,
    BaccaratHostResp = 36,
    BaccaratSuperHostReq = 37,
    BaccaratSuperHostResp = 38,
    BaccaratBetReq = 39,
    BaccaratBetResp = 40,
    BaccaratOverResp = 41,
    BaccaratCheckoutResp = 42,
}

export var baccarat_packet_define = {
    30: new LeafWsPacket(30, baccarat.BaccaratSceneResp, "baccarat.BaccaratSceneResp"),
    31: new LeafWsPacket(31, baccarat.BaccaratStateStartResp, "baccarat.BaccaratStateStartResp"),
    32: new LeafWsPacket(32, baccarat.BaccaratStatePlayingResp, "baccarat.BaccaratStatePlayingResp"),
    33: new LeafWsPacket(33, baccarat.BaccaratStateOpenResp, "baccarat.BaccaratStateOpenResp"),
    34: new LeafWsPacket(34, baccarat.BaccaratStateOverResp, "baccarat.BaccaratStateOverResp"),
    35: new LeafWsPacket(35, baccarat.BaccaratHostReq, "baccarat.BaccaratHostReq"),
    36: new LeafWsPacket(36, baccarat.BaccaratHostResp, "baccarat.BaccaratHostResp"),
    37: new LeafWsPacket(37, baccarat.BaccaratSuperHostReq, "baccarat.BaccaratSuperHostReq"),
    38: new LeafWsPacket(38, baccarat.BaccaratSuperHostResp, "baccarat.BaccaratSuperHostResp"),
    39: new LeafWsPacket(39, baccarat.BaccaratBetReq, "baccarat.BaccaratBetReq"),
    40: new LeafWsPacket(40, baccarat.BaccaratBetResp, "baccarat.BaccaratBetResp"),
    41: new LeafWsPacket(41, baccarat.BaccaratOverResp, "baccarat.BaccaratOverResp"),
    42: new LeafWsPacket(42, baccarat.BaccaratCheckoutResp, "baccarat.BaccaratCheckoutResp"),
}

export class baccarat_request {
    public static BaccaratSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { baccarat_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateStartResp( data:{ Times:any } ) { baccarat_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStatePlayingResp( data:{ Times:any } ) { baccarat_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOpenResp( data:{ Times:any } ) { baccarat_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOverResp( data:{ Times:any } ) { baccarat_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostReq( data:{ IsWant:any } ) { baccarat_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostReq( data:{ IsWant:any } ) { baccarat_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetReq( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { baccarat_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratOverResp( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratCheckoutResp( data:{ MyAcquire:number, BankerAcquire:number, PlayerAcquire:number, DrawAcquire:number } ) { baccarat_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
}

