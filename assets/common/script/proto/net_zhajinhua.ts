//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { zhajinhua } from "./zhajinhua";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum zhajinhua_msgs {
    ZhajinhuaPlayer = 98,
    ZhajinhuaAddPlayerResp = 99,
    ZhajinhuaDelPlayerResp = 100,
    ZhajinhuaSceneResp = 101,
    ZhajinhuaStateFreeResp = 102,
    ZhajinhuaStateStartResp = 103,
    ZhajinhuaStatePlayingResp = 104,
    ZhajinhuaStateOverResp = 105,
    ZhajinhuaHostResp = 106,
    ZhajinhuaReadyReq = 107,
    ZhajinhuaReadyResp = 108,
    ZhajinhuaFollowReq = 109,
    ZhajinhuaFollowResp = 110,
    ZhajinhuaRaiseReq = 111,
    ZhajinhuaRaiseResp = 112,
    ZhajinhuaLookReq = 113,
    ZhajinhuaLookResp = 114,
    ZhajinhuaCompareReq = 115,
    ZhajinhuaCompareResp = 116,
    ZhajinhuaGiveupReq = 117,
    ZhajinhuaGiveupResp = 118,
    ZhajinhuaOverResp = 119,
}

export var zhajinhua_packet_define = {
    98: new LeafWsPacket(98, zhajinhua.ZhajinhuaPlayer, "zhajinhua.ZhajinhuaPlayer"),
    99: new LeafWsPacket(99, zhajinhua.ZhajinhuaAddPlayerResp, "zhajinhua.ZhajinhuaAddPlayerResp"),
    100: new LeafWsPacket(100, zhajinhua.ZhajinhuaDelPlayerResp, "zhajinhua.ZhajinhuaDelPlayerResp"),
    101: new LeafWsPacket(101, zhajinhua.ZhajinhuaSceneResp, "zhajinhua.ZhajinhuaSceneResp"),
    102: new LeafWsPacket(102, zhajinhua.ZhajinhuaStateFreeResp, "zhajinhua.ZhajinhuaStateFreeResp"),
    103: new LeafWsPacket(103, zhajinhua.ZhajinhuaStateStartResp, "zhajinhua.ZhajinhuaStateStartResp"),
    104: new LeafWsPacket(104, zhajinhua.ZhajinhuaStatePlayingResp, "zhajinhua.ZhajinhuaStatePlayingResp"),
    105: new LeafWsPacket(105, zhajinhua.ZhajinhuaStateOverResp, "zhajinhua.ZhajinhuaStateOverResp"),
    106: new LeafWsPacket(106, zhajinhua.ZhajinhuaHostResp, "zhajinhua.ZhajinhuaHostResp"),
    107: new LeafWsPacket(107, zhajinhua.ZhajinhuaReadyReq, "zhajinhua.ZhajinhuaReadyReq"),
    108: new LeafWsPacket(108, zhajinhua.ZhajinhuaReadyResp, "zhajinhua.ZhajinhuaReadyResp"),
    109: new LeafWsPacket(109, zhajinhua.ZhajinhuaFollowReq, "zhajinhua.ZhajinhuaFollowReq"),
    110: new LeafWsPacket(110, zhajinhua.ZhajinhuaFollowResp, "zhajinhua.ZhajinhuaFollowResp"),
    111: new LeafWsPacket(111, zhajinhua.ZhajinhuaRaiseReq, "zhajinhua.ZhajinhuaRaiseReq"),
    112: new LeafWsPacket(112, zhajinhua.ZhajinhuaRaiseResp, "zhajinhua.ZhajinhuaRaiseResp"),
    113: new LeafWsPacket(113, zhajinhua.ZhajinhuaLookReq, "zhajinhua.ZhajinhuaLookReq"),
    114: new LeafWsPacket(114, zhajinhua.ZhajinhuaLookResp, "zhajinhua.ZhajinhuaLookResp"),
    115: new LeafWsPacket(115, zhajinhua.ZhajinhuaCompareReq, "zhajinhua.ZhajinhuaCompareReq"),
    116: new LeafWsPacket(116, zhajinhua.ZhajinhuaCompareResp, "zhajinhua.ZhajinhuaCompareResp"),
    117: new LeafWsPacket(117, zhajinhua.ZhajinhuaGiveupReq, "zhajinhua.ZhajinhuaGiveupReq"),
    118: new LeafWsPacket(118, zhajinhua.ZhajinhuaGiveupResp, "zhajinhua.ZhajinhuaGiveupResp"),
    119: new LeafWsPacket(119, zhajinhua.ZhajinhuaOverResp, "zhajinhua.ZhajinhuaOverResp"),
}

export class zhajinhua_request {
    public static ZhajinhuaPlayer( data:{ UserId:number, SeatId:number, FightState:number, IsSee:any, Gold:number, RecentBetMoney:number, TotalBetMoney:number, Cards:any } ) { zhajinhua_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaAddPlayerResp( data:{ Player:any } ) { zhajinhua_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaDelPlayerResp( data:{ UserId:number } ) { zhajinhua_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaSceneResp( data:{ TimeStamp:number, TotalBet:number, MinBet:number, CurHost:number, Fighters:any[] } ) { zhajinhua_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateFreeResp( data:{ Times:any } ) { zhajinhua_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateStartResp( data:{ Times:any } ) { zhajinhua_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStatePlayingResp( data:{ Times:any, UserID:number } ) { zhajinhua_packet_define[104].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateOverResp( data:{ Times:any } ) { zhajinhua_packet_define[105].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaHostResp( data:{ CurHost:number } ) { zhajinhua_packet_define[106].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyReq( data:{ IsReady:any } ) { zhajinhua_packet_define[107].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyResp( data:{ UserId:number } ) { zhajinhua_packet_define[108].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowReq( data:{} ) { zhajinhua_packet_define[109].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowResp( data:{ UserId:number, Money:number } ) { zhajinhua_packet_define[110].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseReq( data:{ Money:number } ) { zhajinhua_packet_define[111].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseResp( data:{ UserId:number, Money:number } ) { zhajinhua_packet_define[112].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookReq( data:{} ) { zhajinhua_packet_define[113].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookResp( data:{ UserId:number, Cards:any } ) { zhajinhua_packet_define[114].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareReq( data:{ HitId:number } ) { zhajinhua_packet_define[115].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareResp( data:{ AttackerId:number, HitId:number, WinnerId:number, AttackerCards:any, HitCards:any } ) { zhajinhua_packet_define[116].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupReq( data:{} ) { zhajinhua_packet_define[117].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupResp( data:{ UserId:number } ) { zhajinhua_packet_define[118].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaOverResp( data:{ WinnerId:number, Infos:any[] } ) { zhajinhua_packet_define[119].sendToChannel(ChannelDefine.game, data, false); }
}

