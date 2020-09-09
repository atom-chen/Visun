//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tbcowcow } from "./tbcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tbcowcow_msgs {
    TbcowcowSceneResp = 165,
    TbcowcowStateFreeResp = 166,
    TbcowcowStateStartResp = 167,
    TbcowcowStatePlayingResp = 168,
    TbcowcowStateOpenResp = 169,
    TbcowcowStateOverResp = 170,
    TbcowcowBetReq = 171,
    TbcowcowBetResp = 172,
    TbcowcowOpenResp = 173,
    TbcowcowOverResp = 174,
    TbcowcowHostReq = 175,
    TbcowcowHostResp = 176,
    TbcowcowHostListReq = 177,
    TbcowcowHostListResp = 178,
}

export var tbcowcow_packet_define = {
    165: new LeafWsPacket(165, tbcowcow.TbcowcowSceneResp, "tbcowcow.TbcowcowSceneResp"),
    166: new LeafWsPacket(166, tbcowcow.TbcowcowStateFreeResp, "tbcowcow.TbcowcowStateFreeResp"),
    167: new LeafWsPacket(167, tbcowcow.TbcowcowStateStartResp, "tbcowcow.TbcowcowStateStartResp"),
    168: new LeafWsPacket(168, tbcowcow.TbcowcowStatePlayingResp, "tbcowcow.TbcowcowStatePlayingResp"),
    169: new LeafWsPacket(169, tbcowcow.TbcowcowStateOpenResp, "tbcowcow.TbcowcowStateOpenResp"),
    170: new LeafWsPacket(170, tbcowcow.TbcowcowStateOverResp, "tbcowcow.TbcowcowStateOverResp"),
    171: new LeafWsPacket(171, tbcowcow.TbcowcowBetReq, "tbcowcow.TbcowcowBetReq"),
    172: new LeafWsPacket(172, tbcowcow.TbcowcowBetResp, "tbcowcow.TbcowcowBetResp"),
    173: new LeafWsPacket(173, tbcowcow.TbcowcowOpenResp, "tbcowcow.TbcowcowOpenResp"),
    174: new LeafWsPacket(174, tbcowcow.TbcowcowOverResp, "tbcowcow.TbcowcowOverResp"),
    175: new LeafWsPacket(175, tbcowcow.TbcowcowHostReq, "tbcowcow.TbcowcowHostReq"),
    176: new LeafWsPacket(176, tbcowcow.TbcowcowHostResp, "tbcowcow.TbcowcowHostResp"),
    177: new LeafWsPacket(177, tbcowcow.TbcowcowHostListReq, "tbcowcow.TbcowcowHostListReq"),
    178: new LeafWsPacket(178, tbcowcow.TbcowcowHostListResp, "tbcowcow.TbcowcowHostListResp"),
}

export class tbcowcow_request {
    public static TbcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { tbcowcow_packet_define[165].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateFreeResp( data:{ Times:any } ) { tbcowcow_packet_define[166].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateStartResp( data:{ Times:any, HostID:number } ) { tbcowcow_packet_define[167].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStatePlayingResp( data:{ Times:any } ) { tbcowcow_packet_define[168].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tbcowcow_packet_define[169].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOverResp( data:{ Times:any } ) { tbcowcow_packet_define[170].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { tbcowcow_packet_define[171].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { tbcowcow_packet_define[172].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOpenResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { tbcowcow_packet_define[173].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { tbcowcow_packet_define[174].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowHostReq( data:{ IsWant:any } ) { tbcowcow_packet_define[175].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowHostResp( data:{ UserID:number, IsWant:any } ) { tbcowcow_packet_define[176].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowHostListReq( data:{} ) { tbcowcow_packet_define[177].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { tbcowcow_packet_define[178].sendToChannel(ChannelDefine.game, data, false); }
}

