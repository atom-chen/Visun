//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tbcowcow } from "./tbcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tbcowcow_msgs {
    TbcowcowPlayer = 166,
    TbcowcowSceneResp = 167,
    TbcowcowStateFreeResp = 168,
    TbcowcowStatePlayingResp = 169,
    TbcowcowStateDealResp = 170,
    TbcowcowStateOpenResp = 171,
    TbcowcowStateOverResp = 172,
    TbcowcowReadyReq = 173,
    TbcowcowReadyResp = 174,
    TbcowcowBetReq = 175,
    TbcowcowBetResp = 176,
    TbcowcowOpenResp = 177,
    TbcowcowOverResp = 178,
}

export var tbcowcow_packet_define = {
    166: new LeafWsPacket(166, tbcowcow.TbcowcowPlayer, "tbcowcow.TbcowcowPlayer"),
    167: new LeafWsPacket(167, tbcowcow.TbcowcowSceneResp, "tbcowcow.TbcowcowSceneResp"),
    168: new LeafWsPacket(168, tbcowcow.TbcowcowStateFreeResp, "tbcowcow.TbcowcowStateFreeResp"),
    169: new LeafWsPacket(169, tbcowcow.TbcowcowStatePlayingResp, "tbcowcow.TbcowcowStatePlayingResp"),
    170: new LeafWsPacket(170, tbcowcow.TbcowcowStateDealResp, "tbcowcow.TbcowcowStateDealResp"),
    171: new LeafWsPacket(171, tbcowcow.TbcowcowStateOpenResp, "tbcowcow.TbcowcowStateOpenResp"),
    172: new LeafWsPacket(172, tbcowcow.TbcowcowStateOverResp, "tbcowcow.TbcowcowStateOverResp"),
    173: new LeafWsPacket(173, tbcowcow.TbcowcowReadyReq, "tbcowcow.TbcowcowReadyReq"),
    174: new LeafWsPacket(174, tbcowcow.TbcowcowReadyResp, "tbcowcow.TbcowcowReadyResp"),
    175: new LeafWsPacket(175, tbcowcow.TbcowcowBetReq, "tbcowcow.TbcowcowBetReq"),
    176: new LeafWsPacket(176, tbcowcow.TbcowcowBetResp, "tbcowcow.TbcowcowBetResp"),
    177: new LeafWsPacket(177, tbcowcow.TbcowcowOpenResp, "tbcowcow.TbcowcowOpenResp"),
    178: new LeafWsPacket(178, tbcowcow.TbcowcowOverResp, "tbcowcow.TbcowcowOverResp"),
}

export class tbcowcow_request {
    public static TbcowcowPlayer( data:{ MyInfo:any, Cards:any } ) { tbcowcow_packet_define[166].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any } ) { tbcowcow_packet_define[167].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateFreeResp( data:{ Times:any } ) { tbcowcow_packet_define[168].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStatePlayingResp( data:{ Times:any } ) { tbcowcow_packet_define[169].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateDealResp( data:{ Times:any, Cards:any } ) { tbcowcow_packet_define[170].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tbcowcow_packet_define[171].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOverResp( data:{ Times:any } ) { tbcowcow_packet_define[172].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowReadyReq( data:{ IsReady:any } ) { tbcowcow_packet_define[173].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowReadyResp( data:{ UserId:number } ) { tbcowcow_packet_define[174].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { tbcowcow_packet_define[175].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { tbcowcow_packet_define[176].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOpenResp( data:{ WinnerId:number, Infos:any[] } ) { tbcowcow_packet_define[177].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { tbcowcow_packet_define[178].sendToChannel(ChannelDefine.game, data, false); }
}

