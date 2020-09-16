//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { sangong } from "./sangong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum sangong_msgs {
    SangongPlayer = 198,
    SangongSceneResp = 199,
    SangongStateFreeResp = 200,
    SangongStateCallResp = 201,
    SangongStateDecideResp = 202,
    SangongStatePlayingResp = 203,
    SangongStateDealResp = 204,
    SangongStateOpenResp = 205,
    SangongStateOverResp = 206,
    SangongReadyReq = 207,
    SangongReadyResp = 208,
    SangongBetReq = 209,
    SangongBetResp = 210,
    SangongOpenResp = 211,
    SangongOverResp = 212,
    SangongHostReq = 213,
    SangongHostResp = 214,
    SangongHostListReq = 215,
    SangongHostListResp = 216,
}

export var sangong_packet_define = {
    198: new LeafWsPacket(198, sangong.SangongPlayer, "sangong.SangongPlayer"),
    199: new LeafWsPacket(199, sangong.SangongSceneResp, "sangong.SangongSceneResp"),
    200: new LeafWsPacket(200, sangong.SangongStateFreeResp, "sangong.SangongStateFreeResp"),
    201: new LeafWsPacket(201, sangong.SangongStateCallResp, "sangong.SangongStateCallResp"),
    202: new LeafWsPacket(202, sangong.SangongStateDecideResp, "sangong.SangongStateDecideResp"),
    203: new LeafWsPacket(203, sangong.SangongStatePlayingResp, "sangong.SangongStatePlayingResp"),
    204: new LeafWsPacket(204, sangong.SangongStateDealResp, "sangong.SangongStateDealResp"),
    205: new LeafWsPacket(205, sangong.SangongStateOpenResp, "sangong.SangongStateOpenResp"),
    206: new LeafWsPacket(206, sangong.SangongStateOverResp, "sangong.SangongStateOverResp"),
    207: new LeafWsPacket(207, sangong.SangongReadyReq, "sangong.SangongReadyReq"),
    208: new LeafWsPacket(208, sangong.SangongReadyResp, "sangong.SangongReadyResp"),
    209: new LeafWsPacket(209, sangong.SangongBetReq, "sangong.SangongBetReq"),
    210: new LeafWsPacket(210, sangong.SangongBetResp, "sangong.SangongBetResp"),
    211: new LeafWsPacket(211, sangong.SangongOpenResp, "sangong.SangongOpenResp"),
    212: new LeafWsPacket(212, sangong.SangongOverResp, "sangong.SangongOverResp"),
    213: new LeafWsPacket(213, sangong.SangongHostReq, "sangong.SangongHostReq"),
    214: new LeafWsPacket(214, sangong.SangongHostResp, "sangong.SangongHostResp"),
    215: new LeafWsPacket(215, sangong.SangongHostListReq, "sangong.SangongHostListReq"),
    216: new LeafWsPacket(216, sangong.SangongHostListResp, "sangong.SangongHostListResp"),
}

export class sangong_request {
    public static SangongPlayer( data:{ MyInfo:any, Cards:any } ) { sangong_packet_define[198].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { sangong_packet_define[199].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateFreeResp( data:{ Times:any } ) { sangong_packet_define[200].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateCallResp( data:{ Times:any } ) { sangong_packet_define[201].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateDecideResp( data:{ Times:any, HostID:number } ) { sangong_packet_define[202].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStatePlayingResp( data:{ Times:any } ) { sangong_packet_define[203].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateDealResp( data:{ Times:any, Cards:any } ) { sangong_packet_define[204].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOpenResp( data:{ Times:any, OpenInfo:any } ) { sangong_packet_define[205].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOverResp( data:{ Times:any } ) { sangong_packet_define[206].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongReadyReq( data:{ IsReady:any } ) { sangong_packet_define[207].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongReadyResp( data:{ UserId:number } ) { sangong_packet_define[208].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetReq( data:{ BetArea:number, BetScore:number } ) { sangong_packet_define[209].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { sangong_packet_define[210].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOpenResp( data:{ WinnerId:number, Infos:any[] } ) { sangong_packet_define[211].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { sangong_packet_define[212].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostReq( data:{ IsWant:any } ) { sangong_packet_define[213].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostResp( data:{ UserID:number, IsWant:any } ) { sangong_packet_define[214].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListReq( data:{} ) { sangong_packet_define[215].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { sangong_packet_define[216].sendToChannel(ChannelDefine.game, data, false); }
}

