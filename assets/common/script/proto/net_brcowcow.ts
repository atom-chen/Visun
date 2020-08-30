//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    BrcowcowSceneResp = 88,
    BrcowcowStateFreeResp = 89,
    BrcowcowStateStartResp = 90,
    BrcowcowStatePlayingResp = 91,
    BrcowcowStateOverResp = 92,
    BrcowcowBetReq = 93,
    BrcowcowBetResp = 94,
    BrcowcowOverResp = 95,
    BrcowcowCheckoutResp = 96,
    BrcowcowHostReq = 97,
    BrcowcowHostResp = 98,
    BrcowcowHostListReq = 99,
    BrcowcowHostListResp = 100,
}

export var brcowcow_packet_define = {
    88: new LeafWsPacket(88, brcowcow.BrcowcowSceneResp, "brcowcow.BrcowcowSceneResp"),
    89: new LeafWsPacket(89, brcowcow.BrcowcowStateFreeResp, "brcowcow.BrcowcowStateFreeResp"),
    90: new LeafWsPacket(90, brcowcow.BrcowcowStateStartResp, "brcowcow.BrcowcowStateStartResp"),
    91: new LeafWsPacket(91, brcowcow.BrcowcowStatePlayingResp, "brcowcow.BrcowcowStatePlayingResp"),
    92: new LeafWsPacket(92, brcowcow.BrcowcowStateOverResp, "brcowcow.BrcowcowStateOverResp"),
    93: new LeafWsPacket(93, brcowcow.BrcowcowBetReq, "brcowcow.BrcowcowBetReq"),
    94: new LeafWsPacket(94, brcowcow.BrcowcowBetResp, "brcowcow.BrcowcowBetResp"),
    95: new LeafWsPacket(95, brcowcow.BrcowcowOverResp, "brcowcow.BrcowcowOverResp"),
    96: new LeafWsPacket(96, brcowcow.BrcowcowCheckoutResp, "brcowcow.BrcowcowCheckoutResp"),
    97: new LeafWsPacket(97, brcowcow.BrcowcowHostReq, "brcowcow.BrcowcowHostReq"),
    98: new LeafWsPacket(98, brcowcow.BrcowcowHostResp, "brcowcow.BrcowcowHostResp"),
    99: new LeafWsPacket(99, brcowcow.BrcowcowHostListReq, "brcowcow.BrcowcowHostListReq"),
    100: new LeafWsPacket(100, brcowcow.BrcowcowHostListResp, "brcowcow.BrcowcowHostListResp"),
}

export class brcowcow_request {
    public static BrcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[] } ) { brcowcow_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateFreeResp( data:{ Times:any } ) { brcowcow_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateStartResp( data:{ Times:any } ) { brcowcow_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStatePlayingResp( data:{ Times:any } ) { brcowcow_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOverResp( data:{ Times:any } ) { brcowcow_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetReq( data:{ Area:number, Money:number } ) { brcowcow_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetResp( data:{ UserId:number, Area:number, Money:number } ) { brcowcow_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOverResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { brcowcow_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowCheckoutResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { brcowcow_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostReq( data:{ IsWant:any } ) { brcowcow_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostResp( data:{ UserID:number, IsWant:any } ) { brcowcow_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListReq( data:{} ) { brcowcow_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { brcowcow_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
}

