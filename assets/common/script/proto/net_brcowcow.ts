//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    BrcowcowSceneResp = 91,
    BrcowcowStateFreeResp = 92,
    BrcowcowStateStartResp = 93,
    BrcowcowStatePlayingResp = 94,
    BrcowcowStateOpenResp = 95,
    BrcowcowStateOverResp = 96,
    BrcowcowBetReq = 97,
    BrcowcowBetResp = 98,
    BrcowcowOpenResp = 99,
    BrcowcowOverResp = 100,
    BrcowcowHostReq = 101,
    BrcowcowHostResp = 102,
    BrcowcowHostListReq = 103,
    BrcowcowHostListResp = 104,
}

export var brcowcow_packet_define = {
    91: new LeafWsPacket(91, brcowcow.BrcowcowSceneResp, "brcowcow.BrcowcowSceneResp"),
    92: new LeafWsPacket(92, brcowcow.BrcowcowStateFreeResp, "brcowcow.BrcowcowStateFreeResp"),
    93: new LeafWsPacket(93, brcowcow.BrcowcowStateStartResp, "brcowcow.BrcowcowStateStartResp"),
    94: new LeafWsPacket(94, brcowcow.BrcowcowStatePlayingResp, "brcowcow.BrcowcowStatePlayingResp"),
    95: new LeafWsPacket(95, brcowcow.BrcowcowStateOpenResp, "brcowcow.BrcowcowStateOpenResp"),
    96: new LeafWsPacket(96, brcowcow.BrcowcowStateOverResp, "brcowcow.BrcowcowStateOverResp"),
    97: new LeafWsPacket(97, brcowcow.BrcowcowBetReq, "brcowcow.BrcowcowBetReq"),
    98: new LeafWsPacket(98, brcowcow.BrcowcowBetResp, "brcowcow.BrcowcowBetResp"),
    99: new LeafWsPacket(99, brcowcow.BrcowcowOpenResp, "brcowcow.BrcowcowOpenResp"),
    100: new LeafWsPacket(100, brcowcow.BrcowcowOverResp, "brcowcow.BrcowcowOverResp"),
    101: new LeafWsPacket(101, brcowcow.BrcowcowHostReq, "brcowcow.BrcowcowHostReq"),
    102: new LeafWsPacket(102, brcowcow.BrcowcowHostResp, "brcowcow.BrcowcowHostResp"),
    103: new LeafWsPacket(103, brcowcow.BrcowcowHostListReq, "brcowcow.BrcowcowHostListReq"),
    104: new LeafWsPacket(104, brcowcow.BrcowcowHostListResp, "brcowcow.BrcowcowHostListResp"),
}

export class brcowcow_request {
    public static BrcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { brcowcow_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateFreeResp( data:{ Times:any } ) { brcowcow_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateStartResp( data:{ Times:any, HostID:number, Inning:string } ) { brcowcow_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStatePlayingResp( data:{ Times:any } ) { brcowcow_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { brcowcow_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOverResp( data:{ Times:any } ) { brcowcow_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { brcowcow_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { brcowcow_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOpenResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { brcowcow_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { brcowcow_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostReq( data:{ IsWant:any } ) { brcowcow_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostResp( data:{ UserID:number, IsWant:any } ) { brcowcow_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListReq( data:{} ) { brcowcow_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { brcowcow_packet_define[104].sendToChannel(ChannelDefine.game, data, false); }
}

