//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { baccarat } from "./baccarat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum baccarat_msgs {
    BaccaratScene = 39,
    BaccaratStateFree = 40,
    BaccaratStateStart = 41,
    BaccaratStatePlaying = 42,
    BaccaratStateOver = 43,
    BaccaratHost = 44,
    BaccaratSuperHost = 45,
    BaccaratReq = 46,
    BaccaratResp = 47,
    BaccaratOver = 48,
    BaccaratCheckout = 49,
}

export var baccarat_packet_define = {
    39: new LeafWsPacket(39, baccarat.BaccaratScene, "baccarat.BaccaratScene"),
    40: new LeafWsPacket(40, baccarat.BaccaratStateFree, "baccarat.BaccaratStateFree"),
    41: new LeafWsPacket(41, baccarat.BaccaratStateStart, "baccarat.BaccaratStateStart"),
    42: new LeafWsPacket(42, baccarat.BaccaratStatePlaying, "baccarat.BaccaratStatePlaying"),
    43: new LeafWsPacket(43, baccarat.BaccaratStateOver, "baccarat.BaccaratStateOver"),
    44: new LeafWsPacket(44, baccarat.BaccaratHost, "baccarat.BaccaratHost"),
    45: new LeafWsPacket(45, baccarat.BaccaratSuperHost, "baccarat.BaccaratSuperHost"),
    46: new LeafWsPacket(46, baccarat.BaccaratReq, "baccarat.BaccaratReq"),
    47: new LeafWsPacket(47, baccarat.BaccaratResp, "baccarat.BaccaratResp"),
    48: new LeafWsPacket(48, baccarat.BaccaratOver, "baccarat.BaccaratOver"),
    49: new LeafWsPacket(49, baccarat.BaccaratCheckout, "baccarat.BaccaratCheckout"),
}

export class baccarat_request {
    public static BaccaratScene( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { baccarat_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateFree( data:{ Times:any } ) { baccarat_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateStart( data:{ Times:any } ) { baccarat_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStatePlaying( data:{ Times:any } ) { baccarat_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratStateOver( data:{ Times:any } ) { baccarat_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratSuperHost( data:{ UserID:number, IsWant:any } ) { baccarat_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratReq( data:{ BetArea:number, BetScore:number } ) { baccarat_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { baccarat_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratOver( data:{ AwardArea:any, PlayerCard:any, BankerCard:any } ) { baccarat_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static BaccaratCheckout( data:{ Acquire:number } ) { baccarat_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
}

