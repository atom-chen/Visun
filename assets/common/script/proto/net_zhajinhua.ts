//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { zhajinhua } from "./zhajinhua";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum zhajinhua_msgs {
    FighterInfo = 90,
    ZhajinhuaScene = 91,
    ZhajinhuaStateReady = 92,
    ZhajinhuaStateFree = 93,
    ZhajinhuaStateStart = 94,
    ZhajinhuaStatePlaying = 95,
    ZhajinhuaStateOver = 96,
    ZhajinhuaHost = 97,
    ZhajinhuaReadyReq = 98,
    ZhajinhuaReadyResp = 99,
    ZhajinhuaFollowReq = 100,
    ZhajinhuaFollowResp = 101,
    ZhajinhuaRaiseReq = 102,
    ZhajinhuaRaiseResp = 103,
    ZhajinhuaLookReq = 104,
    ZhajinhuaLookResp = 105,
    ZhajinhuaCompareReq = 106,
    ZhajinhuaCompareResp = 107,
    ZhajinhuaGiveupReq = 108,
    ZhajinhuaGiveupResp = 109,
    ZhajinhuaOver = 110,
}

export var zhajinhua_packet_define = {
    90: new LeafWsPacket(90, zhajinhua.FighterInfo, "zhajinhua.FighterInfo"),
    91: new LeafWsPacket(91, zhajinhua.ZhajinhuaScene, "zhajinhua.ZhajinhuaScene"),
    92: new LeafWsPacket(92, zhajinhua.ZhajinhuaStateReady, "zhajinhua.ZhajinhuaStateReady"),
    93: new LeafWsPacket(93, zhajinhua.ZhajinhuaStateFree, "zhajinhua.ZhajinhuaStateFree"),
    94: new LeafWsPacket(94, zhajinhua.ZhajinhuaStateStart, "zhajinhua.ZhajinhuaStateStart"),
    95: new LeafWsPacket(95, zhajinhua.ZhajinhuaStatePlaying, "zhajinhua.ZhajinhuaStatePlaying"),
    96: new LeafWsPacket(96, zhajinhua.ZhajinhuaStateOver, "zhajinhua.ZhajinhuaStateOver"),
    97: new LeafWsPacket(97, zhajinhua.ZhajinhuaHost, "zhajinhua.ZhajinhuaHost"),
    98: new LeafWsPacket(98, zhajinhua.ZhajinhuaReadyReq, "zhajinhua.ZhajinhuaReadyReq"),
    99: new LeafWsPacket(99, zhajinhua.ZhajinhuaReadyResp, "zhajinhua.ZhajinhuaReadyResp"),
    100: new LeafWsPacket(100, zhajinhua.ZhajinhuaFollowReq, "zhajinhua.ZhajinhuaFollowReq"),
    101: new LeafWsPacket(101, zhajinhua.ZhajinhuaFollowResp, "zhajinhua.ZhajinhuaFollowResp"),
    102: new LeafWsPacket(102, zhajinhua.ZhajinhuaRaiseReq, "zhajinhua.ZhajinhuaRaiseReq"),
    103: new LeafWsPacket(103, zhajinhua.ZhajinhuaRaiseResp, "zhajinhua.ZhajinhuaRaiseResp"),
    104: new LeafWsPacket(104, zhajinhua.ZhajinhuaLookReq, "zhajinhua.ZhajinhuaLookReq"),
    105: new LeafWsPacket(105, zhajinhua.ZhajinhuaLookResp, "zhajinhua.ZhajinhuaLookResp"),
    106: new LeafWsPacket(106, zhajinhua.ZhajinhuaCompareReq, "zhajinhua.ZhajinhuaCompareReq"),
    107: new LeafWsPacket(107, zhajinhua.ZhajinhuaCompareResp, "zhajinhua.ZhajinhuaCompareResp"),
    108: new LeafWsPacket(108, zhajinhua.ZhajinhuaGiveupReq, "zhajinhua.ZhajinhuaGiveupReq"),
    109: new LeafWsPacket(109, zhajinhua.ZhajinhuaGiveupResp, "zhajinhua.ZhajinhuaGiveupResp"),
    110: new LeafWsPacket(110, zhajinhua.ZhajinhuaOver, "zhajinhua.ZhajinhuaOver"),
}

export class zhajinhua_request {
    public static FighterInfo( data:{ UserId:number, SeatId:number, FightState:number, IsSee:any, RecentBetMoney:number, TotalBetMoney:number, Cards:any } ) { zhajinhua_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaScene( data:{ TimeStamp:number, TotalBet:number, MinBet:number, CurHost:number, Fighters:any[] } ) { zhajinhua_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateReady( data:{ UserID:number, IsReady:any } ) { zhajinhua_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateFree( data:{ Times:any } ) { zhajinhua_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateStart( data:{ Times:any } ) { zhajinhua_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStatePlaying( data:{ Times:any, UserID:number } ) { zhajinhua_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateOver( data:{ Times:any } ) { zhajinhua_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaHost( data:{ CurHost:number } ) { zhajinhua_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyReq( data:{} ) { zhajinhua_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyResp( data:{ UserId:number } ) { zhajinhua_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowReq( data:{} ) { zhajinhua_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowResp( data:{ UserId:number, Money:number } ) { zhajinhua_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseReq( data:{ Money:number } ) { zhajinhua_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseResp( data:{ UserId:number, Money:number } ) { zhajinhua_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookReq( data:{} ) { zhajinhua_packet_define[104].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookResp( data:{ UserId:number, Cards:any } ) { zhajinhua_packet_define[105].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareReq( data:{ HitId:number } ) { zhajinhua_packet_define[106].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareResp( data:{ AttackerId:number, HitId:number, WinnerId:number, AttackerCards:any, HitCards:any } ) { zhajinhua_packet_define[107].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupReq( data:{} ) { zhajinhua_packet_define[108].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupResp( data:{ UserId:number } ) { zhajinhua_packet_define[109].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaOver( data:{ WinnerId:number, Infos:any[] } ) { zhajinhua_packet_define[110].sendToChannel(ChannelDefine.game, data, false); }
}

