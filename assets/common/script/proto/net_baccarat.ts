//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    BaccaratSceneResp = 39,
    BaccaratStateStartResp = 40,
    BaccaratStatePlayingResp = 41,
    BaccaratStateOpenResp = 42,
    BaccaratStateOverResp = 43,
    BaccaratHostReq = 44,
    BaccaratHostResp = 45,
    BaccaratSuperHostReq = 46,
    BaccaratSuperHostResp = 47,
    BaccaratBetReq = 48,
    BaccaratBetResp = 49,
    BaccaratOpenResp = 50,
    BaccaratCheckoutResp = 51,
}

export var baccarat_packet_define = {
    39: new LeafWsPacket(39, baccarat.BaccaratSceneResp, "baccarat.BaccaratSceneResp"),
    40: new LeafWsPacket(40, baccarat.BaccaratStateStartResp, "baccarat.BaccaratStateStartResp"),
    41: new LeafWsPacket(41, baccarat.BaccaratStatePlayingResp, "baccarat.BaccaratStatePlayingResp"),
    42: new LeafWsPacket(42, baccarat.BaccaratStateOpenResp, "baccarat.BaccaratStateOpenResp"),
    43: new LeafWsPacket(43, baccarat.BaccaratStateOverResp, "baccarat.BaccaratStateOverResp"),
    44: new LeafWsPacket(44, baccarat.BaccaratHostReq, "baccarat.BaccaratHostReq"),
    45: new LeafWsPacket(45, baccarat.BaccaratHostResp, "baccarat.BaccaratHostResp"),
    46: new LeafWsPacket(46, baccarat.BaccaratSuperHostReq, "baccarat.BaccaratSuperHostReq"),
    47: new LeafWsPacket(47, baccarat.BaccaratSuperHostResp, "baccarat.BaccaratSuperHostResp"),
    48: new LeafWsPacket(48, baccarat.BaccaratBetReq, "baccarat.BaccaratBetReq"),
    49: new LeafWsPacket(49, baccarat.BaccaratBetResp, "baccarat.BaccaratBetResp"),
    50: new LeafWsPacket(50, baccarat.BaccaratOpenResp, "baccarat.BaccaratOpenResp"),
    51: new LeafWsPacket(51, baccarat.BaccaratCheckoutResp, "baccarat.BaccaratCheckoutResp"),
}

export class baccarat_request {
    public static BaccaratSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any } ) { baccarat_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateStartResp( data:{ Times:any } ) { baccarat_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStatePlayingResp( data:{ Times:any } ) { baccarat_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOpenResp( data:{ Times:any, OpenInfo:any } ) { baccarat_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOverResp( data:{ Times:any } ) { baccarat_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostReq( data:{ IsWant:any } ) { baccarat_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostReq( data:{ IsWant:any } ) { baccarat_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHostResp( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetReq( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { baccarat_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratOpenResp( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { baccarat_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
}

