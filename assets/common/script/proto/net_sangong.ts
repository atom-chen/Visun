//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { sangong } from "./sangong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum sangong_msgs {
    SangongPlayer = 199,
    SangongSceneResp = 200,
    SangongStateFreeResp = 201,
    SangongStateCallResp = 202,
    SangongStateDecideResp = 203,
    SangongStatePlayingResp = 204,
    SangongStateDealResp = 205,
    SangongStateOpenResp = 206,
    SangongStateOverResp = 207,
    SangongReadyReq = 208,
    SangongReadyResp = 209,
    SangongBetReq = 210,
    SangongBetResp = 211,
    SangongOpenResp = 212,
    SangongOverResp = 213,
    SangongHostReq = 214,
    SangongHostResp = 215,
    SangongHostListReq = 216,
    SangongHostListResp = 217,
}

export var sangong_packet_define = {
    199: new LeafWsPacket(199, sangong.SangongPlayer, "sangong.SangongPlayer"),
    200: new LeafWsPacket(200, sangong.SangongSceneResp, "sangong.SangongSceneResp"),
    201: new LeafWsPacket(201, sangong.SangongStateFreeResp, "sangong.SangongStateFreeResp"),
    202: new LeafWsPacket(202, sangong.SangongStateCallResp, "sangong.SangongStateCallResp"),
    203: new LeafWsPacket(203, sangong.SangongStateDecideResp, "sangong.SangongStateDecideResp"),
    204: new LeafWsPacket(204, sangong.SangongStatePlayingResp, "sangong.SangongStatePlayingResp"),
    205: new LeafWsPacket(205, sangong.SangongStateDealResp, "sangong.SangongStateDealResp"),
    206: new LeafWsPacket(206, sangong.SangongStateOpenResp, "sangong.SangongStateOpenResp"),
    207: new LeafWsPacket(207, sangong.SangongStateOverResp, "sangong.SangongStateOverResp"),
    208: new LeafWsPacket(208, sangong.SangongReadyReq, "sangong.SangongReadyReq"),
    209: new LeafWsPacket(209, sangong.SangongReadyResp, "sangong.SangongReadyResp"),
    210: new LeafWsPacket(210, sangong.SangongBetReq, "sangong.SangongBetReq"),
    211: new LeafWsPacket(211, sangong.SangongBetResp, "sangong.SangongBetResp"),
    212: new LeafWsPacket(212, sangong.SangongOpenResp, "sangong.SangongOpenResp"),
    213: new LeafWsPacket(213, sangong.SangongOverResp, "sangong.SangongOverResp"),
    214: new LeafWsPacket(214, sangong.SangongHostReq, "sangong.SangongHostReq"),
    215: new LeafWsPacket(215, sangong.SangongHostResp, "sangong.SangongHostResp"),
    216: new LeafWsPacket(216, sangong.SangongHostListReq, "sangong.SangongHostListReq"),
    217: new LeafWsPacket(217, sangong.SangongHostListResp, "sangong.SangongHostListResp"),
}

export class sangong_request {
    public static SangongPlayer( data:{ MyInfo:any, Cards:any } ) { sangong_packet_define[199].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { sangong_packet_define[200].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateFreeResp( data:{ Times:any } ) { sangong_packet_define[201].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateCallResp( data:{ Times:any } ) { sangong_packet_define[202].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateDecideResp( data:{ Times:any, HostID:number } ) { sangong_packet_define[203].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStatePlayingResp( data:{ Times:any } ) { sangong_packet_define[204].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateDealResp( data:{ Times:any, Cards:any } ) { sangong_packet_define[205].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOpenResp( data:{ Times:any, OpenInfo:any } ) { sangong_packet_define[206].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOverResp( data:{ Times:any } ) { sangong_packet_define[207].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongReadyReq( data:{ IsReady:any } ) { sangong_packet_define[208].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongReadyResp( data:{ UserId:number } ) { sangong_packet_define[209].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetReq( data:{ BetArea:number, BetScore:number } ) { sangong_packet_define[210].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { sangong_packet_define[211].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOpenResp( data:{ WinnerId:number, Infos:any[] } ) { sangong_packet_define[212].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { sangong_packet_define[213].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostReq( data:{ IsWant:any } ) { sangong_packet_define[214].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostResp( data:{ UserID:number, IsWant:any } ) { sangong_packet_define[215].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListReq( data:{} ) { sangong_packet_define[216].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { sangong_packet_define[217].sendToChannel(ChannelDefine.game, data, false); }
}

