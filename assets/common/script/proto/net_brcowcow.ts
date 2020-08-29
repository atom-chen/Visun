//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    BrcowcowSceneResp = 82,
    BrcowcowStateFreeResp = 83,
    BrcowcowStateStartResp = 84,
    BrcowcowStatePlayingResp = 85,
    BrcowcowStateOverResp = 86,
    BrcowcowBetReq = 87,
    BrcowcowBetResp = 88,
    BrcowcowOverResp = 89,
    BrcowcowCheckoutResp = 90,
    BrcowcowHostReq = 91,
    BrcowcowHostResp = 92,
    BrcowcowHostListReq = 93,
    BrcowcowHostListResp = 94,
}

export var brcowcow_packet_define = {
    82: new LeafWsPacket(82, brcowcow.BrcowcowSceneResp, "brcowcow.BrcowcowSceneResp"),
    83: new LeafWsPacket(83, brcowcow.BrcowcowStateFreeResp, "brcowcow.BrcowcowStateFreeResp"),
    84: new LeafWsPacket(84, brcowcow.BrcowcowStateStartResp, "brcowcow.BrcowcowStateStartResp"),
    85: new LeafWsPacket(85, brcowcow.BrcowcowStatePlayingResp, "brcowcow.BrcowcowStatePlayingResp"),
    86: new LeafWsPacket(86, brcowcow.BrcowcowStateOverResp, "brcowcow.BrcowcowStateOverResp"),
    87: new LeafWsPacket(87, brcowcow.BrcowcowBetReq, "brcowcow.BrcowcowBetReq"),
    88: new LeafWsPacket(88, brcowcow.BrcowcowBetResp, "brcowcow.BrcowcowBetResp"),
    89: new LeafWsPacket(89, brcowcow.BrcowcowOverResp, "brcowcow.BrcowcowOverResp"),
    90: new LeafWsPacket(90, brcowcow.BrcowcowCheckoutResp, "brcowcow.BrcowcowCheckoutResp"),
    91: new LeafWsPacket(91, brcowcow.BrcowcowHostReq, "brcowcow.BrcowcowHostReq"),
    92: new LeafWsPacket(92, brcowcow.BrcowcowHostResp, "brcowcow.BrcowcowHostResp"),
    93: new LeafWsPacket(93, brcowcow.BrcowcowHostListReq, "brcowcow.BrcowcowHostListReq"),
    94: new LeafWsPacket(94, brcowcow.BrcowcowHostListResp, "brcowcow.BrcowcowHostListResp"),
}

export class brcowcow_request {
    public static BrcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { brcowcow_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateFreeResp( data:{ Times:any } ) { brcowcow_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateStartResp( data:{ Times:any } ) { brcowcow_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStatePlayingResp( data:{ Times:any } ) { brcowcow_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOverResp( data:{ Times:any } ) { brcowcow_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetReq( data:{ Area:number, Money:number } ) { brcowcow_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetResp( data:{ UserId:number, Area:number, Money:number } ) { brcowcow_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOverResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { brcowcow_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowCheckoutResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { brcowcow_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostReq( data:{ IsWant:any } ) { brcowcow_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostResp( data:{ UserID:number, IsWant:any } ) { brcowcow_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListReq( data:{} ) { brcowcow_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { brcowcow_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
}

