//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { qzcowcow } from "./qzcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum qzcowcow_msgs {
    QzcowcowPlayer = 185,
    QzcowcowSceneResp = 186,
    QzcowcowStateFreeResp = 187,
    QzcowcowStateCallResp = 188,
    QzcowcowStateDecideResp = 189,
    QzcowcowStatePlayingResp = 190,
    QzcowcowStateDealResp = 191,
    QzcowcowStateOpenResp = 192,
    QzcowcowStateOverResp = 193,
    QzcowcowReadyReq = 194,
    QzcowcowReadyResp = 195,
    QzcowcowCallReq = 196,
    QzcowcowCallResp = 197,
    QzcowcowBetReq = 198,
    QzcowcowBetResp = 199,
    QzcowcowOpenResp = 200,
    QzcowcowOverResp = 201,
}

export var qzcowcow_packet_define = {
    185: new LeafWsPacket(185, qzcowcow.QzcowcowPlayer, "qzcowcow.QzcowcowPlayer"),
    186: new LeafWsPacket(186, qzcowcow.QzcowcowSceneResp, "qzcowcow.QzcowcowSceneResp"),
    187: new LeafWsPacket(187, qzcowcow.QzcowcowStateFreeResp, "qzcowcow.QzcowcowStateFreeResp"),
    188: new LeafWsPacket(188, qzcowcow.QzcowcowStateCallResp, "qzcowcow.QzcowcowStateCallResp"),
    189: new LeafWsPacket(189, qzcowcow.QzcowcowStateDecideResp, "qzcowcow.QzcowcowStateDecideResp"),
    190: new LeafWsPacket(190, qzcowcow.QzcowcowStatePlayingResp, "qzcowcow.QzcowcowStatePlayingResp"),
    191: new LeafWsPacket(191, qzcowcow.QzcowcowStateDealResp, "qzcowcow.QzcowcowStateDealResp"),
    192: new LeafWsPacket(192, qzcowcow.QzcowcowStateOpenResp, "qzcowcow.QzcowcowStateOpenResp"),
    193: new LeafWsPacket(193, qzcowcow.QzcowcowStateOverResp, "qzcowcow.QzcowcowStateOverResp"),
    194: new LeafWsPacket(194, qzcowcow.QzcowcowReadyReq, "qzcowcow.QzcowcowReadyReq"),
    195: new LeafWsPacket(195, qzcowcow.QzcowcowReadyResp, "qzcowcow.QzcowcowReadyResp"),
    196: new LeafWsPacket(196, qzcowcow.QzcowcowCallReq, "qzcowcow.QzcowcowCallReq"),
    197: new LeafWsPacket(197, qzcowcow.QzcowcowCallResp, "qzcowcow.QzcowcowCallResp"),
    198: new LeafWsPacket(198, qzcowcow.QzcowcowBetReq, "qzcowcow.QzcowcowBetReq"),
    199: new LeafWsPacket(199, qzcowcow.QzcowcowBetResp, "qzcowcow.QzcowcowBetResp"),
    200: new LeafWsPacket(200, qzcowcow.QzcowcowOpenResp, "qzcowcow.QzcowcowOpenResp"),
    201: new LeafWsPacket(201, qzcowcow.QzcowcowOverResp, "qzcowcow.QzcowcowOverResp"),
}

export class qzcowcow_request {
    public static QzcowcowPlayer( data:{ MyInfo:any, Cards:any } ) { qzcowcow_packet_define[185].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { qzcowcow_packet_define[186].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateFreeResp( data:{ Times:any, Inning:string } ) { qzcowcow_packet_define[187].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateCallResp( data:{ Times:any } ) { qzcowcow_packet_define[188].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateDecideResp( data:{ Times:any, HostID:number, Multiple:number } ) { qzcowcow_packet_define[189].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStatePlayingResp( data:{ Times:any } ) { qzcowcow_packet_define[190].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateDealResp( data:{ Times:any, Cards:any } ) { qzcowcow_packet_define[191].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { qzcowcow_packet_define[192].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOverResp( data:{ Times:any } ) { qzcowcow_packet_define[193].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowReadyReq( data:{ IsReady:any } ) { qzcowcow_packet_define[194].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowReadyResp( data:{ UserId:number } ) { qzcowcow_packet_define[195].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowCallReq( data:{ Multiple:number } ) { qzcowcow_packet_define[196].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowCallResp( data:{ UserID:number, Multiple:number } ) { qzcowcow_packet_define[197].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { qzcowcow_packet_define[198].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { qzcowcow_packet_define[199].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOpenResp( data:{ WinnerId:number, Infos:any[] } ) { qzcowcow_packet_define[200].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { qzcowcow_packet_define[201].sendToChannel(ChannelDefine.game, data, false); }
}

