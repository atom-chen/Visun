//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brtoubao } from "./brtoubao";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brtoubao_msgs {
    BrtoubaoSceneResp = 126,
    BrtoubaoStateStartResp = 127,
    BrtoubaoStatePlayingResp = 128,
    BrtoubaoStateOpenResp = 129,
    BrtoubaoStateOverResp = 130,
    BrtoubaoBetReq = 131,
    BrtoubaoBetResp = 132,
    BrtoubaoOpenResp = 133,
    BrtoubaoCheckoutResp = 134,
    BrtoubaoHostReq = 135,
    BrtoubaoHostResp = 136,
    BrtoubaoSuperHostReq = 137,
    BrtoubaoSuperHostResp = 138,
}

export var brtoubao_packet_define = {
    126: new LeafWsPacket(126, brtoubao.BrtoubaoSceneResp, "brtoubao.BrtoubaoSceneResp"),
    127: new LeafWsPacket(127, brtoubao.BrtoubaoStateStartResp, "brtoubao.BrtoubaoStateStartResp"),
    128: new LeafWsPacket(128, brtoubao.BrtoubaoStatePlayingResp, "brtoubao.BrtoubaoStatePlayingResp"),
    129: new LeafWsPacket(129, brtoubao.BrtoubaoStateOpenResp, "brtoubao.BrtoubaoStateOpenResp"),
    130: new LeafWsPacket(130, brtoubao.BrtoubaoStateOverResp, "brtoubao.BrtoubaoStateOverResp"),
    131: new LeafWsPacket(131, brtoubao.BrtoubaoBetReq, "brtoubao.BrtoubaoBetReq"),
    132: new LeafWsPacket(132, brtoubao.BrtoubaoBetResp, "brtoubao.BrtoubaoBetResp"),
    133: new LeafWsPacket(133, brtoubao.BrtoubaoOpenResp, "brtoubao.BrtoubaoOpenResp"),
    134: new LeafWsPacket(134, brtoubao.BrtoubaoCheckoutResp, "brtoubao.BrtoubaoCheckoutResp"),
    135: new LeafWsPacket(135, brtoubao.BrtoubaoHostReq, "brtoubao.BrtoubaoHostReq"),
    136: new LeafWsPacket(136, brtoubao.BrtoubaoHostResp, "brtoubao.BrtoubaoHostResp"),
    137: new LeafWsPacket(137, brtoubao.BrtoubaoSuperHostReq, "brtoubao.BrtoubaoSuperHostReq"),
    138: new LeafWsPacket(138, brtoubao.BrtoubaoSuperHostResp, "brtoubao.BrtoubaoSuperHostResp"),
}

export class brtoubao_request {
    public static BrtoubaoSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any } ) { brtoubao_packet_define[126].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateStartResp( data:{ Times:any } ) { brtoubao_packet_define[127].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStatePlayingResp( data:{ Times:any } ) { brtoubao_packet_define[128].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateOpenResp( data:{ Times:any, OpenInfo:any } ) { brtoubao_packet_define[129].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoStateOverResp( data:{ Times:any } ) { brtoubao_packet_define[130].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoBetReq( data:{ BetArea:number, BetScore:number } ) { brtoubao_packet_define[131].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { brtoubao_packet_define[132].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoOpenResp( data:{ Dice:any, AwardArea:any } ) { brtoubao_packet_define[133].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { brtoubao_packet_define[134].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoHostReq( data:{ IsWant:any } ) { brtoubao_packet_define[135].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoHostResp( data:{ UserID:number, IsWant:any } ) { brtoubao_packet_define[136].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoSuperHostReq( data:{ IsWant:any } ) { brtoubao_packet_define[137].sendToChannel(ChannelDefine.game, data, false); }
    public static BrtoubaoSuperHostResp( data:{ UserID:number, IsWant:any } ) { brtoubao_packet_define[138].sendToChannel(ChannelDefine.game, data, false); }
}

