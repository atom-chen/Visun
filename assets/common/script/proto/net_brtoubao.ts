//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brtoubao } from "./brtoubao";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brtoubao_msgs {
    BrtoubaoSceneResp = 129,
    BrtoubaoStateStartResp = 130,
    BrtoubaoStatePlayingResp = 131,
    BrtoubaoStateOpenResp = 132,
    BrtoubaoStateOverResp = 133,
    BrtoubaoBetReq = 134,
    BrtoubaoBetResp = 135,
    BrtoubaoOpenResp = 136,
    BrtoubaoCheckoutResp = 137,
    BrtoubaoHostReq = 138,
    BrtoubaoHostResp = 139,
    BrtoubaoSuperHostReq = 140,
    BrtoubaoSuperHostResp = 141,
}

export var brtoubao_packet_define = {
    129: new LeafWsPacket(129, brtoubao.BrtoubaoSceneResp, "brtoubao.BrtoubaoSceneResp"),
    130: new LeafWsPacket(130, brtoubao.BrtoubaoStateStartResp, "brtoubao.BrtoubaoStateStartResp"),
    131: new LeafWsPacket(131, brtoubao.BrtoubaoStatePlayingResp, "brtoubao.BrtoubaoStatePlayingResp"),
    132: new LeafWsPacket(132, brtoubao.BrtoubaoStateOpenResp, "brtoubao.BrtoubaoStateOpenResp"),
    133: new LeafWsPacket(133, brtoubao.BrtoubaoStateOverResp, "brtoubao.BrtoubaoStateOverResp"),
    134: new LeafWsPacket(134, brtoubao.BrtoubaoBetReq, "brtoubao.BrtoubaoBetReq"),
    135: new LeafWsPacket(135, brtoubao.BrtoubaoBetResp, "brtoubao.BrtoubaoBetResp"),
    136: new LeafWsPacket(136, brtoubao.BrtoubaoOpenResp, "brtoubao.BrtoubaoOpenResp"),
    137: new LeafWsPacket(137, brtoubao.BrtoubaoCheckoutResp, "brtoubao.BrtoubaoCheckoutResp"),
    138: new LeafWsPacket(138, brtoubao.BrtoubaoHostReq, "brtoubao.BrtoubaoHostReq"),
    139: new LeafWsPacket(139, brtoubao.BrtoubaoHostResp, "brtoubao.BrtoubaoHostResp"),
    140: new LeafWsPacket(140, brtoubao.BrtoubaoSuperHostReq, "brtoubao.BrtoubaoSuperHostReq"),
    141: new LeafWsPacket(141, brtoubao.BrtoubaoSuperHostResp, "brtoubao.BrtoubaoSuperHostResp"),
}

export class brtoubao_request {
    public static BrtoubaoSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any } ) { brtoubao_packet_define[129].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateStartResp( data:{ Times:any } ) { brtoubao_packet_define[130].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStatePlayingResp( data:{ Times:any } ) { brtoubao_packet_define[131].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateOpenResp( data:{ Times:any, OpenInfo:any } ) { brtoubao_packet_define[132].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateOverResp( data:{ Times:any } ) { brtoubao_packet_define[133].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoBetReq( data:{ BetArea:number, BetScore:number } ) { brtoubao_packet_define[134].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { brtoubao_packet_define[135].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoOpenResp( data:{ Dice:any, AwardArea:any } ) { brtoubao_packet_define[136].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { brtoubao_packet_define[137].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoHostReq( data:{ IsWant:any } ) { brtoubao_packet_define[138].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoHostResp( data:{ UserID:number, IsWant:any } ) { brtoubao_packet_define[139].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoSuperHostReq( data:{ IsWant:any } ) { brtoubao_packet_define[140].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoSuperHostResp( data:{ UserID:number, IsWant:any } ) { brtoubao_packet_define[141].sendToChannel(ChannelDefine.game, data, false); }
}

