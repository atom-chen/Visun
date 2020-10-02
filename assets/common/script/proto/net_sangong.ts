//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { sangong } from "./sangong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum sangong_msgs {
    SangongPlayer = 203,
    SangongSceneResp = 204,
    SangongStateFreeResp = 205,
    SangongStateCallResp = 206,
    SangongStateDecideResp = 207,
    SangongStatePlayingResp = 208,
    SangongStateDealResp = 209,
    SangongStateOpenResp = 210,
    SangongStateOverResp = 211,
    SangongReadyReq = 212,
    SangongReadyResp = 213,
    SangongBetReq = 214,
    SangongBetResp = 215,
    SangongOpenResp = 216,
    SangongOverResp = 217,
    SangongHostReq = 218,
    SangongHostResp = 219,
    SangongHostListReq = 220,
    SangongHostListResp = 221,
}

export var sangong_packet_define = {
    203: new LeafWsPacket(203, sangong.SangongPlayer, "sangong.SangongPlayer"),
    204: new LeafWsPacket(204, sangong.SangongSceneResp, "sangong.SangongSceneResp"),
    205: new LeafWsPacket(205, sangong.SangongStateFreeResp, "sangong.SangongStateFreeResp"),
    206: new LeafWsPacket(206, sangong.SangongStateCallResp, "sangong.SangongStateCallResp"),
    207: new LeafWsPacket(207, sangong.SangongStateDecideResp, "sangong.SangongStateDecideResp"),
    208: new LeafWsPacket(208, sangong.SangongStatePlayingResp, "sangong.SangongStatePlayingResp"),
    209: new LeafWsPacket(209, sangong.SangongStateDealResp, "sangong.SangongStateDealResp"),
    210: new LeafWsPacket(210, sangong.SangongStateOpenResp, "sangong.SangongStateOpenResp"),
    211: new LeafWsPacket(211, sangong.SangongStateOverResp, "sangong.SangongStateOverResp"),
    212: new LeafWsPacket(212, sangong.SangongReadyReq, "sangong.SangongReadyReq"),
    213: new LeafWsPacket(213, sangong.SangongReadyResp, "sangong.SangongReadyResp"),
    214: new LeafWsPacket(214, sangong.SangongBetReq, "sangong.SangongBetReq"),
    215: new LeafWsPacket(215, sangong.SangongBetResp, "sangong.SangongBetResp"),
    216: new LeafWsPacket(216, sangong.SangongOpenResp, "sangong.SangongOpenResp"),
    217: new LeafWsPacket(217, sangong.SangongOverResp, "sangong.SangongOverResp"),
    218: new LeafWsPacket(218, sangong.SangongHostReq, "sangong.SangongHostReq"),
    219: new LeafWsPacket(219, sangong.SangongHostResp, "sangong.SangongHostResp"),
    220: new LeafWsPacket(220, sangong.SangongHostListReq, "sangong.SangongHostListReq"),
    221: new LeafWsPacket(221, sangong.SangongHostListResp, "sangong.SangongHostListResp"),
}

export class sangong_request {
    public static SangongPlayer( data:{ MyInfo:any, Cards:any } ) { sangong_packet_define[203].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { sangong_packet_define[204].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateFreeResp( data:{ Times:any, Inning:string } ) { sangong_packet_define[205].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateCallResp( data:{ Times:any } ) { sangong_packet_define[206].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateDecideResp( data:{ Times:any, HostID:number } ) { sangong_packet_define[207].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStatePlayingResp( data:{ Times:any } ) { sangong_packet_define[208].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateDealResp( data:{ Times:any, Cards:any } ) { sangong_packet_define[209].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOpenResp( data:{ Times:any, OpenInfo:any } ) { sangong_packet_define[210].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOverResp( data:{ Times:any } ) { sangong_packet_define[211].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongReadyReq( data:{ IsReady:any } ) { sangong_packet_define[212].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongReadyResp( data:{ UserId:number } ) { sangong_packet_define[213].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetReq( data:{ BetArea:number, BetScore:number } ) { sangong_packet_define[214].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { sangong_packet_define[215].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOpenResp( data:{ WinnerId:number, Infos:any[] } ) { sangong_packet_define[216].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { sangong_packet_define[217].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostReq( data:{ IsWant:any } ) { sangong_packet_define[218].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostResp( data:{ UserID:number, IsWant:any } ) { sangong_packet_define[219].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListReq( data:{} ) { sangong_packet_define[220].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { sangong_packet_define[221].sendToChannel(ChannelDefine.game, data, false); }
}

