//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    BrcowcowScene = 80,
    BrcowcowStateFree = 81,
    BrcowcowStateStart = 82,
    BrcowcowStatePlaying = 83,
    BrcowcowStateOver = 84,
    BrcowcowBetReq = 85,
    BrcowcowBetResp = 86,
    BrcowcowOverResp = 87,
    BrcowcowCheckoutResp = 88,
    BrcowcowHost = 89,
    BrcowcowHostListReq = 90,
    BrcowcowHostListResp = 91,
}

export var brcowcow_packet_define = {
    80: new LeafWsPacket(80, brcowcow.BrcowcowScene, "brcowcow.BrcowcowScene"),
    81: new LeafWsPacket(81, brcowcow.BrcowcowStateFree, "brcowcow.BrcowcowStateFree"),
    82: new LeafWsPacket(82, brcowcow.BrcowcowStateStart, "brcowcow.BrcowcowStateStart"),
    83: new LeafWsPacket(83, brcowcow.BrcowcowStatePlaying, "brcowcow.BrcowcowStatePlaying"),
    84: new LeafWsPacket(84, brcowcow.BrcowcowStateOver, "brcowcow.BrcowcowStateOver"),
    85: new LeafWsPacket(85, brcowcow.BrcowcowBetReq, "brcowcow.BrcowcowBetReq"),
    86: new LeafWsPacket(86, brcowcow.BrcowcowBetResp, "brcowcow.BrcowcowBetResp"),
    87: new LeafWsPacket(87, brcowcow.BrcowcowOverResp, "brcowcow.BrcowcowOverResp"),
    88: new LeafWsPacket(88, brcowcow.BrcowcowCheckoutResp, "brcowcow.BrcowcowCheckoutResp"),
    89: new LeafWsPacket(89, brcowcow.BrcowcowHost, "brcowcow.BrcowcowHost"),
    90: new LeafWsPacket(90, brcowcow.BrcowcowHostListReq, "brcowcow.BrcowcowHostListReq"),
    91: new LeafWsPacket(91, brcowcow.BrcowcowHostListResp, "brcowcow.BrcowcowHostListResp"),
}

export class brcowcow_request {
    public static BrcowcowScene( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { brcowcow_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateFree( data:{ Times:any } ) { brcowcow_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateStart( data:{ Times:any } ) { brcowcow_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStatePlaying( data:{ Times:any } ) { brcowcow_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOver( data:{ Times:any } ) { brcowcow_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetReq( data:{ Area:number, Money:number } ) { brcowcow_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetResp( data:{ UserId:number, Area:number, Money:number } ) { brcowcow_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOverResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { brcowcow_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowCheckoutResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { brcowcow_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHost( data:{ UserID:number, IsWant:any } ) { brcowcow_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListReq( data:{} ) { brcowcow_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { brcowcow_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
}

