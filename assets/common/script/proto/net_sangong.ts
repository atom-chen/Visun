//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { sangong } from "./sangong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum sangong_msgs {
    SangongSceneResp = 193,
    SangongStateFreeResp = 194,
    SangongStateStartResp = 195,
    SangongStatePlayingResp = 196,
    SangongStateOpenResp = 197,
    SangongStateOverResp = 198,
    SangongBetReq = 199,
    SangongBetResp = 200,
    SangongOpenResp = 201,
    SangongOverResp = 202,
    SangongHostReq = 203,
    SangongHostResp = 204,
    SangongHostListReq = 205,
    SangongHostListResp = 206,
}

export var sangong_packet_define = {
    193: new LeafWsPacket(193, sangong.SangongSceneResp, "sangong.SangongSceneResp"),
    194: new LeafWsPacket(194, sangong.SangongStateFreeResp, "sangong.SangongStateFreeResp"),
    195: new LeafWsPacket(195, sangong.SangongStateStartResp, "sangong.SangongStateStartResp"),
    196: new LeafWsPacket(196, sangong.SangongStatePlayingResp, "sangong.SangongStatePlayingResp"),
    197: new LeafWsPacket(197, sangong.SangongStateOpenResp, "sangong.SangongStateOpenResp"),
    198: new LeafWsPacket(198, sangong.SangongStateOverResp, "sangong.SangongStateOverResp"),
    199: new LeafWsPacket(199, sangong.SangongBetReq, "sangong.SangongBetReq"),
    200: new LeafWsPacket(200, sangong.SangongBetResp, "sangong.SangongBetResp"),
    201: new LeafWsPacket(201, sangong.SangongOpenResp, "sangong.SangongOpenResp"),
    202: new LeafWsPacket(202, sangong.SangongOverResp, "sangong.SangongOverResp"),
    203: new LeafWsPacket(203, sangong.SangongHostReq, "sangong.SangongHostReq"),
    204: new LeafWsPacket(204, sangong.SangongHostResp, "sangong.SangongHostResp"),
    205: new LeafWsPacket(205, sangong.SangongHostListReq, "sangong.SangongHostListReq"),
    206: new LeafWsPacket(206, sangong.SangongHostListResp, "sangong.SangongHostListResp"),
}

export class sangong_request {
    public static SangongSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { sangong_packet_define[193].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateFreeResp( data:{ Times:any } ) { sangong_packet_define[194].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateStartResp( data:{ Times:any, HostID:number } ) { sangong_packet_define[195].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStatePlayingResp( data:{ Times:any } ) { sangong_packet_define[196].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOpenResp( data:{ Times:any, OpenInfo:any } ) { sangong_packet_define[197].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOverResp( data:{ Times:any } ) { sangong_packet_define[198].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetReq( data:{ BetArea:number, BetScore:number } ) { sangong_packet_define[199].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { sangong_packet_define[200].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOpenResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { sangong_packet_define[201].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { sangong_packet_define[202].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostReq( data:{ IsWant:any } ) { sangong_packet_define[203].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostResp( data:{ UserID:number, IsWant:any } ) { sangong_packet_define[204].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListReq( data:{} ) { sangong_packet_define[205].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { sangong_packet_define[206].sendToChannel(ChannelDefine.game, data, false); }
}

