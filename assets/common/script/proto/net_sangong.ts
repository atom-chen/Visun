//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { sangong } from "./sangong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum sangong_msgs {
    SangongPlayer = 196,
    SangongSceneResp = 197,
    SangongStateFreeResp = 198,
    SangongStatePlayingResp = 199,
    SangongStateDealResp = 200,
    SangongStateOpenResp = 201,
    SangongStateOverResp = 202,
    SangongReadyReq = 203,
    SangongReadyResp = 204,
    SangongBetReq = 205,
    SangongBetResp = 206,
    SangongOpenResp = 207,
    SangongOverResp = 208,
    SangongHostReq = 209,
    SangongHostResp = 210,
    SangongHostListReq = 211,
    SangongHostListResp = 212,
}

export var sangong_packet_define = {
    196: new LeafWsPacket(196, sangong.SangongPlayer, "sangong.SangongPlayer"),
    197: new LeafWsPacket(197, sangong.SangongSceneResp, "sangong.SangongSceneResp"),
    198: new LeafWsPacket(198, sangong.SangongStateFreeResp, "sangong.SangongStateFreeResp"),
    199: new LeafWsPacket(199, sangong.SangongStatePlayingResp, "sangong.SangongStatePlayingResp"),
    200: new LeafWsPacket(200, sangong.SangongStateDealResp, "sangong.SangongStateDealResp"),
    201: new LeafWsPacket(201, sangong.SangongStateOpenResp, "sangong.SangongStateOpenResp"),
    202: new LeafWsPacket(202, sangong.SangongStateOverResp, "sangong.SangongStateOverResp"),
    203: new LeafWsPacket(203, sangong.SangongReadyReq, "sangong.SangongReadyReq"),
    204: new LeafWsPacket(204, sangong.SangongReadyResp, "sangong.SangongReadyResp"),
    205: new LeafWsPacket(205, sangong.SangongBetReq, "sangong.SangongBetReq"),
    206: new LeafWsPacket(206, sangong.SangongBetResp, "sangong.SangongBetResp"),
    207: new LeafWsPacket(207, sangong.SangongOpenResp, "sangong.SangongOpenResp"),
    208: new LeafWsPacket(208, sangong.SangongOverResp, "sangong.SangongOverResp"),
    209: new LeafWsPacket(209, sangong.SangongHostReq, "sangong.SangongHostReq"),
    210: new LeafWsPacket(210, sangong.SangongHostResp, "sangong.SangongHostResp"),
    211: new LeafWsPacket(211, sangong.SangongHostListReq, "sangong.SangongHostListReq"),
    212: new LeafWsPacket(212, sangong.SangongHostListResp, "sangong.SangongHostListResp"),
}

export class sangong_request {
    public static SangongPlayer( data:{ MyInfo:any, Cards:any } ) { sangong_packet_define[196].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { sangong_packet_define[197].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateFreeResp( data:{ Times:any } ) { sangong_packet_define[198].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStatePlayingResp( data:{ Times:any } ) { sangong_packet_define[199].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateDealResp( data:{ Times:any, Cards:any } ) { sangong_packet_define[200].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOpenResp( data:{ Times:any, OpenInfo:any } ) { sangong_packet_define[201].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOverResp( data:{ Times:any } ) { sangong_packet_define[202].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongReadyReq( data:{ IsReady:any } ) { sangong_packet_define[203].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongReadyResp( data:{ UserId:number } ) { sangong_packet_define[204].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetReq( data:{ BetArea:number, BetScore:number } ) { sangong_packet_define[205].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { sangong_packet_define[206].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOpenResp( data:{ WinnerId:number, Infos:any[] } ) { sangong_packet_define[207].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { sangong_packet_define[208].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostReq( data:{ IsWant:any } ) { sangong_packet_define[209].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostResp( data:{ UserID:number, IsWant:any } ) { sangong_packet_define[210].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListReq( data:{} ) { sangong_packet_define[211].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { sangong_packet_define[212].sendToChannel(ChannelDefine.game, data, false); }
}

