//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { zhajinhua } from "./zhajinhua";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum zhajinhua_msgs {
    ZhajinhuaPlayer = 110,
    EnterGameZjhResp = 111,
    ZhajinhuaSceneResp = 112,
    ZhajinhuaStateFreeResp = 113,
    ZhajinhuaStateStartResp = 114,
    ZhajinhuaStatePlayingResp = 115,
    ZhajinhuaStateCompareResp = 116,
    ZhajinhuaStateOverResp = 117,
    ZhajinhuaTurnResp = 118,
    ZhajinhuaDealResp = 119,
    ZhajinhuaHostResp = 120,
    ZhajinhuaReadyReq = 121,
    ZhajinhuaReadyResp = 122,
    ZhajinhuaFollowReq = 123,
    ZhajinhuaFollowResp = 124,
    ZhajinhuaRaiseReq = 125,
    ZhajinhuaRaiseResp = 126,
    ZhajinhuaLookReq = 127,
    ZhajinhuaLookResp = 128,
    ZhajinhuaCompareReq = 129,
    ZhajinhuaCompareResp = 130,
    ZhajinhuaGiveupReq = 131,
    ZhajinhuaGiveupResp = 132,
    ZhajinhuaOverResp = 133,
}

export var zhajinhua_packet_define = {
    110: new LeafWsPacket(110, zhajinhua.ZhajinhuaPlayer, "zhajinhua.ZhajinhuaPlayer"),
    111: new LeafWsPacket(111, zhajinhua.EnterGameZjhResp, "zhajinhua.EnterGameZjhResp"),
    112: new LeafWsPacket(112, zhajinhua.ZhajinhuaSceneResp, "zhajinhua.ZhajinhuaSceneResp"),
    113: new LeafWsPacket(113, zhajinhua.ZhajinhuaStateFreeResp, "zhajinhua.ZhajinhuaStateFreeResp"),
    114: new LeafWsPacket(114, zhajinhua.ZhajinhuaStateStartResp, "zhajinhua.ZhajinhuaStateStartResp"),
    115: new LeafWsPacket(115, zhajinhua.ZhajinhuaStatePlayingResp, "zhajinhua.ZhajinhuaStatePlayingResp"),
    116: new LeafWsPacket(116, zhajinhua.ZhajinhuaStateCompareResp, "zhajinhua.ZhajinhuaStateCompareResp"),
    117: new LeafWsPacket(117, zhajinhua.ZhajinhuaStateOverResp, "zhajinhua.ZhajinhuaStateOverResp"),
    118: new LeafWsPacket(118, zhajinhua.ZhajinhuaTurnResp, "zhajinhua.ZhajinhuaTurnResp"),
    119: new LeafWsPacket(119, zhajinhua.ZhajinhuaDealResp, "zhajinhua.ZhajinhuaDealResp"),
    120: new LeafWsPacket(120, zhajinhua.ZhajinhuaHostResp, "zhajinhua.ZhajinhuaHostResp"),
    121: new LeafWsPacket(121, zhajinhua.ZhajinhuaReadyReq, "zhajinhua.ZhajinhuaReadyReq"),
    122: new LeafWsPacket(122, zhajinhua.ZhajinhuaReadyResp, "zhajinhua.ZhajinhuaReadyResp"),
    123: new LeafWsPacket(123, zhajinhua.ZhajinhuaFollowReq, "zhajinhua.ZhajinhuaFollowReq"),
    124: new LeafWsPacket(124, zhajinhua.ZhajinhuaFollowResp, "zhajinhua.ZhajinhuaFollowResp"),
    125: new LeafWsPacket(125, zhajinhua.ZhajinhuaRaiseReq, "zhajinhua.ZhajinhuaRaiseReq"),
    126: new LeafWsPacket(126, zhajinhua.ZhajinhuaRaiseResp, "zhajinhua.ZhajinhuaRaiseResp"),
    127: new LeafWsPacket(127, zhajinhua.ZhajinhuaLookReq, "zhajinhua.ZhajinhuaLookReq"),
    128: new LeafWsPacket(128, zhajinhua.ZhajinhuaLookResp, "zhajinhua.ZhajinhuaLookResp"),
    129: new LeafWsPacket(129, zhajinhua.ZhajinhuaCompareReq, "zhajinhua.ZhajinhuaCompareReq"),
    130: new LeafWsPacket(130, zhajinhua.ZhajinhuaCompareResp, "zhajinhua.ZhajinhuaCompareResp"),
    131: new LeafWsPacket(131, zhajinhua.ZhajinhuaGiveupReq, "zhajinhua.ZhajinhuaGiveupReq"),
    132: new LeafWsPacket(132, zhajinhua.ZhajinhuaGiveupResp, "zhajinhua.ZhajinhuaGiveupResp"),
    133: new LeafWsPacket(133, zhajinhua.ZhajinhuaOverResp, "zhajinhua.ZhajinhuaOverResp"),
}

export class zhajinhua_request {
    public static ZhajinhuaPlayer( data:{ MyInfo:any, IsSee:any, RecentScore:number, TotalScore:number, Cards:any, Compares:number[], WinScore:number } ) { zhajinhua_packet_define[110].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameZjhResp( data:{ Player:any, GameID:number } ) { zhajinhua_packet_define[111].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaSceneResp( data:{ TimeStamp:number, TotalScore:number, MinScore:number, Banker:number, Fighters:any[], Inning:string, NoReadyTime:number, LimitScore:number, TurnCount:number } ) { zhajinhua_packet_define[112].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateFreeResp( data:{ Times:any, Inning:string } ) { zhajinhua_packet_define[113].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateStartResp( data:{ Times:any } ) { zhajinhua_packet_define[114].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStatePlayingResp( data:{ Times:any, UserID:number } ) { zhajinhua_packet_define[115].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateCompareResp( data:{ Times:any, Info:any } ) { zhajinhua_packet_define[116].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateOverResp( data:{ Times:any, WinnerId:number } ) { zhajinhua_packet_define[117].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaTurnResp( data:{ TurnCount:number } ) { zhajinhua_packet_define[118].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaDealResp( data:{ UserID:number, Cards:any } ) { zhajinhua_packet_define[119].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaHostResp( data:{ BankerID:number } ) { zhajinhua_packet_define[120].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyReq( data:{ IsReady:any } ) { zhajinhua_packet_define[121].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyResp( data:{ UserId:number } ) { zhajinhua_packet_define[122].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowReq( data:{} ) { zhajinhua_packet_define[123].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowResp( data:{ UserId:number, Score:number } ) { zhajinhua_packet_define[124].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseReq( data:{ Score:number } ) { zhajinhua_packet_define[125].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseResp( data:{ UserId:number, Score:number } ) { zhajinhua_packet_define[126].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookReq( data:{} ) { zhajinhua_packet_define[127].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookResp( data:{ UserId:number, Cards:any } ) { zhajinhua_packet_define[128].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareReq( data:{ HitId:number } ) { zhajinhua_packet_define[129].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareResp( data:{ AttackerId:number, HitId:number, WinnerId:number, AttackerCards:any, HitCards:any } ) { zhajinhua_packet_define[130].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupReq( data:{} ) { zhajinhua_packet_define[131].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupResp( data:{ UserId:number } ) { zhajinhua_packet_define[132].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaOverResp( data:{ WinnerId:number, Infos:any[] } ) { zhajinhua_packet_define[133].sendToChannel(ChannelDefine.game, data, false); }
}

