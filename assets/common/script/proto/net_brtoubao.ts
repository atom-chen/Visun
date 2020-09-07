//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brtoubao } from "./brtoubao";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brtoubao_msgs {
    BrtoubaoSceneResp = 125,
    BrtoubaoStateStartResp = 126,
    BrtoubaoStatePlayingResp = 127,
    BrtoubaoStateOpenResp = 128,
    BrtoubaoStateOverResp = 129,
    BrtoubaoBetReq = 130,
    BrtoubaoBetResp = 131,
    BrtoubaoOpenResp = 132,
    BrtoubaoCheckoutResp = 133,
    BrtoubaoHostReq = 134,
    BrtoubaoHostResp = 135,
    BrtoubaoSuperHostReq = 136,
    BrtoubaoSuperHostResp = 137,
}

export var brtoubao_packet_define = {
    125: new LeafWsPacket(125, brtoubao.BrtoubaoSceneResp, "brtoubao.BrtoubaoSceneResp"),
    126: new LeafWsPacket(126, brtoubao.BrtoubaoStateStartResp, "brtoubao.BrtoubaoStateStartResp"),
    127: new LeafWsPacket(127, brtoubao.BrtoubaoStatePlayingResp, "brtoubao.BrtoubaoStatePlayingResp"),
    128: new LeafWsPacket(128, brtoubao.BrtoubaoStateOpenResp, "brtoubao.BrtoubaoStateOpenResp"),
    129: new LeafWsPacket(129, brtoubao.BrtoubaoStateOverResp, "brtoubao.BrtoubaoStateOverResp"),
    130: new LeafWsPacket(130, brtoubao.BrtoubaoBetReq, "brtoubao.BrtoubaoBetReq"),
    131: new LeafWsPacket(131, brtoubao.BrtoubaoBetResp, "brtoubao.BrtoubaoBetResp"),
    132: new LeafWsPacket(132, brtoubao.BrtoubaoOpenResp, "brtoubao.BrtoubaoOpenResp"),
    133: new LeafWsPacket(133, brtoubao.BrtoubaoCheckoutResp, "brtoubao.BrtoubaoCheckoutResp"),
    134: new LeafWsPacket(134, brtoubao.BrtoubaoHostReq, "brtoubao.BrtoubaoHostReq"),
    135: new LeafWsPacket(135, brtoubao.BrtoubaoHostResp, "brtoubao.BrtoubaoHostResp"),
    136: new LeafWsPacket(136, brtoubao.BrtoubaoSuperHostReq, "brtoubao.BrtoubaoSuperHostReq"),
    137: new LeafWsPacket(137, brtoubao.BrtoubaoSuperHostResp, "brtoubao.BrtoubaoSuperHostResp"),
}

export class brtoubao_request {
    public static BrtoubaoSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any } ) { brtoubao_packet_define[125].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateStartResp( data:{ Times:any } ) { brtoubao_packet_define[126].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStatePlayingResp( data:{ Times:any } ) { brtoubao_packet_define[127].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateOpenResp( data:{ Times:any, OpenInfo:any } ) { brtoubao_packet_define[128].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateOverResp( data:{ Times:any } ) { brtoubao_packet_define[129].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoBetReq( data:{ BetArea:number, BetScore:number } ) { brtoubao_packet_define[130].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { brtoubao_packet_define[131].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoOpenResp( data:{ Dice:any, AwardArea:any } ) { brtoubao_packet_define[132].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { brtoubao_packet_define[133].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoHostReq( data:{ IsWant:any } ) { brtoubao_packet_define[134].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoHostResp( data:{ UserID:number, IsWant:any } ) { brtoubao_packet_define[135].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoSuperHostReq( data:{ IsWant:any } ) { brtoubao_packet_define[136].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoSuperHostResp( data:{ UserID:number, IsWant:any } ) { brtoubao_packet_define[137].sendToChannel(ChannelDefine.game, data, false); }
}

