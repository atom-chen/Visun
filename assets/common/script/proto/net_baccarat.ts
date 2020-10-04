//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    BaccaratSceneResp = 49,
    BaccaratStateStartResp = 50,
    BaccaratStatePlayingResp = 51,
    BaccaratStateOpenResp = 52,
    BaccaratStateOverResp = 53,
    BaccaratHostReq = 54,
    BaccaratHostResp = 55,
    BaccaratSuperHostReq = 56,
    BaccaratSuperHostResp = 57,
    BaccaratBetReq = 58,
    BaccaratBetResp = 59,
    BaccaratOpenResp = 60,
    BaccaratCheckoutResp = 61,
}

export var baccarat_packet_define = {
    49: new LeafWsPacket(49, baccarat.BaccaratSceneResp, "baccarat.BaccaratSceneResp"),
    50: new LeafWsPacket(50, baccarat.BaccaratStateStartResp, "baccarat.BaccaratStateStartResp"),
    51: new LeafWsPacket(51, baccarat.BaccaratStatePlayingResp, "baccarat.BaccaratStatePlayingResp"),
    52: new LeafWsPacket(52, baccarat.BaccaratStateOpenResp, "baccarat.BaccaratStateOpenResp"),
    53: new LeafWsPacket(53, baccarat.BaccaratStateOverResp, "baccarat.BaccaratStateOverResp"),
    54: new LeafWsPacket(54, baccarat.BaccaratHostReq, "baccarat.BaccaratHostReq"),
    55: new LeafWsPacket(55, baccarat.BaccaratHostResp, "baccarat.BaccaratHostResp"),
    56: new LeafWsPacket(56, baccarat.BaccaratSuperHostReq, "baccarat.BaccaratSuperHostReq"),
    57: new LeafWsPacket(57, baccarat.BaccaratSuperHostResp, "baccarat.BaccaratSuperHostResp"),
    58: new LeafWsPacket(58, baccarat.BaccaratBetReq, "baccarat.BaccaratBetReq"),
    59: new LeafWsPacket(59, baccarat.BaccaratBetResp, "baccarat.BaccaratBetResp"),
    60: new LeafWsPacket(60, baccarat.BaccaratOpenResp, "baccarat.BaccaratOpenResp"),
    61: new LeafWsPacket(61, baccarat.BaccaratCheckoutResp, "baccarat.BaccaratCheckoutResp"),
}

export class baccarat_request {
    public static BaccaratSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any } ) { baccarat_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateStartResp( data:{ Times:any, Inning:string } ) { baccarat_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStatePlayingResp( data:{ Times:any } ) { baccarat_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOpenResp( data:{ Times:any, OpenInfo:any } ) { baccarat_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOverResp( data:{ Times:any } ) { baccarat_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostReq( data:{ IsWant:any } ) { baccarat_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostReq( data:{ IsWant:any } ) { baccarat_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetReq( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { baccarat_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratOpenResp( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { baccarat_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
}

