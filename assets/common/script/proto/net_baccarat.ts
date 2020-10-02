//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    BaccaratSceneResp = 44,
    BaccaratStateStartResp = 45,
    BaccaratStatePlayingResp = 46,
    BaccaratStateOpenResp = 47,
    BaccaratStateOverResp = 48,
    BaccaratHostReq = 49,
    BaccaratHostResp = 50,
    BaccaratSuperHostReq = 51,
    BaccaratSuperHostResp = 52,
    BaccaratBetReq = 53,
    BaccaratBetResp = 54,
    BaccaratOpenResp = 55,
    BaccaratCheckoutResp = 56,
}

export var baccarat_packet_define = {
    44: new LeafWsPacket(44, baccarat.BaccaratSceneResp, "baccarat.BaccaratSceneResp"),
    45: new LeafWsPacket(45, baccarat.BaccaratStateStartResp, "baccarat.BaccaratStateStartResp"),
    46: new LeafWsPacket(46, baccarat.BaccaratStatePlayingResp, "baccarat.BaccaratStatePlayingResp"),
    47: new LeafWsPacket(47, baccarat.BaccaratStateOpenResp, "baccarat.BaccaratStateOpenResp"),
    48: new LeafWsPacket(48, baccarat.BaccaratStateOverResp, "baccarat.BaccaratStateOverResp"),
    49: new LeafWsPacket(49, baccarat.BaccaratHostReq, "baccarat.BaccaratHostReq"),
    50: new LeafWsPacket(50, baccarat.BaccaratHostResp, "baccarat.BaccaratHostResp"),
    51: new LeafWsPacket(51, baccarat.BaccaratSuperHostReq, "baccarat.BaccaratSuperHostReq"),
    52: new LeafWsPacket(52, baccarat.BaccaratSuperHostResp, "baccarat.BaccaratSuperHostResp"),
    53: new LeafWsPacket(53, baccarat.BaccaratBetReq, "baccarat.BaccaratBetReq"),
    54: new LeafWsPacket(54, baccarat.BaccaratBetResp, "baccarat.BaccaratBetResp"),
    55: new LeafWsPacket(55, baccarat.BaccaratOpenResp, "baccarat.BaccaratOpenResp"),
    56: new LeafWsPacket(56, baccarat.BaccaratCheckoutResp, "baccarat.BaccaratCheckoutResp"),
}

export class baccarat_request {
    public static BaccaratSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any } ) { baccarat_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateStartResp( data:{ Times:any, Inning:string } ) { baccarat_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStatePlayingResp( data:{ Times:any } ) { baccarat_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOpenResp( data:{ Times:any, OpenInfo:any } ) { baccarat_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOverResp( data:{ Times:any } ) { baccarat_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostReq( data:{ IsWant:any } ) { baccarat_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostReq( data:{ IsWant:any } ) { baccarat_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetReq( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { baccarat_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratOpenResp( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { baccarat_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
}

