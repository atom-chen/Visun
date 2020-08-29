//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { zhajinhua } from "./zhajinhua";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum zhajinhua_msgs {
    ZhajinhuaPlayer = 95,
    ZhajinhuaSceneResp = 96,
    ZhajinhuaStateFreeResp = 97,
    ZhajinhuaStateStartResp = 98,
    ZhajinhuaStatePlayingResp = 99,
    ZhajinhuaStateOverResp = 100,
    ZhajinhuaHostResp = 101,
    ZhajinhuaReadyReq = 102,
    ZhajinhuaReadyResp = 103,
    ZhajinhuaFollowReq = 104,
    ZhajinhuaFollowResp = 105,
    ZhajinhuaRaiseReq = 106,
    ZhajinhuaRaiseResp = 107,
    ZhajinhuaLookReq = 108,
    ZhajinhuaLookResp = 109,
    ZhajinhuaCompareReq = 110,
    ZhajinhuaCompareResp = 111,
    ZhajinhuaGiveupReq = 112,
    ZhajinhuaGiveupResp = 113,
    ZhajinhuaOverResp = 114,
}

export var zhajinhua_packet_define = {
    95: new LeafWsPacket(95, zhajinhua.ZhajinhuaPlayer, "zhajinhua.ZhajinhuaPlayer"),
    96: new LeafWsPacket(96, zhajinhua.ZhajinhuaSceneResp, "zhajinhua.ZhajinhuaSceneResp"),
    97: new LeafWsPacket(97, zhajinhua.ZhajinhuaStateFreeResp, "zhajinhua.ZhajinhuaStateFreeResp"),
    98: new LeafWsPacket(98, zhajinhua.ZhajinhuaStateStartResp, "zhajinhua.ZhajinhuaStateStartResp"),
    99: new LeafWsPacket(99, zhajinhua.ZhajinhuaStatePlayingResp, "zhajinhua.ZhajinhuaStatePlayingResp"),
    100: new LeafWsPacket(100, zhajinhua.ZhajinhuaStateOverResp, "zhajinhua.ZhajinhuaStateOverResp"),
    101: new LeafWsPacket(101, zhajinhua.ZhajinhuaHostResp, "zhajinhua.ZhajinhuaHostResp"),
    102: new LeafWsPacket(102, zhajinhua.ZhajinhuaReadyReq, "zhajinhua.ZhajinhuaReadyReq"),
    103: new LeafWsPacket(103, zhajinhua.ZhajinhuaReadyResp, "zhajinhua.ZhajinhuaReadyResp"),
    104: new LeafWsPacket(104, zhajinhua.ZhajinhuaFollowReq, "zhajinhua.ZhajinhuaFollowReq"),
    105: new LeafWsPacket(105, zhajinhua.ZhajinhuaFollowResp, "zhajinhua.ZhajinhuaFollowResp"),
    106: new LeafWsPacket(106, zhajinhua.ZhajinhuaRaiseReq, "zhajinhua.ZhajinhuaRaiseReq"),
    107: new LeafWsPacket(107, zhajinhua.ZhajinhuaRaiseResp, "zhajinhua.ZhajinhuaRaiseResp"),
    108: new LeafWsPacket(108, zhajinhua.ZhajinhuaLookReq, "zhajinhua.ZhajinhuaLookReq"),
    109: new LeafWsPacket(109, zhajinhua.ZhajinhuaLookResp, "zhajinhua.ZhajinhuaLookResp"),
    110: new LeafWsPacket(110, zhajinhua.ZhajinhuaCompareReq, "zhajinhua.ZhajinhuaCompareReq"),
    111: new LeafWsPacket(111, zhajinhua.ZhajinhuaCompareResp, "zhajinhua.ZhajinhuaCompareResp"),
    112: new LeafWsPacket(112, zhajinhua.ZhajinhuaGiveupReq, "zhajinhua.ZhajinhuaGiveupReq"),
    113: new LeafWsPacket(113, zhajinhua.ZhajinhuaGiveupResp, "zhajinhua.ZhajinhuaGiveupResp"),
    114: new LeafWsPacket(114, zhajinhua.ZhajinhuaOverResp, "zhajinhua.ZhajinhuaOverResp"),
}

export class zhajinhua_request {
    public static ZhajinhuaPlayer( data:{ UserId:number, SeatId:number, FightState:number, IsSee:any, RecentBetMoney:number, TotalBetMoney:number, Cards:any } ) { zhajinhua_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaSceneResp( data:{ TimeStamp:number, TotalBet:number, MinBet:number, CurHost:number, Fighters:any[] } ) { zhajinhua_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateFreeResp( data:{ Times:any } ) { zhajinhua_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateStartResp( data:{ Times:any } ) { zhajinhua_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStatePlayingResp( data:{ Times:any, UserID:number } ) { zhajinhua_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateOverResp( data:{ Times:any } ) { zhajinhua_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaHostResp( data:{ CurHost:number } ) { zhajinhua_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyReq( data:{ IsReady:any } ) { zhajinhua_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyResp( data:{ UserId:number } ) { zhajinhua_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowReq( data:{} ) { zhajinhua_packet_define[104].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowResp( data:{ UserId:number, Money:number } ) { zhajinhua_packet_define[105].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseReq( data:{ Money:number } ) { zhajinhua_packet_define[106].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseResp( data:{ UserId:number, Money:number } ) { zhajinhua_packet_define[107].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookReq( data:{} ) { zhajinhua_packet_define[108].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookResp( data:{ UserId:number, Cards:any } ) { zhajinhua_packet_define[109].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareReq( data:{ HitId:number } ) { zhajinhua_packet_define[110].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareResp( data:{ AttackerId:number, HitId:number, WinnerId:number, AttackerCards:any, HitCards:any } ) { zhajinhua_packet_define[111].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupReq( data:{} ) { zhajinhua_packet_define[112].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupResp( data:{ UserId:number } ) { zhajinhua_packet_define[113].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaOverResp( data:{ WinnerId:number, Infos:any[] } ) { zhajinhua_packet_define[114].sendToChannel(ChannelDefine.game, data, false); }
}

