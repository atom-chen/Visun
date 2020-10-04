//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { qzcowcow } from "./qzcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum qzcowcow_msgs {
    QzcowcowPlayer = 191,
    QzcowcowSceneResp = 192,
    QzcowcowStateFreeResp = 193,
    QzcowcowStateCallResp = 194,
    QzcowcowStateDecideResp = 195,
    QzcowcowStatePlayingResp = 196,
    QzcowcowStateDealResp = 197,
    QzcowcowStateOpenResp = 198,
    QzcowcowStateOverResp = 199,
    QzcowcowReadyReq = 200,
    QzcowcowReadyResp = 201,
    QzcowcowCallReq = 202,
    QzcowcowCallResp = 203,
    QzcowcowBetReq = 204,
    QzcowcowBetResp = 205,
    QzcowcowOpenResp = 206,
    QzcowcowOverResp = 207,
}

export var qzcowcow_packet_define = {
    191: new LeafWsPacket(191, qzcowcow.QzcowcowPlayer, "qzcowcow.QzcowcowPlayer"),
    192: new LeafWsPacket(192, qzcowcow.QzcowcowSceneResp, "qzcowcow.QzcowcowSceneResp"),
    193: new LeafWsPacket(193, qzcowcow.QzcowcowStateFreeResp, "qzcowcow.QzcowcowStateFreeResp"),
    194: new LeafWsPacket(194, qzcowcow.QzcowcowStateCallResp, "qzcowcow.QzcowcowStateCallResp"),
    195: new LeafWsPacket(195, qzcowcow.QzcowcowStateDecideResp, "qzcowcow.QzcowcowStateDecideResp"),
    196: new LeafWsPacket(196, qzcowcow.QzcowcowStatePlayingResp, "qzcowcow.QzcowcowStatePlayingResp"),
    197: new LeafWsPacket(197, qzcowcow.QzcowcowStateDealResp, "qzcowcow.QzcowcowStateDealResp"),
    198: new LeafWsPacket(198, qzcowcow.QzcowcowStateOpenResp, "qzcowcow.QzcowcowStateOpenResp"),
    199: new LeafWsPacket(199, qzcowcow.QzcowcowStateOverResp, "qzcowcow.QzcowcowStateOverResp"),
    200: new LeafWsPacket(200, qzcowcow.QzcowcowReadyReq, "qzcowcow.QzcowcowReadyReq"),
    201: new LeafWsPacket(201, qzcowcow.QzcowcowReadyResp, "qzcowcow.QzcowcowReadyResp"),
    202: new LeafWsPacket(202, qzcowcow.QzcowcowCallReq, "qzcowcow.QzcowcowCallReq"),
    203: new LeafWsPacket(203, qzcowcow.QzcowcowCallResp, "qzcowcow.QzcowcowCallResp"),
    204: new LeafWsPacket(204, qzcowcow.QzcowcowBetReq, "qzcowcow.QzcowcowBetReq"),
    205: new LeafWsPacket(205, qzcowcow.QzcowcowBetResp, "qzcowcow.QzcowcowBetResp"),
    206: new LeafWsPacket(206, qzcowcow.QzcowcowOpenResp, "qzcowcow.QzcowcowOpenResp"),
    207: new LeafWsPacket(207, qzcowcow.QzcowcowOverResp, "qzcowcow.QzcowcowOverResp"),
}

export class qzcowcow_request {
    public static QzcowcowPlayer( data:{ MyInfo:any, Cards:any } ) { qzcowcow_packet_define[191].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { qzcowcow_packet_define[192].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateFreeResp( data:{ Times:any, Inning:string } ) { qzcowcow_packet_define[193].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateCallResp( data:{ Times:any } ) { qzcowcow_packet_define[194].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateDecideResp( data:{ Times:any, HostID:number, Multiple:number } ) { qzcowcow_packet_define[195].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStatePlayingResp( data:{ Times:any } ) { qzcowcow_packet_define[196].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateDealResp( data:{ Times:any, Cards:any } ) { qzcowcow_packet_define[197].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { qzcowcow_packet_define[198].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOverResp( data:{ Times:any } ) { qzcowcow_packet_define[199].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowReadyReq( data:{ IsReady:any } ) { qzcowcow_packet_define[200].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowReadyResp( data:{ UserId:number } ) { qzcowcow_packet_define[201].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowCallReq( data:{ Multiple:number } ) { qzcowcow_packet_define[202].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowCallResp( data:{ UserID:number, Multiple:number } ) { qzcowcow_packet_define[203].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { qzcowcow_packet_define[204].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { qzcowcow_packet_define[205].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOpenResp( data:{ WinnerId:number, Infos:any[] } ) { qzcowcow_packet_define[206].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { qzcowcow_packet_define[207].sendToChannel(ChannelDefine.game, data, false); }
}

