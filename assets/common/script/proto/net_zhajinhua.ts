//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { zhajinhua } from "./zhajinhua";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum zhajinhua_msgs {
    ZhajinhuaPlayer = 115,
    EnterGameZjhResp = 116,
    ZhajinhuaSceneResp = 117,
    ZhajinhuaStateFreeResp = 118,
    ZhajinhuaStateStartResp = 119,
    ZhajinhuaStatePlayingResp = 120,
    ZhajinhuaStateCompareResp = 121,
    ZhajinhuaStateOverResp = 122,
    ZhajinhuaTurnResp = 123,
    ZhajinhuaDealResp = 124,
    ZhajinhuaHostResp = 125,
    ZhajinhuaReadyReq = 126,
    ZhajinhuaReadyResp = 127,
    ZhajinhuaFollowReq = 128,
    ZhajinhuaFollowResp = 129,
    ZhajinhuaRaiseReq = 130,
    ZhajinhuaRaiseResp = 131,
    ZhajinhuaLookReq = 132,
    ZhajinhuaLookResp = 133,
    ZhajinhuaCompareReq = 134,
    ZhajinhuaCompareResp = 135,
    ZhajinhuaGiveupReq = 136,
    ZhajinhuaGiveupResp = 137,
    ZhajinhuaOverResp = 138,
}

export var zhajinhua_packet_define = {
    115: new LeafWsPacket(115, zhajinhua.ZhajinhuaPlayer, "zhajinhua.ZhajinhuaPlayer"),
    116: new LeafWsPacket(116, zhajinhua.EnterGameZjhResp, "zhajinhua.EnterGameZjhResp"),
    117: new LeafWsPacket(117, zhajinhua.ZhajinhuaSceneResp, "zhajinhua.ZhajinhuaSceneResp"),
    118: new LeafWsPacket(118, zhajinhua.ZhajinhuaStateFreeResp, "zhajinhua.ZhajinhuaStateFreeResp"),
    119: new LeafWsPacket(119, zhajinhua.ZhajinhuaStateStartResp, "zhajinhua.ZhajinhuaStateStartResp"),
    120: new LeafWsPacket(120, zhajinhua.ZhajinhuaStatePlayingResp, "zhajinhua.ZhajinhuaStatePlayingResp"),
    121: new LeafWsPacket(121, zhajinhua.ZhajinhuaStateCompareResp, "zhajinhua.ZhajinhuaStateCompareResp"),
    122: new LeafWsPacket(122, zhajinhua.ZhajinhuaStateOverResp, "zhajinhua.ZhajinhuaStateOverResp"),
    123: new LeafWsPacket(123, zhajinhua.ZhajinhuaTurnResp, "zhajinhua.ZhajinhuaTurnResp"),
    124: new LeafWsPacket(124, zhajinhua.ZhajinhuaDealResp, "zhajinhua.ZhajinhuaDealResp"),
    125: new LeafWsPacket(125, zhajinhua.ZhajinhuaHostResp, "zhajinhua.ZhajinhuaHostResp"),
    126: new LeafWsPacket(126, zhajinhua.ZhajinhuaReadyReq, "zhajinhua.ZhajinhuaReadyReq"),
    127: new LeafWsPacket(127, zhajinhua.ZhajinhuaReadyResp, "zhajinhua.ZhajinhuaReadyResp"),
    128: new LeafWsPacket(128, zhajinhua.ZhajinhuaFollowReq, "zhajinhua.ZhajinhuaFollowReq"),
    129: new LeafWsPacket(129, zhajinhua.ZhajinhuaFollowResp, "zhajinhua.ZhajinhuaFollowResp"),
    130: new LeafWsPacket(130, zhajinhua.ZhajinhuaRaiseReq, "zhajinhua.ZhajinhuaRaiseReq"),
    131: new LeafWsPacket(131, zhajinhua.ZhajinhuaRaiseResp, "zhajinhua.ZhajinhuaRaiseResp"),
    132: new LeafWsPacket(132, zhajinhua.ZhajinhuaLookReq, "zhajinhua.ZhajinhuaLookReq"),
    133: new LeafWsPacket(133, zhajinhua.ZhajinhuaLookResp, "zhajinhua.ZhajinhuaLookResp"),
    134: new LeafWsPacket(134, zhajinhua.ZhajinhuaCompareReq, "zhajinhua.ZhajinhuaCompareReq"),
    135: new LeafWsPacket(135, zhajinhua.ZhajinhuaCompareResp, "zhajinhua.ZhajinhuaCompareResp"),
    136: new LeafWsPacket(136, zhajinhua.ZhajinhuaGiveupReq, "zhajinhua.ZhajinhuaGiveupReq"),
    137: new LeafWsPacket(137, zhajinhua.ZhajinhuaGiveupResp, "zhajinhua.ZhajinhuaGiveupResp"),
    138: new LeafWsPacket(138, zhajinhua.ZhajinhuaOverResp, "zhajinhua.ZhajinhuaOverResp"),
}

export class zhajinhua_request {
    public static ZhajinhuaPlayer( data:{ MyInfo:any, IsSee:any, RecentScore:number, TotalScore:number, Cards:any, Compares:number[], WinScore:number } ) { zhajinhua_packet_define[115].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGameZjhResp( data:{ Player:any, GameID:number } ) { zhajinhua_packet_define[116].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaSceneResp( data:{ TimeStamp:number, TotalScore:number, MinScore:number, Banker:number, Fighters:any[], Inning:string, NoReadyTime:number, LimitScore:number, TurnCount:number } ) { zhajinhua_packet_define[117].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateFreeResp( data:{ Times:any, Inning:string } ) { zhajinhua_packet_define[118].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateStartResp( data:{ Times:any } ) { zhajinhua_packet_define[119].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStatePlayingResp( data:{ Times:any, UserID:number } ) { zhajinhua_packet_define[120].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateCompareResp( data:{ Times:any, Info:any } ) { zhajinhua_packet_define[121].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateOverResp( data:{ Times:any, WinnerId:number } ) { zhajinhua_packet_define[122].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaTurnResp( data:{ TurnCount:number } ) { zhajinhua_packet_define[123].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaDealResp( data:{ UserID:number, Cards:any } ) { zhajinhua_packet_define[124].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaHostResp( data:{ BankerID:number } ) { zhajinhua_packet_define[125].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyReq( data:{ IsReady:any } ) { zhajinhua_packet_define[126].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyResp( data:{ UserId:number } ) { zhajinhua_packet_define[127].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowReq( data:{} ) { zhajinhua_packet_define[128].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowResp( data:{ UserId:number, Score:number } ) { zhajinhua_packet_define[129].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseReq( data:{ Score:number } ) { zhajinhua_packet_define[130].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseResp( data:{ UserId:number, Score:number } ) { zhajinhua_packet_define[131].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookReq( data:{} ) { zhajinhua_packet_define[132].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookResp( data:{ UserId:number, Cards:any } ) { zhajinhua_packet_define[133].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareReq( data:{ HitId:number } ) { zhajinhua_packet_define[134].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareResp( data:{ AttackerId:number, HitId:number, WinnerId:number, AttackerCards:any, HitCards:any } ) { zhajinhua_packet_define[135].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupReq( data:{} ) { zhajinhua_packet_define[136].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupResp( data:{ UserId:number } ) { zhajinhua_packet_define[137].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaOverResp( data:{ WinnerId:number, Infos:any[] } ) { zhajinhua_packet_define[138].sendToChannel(ChannelDefine.game, data, false); }
}

