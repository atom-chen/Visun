//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    BrcowcowSceneResp = 94,
    BrcowcowStateFreeResp = 95,
    BrcowcowStateStartResp = 96,
    BrcowcowStatePlayingResp = 97,
    BrcowcowStateOpenResp = 98,
    BrcowcowStateOverResp = 99,
    BrcowcowBetReq = 100,
    BrcowcowBetResp = 101,
    BrcowcowOpenResp = 102,
    BrcowcowOverResp = 103,
    BrcowcowHostReq = 104,
    BrcowcowHostResp = 105,
    BrcowcowHostListReq = 106,
    BrcowcowHostListResp = 107,
}

export var brcowcow_packet_define = {
    94: new LeafWsPacket(94, brcowcow.BrcowcowSceneResp, "brcowcow.BrcowcowSceneResp"),
    95: new LeafWsPacket(95, brcowcow.BrcowcowStateFreeResp, "brcowcow.BrcowcowStateFreeResp"),
    96: new LeafWsPacket(96, brcowcow.BrcowcowStateStartResp, "brcowcow.BrcowcowStateStartResp"),
    97: new LeafWsPacket(97, brcowcow.BrcowcowStatePlayingResp, "brcowcow.BrcowcowStatePlayingResp"),
    98: new LeafWsPacket(98, brcowcow.BrcowcowStateOpenResp, "brcowcow.BrcowcowStateOpenResp"),
    99: new LeafWsPacket(99, brcowcow.BrcowcowStateOverResp, "brcowcow.BrcowcowStateOverResp"),
    100: new LeafWsPacket(100, brcowcow.BrcowcowBetReq, "brcowcow.BrcowcowBetReq"),
    101: new LeafWsPacket(101, brcowcow.BrcowcowBetResp, "brcowcow.BrcowcowBetResp"),
    102: new LeafWsPacket(102, brcowcow.BrcowcowOpenResp, "brcowcow.BrcowcowOpenResp"),
    103: new LeafWsPacket(103, brcowcow.BrcowcowOverResp, "brcowcow.BrcowcowOverResp"),
    104: new LeafWsPacket(104, brcowcow.BrcowcowHostReq, "brcowcow.BrcowcowHostReq"),
    105: new LeafWsPacket(105, brcowcow.BrcowcowHostResp, "brcowcow.BrcowcowHostResp"),
    106: new LeafWsPacket(106, brcowcow.BrcowcowHostListReq, "brcowcow.BrcowcowHostListReq"),
    107: new LeafWsPacket(107, brcowcow.BrcowcowHostListResp, "brcowcow.BrcowcowHostListResp"),
}

export class brcowcow_request {
    public static BrcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { brcowcow_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateFreeResp( data:{ Times:any } ) { brcowcow_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateStartResp( data:{ Times:any, HostID:number, Inning:string } ) { brcowcow_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStatePlayingResp( data:{ Times:any } ) { brcowcow_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { brcowcow_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowStateOverResp( data:{ Times:any } ) { brcowcow_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { brcowcow_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { brcowcow_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOpenResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { brcowcow_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { brcowcow_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostReq( data:{ IsWant:any } ) { brcowcow_packet_define[104].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostResp( data:{ UserID:number, IsWant:any } ) { brcowcow_packet_define[105].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListReq( data:{} ) { brcowcow_packet_define[106].sendToChannel(ChannelDefine.game, data, false); }
    public static BrcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { brcowcow_packet_define[107].sendToChannel(ChannelDefine.game, data, false); }
}

