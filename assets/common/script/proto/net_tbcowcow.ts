//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tbcowcow } from "./tbcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tbcowcow_msgs {
    TbcowcowPlayer = 171,
    TbcowcowSceneResp = 172,
    TbcowcowStateFreeResp = 173,
    TbcowcowStatePlayingResp = 174,
    TbcowcowStateDealResp = 175,
    TbcowcowStateOpenResp = 176,
    TbcowcowStateOverResp = 177,
    TbcowcowReadyReq = 178,
    TbcowcowReadyResp = 179,
    TbcowcowBetReq = 180,
    TbcowcowBetResp = 181,
    TbcowcowOpenResp = 182,
    TbcowcowOverResp = 183,
}

export var tbcowcow_packet_define = {
    171: new LeafWsPacket(171, tbcowcow.TbcowcowPlayer, "tbcowcow.TbcowcowPlayer"),
    172: new LeafWsPacket(172, tbcowcow.TbcowcowSceneResp, "tbcowcow.TbcowcowSceneResp"),
    173: new LeafWsPacket(173, tbcowcow.TbcowcowStateFreeResp, "tbcowcow.TbcowcowStateFreeResp"),
    174: new LeafWsPacket(174, tbcowcow.TbcowcowStatePlayingResp, "tbcowcow.TbcowcowStatePlayingResp"),
    175: new LeafWsPacket(175, tbcowcow.TbcowcowStateDealResp, "tbcowcow.TbcowcowStateDealResp"),
    176: new LeafWsPacket(176, tbcowcow.TbcowcowStateOpenResp, "tbcowcow.TbcowcowStateOpenResp"),
    177: new LeafWsPacket(177, tbcowcow.TbcowcowStateOverResp, "tbcowcow.TbcowcowStateOverResp"),
    178: new LeafWsPacket(178, tbcowcow.TbcowcowReadyReq, "tbcowcow.TbcowcowReadyReq"),
    179: new LeafWsPacket(179, tbcowcow.TbcowcowReadyResp, "tbcowcow.TbcowcowReadyResp"),
    180: new LeafWsPacket(180, tbcowcow.TbcowcowBetReq, "tbcowcow.TbcowcowBetReq"),
    181: new LeafWsPacket(181, tbcowcow.TbcowcowBetResp, "tbcowcow.TbcowcowBetResp"),
    182: new LeafWsPacket(182, tbcowcow.TbcowcowOpenResp, "tbcowcow.TbcowcowOpenResp"),
    183: new LeafWsPacket(183, tbcowcow.TbcowcowOverResp, "tbcowcow.TbcowcowOverResp"),
}

export class tbcowcow_request {
    public static TbcowcowPlayer( data:{ MyInfo:any, Cards:any } ) { tbcowcow_packet_define[171].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any } ) { tbcowcow_packet_define[172].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateFreeResp( data:{ Times:any, Inning:string } ) { tbcowcow_packet_define[173].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStatePlayingResp( data:{ Times:any } ) { tbcowcow_packet_define[174].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateDealResp( data:{ Times:any, Cards:any } ) { tbcowcow_packet_define[175].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tbcowcow_packet_define[176].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOverResp( data:{ Times:any } ) { tbcowcow_packet_define[177].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowReadyReq( data:{ IsReady:any } ) { tbcowcow_packet_define[178].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowReadyResp( data:{ UserId:number } ) { tbcowcow_packet_define[179].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { tbcowcow_packet_define[180].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { tbcowcow_packet_define[181].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOpenResp( data:{ WinnerId:number, Infos:any[] } ) { tbcowcow_packet_define[182].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { tbcowcow_packet_define[183].sendToChannel(ChannelDefine.game, data, false); }
}

