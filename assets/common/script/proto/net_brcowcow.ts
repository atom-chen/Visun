//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    BrcowcowScene = 79,
    BrcowcowStateFree = 80,
    BrcowcowStateStart = 81,
    BrcowcowStatePlaying = 82,
    BrcowcowStateOver = 83,
    BrcowcowBetReq = 84,
    BrcowcowBetResp = 85,
    BrcowcowOverResp = 86,
    BrcowcowCheckoutResp = 87,
    BrcowcowHost = 88,
    BrcowcowHostListReq = 89,
    BrcowcowHostListResp = 90,
}

export var brcowcow_packet_define = {
    79: new LeafWsPacket(79, brcowcow.BrcowcowScene, "brcowcow.BrcowcowScene"),
    80: new LeafWsPacket(80, brcowcow.BrcowcowStateFree, "brcowcow.BrcowcowStateFree"),
    81: new LeafWsPacket(81, brcowcow.BrcowcowStateStart, "brcowcow.BrcowcowStateStart"),
    82: new LeafWsPacket(82, brcowcow.BrcowcowStatePlaying, "brcowcow.BrcowcowStatePlaying"),
    83: new LeafWsPacket(83, brcowcow.BrcowcowStateOver, "brcowcow.BrcowcowStateOver"),
    84: new LeafWsPacket(84, brcowcow.BrcowcowBetReq, "brcowcow.BrcowcowBetReq"),
    85: new LeafWsPacket(85, brcowcow.BrcowcowBetResp, "brcowcow.BrcowcowBetResp"),
    86: new LeafWsPacket(86, brcowcow.BrcowcowOverResp, "brcowcow.BrcowcowOverResp"),
    87: new LeafWsPacket(87, brcowcow.BrcowcowCheckoutResp, "brcowcow.BrcowcowCheckoutResp"),
    88: new LeafWsPacket(88, brcowcow.BrcowcowHost, "brcowcow.BrcowcowHost"),
    89: new LeafWsPacket(89, brcowcow.BrcowcowHostListReq, "brcowcow.BrcowcowHostListReq"),
    90: new LeafWsPacket(90, brcowcow.BrcowcowHostListResp, "brcowcow.BrcowcowHostListResp"),
}

export class brcowcow_request {
    public static BrcowcowScene( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { brcowcow_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateFree( data:{ Times:any } ) { brcowcow_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateStart( data:{ Times:any } ) { brcowcow_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStatePlaying( data:{ Times:any } ) { brcowcow_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOver( data:{ Times:any } ) { brcowcow_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetReq( data:{ Area:number, Money:number } ) { brcowcow_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetResp( data:{ UserId:number, Area:number, Money:number } ) { brcowcow_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOverResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { brcowcow_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowCheckoutResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { brcowcow_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHost( data:{ UserID:number, IsWant:any } ) { brcowcow_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListReq( data:{} ) { brcowcow_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { brcowcow_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
}

