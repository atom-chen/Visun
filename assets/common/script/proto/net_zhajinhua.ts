//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { zhajinhua } from "./zhajinhua";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum zhajinhua_msgs {
    ZhajinhuaPlayer = 101,
    EnterGameZjhResp = 102,
    ExitGameZjhResp = 103,
    ZhajinhuaSceneResp = 104,
    ZhajinhuaStateFreeResp = 105,
    ZhajinhuaStateStartResp = 106,
    ZhajinhuaStatePlayingResp = 107,
    ZhajinhuaStateCompareResp = 108,
    ZhajinhuaStateOverResp = 109,
    ZhajinhuaDealResp = 110,
    ZhajinhuaHostResp = 111,
    ZhajinhuaReadyReq = 112,
    ZhajinhuaReadyResp = 113,
    ZhajinhuaFollowReq = 114,
    ZhajinhuaFollowResp = 115,
    ZhajinhuaRaiseReq = 116,
    ZhajinhuaRaiseResp = 117,
    ZhajinhuaLookReq = 118,
    ZhajinhuaLookResp = 119,
    ZhajinhuaCompareReq = 120,
    ZhajinhuaCompareResp = 121,
    ZhajinhuaGiveupReq = 122,
    ZhajinhuaGiveupResp = 123,
    ZhajinhuaOverResp = 124,
}

export var zhajinhua_packet_define = {
    101: new LeafWsPacket(101, zhajinhua.ZhajinhuaPlayer, "zhajinhua.ZhajinhuaPlayer"),
    102: new LeafWsPacket(102, zhajinhua.EnterGameZjhResp, "zhajinhua.EnterGameZjhResp"),
    103: new LeafWsPacket(103, zhajinhua.ExitGameZjhResp, "zhajinhua.ExitGameZjhResp"),
    104: new LeafWsPacket(104, zhajinhua.ZhajinhuaSceneResp, "zhajinhua.ZhajinhuaSceneResp"),
    105: new LeafWsPacket(105, zhajinhua.ZhajinhuaStateFreeResp, "zhajinhua.ZhajinhuaStateFreeResp"),
    106: new LeafWsPacket(106, zhajinhua.ZhajinhuaStateStartResp, "zhajinhua.ZhajinhuaStateStartResp"),
    107: new LeafWsPacket(107, zhajinhua.ZhajinhuaStatePlayingResp, "zhajinhua.ZhajinhuaStatePlayingResp"),
    108: new LeafWsPacket(108, zhajinhua.ZhajinhuaStateCompareResp, "zhajinhua.ZhajinhuaStateCompareResp"),
    109: new LeafWsPacket(109, zhajinhua.ZhajinhuaStateOverResp, "zhajinhua.ZhajinhuaStateOverResp"),
    110: new LeafWsPacket(110, zhajinhua.ZhajinhuaDealResp, "zhajinhua.ZhajinhuaDealResp"),
    111: new LeafWsPacket(111, zhajinhua.ZhajinhuaHostResp, "zhajinhua.ZhajinhuaHostResp"),
    112: new LeafWsPacket(112, zhajinhua.ZhajinhuaReadyReq, "zhajinhua.ZhajinhuaReadyReq"),
    113: new LeafWsPacket(113, zhajinhua.ZhajinhuaReadyResp, "zhajinhua.ZhajinhuaReadyResp"),
    114: new LeafWsPacket(114, zhajinhua.ZhajinhuaFollowReq, "zhajinhua.ZhajinhuaFollowReq"),
    115: new LeafWsPacket(115, zhajinhua.ZhajinhuaFollowResp, "zhajinhua.ZhajinhuaFollowResp"),
    116: new LeafWsPacket(116, zhajinhua.ZhajinhuaRaiseReq, "zhajinhua.ZhajinhuaRaiseReq"),
    117: new LeafWsPacket(117, zhajinhua.ZhajinhuaRaiseResp, "zhajinhua.ZhajinhuaRaiseResp"),
    118: new LeafWsPacket(118, zhajinhua.ZhajinhuaLookReq, "zhajinhua.ZhajinhuaLookReq"),
    119: new LeafWsPacket(119, zhajinhua.ZhajinhuaLookResp, "zhajinhua.ZhajinhuaLookResp"),
    120: new LeafWsPacket(120, zhajinhua.ZhajinhuaCompareReq, "zhajinhua.ZhajinhuaCompareReq"),
    121: new LeafWsPacket(121, zhajinhua.ZhajinhuaCompareResp, "zhajinhua.ZhajinhuaCompareResp"),
    122: new LeafWsPacket(122, zhajinhua.ZhajinhuaGiveupReq, "zhajinhua.ZhajinhuaGiveupReq"),
    123: new LeafWsPacket(123, zhajinhua.ZhajinhuaGiveupResp, "zhajinhua.ZhajinhuaGiveupResp"),
    124: new LeafWsPacket(124, zhajinhua.ZhajinhuaOverResp, "zhajinhua.ZhajinhuaOverResp"),
}

export class zhajinhua_request {
    public static ZhajinhuaPlayer( data:{ UserId:number, Name:string, Gold:number, SeatId:number, SeatState:number, IsSee:any, RecentScore:number, TotalScore:number, Cards:any } ) { zhajinhua_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameZjhResp( data:{ Player:any } ) { zhajinhua_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static ExitGameZjhResp( data:{ UserId:number } ) { zhajinhua_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaSceneResp( data:{ TimeStamp:number, TotalScore:number, MinScore:number, Banker:number, Fighters:any[], Inning:string } ) { zhajinhua_packet_define[104].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateFreeResp( data:{ Times:any } ) { zhajinhua_packet_define[105].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateStartResp( data:{ Times:any } ) { zhajinhua_packet_define[106].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStatePlayingResp( data:{ Times:any, UserID:number } ) { zhajinhua_packet_define[107].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateCompareResp( data:{ Times:any, Info:any } ) { zhajinhua_packet_define[108].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateOverResp( data:{ Times:any, WinnerId:number } ) { zhajinhua_packet_define[109].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaDealResp( data:{ UserID:number, Cards:any } ) { zhajinhua_packet_define[110].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaHostResp( data:{ BankerID:number } ) { zhajinhua_packet_define[111].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyReq( data:{ IsReady:any } ) { zhajinhua_packet_define[112].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyResp( data:{ UserId:number } ) { zhajinhua_packet_define[113].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowReq( data:{} ) { zhajinhua_packet_define[114].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowResp( data:{ UserId:number, Score:number } ) { zhajinhua_packet_define[115].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseReq( data:{ Score:number } ) { zhajinhua_packet_define[116].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseResp( data:{ UserId:number, Score:number } ) { zhajinhua_packet_define[117].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookReq( data:{} ) { zhajinhua_packet_define[118].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookResp( data:{ UserId:number } ) { zhajinhua_packet_define[119].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareReq( data:{ HitId:number } ) { zhajinhua_packet_define[120].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareResp( data:{ AttackerId:number, HitId:number, WinnerId:number, AttackerCards:any, HitCards:any } ) { zhajinhua_packet_define[121].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupReq( data:{} ) { zhajinhua_packet_define[122].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupResp( data:{ UserId:number } ) { zhajinhua_packet_define[123].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaOverResp( data:{ WinnerId:number, Infos:any[] } ) { zhajinhua_packet_define[124].sendToChannel(ChannelDefine.game, data, false); }
}

