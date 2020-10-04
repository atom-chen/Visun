//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tbcowcow } from "./tbcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tbcowcow_msgs {
    TbcowcowPlayer = 178,
    TbcowcowSceneResp = 179,
    TbcowcowStateFreeResp = 180,
    TbcowcowStatePlayingResp = 181,
    TbcowcowStateDealResp = 182,
    TbcowcowStateOpenResp = 183,
    TbcowcowStateOverResp = 184,
    TbcowcowReadyReq = 185,
    TbcowcowReadyResp = 186,
    TbcowcowBetReq = 187,
    TbcowcowBetResp = 188,
    TbcowcowOpenResp = 189,
    TbcowcowOverResp = 190,
}

export var tbcowcow_packet_define = {
    178: new LeafWsPacket(178, tbcowcow.TbcowcowPlayer, "tbcowcow.TbcowcowPlayer"),
    179: new LeafWsPacket(179, tbcowcow.TbcowcowSceneResp, "tbcowcow.TbcowcowSceneResp"),
    180: new LeafWsPacket(180, tbcowcow.TbcowcowStateFreeResp, "tbcowcow.TbcowcowStateFreeResp"),
    181: new LeafWsPacket(181, tbcowcow.TbcowcowStatePlayingResp, "tbcowcow.TbcowcowStatePlayingResp"),
    182: new LeafWsPacket(182, tbcowcow.TbcowcowStateDealResp, "tbcowcow.TbcowcowStateDealResp"),
    183: new LeafWsPacket(183, tbcowcow.TbcowcowStateOpenResp, "tbcowcow.TbcowcowStateOpenResp"),
    184: new LeafWsPacket(184, tbcowcow.TbcowcowStateOverResp, "tbcowcow.TbcowcowStateOverResp"),
    185: new LeafWsPacket(185, tbcowcow.TbcowcowReadyReq, "tbcowcow.TbcowcowReadyReq"),
    186: new LeafWsPacket(186, tbcowcow.TbcowcowReadyResp, "tbcowcow.TbcowcowReadyResp"),
    187: new LeafWsPacket(187, tbcowcow.TbcowcowBetReq, "tbcowcow.TbcowcowBetReq"),
    188: new LeafWsPacket(188, tbcowcow.TbcowcowBetResp, "tbcowcow.TbcowcowBetResp"),
    189: new LeafWsPacket(189, tbcowcow.TbcowcowOpenResp, "tbcowcow.TbcowcowOpenResp"),
    190: new LeafWsPacket(190, tbcowcow.TbcowcowOverResp, "tbcowcow.TbcowcowOverResp"),
}

export class tbcowcow_request {
    public static TbcowcowPlayer( data:{ MyInfo:any, Cards:any } ) { tbcowcow_packet_define[178].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any } ) { tbcowcow_packet_define[179].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateFreeResp( data:{ Times:any, Inning:string } ) { tbcowcow_packet_define[180].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStatePlayingResp( data:{ Times:any } ) { tbcowcow_packet_define[181].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateDealResp( data:{ Times:any, Cards:any } ) { tbcowcow_packet_define[182].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tbcowcow_packet_define[183].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowStateOverResp( data:{ Times:any } ) { tbcowcow_packet_define[184].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowReadyReq( data:{ IsReady:any } ) { tbcowcow_packet_define[185].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowReadyResp( data:{ UserId:number } ) { tbcowcow_packet_define[186].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { tbcowcow_packet_define[187].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { tbcowcow_packet_define[188].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOpenResp( data:{ WinnerId:number, Infos:any[] } ) { tbcowcow_packet_define[189].sendToChannel(ChannelDefine.game, data, false); }
    public static TbcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { tbcowcow_packet_define[190].sendToChannel(ChannelDefine.game, data, false); }
}

