//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { zhajinhua } from "./zhajinhua";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum zhajinhua_msgs {
    ZhajinhuaPlayer = 105,
    EnterGameZjhResp = 106,
    ZhajinhuaSceneResp = 107,
    ZhajinhuaStateFreeResp = 108,
    ZhajinhuaStateStartResp = 109,
    ZhajinhuaStatePlayingResp = 110,
    ZhajinhuaStateCompareResp = 111,
    ZhajinhuaStateOverResp = 112,
    ZhajinhuaTurnResp = 113,
    ZhajinhuaDealResp = 114,
    ZhajinhuaHostResp = 115,
    ZhajinhuaReadyReq = 116,
    ZhajinhuaReadyResp = 117,
    ZhajinhuaFollowReq = 118,
    ZhajinhuaFollowResp = 119,
    ZhajinhuaRaiseReq = 120,
    ZhajinhuaRaiseResp = 121,
    ZhajinhuaLookReq = 122,
    ZhajinhuaLookResp = 123,
    ZhajinhuaCompareReq = 124,
    ZhajinhuaCompareResp = 125,
    ZhajinhuaGiveupReq = 126,
    ZhajinhuaGiveupResp = 127,
    ZhajinhuaOverResp = 128,
}

export var zhajinhua_packet_define = {
    105: new LeafWsPacket(105, zhajinhua.ZhajinhuaPlayer, "zhajinhua.ZhajinhuaPlayer"),
    106: new LeafWsPacket(106, zhajinhua.EnterGameZjhResp, "zhajinhua.EnterGameZjhResp"),
    107: new LeafWsPacket(107, zhajinhua.ZhajinhuaSceneResp, "zhajinhua.ZhajinhuaSceneResp"),
    108: new LeafWsPacket(108, zhajinhua.ZhajinhuaStateFreeResp, "zhajinhua.ZhajinhuaStateFreeResp"),
    109: new LeafWsPacket(109, zhajinhua.ZhajinhuaStateStartResp, "zhajinhua.ZhajinhuaStateStartResp"),
    110: new LeafWsPacket(110, zhajinhua.ZhajinhuaStatePlayingResp, "zhajinhua.ZhajinhuaStatePlayingResp"),
    111: new LeafWsPacket(111, zhajinhua.ZhajinhuaStateCompareResp, "zhajinhua.ZhajinhuaStateCompareResp"),
    112: new LeafWsPacket(112, zhajinhua.ZhajinhuaStateOverResp, "zhajinhua.ZhajinhuaStateOverResp"),
    113: new LeafWsPacket(113, zhajinhua.ZhajinhuaTurnResp, "zhajinhua.ZhajinhuaTurnResp"),
    114: new LeafWsPacket(114, zhajinhua.ZhajinhuaDealResp, "zhajinhua.ZhajinhuaDealResp"),
    115: new LeafWsPacket(115, zhajinhua.ZhajinhuaHostResp, "zhajinhua.ZhajinhuaHostResp"),
    116: new LeafWsPacket(116, zhajinhua.ZhajinhuaReadyReq, "zhajinhua.ZhajinhuaReadyReq"),
    117: new LeafWsPacket(117, zhajinhua.ZhajinhuaReadyResp, "zhajinhua.ZhajinhuaReadyResp"),
    118: new LeafWsPacket(118, zhajinhua.ZhajinhuaFollowReq, "zhajinhua.ZhajinhuaFollowReq"),
    119: new LeafWsPacket(119, zhajinhua.ZhajinhuaFollowResp, "zhajinhua.ZhajinhuaFollowResp"),
    120: new LeafWsPacket(120, zhajinhua.ZhajinhuaRaiseReq, "zhajinhua.ZhajinhuaRaiseReq"),
    121: new LeafWsPacket(121, zhajinhua.ZhajinhuaRaiseResp, "zhajinhua.ZhajinhuaRaiseResp"),
    122: new LeafWsPacket(122, zhajinhua.ZhajinhuaLookReq, "zhajinhua.ZhajinhuaLookReq"),
    123: new LeafWsPacket(123, zhajinhua.ZhajinhuaLookResp, "zhajinhua.ZhajinhuaLookResp"),
    124: new LeafWsPacket(124, zhajinhua.ZhajinhuaCompareReq, "zhajinhua.ZhajinhuaCompareReq"),
    125: new LeafWsPacket(125, zhajinhua.ZhajinhuaCompareResp, "zhajinhua.ZhajinhuaCompareResp"),
    126: new LeafWsPacket(126, zhajinhua.ZhajinhuaGiveupReq, "zhajinhua.ZhajinhuaGiveupReq"),
    127: new LeafWsPacket(127, zhajinhua.ZhajinhuaGiveupResp, "zhajinhua.ZhajinhuaGiveupResp"),
    128: new LeafWsPacket(128, zhajinhua.ZhajinhuaOverResp, "zhajinhua.ZhajinhuaOverResp"),
}

export class zhajinhua_request {
    public static ZhajinhuaPlayer( data:{ MyInfo:any, IsSee:any, RecentScore:number, TotalScore:number, Cards:any, Compares:number[], WinScore:number } ) { zhajinhua_packet_define[105].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameZjhResp( data:{ Player:any, GameID:number } ) { zhajinhua_packet_define[106].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaSceneResp( data:{ TimeStamp:number, TotalScore:number, MinScore:number, Banker:number, Fighters:any[], Inning:string, NoReadyTime:number, LimitScore:number, TurnCount:number } ) { zhajinhua_packet_define[107].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateFreeResp( data:{ Times:any, Inning:string } ) { zhajinhua_packet_define[108].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateStartResp( data:{ Times:any } ) { zhajinhua_packet_define[109].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStatePlayingResp( data:{ Times:any, UserID:number } ) { zhajinhua_packet_define[110].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateCompareResp( data:{ Times:any, Info:any } ) { zhajinhua_packet_define[111].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateOverResp( data:{ Times:any, WinnerId:number } ) { zhajinhua_packet_define[112].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaTurnResp( data:{ TurnCount:number } ) { zhajinhua_packet_define[113].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaDealResp( data:{ UserID:number, Cards:any } ) { zhajinhua_packet_define[114].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaHostResp( data:{ BankerID:number } ) { zhajinhua_packet_define[115].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyReq( data:{ IsReady:any } ) { zhajinhua_packet_define[116].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyResp( data:{ UserId:number } ) { zhajinhua_packet_define[117].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowReq( data:{} ) { zhajinhua_packet_define[118].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowResp( data:{ UserId:number, Score:number } ) { zhajinhua_packet_define[119].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseReq( data:{ Score:number } ) { zhajinhua_packet_define[120].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseResp( data:{ UserId:number, Score:number } ) { zhajinhua_packet_define[121].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookReq( data:{} ) { zhajinhua_packet_define[122].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookResp( data:{ UserId:number, Cards:any } ) { zhajinhua_packet_define[123].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareReq( data:{ HitId:number } ) { zhajinhua_packet_define[124].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareResp( data:{ AttackerId:number, HitId:number, WinnerId:number, AttackerCards:any, HitCards:any } ) { zhajinhua_packet_define[125].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupReq( data:{} ) { zhajinhua_packet_define[126].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupResp( data:{ UserId:number } ) { zhajinhua_packet_define[127].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaOverResp( data:{ WinnerId:number, Infos:any[] } ) { zhajinhua_packet_define[128].sendToChannel(ChannelDefine.game, data, false); }
}

