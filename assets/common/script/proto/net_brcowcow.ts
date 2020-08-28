//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    BrcowcowSceneResp = 79,
    BrcowcowStateFreeResp = 80,
    BrcowcowStateStartResp = 81,
    BrcowcowStatePlayingResp = 82,
    BrcowcowStateOverResp = 83,
    BrcowcowBetReq = 84,
    BrcowcowBetResp = 85,
    BrcowcowOverResp = 86,
    BrcowcowCheckoutResp = 87,
    BrcowcowHostReq = 88,
    BrcowcowHostResp = 89,
    BrcowcowHostListReq = 90,
    BrcowcowHostListResp = 91,
}

export var brcowcow_packet_define = {
    79: new LeafWsPacket(79, brcowcow.BrcowcowSceneResp, "brcowcow.BrcowcowSceneResp"),
    80: new LeafWsPacket(80, brcowcow.BrcowcowStateFreeResp, "brcowcow.BrcowcowStateFreeResp"),
    81: new LeafWsPacket(81, brcowcow.BrcowcowStateStartResp, "brcowcow.BrcowcowStateStartResp"),
    82: new LeafWsPacket(82, brcowcow.BrcowcowStatePlayingResp, "brcowcow.BrcowcowStatePlayingResp"),
    83: new LeafWsPacket(83, brcowcow.BrcowcowStateOverResp, "brcowcow.BrcowcowStateOverResp"),
    84: new LeafWsPacket(84, brcowcow.BrcowcowBetReq, "brcowcow.BrcowcowBetReq"),
    85: new LeafWsPacket(85, brcowcow.BrcowcowBetResp, "brcowcow.BrcowcowBetResp"),
    86: new LeafWsPacket(86, brcowcow.BrcowcowOverResp, "brcowcow.BrcowcowOverResp"),
    87: new LeafWsPacket(87, brcowcow.BrcowcowCheckoutResp, "brcowcow.BrcowcowCheckoutResp"),
    88: new LeafWsPacket(88, brcowcow.BrcowcowHostReq, "brcowcow.BrcowcowHostReq"),
    89: new LeafWsPacket(89, brcowcow.BrcowcowHostResp, "brcowcow.BrcowcowHostResp"),
    90: new LeafWsPacket(90, brcowcow.BrcowcowHostListReq, "brcowcow.BrcowcowHostListReq"),
    91: new LeafWsPacket(91, brcowcow.BrcowcowHostListResp, "brcowcow.BrcowcowHostListResp"),
}

export class brcowcow_request {
    public static BrcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { brcowcow_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateFreeResp( data:{ Times:any } ) { brcowcow_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateStartResp( data:{ Times:any } ) { brcowcow_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStatePlayingResp( data:{ Times:any } ) { brcowcow_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOverResp( data:{ Times:any } ) { brcowcow_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetReq( data:{ Area:number, Money:number } ) { brcowcow_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetResp( data:{ UserId:number, Area:number, Money:number } ) { brcowcow_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOverResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { brcowcow_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowCheckoutResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { brcowcow_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostReq( data:{ IsWant:any } ) { brcowcow_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostResp( data:{ UserID:number, IsWant:any } ) { brcowcow_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListReq( data:{} ) { brcowcow_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { brcowcow_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
}

