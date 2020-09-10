//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { sangong } from "./sangong";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum sangong_msgs {
    SangongSceneResp = 192,
    SangongStateFreeResp = 193,
    SangongStateStartResp = 194,
    SangongStatePlayingResp = 195,
    SangongStateOpenResp = 196,
    SangongStateOverResp = 197,
    SangongBetReq = 198,
    SangongBetResp = 199,
    SangongOpenResp = 200,
    SangongOverResp = 201,
    SangongHostReq = 202,
    SangongHostResp = 203,
    SangongHostListReq = 204,
    SangongHostListResp = 205,
}

export var sangong_packet_define = {
    192: new LeafWsPacket(192, sangong.SangongSceneResp, "sangong.SangongSceneResp"),
    193: new LeafWsPacket(193, sangong.SangongStateFreeResp, "sangong.SangongStateFreeResp"),
    194: new LeafWsPacket(194, sangong.SangongStateStartResp, "sangong.SangongStateStartResp"),
    195: new LeafWsPacket(195, sangong.SangongStatePlayingResp, "sangong.SangongStatePlayingResp"),
    196: new LeafWsPacket(196, sangong.SangongStateOpenResp, "sangong.SangongStateOpenResp"),
    197: new LeafWsPacket(197, sangong.SangongStateOverResp, "sangong.SangongStateOverResp"),
    198: new LeafWsPacket(198, sangong.SangongBetReq, "sangong.SangongBetReq"),
    199: new LeafWsPacket(199, sangong.SangongBetResp, "sangong.SangongBetResp"),
    200: new LeafWsPacket(200, sangong.SangongOpenResp, "sangong.SangongOpenResp"),
    201: new LeafWsPacket(201, sangong.SangongOverResp, "sangong.SangongOverResp"),
    202: new LeafWsPacket(202, sangong.SangongHostReq, "sangong.SangongHostReq"),
    203: new LeafWsPacket(203, sangong.SangongHostResp, "sangong.SangongHostResp"),
    204: new LeafWsPacket(204, sangong.SangongHostListReq, "sangong.SangongHostListReq"),
    205: new LeafWsPacket(205, sangong.SangongHostListResp, "sangong.SangongHostListResp"),
}

export class sangong_request {
    public static SangongSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { sangong_packet_define[192].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateFreeResp( data:{ Times:any } ) { sangong_packet_define[193].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateStartResp( data:{ Times:any, HostID:number } ) { sangong_packet_define[194].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStatePlayingResp( data:{ Times:any } ) { sangong_packet_define[195].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOpenResp( data:{ Times:any, OpenInfo:any } ) { sangong_packet_define[196].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongStateOverResp( data:{ Times:any } ) { sangong_packet_define[197].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetReq( data:{ BetArea:number, BetScore:number } ) { sangong_packet_define[198].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { sangong_packet_define[199].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOpenResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { sangong_packet_define[200].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { sangong_packet_define[201].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostReq( data:{ IsWant:any } ) { sangong_packet_define[202].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostResp( data:{ UserID:number, IsWant:any } ) { sangong_packet_define[203].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListReq( data:{} ) { sangong_packet_define[204].sendToChannel(ChannelDefine.game, data, false); }
    public static SangongHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { sangong_packet_define[205].sendToChannel(ChannelDefine.game, data, false); }
}

