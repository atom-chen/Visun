//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    BrcowcowScene = 85,
    BrcowcowStateFree = 86,
    BrcowcowStateStart = 87,
    BrcowcowStatePlaying = 88,
    BrcowcowStateOver = 89,
    BrcowcowBetReq = 90,
    BrcowcowBetResp = 91,
    BrcowcowOverResp = 92,
    BrcowcowCheckoutResp = 93,
    BrcowcowHost = 94,
    BrcowcowHostListReq = 95,
    BrcowcowHostListResp = 96,
}

export var brcowcow_packet_define = {
    85: new LeafWsPacket(85, brcowcow.BrcowcowScene, "brcowcow.BrcowcowScene"),
    86: new LeafWsPacket(86, brcowcow.BrcowcowStateFree, "brcowcow.BrcowcowStateFree"),
    87: new LeafWsPacket(87, brcowcow.BrcowcowStateStart, "brcowcow.BrcowcowStateStart"),
    88: new LeafWsPacket(88, brcowcow.BrcowcowStatePlaying, "brcowcow.BrcowcowStatePlaying"),
    89: new LeafWsPacket(89, brcowcow.BrcowcowStateOver, "brcowcow.BrcowcowStateOver"),
    90: new LeafWsPacket(90, brcowcow.BrcowcowBetReq, "brcowcow.BrcowcowBetReq"),
    91: new LeafWsPacket(91, brcowcow.BrcowcowBetResp, "brcowcow.BrcowcowBetResp"),
    92: new LeafWsPacket(92, brcowcow.BrcowcowOverResp, "brcowcow.BrcowcowOverResp"),
    93: new LeafWsPacket(93, brcowcow.BrcowcowCheckoutResp, "brcowcow.BrcowcowCheckoutResp"),
    94: new LeafWsPacket(94, brcowcow.BrcowcowHost, "brcowcow.BrcowcowHost"),
    95: new LeafWsPacket(95, brcowcow.BrcowcowHostListReq, "brcowcow.BrcowcowHostListReq"),
    96: new LeafWsPacket(96, brcowcow.BrcowcowHostListResp, "brcowcow.BrcowcowHostListResp"),
}

export class brcowcow_request {
    public static BrcowcowScene( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { brcowcow_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateFree( data:{ Times:any } ) { brcowcow_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateStart( data:{ Times:any } ) { brcowcow_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStatePlaying( data:{ Times:any } ) { brcowcow_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOver( data:{ Times:any } ) { brcowcow_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetReq( data:{ Area:number, Money:number } ) { brcowcow_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetResp( data:{ UserId:number, Area:number, Money:number } ) { brcowcow_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOverResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { brcowcow_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowCheckoutResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { brcowcow_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHost( data:{ UserID:number, IsWant:any } ) { brcowcow_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListReq( data:{} ) { brcowcow_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { brcowcow_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
}

