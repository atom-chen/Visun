//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    BrcowcowSceneResp = 85,
    BrcowcowStateFreeResp = 86,
    BrcowcowStateStartResp = 87,
    BrcowcowStatePlayingResp = 88,
    BrcowcowStateOverResp = 89,
    BrcowcowBetReq = 90,
    BrcowcowBetResp = 91,
    BrcowcowOverResp = 92,
    BrcowcowCheckoutResp = 93,
    BrcowcowHostReq = 94,
    BrcowcowHostResp = 95,
    BrcowcowHostListReq = 96,
    BrcowcowHostListResp = 97,
}

export var brcowcow_packet_define = {
    85: new LeafWsPacket(85, brcowcow.BrcowcowSceneResp, "brcowcow.BrcowcowSceneResp"),
    86: new LeafWsPacket(86, brcowcow.BrcowcowStateFreeResp, "brcowcow.BrcowcowStateFreeResp"),
    87: new LeafWsPacket(87, brcowcow.BrcowcowStateStartResp, "brcowcow.BrcowcowStateStartResp"),
    88: new LeafWsPacket(88, brcowcow.BrcowcowStatePlayingResp, "brcowcow.BrcowcowStatePlayingResp"),
    89: new LeafWsPacket(89, brcowcow.BrcowcowStateOverResp, "brcowcow.BrcowcowStateOverResp"),
    90: new LeafWsPacket(90, brcowcow.BrcowcowBetReq, "brcowcow.BrcowcowBetReq"),
    91: new LeafWsPacket(91, brcowcow.BrcowcowBetResp, "brcowcow.BrcowcowBetResp"),
    92: new LeafWsPacket(92, brcowcow.BrcowcowOverResp, "brcowcow.BrcowcowOverResp"),
    93: new LeafWsPacket(93, brcowcow.BrcowcowCheckoutResp, "brcowcow.BrcowcowCheckoutResp"),
    94: new LeafWsPacket(94, brcowcow.BrcowcowHostReq, "brcowcow.BrcowcowHostReq"),
    95: new LeafWsPacket(95, brcowcow.BrcowcowHostResp, "brcowcow.BrcowcowHostResp"),
    96: new LeafWsPacket(96, brcowcow.BrcowcowHostListReq, "brcowcow.BrcowcowHostListReq"),
    97: new LeafWsPacket(97, brcowcow.BrcowcowHostListResp, "brcowcow.BrcowcowHostListResp"),
}

export class brcowcow_request {
    public static BrcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { brcowcow_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateFreeResp( data:{ Times:any } ) { brcowcow_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateStartResp( data:{ Times:any } ) { brcowcow_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStatePlayingResp( data:{ Times:any } ) { brcowcow_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOverResp( data:{ Times:any } ) { brcowcow_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetReq( data:{ Area:number, Money:number } ) { brcowcow_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetResp( data:{ UserId:number, Area:number, Money:number } ) { brcowcow_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOverResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { brcowcow_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowCheckoutResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { brcowcow_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostReq( data:{ IsWant:any } ) { brcowcow_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostResp( data:{ UserID:number, IsWant:any } ) { brcowcow_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListReq( data:{} ) { brcowcow_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { brcowcow_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
}

