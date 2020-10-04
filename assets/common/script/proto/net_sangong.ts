//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { sangong } from "./sangong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum sangong_msgs {
    SangongPlayer = 208,
    SangongSceneResp = 209,
    SangongStateFreeResp = 210,
    SangongStateCallResp = 211,
    SangongStateDecideResp = 212,
    SangongStatePlayingResp = 213,
    SangongStateDealResp = 214,
    SangongStateOpenResp = 215,
    SangongStateOverResp = 216,
    SangongReadyReq = 217,
    SangongReadyResp = 218,
    SangongBetReq = 219,
    SangongBetResp = 220,
    SangongOpenResp = 221,
    SangongOverResp = 222,
    SangongHostReq = 223,
    SangongHostResp = 224,
    SangongHostListReq = 225,
    SangongHostListResp = 226,
}

export var sangong_packet_define = {
    208: new LeafWsPacket(208, sangong.SangongPlayer, "sangong.SangongPlayer"),
    209: new LeafWsPacket(209, sangong.SangongSceneResp, "sangong.SangongSceneResp"),
    210: new LeafWsPacket(210, sangong.SangongStateFreeResp, "sangong.SangongStateFreeResp"),
    211: new LeafWsPacket(211, sangong.SangongStateCallResp, "sangong.SangongStateCallResp"),
    212: new LeafWsPacket(212, sangong.SangongStateDecideResp, "sangong.SangongStateDecideResp"),
    213: new LeafWsPacket(213, sangong.SangongStatePlayingResp, "sangong.SangongStatePlayingResp"),
    214: new LeafWsPacket(214, sangong.SangongStateDealResp, "sangong.SangongStateDealResp"),
    215: new LeafWsPacket(215, sangong.SangongStateOpenResp, "sangong.SangongStateOpenResp"),
    216: new LeafWsPacket(216, sangong.SangongStateOverResp, "sangong.SangongStateOverResp"),
    217: new LeafWsPacket(217, sangong.SangongReadyReq, "sangong.SangongReadyReq"),
    218: new LeafWsPacket(218, sangong.SangongReadyResp, "sangong.SangongReadyResp"),
    219: new LeafWsPacket(219, sangong.SangongBetReq, "sangong.SangongBetReq"),
    220: new LeafWsPacket(220, sangong.SangongBetResp, "sangong.SangongBetResp"),
    221: new LeafWsPacket(221, sangong.SangongOpenResp, "sangong.SangongOpenResp"),
    222: new LeafWsPacket(222, sangong.SangongOverResp, "sangong.SangongOverResp"),
    223: new LeafWsPacket(223, sangong.SangongHostReq, "sangong.SangongHostReq"),
    224: new LeafWsPacket(224, sangong.SangongHostResp, "sangong.SangongHostResp"),
    225: new LeafWsPacket(225, sangong.SangongHostListReq, "sangong.SangongHostListReq"),
    226: new LeafWsPacket(226, sangong.SangongHostListResp, "sangong.SangongHostListResp"),
}

export class sangong_request {
    public static SangongPlayer( data:{ MyInfo:any, Cards:any } ) { sangong_packet_define[208].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { sangong_packet_define[209].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateFreeResp( data:{ Times:any, Inning:string } ) { sangong_packet_define[210].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateCallResp( data:{ Times:any } ) { sangong_packet_define[211].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateDecideResp( data:{ Times:any, HostID:number } ) { sangong_packet_define[212].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStatePlayingResp( data:{ Times:any } ) { sangong_packet_define[213].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateDealResp( data:{ Times:any, Cards:any } ) { sangong_packet_define[214].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOpenResp( data:{ Times:any, OpenInfo:any } ) { sangong_packet_define[215].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOverResp( data:{ Times:any } ) { sangong_packet_define[216].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongReadyReq( data:{ IsReady:any } ) { sangong_packet_define[217].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongReadyResp( data:{ UserId:number } ) { sangong_packet_define[218].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetReq( data:{ BetArea:number, BetScore:number } ) { sangong_packet_define[219].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { sangong_packet_define[220].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOpenResp( data:{ WinnerId:number, Infos:any[] } ) { sangong_packet_define[221].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { sangong_packet_define[222].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostReq( data:{ IsWant:any } ) { sangong_packet_define[223].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostResp( data:{ UserID:number, IsWant:any } ) { sangong_packet_define[224].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListReq( data:{} ) { sangong_packet_define[225].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { sangong_packet_define[226].sendToChannel(ChannelDefine.game, data, false); }
}

