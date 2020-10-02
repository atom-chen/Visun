//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    BrcowcowSceneResp = 96,
    BrcowcowStateFreeResp = 97,
    BrcowcowStateStartResp = 98,
    BrcowcowStatePlayingResp = 99,
    BrcowcowStateOpenResp = 100,
    BrcowcowStateOverResp = 101,
    BrcowcowBetReq = 102,
    BrcowcowBetResp = 103,
    BrcowcowOpenResp = 104,
    BrcowcowOverResp = 105,
    BrcowcowHostReq = 106,
    BrcowcowHostResp = 107,
    BrcowcowHostListReq = 108,
    BrcowcowHostListResp = 109,
}

export var brcowcow_packet_define = {
    96: new LeafWsPacket(96, brcowcow.BrcowcowSceneResp, "brcowcow.BrcowcowSceneResp"),
    97: new LeafWsPacket(97, brcowcow.BrcowcowStateFreeResp, "brcowcow.BrcowcowStateFreeResp"),
    98: new LeafWsPacket(98, brcowcow.BrcowcowStateStartResp, "brcowcow.BrcowcowStateStartResp"),
    99: new LeafWsPacket(99, brcowcow.BrcowcowStatePlayingResp, "brcowcow.BrcowcowStatePlayingResp"),
    100: new LeafWsPacket(100, brcowcow.BrcowcowStateOpenResp, "brcowcow.BrcowcowStateOpenResp"),
    101: new LeafWsPacket(101, brcowcow.BrcowcowStateOverResp, "brcowcow.BrcowcowStateOverResp"),
    102: new LeafWsPacket(102, brcowcow.BrcowcowBetReq, "brcowcow.BrcowcowBetReq"),
    103: new LeafWsPacket(103, brcowcow.BrcowcowBetResp, "brcowcow.BrcowcowBetResp"),
    104: new LeafWsPacket(104, brcowcow.BrcowcowOpenResp, "brcowcow.BrcowcowOpenResp"),
    105: new LeafWsPacket(105, brcowcow.BrcowcowOverResp, "brcowcow.BrcowcowOverResp"),
    106: new LeafWsPacket(106, brcowcow.BrcowcowHostReq, "brcowcow.BrcowcowHostReq"),
    107: new LeafWsPacket(107, brcowcow.BrcowcowHostResp, "brcowcow.BrcowcowHostResp"),
    108: new LeafWsPacket(108, brcowcow.BrcowcowHostListReq, "brcowcow.BrcowcowHostListReq"),
    109: new LeafWsPacket(109, brcowcow.BrcowcowHostListResp, "brcowcow.BrcowcowHostListResp"),
}

export class brcowcow_request {
    public static BrcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { brcowcow_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateFreeResp( data:{ Times:any } ) { brcowcow_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateStartResp( data:{ Times:any, HostID:number, Inning:string } ) { brcowcow_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStatePlayingResp( data:{ Times:any } ) { brcowcow_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { brcowcow_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOverResp( data:{ Times:any } ) { brcowcow_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { brcowcow_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { brcowcow_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOpenResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { brcowcow_packet_define[104].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { brcowcow_packet_define[105].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostReq( data:{ IsWant:any } ) { brcowcow_packet_define[106].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostResp( data:{ UserID:number, IsWant:any } ) { brcowcow_packet_define[107].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListReq( data:{} ) { brcowcow_packet_define[108].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { brcowcow_packet_define[109].sendToChannel(ChannelDefine.game, data, false); }
}

