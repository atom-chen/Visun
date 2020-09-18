//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tbcowcow } from "./tbcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tbcowcow_msgs {
    TbcowcowPlayer = 168,
    TbcowcowSceneResp = 169,
    TbcowcowStateFreeResp = 170,
    TbcowcowStatePlayingResp = 171,
    TbcowcowStateDealResp = 172,
    TbcowcowStateOpenResp = 173,
    TbcowcowStateOverResp = 174,
    TbcowcowReadyReq = 175,
    TbcowcowReadyResp = 176,
    TbcowcowBetReq = 177,
    TbcowcowBetResp = 178,
    TbcowcowOpenResp = 179,
    TbcowcowOverResp = 180,
}

export var tbcowcow_packet_define = {
    168: new LeafWsPacket(168, tbcowcow.TbcowcowPlayer, "tbcowcow.TbcowcowPlayer"),
    169: new LeafWsPacket(169, tbcowcow.TbcowcowSceneResp, "tbcowcow.TbcowcowSceneResp"),
    170: new LeafWsPacket(170, tbcowcow.TbcowcowStateFreeResp, "tbcowcow.TbcowcowStateFreeResp"),
    171: new LeafWsPacket(171, tbcowcow.TbcowcowStatePlayingResp, "tbcowcow.TbcowcowStatePlayingResp"),
    172: new LeafWsPacket(172, tbcowcow.TbcowcowStateDealResp, "tbcowcow.TbcowcowStateDealResp"),
    173: new LeafWsPacket(173, tbcowcow.TbcowcowStateOpenResp, "tbcowcow.TbcowcowStateOpenResp"),
    174: new LeafWsPacket(174, tbcowcow.TbcowcowStateOverResp, "tbcowcow.TbcowcowStateOverResp"),
    175: new LeafWsPacket(175, tbcowcow.TbcowcowReadyReq, "tbcowcow.TbcowcowReadyReq"),
    176: new LeafWsPacket(176, tbcowcow.TbcowcowReadyResp, "tbcowcow.TbcowcowReadyResp"),
    177: new LeafWsPacket(177, tbcowcow.TbcowcowBetReq, "tbcowcow.TbcowcowBetReq"),
    178: new LeafWsPacket(178, tbcowcow.TbcowcowBetResp, "tbcowcow.TbcowcowBetResp"),
    179: new LeafWsPacket(179, tbcowcow.TbcowcowOpenResp, "tbcowcow.TbcowcowOpenResp"),
    180: new LeafWsPacket(180, tbcowcow.TbcowcowOverResp, "tbcowcow.TbcowcowOverResp"),
}

export class tbcowcow_request {
    public static TbcowcowPlayer( data:{ MyInfo:any, Cards:any } ) { tbcowcow_packet_define[168].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any } ) { tbcowcow_packet_define[169].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateFreeResp( data:{ Times:any, Inning:string } ) { tbcowcow_packet_define[170].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStatePlayingResp( data:{ Times:any } ) { tbcowcow_packet_define[171].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateDealResp( data:{ Times:any, Cards:any } ) { tbcowcow_packet_define[172].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tbcowcow_packet_define[173].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOverResp( data:{ Times:any } ) { tbcowcow_packet_define[174].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowReadyReq( data:{ IsReady:any } ) { tbcowcow_packet_define[175].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowReadyResp( data:{ UserId:number } ) { tbcowcow_packet_define[176].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { tbcowcow_packet_define[177].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { tbcowcow_packet_define[178].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOpenResp( data:{ WinnerId:number, Infos:any[] } ) { tbcowcow_packet_define[179].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { tbcowcow_packet_define[180].sendToChannel(ChannelDefine.game, data, false); }
}

