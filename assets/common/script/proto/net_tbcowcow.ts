//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tbcowcow } from "./tbcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tbcowcow_msgs {
    TbcowcowPlayer = 165,
    TbcowcowSceneResp = 166,
    TbcowcowStateFreeResp = 167,
    TbcowcowStatePlayingResp = 168,
    TbcowcowStateDealResp = 169,
    TbcowcowStateOpenResp = 170,
    TbcowcowStateOverResp = 171,
    TbcowcowReadyReq = 172,
    TbcowcowReadyResp = 173,
    TbcowcowBetReq = 174,
    TbcowcowBetResp = 175,
    TbcowcowOpenResp = 176,
    TbcowcowOverResp = 177,
}

export var tbcowcow_packet_define = {
    165: new LeafWsPacket(165, tbcowcow.TbcowcowPlayer, "tbcowcow.TbcowcowPlayer"),
    166: new LeafWsPacket(166, tbcowcow.TbcowcowSceneResp, "tbcowcow.TbcowcowSceneResp"),
    167: new LeafWsPacket(167, tbcowcow.TbcowcowStateFreeResp, "tbcowcow.TbcowcowStateFreeResp"),
    168: new LeafWsPacket(168, tbcowcow.TbcowcowStatePlayingResp, "tbcowcow.TbcowcowStatePlayingResp"),
    169: new LeafWsPacket(169, tbcowcow.TbcowcowStateDealResp, "tbcowcow.TbcowcowStateDealResp"),
    170: new LeafWsPacket(170, tbcowcow.TbcowcowStateOpenResp, "tbcowcow.TbcowcowStateOpenResp"),
    171: new LeafWsPacket(171, tbcowcow.TbcowcowStateOverResp, "tbcowcow.TbcowcowStateOverResp"),
    172: new LeafWsPacket(172, tbcowcow.TbcowcowReadyReq, "tbcowcow.TbcowcowReadyReq"),
    173: new LeafWsPacket(173, tbcowcow.TbcowcowReadyResp, "tbcowcow.TbcowcowReadyResp"),
    174: new LeafWsPacket(174, tbcowcow.TbcowcowBetReq, "tbcowcow.TbcowcowBetReq"),
    175: new LeafWsPacket(175, tbcowcow.TbcowcowBetResp, "tbcowcow.TbcowcowBetResp"),
    176: new LeafWsPacket(176, tbcowcow.TbcowcowOpenResp, "tbcowcow.TbcowcowOpenResp"),
    177: new LeafWsPacket(177, tbcowcow.TbcowcowOverResp, "tbcowcow.TbcowcowOverResp"),
}

export class tbcowcow_request {
    public static TbcowcowPlayer( data:{ MyInfo:any, Cards:any } ) { tbcowcow_packet_define[165].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any } ) { tbcowcow_packet_define[166].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateFreeResp( data:{ Times:any } ) { tbcowcow_packet_define[167].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStatePlayingResp( data:{ Times:any } ) { tbcowcow_packet_define[168].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateDealResp( data:{ Times:any, Cards:any } ) { tbcowcow_packet_define[169].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tbcowcow_packet_define[170].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOverResp( data:{ Times:any } ) { tbcowcow_packet_define[171].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowReadyReq( data:{ IsReady:any } ) { tbcowcow_packet_define[172].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowReadyResp( data:{ UserId:number } ) { tbcowcow_packet_define[173].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { tbcowcow_packet_define[174].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { tbcowcow_packet_define[175].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOpenResp( data:{ WinnerId:number, Infos:any[] } ) { tbcowcow_packet_define[176].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { tbcowcow_packet_define[177].sendToChannel(ChannelDefine.game, data, false); }
}

