//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    BaccaratSceneResp = 36,
    BaccaratStateStartResp = 37,
    BaccaratStatePlayingResp = 38,
    BaccaratStateOpenResp = 39,
    BaccaratStateOverResp = 40,
    BaccaratHostReq = 41,
    BaccaratHostResp = 42,
    BaccaratSuperHostReq = 43,
    BaccaratSuperHostResp = 44,
    BaccaratBetReq = 45,
    BaccaratBetResp = 46,
    BaccaratOpenResp = 47,
    BaccaratCheckoutResp = 48,
}

export var baccarat_packet_define = {
    36: new LeafWsPacket(36, baccarat.BaccaratSceneResp, "baccarat.BaccaratSceneResp"),
    37: new LeafWsPacket(37, baccarat.BaccaratStateStartResp, "baccarat.BaccaratStateStartResp"),
    38: new LeafWsPacket(38, baccarat.BaccaratStatePlayingResp, "baccarat.BaccaratStatePlayingResp"),
    39: new LeafWsPacket(39, baccarat.BaccaratStateOpenResp, "baccarat.BaccaratStateOpenResp"),
    40: new LeafWsPacket(40, baccarat.BaccaratStateOverResp, "baccarat.BaccaratStateOverResp"),
    41: new LeafWsPacket(41, baccarat.BaccaratHostReq, "baccarat.BaccaratHostReq"),
    42: new LeafWsPacket(42, baccarat.BaccaratHostResp, "baccarat.BaccaratHostResp"),
    43: new LeafWsPacket(43, baccarat.BaccaratSuperHostReq, "baccarat.BaccaratSuperHostReq"),
    44: new LeafWsPacket(44, baccarat.BaccaratSuperHostResp, "baccarat.BaccaratSuperHostResp"),
    45: new LeafWsPacket(45, baccarat.BaccaratBetReq, "baccarat.BaccaratBetReq"),
    46: new LeafWsPacket(46, baccarat.BaccaratBetResp, "baccarat.BaccaratBetResp"),
    47: new LeafWsPacket(47, baccarat.BaccaratOpenResp, "baccarat.BaccaratOpenResp"),
    48: new LeafWsPacket(48, baccarat.BaccaratCheckoutResp, "baccarat.BaccaratCheckoutResp"),
}

export class baccarat_request {
    public static BaccaratSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { baccarat_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateStartResp( data:{ Times:any } ) { baccarat_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStatePlayingResp( data:{ Times:any } ) { baccarat_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOpenResp( data:{ Times:any, OpenInfo:any } ) { baccarat_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOverResp( data:{ Times:any } ) { baccarat_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostReq( data:{ IsWant:any } ) { baccarat_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostReq( data:{ IsWant:any } ) { baccarat_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetReq( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { baccarat_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratOpenResp( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratCheckoutResp( data:{ MyAcquire:number, BankerAcquire:number, PlayerAcquire:number, DrawAcquire:number } ) { baccarat_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
}

