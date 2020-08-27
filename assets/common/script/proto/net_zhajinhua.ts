//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { zhajinhua } from "./zhajinhua";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum zhajinhua_msgs {
    FighterInfo = 92,
    ZhajinhuaScene = 93,
    ZhajinhuaStateFree = 94,
    ZhajinhuaStateStart = 95,
    ZhajinhuaStatePlaying = 96,
    ZhajinhuaStateOver = 97,
    ZhajinhuaHost = 98,
    ZhajinhuaReadyReq = 99,
    ZhajinhuaReadyResp = 100,
    ZhajinhuaFollowReq = 101,
    ZhajinhuaFollowResp = 102,
    ZhajinhuaRaiseReq = 103,
    ZhajinhuaRaiseResp = 104,
    ZhajinhuaLookReq = 105,
    ZhajinhuaLookResp = 106,
    ZhajinhuaCompareReq = 107,
    ZhajinhuaCompareResp = 108,
    ZhajinhuaGiveupReq = 109,
    ZhajinhuaGiveupResp = 110,
    ZhajinhuaOver = 111,
}

export var zhajinhua_packet_define = {
    92: new LeafWsPacket(92, zhajinhua.FighterInfo, "zhajinhua.FighterInfo"),
    93: new LeafWsPacket(93, zhajinhua.ZhajinhuaScene, "zhajinhua.ZhajinhuaScene"),
    94: new LeafWsPacket(94, zhajinhua.ZhajinhuaStateFree, "zhajinhua.ZhajinhuaStateFree"),
    95: new LeafWsPacket(95, zhajinhua.ZhajinhuaStateStart, "zhajinhua.ZhajinhuaStateStart"),
    96: new LeafWsPacket(96, zhajinhua.ZhajinhuaStatePlaying, "zhajinhua.ZhajinhuaStatePlaying"),
    97: new LeafWsPacket(97, zhajinhua.ZhajinhuaStateOver, "zhajinhua.ZhajinhuaStateOver"),
    98: new LeafWsPacket(98, zhajinhua.ZhajinhuaHost, "zhajinhua.ZhajinhuaHost"),
    99: new LeafWsPacket(99, zhajinhua.ZhajinhuaReadyReq, "zhajinhua.ZhajinhuaReadyReq"),
    100: new LeafWsPacket(100, zhajinhua.ZhajinhuaReadyResp, "zhajinhua.ZhajinhuaReadyResp"),
    101: new LeafWsPacket(101, zhajinhua.ZhajinhuaFollowReq, "zhajinhua.ZhajinhuaFollowReq"),
    102: new LeafWsPacket(102, zhajinhua.ZhajinhuaFollowResp, "zhajinhua.ZhajinhuaFollowResp"),
    103: new LeafWsPacket(103, zhajinhua.ZhajinhuaRaiseReq, "zhajinhua.ZhajinhuaRaiseReq"),
    104: new LeafWsPacket(104, zhajinhua.ZhajinhuaRaiseResp, "zhajinhua.ZhajinhuaRaiseResp"),
    105: new LeafWsPacket(105, zhajinhua.ZhajinhuaLookReq, "zhajinhua.ZhajinhuaLookReq"),
    106: new LeafWsPacket(106, zhajinhua.ZhajinhuaLookResp, "zhajinhua.ZhajinhuaLookResp"),
    107: new LeafWsPacket(107, zhajinhua.ZhajinhuaCompareReq, "zhajinhua.ZhajinhuaCompareReq"),
    108: new LeafWsPacket(108, zhajinhua.ZhajinhuaCompareResp, "zhajinhua.ZhajinhuaCompareResp"),
    109: new LeafWsPacket(109, zhajinhua.ZhajinhuaGiveupReq, "zhajinhua.ZhajinhuaGiveupReq"),
    110: new LeafWsPacket(110, zhajinhua.ZhajinhuaGiveupResp, "zhajinhua.ZhajinhuaGiveupResp"),
    111: new LeafWsPacket(111, zhajinhua.ZhajinhuaOver, "zhajinhua.ZhajinhuaOver"),
}

export class zhajinhua_request {
    public static FighterInfo( data:{ UserId:number, SeatId:number, FightState:number, IsSee:any, RecentBetMoney:number, TotalBetMoney:number, Cards:any } ) { zhajinhua_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaScene( data:{ TimeStamp:number, TotalBet:number, MinBet:number, CurHost:number, Fighters:any[] } ) { zhajinhua_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateFree( data:{ Times:any } ) { zhajinhua_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateStart( data:{ Times:any } ) { zhajinhua_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStatePlaying( data:{ Times:any, UserID:number } ) { zhajinhua_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaStateOver( data:{ Times:any } ) { zhajinhua_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaHost( data:{ CurHost:number } ) { zhajinhua_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyReq( data:{ IsReady:any } ) { zhajinhua_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaReadyResp( data:{ UserId:number } ) { zhajinhua_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowReq( data:{} ) { zhajinhua_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaFollowResp( data:{ UserId:number, Money:number } ) { zhajinhua_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseReq( data:{ Money:number } ) { zhajinhua_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaRaiseResp( data:{ UserId:number, Money:number } ) { zhajinhua_packet_define[104].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookReq( data:{} ) { zhajinhua_packet_define[105].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaLookResp( data:{ UserId:number, Cards:any } ) { zhajinhua_packet_define[106].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareReq( data:{ HitId:number } ) { zhajinhua_packet_define[107].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaCompareResp( data:{ AttackerId:number, HitId:number, WinnerId:number, AttackerCards:any, HitCards:any } ) { zhajinhua_packet_define[108].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupReq( data:{} ) { zhajinhua_packet_define[109].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaGiveupResp( data:{ UserId:number } ) { zhajinhua_packet_define[110].sendToChannel(ChannelDefine.game, data, false); }
    public static ZhajinhuaOver( data:{ WinnerId:number, Infos:any[] } ) { zhajinhua_packet_define[111].sendToChannel(ChannelDefine.game, data, false); }
}

