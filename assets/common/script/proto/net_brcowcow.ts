//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    BrcowcowScene = 78,
    BrcowcowStateFree = 79,
    BrcowcowStateStart = 80,
    BrcowcowStatePlaying = 81,
    BrcowcowStateOver = 82,
    BrcowcowBetReq = 83,
    BrcowcowBetResp = 84,
    BrcowcowOverResp = 85,
    BrcowcowCheckoutResp = 86,
    BrcowcowHost = 87,
    BrcowcowHostListReq = 88,
    BrcowcowHostListResp = 89,
}

export var brcowcow_packet_define = {
    78: new LeafWsPacket(78, brcowcow.BrcowcowScene, "brcowcow.BrcowcowScene"),
    79: new LeafWsPacket(79, brcowcow.BrcowcowStateFree, "brcowcow.BrcowcowStateFree"),
    80: new LeafWsPacket(80, brcowcow.BrcowcowStateStart, "brcowcow.BrcowcowStateStart"),
    81: new LeafWsPacket(81, brcowcow.BrcowcowStatePlaying, "brcowcow.BrcowcowStatePlaying"),
    82: new LeafWsPacket(82, brcowcow.BrcowcowStateOver, "brcowcow.BrcowcowStateOver"),
    83: new LeafWsPacket(83, brcowcow.BrcowcowBetReq, "brcowcow.BrcowcowBetReq"),
    84: new LeafWsPacket(84, brcowcow.BrcowcowBetResp, "brcowcow.BrcowcowBetResp"),
    85: new LeafWsPacket(85, brcowcow.BrcowcowOverResp, "brcowcow.BrcowcowOverResp"),
    86: new LeafWsPacket(86, brcowcow.BrcowcowCheckoutResp, "brcowcow.BrcowcowCheckoutResp"),
    87: new LeafWsPacket(87, brcowcow.BrcowcowHost, "brcowcow.BrcowcowHost"),
    88: new LeafWsPacket(88, brcowcow.BrcowcowHostListReq, "brcowcow.BrcowcowHostListReq"),
    89: new LeafWsPacket(89, brcowcow.BrcowcowHostListResp, "brcowcow.BrcowcowHostListResp"),
}

export class brcowcow_request {
    public static BrcowcowScene( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { brcowcow_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateFree( data:{ Times:any } ) { brcowcow_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateStart( data:{ Times:any } ) { brcowcow_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStatePlaying( data:{ Times:any } ) { brcowcow_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOver( data:{ Times:any } ) { brcowcow_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetReq( data:{ Area:number, Money:number } ) { brcowcow_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetResp( data:{ UserId:number, Area:number, Money:number } ) { brcowcow_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOverResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { brcowcow_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowCheckoutResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { brcowcow_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHost( data:{ UserID:number, IsWant:any } ) { brcowcow_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListReq( data:{} ) { brcowcow_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { brcowcow_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
}

