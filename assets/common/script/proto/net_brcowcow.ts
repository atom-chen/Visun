//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    BrcowcowSceneResp = 101,
    BrcowcowStateFreeResp = 102,
    BrcowcowStateStartResp = 103,
    BrcowcowStatePlayingResp = 104,
    BrcowcowStateOpenResp = 105,
    BrcowcowStateOverResp = 106,
    BrcowcowBetReq = 107,
    BrcowcowBetResp = 108,
    BrcowcowOpenResp = 109,
    BrcowcowOverResp = 110,
    BrcowcowHostReq = 111,
    BrcowcowHostResp = 112,
    BrcowcowHostListReq = 113,
    BrcowcowHostListResp = 114,
}

export var brcowcow_packet_define = {
    101: new LeafWsPacket(101, brcowcow.BrcowcowSceneResp, "brcowcow.BrcowcowSceneResp"),
    102: new LeafWsPacket(102, brcowcow.BrcowcowStateFreeResp, "brcowcow.BrcowcowStateFreeResp"),
    103: new LeafWsPacket(103, brcowcow.BrcowcowStateStartResp, "brcowcow.BrcowcowStateStartResp"),
    104: new LeafWsPacket(104, brcowcow.BrcowcowStatePlayingResp, "brcowcow.BrcowcowStatePlayingResp"),
    105: new LeafWsPacket(105, brcowcow.BrcowcowStateOpenResp, "brcowcow.BrcowcowStateOpenResp"),
    106: new LeafWsPacket(106, brcowcow.BrcowcowStateOverResp, "brcowcow.BrcowcowStateOverResp"),
    107: new LeafWsPacket(107, brcowcow.BrcowcowBetReq, "brcowcow.BrcowcowBetReq"),
    108: new LeafWsPacket(108, brcowcow.BrcowcowBetResp, "brcowcow.BrcowcowBetResp"),
    109: new LeafWsPacket(109, brcowcow.BrcowcowOpenResp, "brcowcow.BrcowcowOpenResp"),
    110: new LeafWsPacket(110, brcowcow.BrcowcowOverResp, "brcowcow.BrcowcowOverResp"),
    111: new LeafWsPacket(111, brcowcow.BrcowcowHostReq, "brcowcow.BrcowcowHostReq"),
    112: new LeafWsPacket(112, brcowcow.BrcowcowHostResp, "brcowcow.BrcowcowHostResp"),
    113: new LeafWsPacket(113, brcowcow.BrcowcowHostListReq, "brcowcow.BrcowcowHostListReq"),
    114: new LeafWsPacket(114, brcowcow.BrcowcowHostListResp, "brcowcow.BrcowcowHostListResp"),
}

export class brcowcow_request {
    public static BrcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { brcowcow_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateFreeResp( data:{ Times:any } ) { brcowcow_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateStartResp( data:{ Times:any, HostID:number, Inning:string } ) { brcowcow_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStatePlayingResp( data:{ Times:any } ) { brcowcow_packet_define[104].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { brcowcow_packet_define[105].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOverResp( data:{ Times:any } ) { brcowcow_packet_define[106].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { brcowcow_packet_define[107].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { brcowcow_packet_define[108].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOpenResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { brcowcow_packet_define[109].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { brcowcow_packet_define[110].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostReq( data:{ IsWant:any } ) { brcowcow_packet_define[111].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostResp( data:{ UserID:number, IsWant:any } ) { brcowcow_packet_define[112].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListReq( data:{} ) { brcowcow_packet_define[113].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { brcowcow_packet_define[114].sendToChannel(ChannelDefine.game, data, false); }
}

