//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    BaccaratSceneResp = 42,
    BaccaratStateStartResp = 43,
    BaccaratStatePlayingResp = 44,
    BaccaratStateOpenResp = 45,
    BaccaratStateOverResp = 46,
    BaccaratHostReq = 47,
    BaccaratHostResp = 48,
    BaccaratSuperHostReq = 49,
    BaccaratSuperHostResp = 50,
    BaccaratBetReq = 51,
    BaccaratBetResp = 52,
    BaccaratOpenResp = 53,
    BaccaratCheckoutResp = 54,
}

export var baccarat_packet_define = {
    42: new LeafWsPacket(42, baccarat.BaccaratSceneResp, "baccarat.BaccaratSceneResp"),
    43: new LeafWsPacket(43, baccarat.BaccaratStateStartResp, "baccarat.BaccaratStateStartResp"),
    44: new LeafWsPacket(44, baccarat.BaccaratStatePlayingResp, "baccarat.BaccaratStatePlayingResp"),
    45: new LeafWsPacket(45, baccarat.BaccaratStateOpenResp, "baccarat.BaccaratStateOpenResp"),
    46: new LeafWsPacket(46, baccarat.BaccaratStateOverResp, "baccarat.BaccaratStateOverResp"),
    47: new LeafWsPacket(47, baccarat.BaccaratHostReq, "baccarat.BaccaratHostReq"),
    48: new LeafWsPacket(48, baccarat.BaccaratHostResp, "baccarat.BaccaratHostResp"),
    49: new LeafWsPacket(49, baccarat.BaccaratSuperHostReq, "baccarat.BaccaratSuperHostReq"),
    50: new LeafWsPacket(50, baccarat.BaccaratSuperHostResp, "baccarat.BaccaratSuperHostResp"),
    51: new LeafWsPacket(51, baccarat.BaccaratBetReq, "baccarat.BaccaratBetReq"),
    52: new LeafWsPacket(52, baccarat.BaccaratBetResp, "baccarat.BaccaratBetResp"),
    53: new LeafWsPacket(53, baccarat.BaccaratOpenResp, "baccarat.BaccaratOpenResp"),
    54: new LeafWsPacket(54, baccarat.BaccaratCheckoutResp, "baccarat.BaccaratCheckoutResp"),
}

export class baccarat_request {
    public static BaccaratSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any } ) { baccarat_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateStartResp( data:{ Times:any, Inning:string } ) { baccarat_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStatePlayingResp( data:{ Times:any } ) { baccarat_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOpenResp( data:{ Times:any, OpenInfo:any } ) { baccarat_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOverResp( data:{ Times:any } ) { baccarat_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostReq( data:{ IsWant:any } ) { baccarat_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostReq( data:{ IsWant:any } ) { baccarat_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetReq( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { baccarat_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratOpenResp( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { baccarat_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
}

