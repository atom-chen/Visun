//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brtoubao } from "./brtoubao";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brtoubao_msgs {
    BrtoubaoSceneResp = 139,
    BrtoubaoStateStartResp = 140,
    BrtoubaoStatePlayingResp = 141,
    BrtoubaoStateOpenResp = 142,
    BrtoubaoStateOverResp = 143,
    BrtoubaoBetReq = 144,
    BrtoubaoBetResp = 145,
    BrtoubaoOpenResp = 146,
    BrtoubaoCheckoutResp = 147,
    BrtoubaoHostReq = 148,
    BrtoubaoHostResp = 149,
    BrtoubaoSuperHostReq = 150,
    BrtoubaoSuperHostResp = 151,
}

export var brtoubao_packet_define = {
    139: new LeafWsPacket(139, brtoubao.BrtoubaoSceneResp, "brtoubao.BrtoubaoSceneResp"),
    140: new LeafWsPacket(140, brtoubao.BrtoubaoStateStartResp, "brtoubao.BrtoubaoStateStartResp"),
    141: new LeafWsPacket(141, brtoubao.BrtoubaoStatePlayingResp, "brtoubao.BrtoubaoStatePlayingResp"),
    142: new LeafWsPacket(142, brtoubao.BrtoubaoStateOpenResp, "brtoubao.BrtoubaoStateOpenResp"),
    143: new LeafWsPacket(143, brtoubao.BrtoubaoStateOverResp, "brtoubao.BrtoubaoStateOverResp"),
    144: new LeafWsPacket(144, brtoubao.BrtoubaoBetReq, "brtoubao.BrtoubaoBetReq"),
    145: new LeafWsPacket(145, brtoubao.BrtoubaoBetResp, "brtoubao.BrtoubaoBetResp"),
    146: new LeafWsPacket(146, brtoubao.BrtoubaoOpenResp, "brtoubao.BrtoubaoOpenResp"),
    147: new LeafWsPacket(147, brtoubao.BrtoubaoCheckoutResp, "brtoubao.BrtoubaoCheckoutResp"),
    148: new LeafWsPacket(148, brtoubao.BrtoubaoHostReq, "brtoubao.BrtoubaoHostReq"),
    149: new LeafWsPacket(149, brtoubao.BrtoubaoHostResp, "brtoubao.BrtoubaoHostResp"),
    150: new LeafWsPacket(150, brtoubao.BrtoubaoSuperHostReq, "brtoubao.BrtoubaoSuperHostReq"),
    151: new LeafWsPacket(151, brtoubao.BrtoubaoSuperHostResp, "brtoubao.BrtoubaoSuperHostResp"),
}

export class brtoubao_request {
    public static BrtoubaoSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any } ) { brtoubao_packet_define[139].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateStartResp( data:{ Times:any, Inning:string } ) { brtoubao_packet_define[140].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStatePlayingResp( data:{ Times:any } ) { brtoubao_packet_define[141].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateOpenResp( data:{ Times:any, OpenInfo:any } ) { brtoubao_packet_define[142].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateOverResp( data:{ Times:any } ) { brtoubao_packet_define[143].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoBetReq( data:{ BetArea:number, BetScore:number } ) { brtoubao_packet_define[144].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { brtoubao_packet_define[145].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoOpenResp( data:{ Dice:any, AwardArea:any } ) { brtoubao_packet_define[146].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { brtoubao_packet_define[147].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoHostReq( data:{ IsWant:any } ) { brtoubao_packet_define[148].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoHostResp( data:{ UserID:number, IsWant:any } ) { brtoubao_packet_define[149].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoSuperHostReq( data:{ IsWant:any } ) { brtoubao_packet_define[150].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoSuperHostResp( data:{ UserID:number, IsWant:any } ) { brtoubao_packet_define[151].sendToChannel(ChannelDefine.game, data, false); }
}

