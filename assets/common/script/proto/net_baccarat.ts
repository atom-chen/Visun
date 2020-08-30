//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    BaccaratSceneResp = 33,
    BaccaratStateStartResp = 34,
    BaccaratStatePlayingResp = 35,
    BaccaratStateOpenResp = 36,
    BaccaratStateOverResp = 37,
    BaccaratHostReq = 38,
    BaccaratHostResp = 39,
    BaccaratSuperHostReq = 40,
    BaccaratSuperHostResp = 41,
    BaccaratBetReq = 42,
    BaccaratBetResp = 43,
    BaccaratOverResp = 44,
    BaccaratCheckoutResp = 45,
}

export var baccarat_packet_define = {
    33: new LeafWsPacket(33, baccarat.BaccaratSceneResp, "baccarat.BaccaratSceneResp"),
    34: new LeafWsPacket(34, baccarat.BaccaratStateStartResp, "baccarat.BaccaratStateStartResp"),
    35: new LeafWsPacket(35, baccarat.BaccaratStatePlayingResp, "baccarat.BaccaratStatePlayingResp"),
    36: new LeafWsPacket(36, baccarat.BaccaratStateOpenResp, "baccarat.BaccaratStateOpenResp"),
    37: new LeafWsPacket(37, baccarat.BaccaratStateOverResp, "baccarat.BaccaratStateOverResp"),
    38: new LeafWsPacket(38, baccarat.BaccaratHostReq, "baccarat.BaccaratHostReq"),
    39: new LeafWsPacket(39, baccarat.BaccaratHostResp, "baccarat.BaccaratHostResp"),
    40: new LeafWsPacket(40, baccarat.BaccaratSuperHostReq, "baccarat.BaccaratSuperHostReq"),
    41: new LeafWsPacket(41, baccarat.BaccaratSuperHostResp, "baccarat.BaccaratSuperHostResp"),
    42: new LeafWsPacket(42, baccarat.BaccaratBetReq, "baccarat.BaccaratBetReq"),
    43: new LeafWsPacket(43, baccarat.BaccaratBetResp, "baccarat.BaccaratBetResp"),
    44: new LeafWsPacket(44, baccarat.BaccaratOverResp, "baccarat.BaccaratOverResp"),
    45: new LeafWsPacket(45, baccarat.BaccaratCheckoutResp, "baccarat.BaccaratCheckoutResp"),
}

export class baccarat_request {
    public static BaccaratSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { baccarat_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateStartResp( data:{ Times:any } ) { baccarat_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStatePlayingResp( data:{ Times:any } ) { baccarat_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOpenResp( data:{ Times:any } ) { baccarat_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOverResp( data:{ Times:any } ) { baccarat_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostReq( data:{ IsWant:any } ) { baccarat_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostReq( data:{ IsWant:any } ) { baccarat_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetReq( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { baccarat_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratOverResp( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratCheckoutResp( data:{ MyAcquire:number, BankerAcquire:number, PlayerAcquire:number, DrawAcquire:number } ) { baccarat_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
}

