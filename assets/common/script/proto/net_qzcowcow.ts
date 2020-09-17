//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { qzcowcow } from "./qzcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum qzcowcow_msgs {
    QzcowcowPlayer = 182,
    QzcowcowSceneResp = 183,
    QzcowcowStateFreeResp = 184,
    QzcowcowStateCallResp = 185,
    QzcowcowStateDecideResp = 186,
    QzcowcowStatePlayingResp = 187,
    QzcowcowStateDealResp = 188,
    QzcowcowStateOpenResp = 189,
    QzcowcowStateOverResp = 190,
    QzcowcowReadyReq = 191,
    QzcowcowReadyResp = 192,
    QzcowcowCallReq = 193,
    QzcowcowCallResp = 194,
    QzcowcowBetReq = 195,
    QzcowcowBetResp = 196,
    QzcowcowOpenResp = 197,
    QzcowcowOverResp = 198,
}

export var qzcowcow_packet_define = {
    182: new LeafWsPacket(182, qzcowcow.QzcowcowPlayer, "qzcowcow.QzcowcowPlayer"),
    183: new LeafWsPacket(183, qzcowcow.QzcowcowSceneResp, "qzcowcow.QzcowcowSceneResp"),
    184: new LeafWsPacket(184, qzcowcow.QzcowcowStateFreeResp, "qzcowcow.QzcowcowStateFreeResp"),
    185: new LeafWsPacket(185, qzcowcow.QzcowcowStateCallResp, "qzcowcow.QzcowcowStateCallResp"),
    186: new LeafWsPacket(186, qzcowcow.QzcowcowStateDecideResp, "qzcowcow.QzcowcowStateDecideResp"),
    187: new LeafWsPacket(187, qzcowcow.QzcowcowStatePlayingResp, "qzcowcow.QzcowcowStatePlayingResp"),
    188: new LeafWsPacket(188, qzcowcow.QzcowcowStateDealResp, "qzcowcow.QzcowcowStateDealResp"),
    189: new LeafWsPacket(189, qzcowcow.QzcowcowStateOpenResp, "qzcowcow.QzcowcowStateOpenResp"),
    190: new LeafWsPacket(190, qzcowcow.QzcowcowStateOverResp, "qzcowcow.QzcowcowStateOverResp"),
    191: new LeafWsPacket(191, qzcowcow.QzcowcowReadyReq, "qzcowcow.QzcowcowReadyReq"),
    192: new LeafWsPacket(192, qzcowcow.QzcowcowReadyResp, "qzcowcow.QzcowcowReadyResp"),
    193: new LeafWsPacket(193, qzcowcow.QzcowcowCallReq, "qzcowcow.QzcowcowCallReq"),
    194: new LeafWsPacket(194, qzcowcow.QzcowcowCallResp, "qzcowcow.QzcowcowCallResp"),
    195: new LeafWsPacket(195, qzcowcow.QzcowcowBetReq, "qzcowcow.QzcowcowBetReq"),
    196: new LeafWsPacket(196, qzcowcow.QzcowcowBetResp, "qzcowcow.QzcowcowBetResp"),
    197: new LeafWsPacket(197, qzcowcow.QzcowcowOpenResp, "qzcowcow.QzcowcowOpenResp"),
    198: new LeafWsPacket(198, qzcowcow.QzcowcowOverResp, "qzcowcow.QzcowcowOverResp"),
}

export class qzcowcow_request {
    public static QzcowcowPlayer( data:{ MyInfo:any, Cards:any } ) { qzcowcow_packet_define[182].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { qzcowcow_packet_define[183].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateFreeResp( data:{ Times:any } ) { qzcowcow_packet_define[184].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateCallResp( data:{ Times:any } ) { qzcowcow_packet_define[185].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateDecideResp( data:{ Times:any, HostID:number, Multiple:number } ) { qzcowcow_packet_define[186].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStatePlayingResp( data:{ Times:any } ) { qzcowcow_packet_define[187].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateDealResp( data:{ Times:any, Cards:any } ) { qzcowcow_packet_define[188].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { qzcowcow_packet_define[189].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOverResp( data:{ Times:any } ) { qzcowcow_packet_define[190].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowReadyReq( data:{ IsReady:any } ) { qzcowcow_packet_define[191].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowReadyResp( data:{ UserId:number } ) { qzcowcow_packet_define[192].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowCallReq( data:{ Multiple:number } ) { qzcowcow_packet_define[193].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowCallResp( data:{ UserID:number, Multiple:number } ) { qzcowcow_packet_define[194].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { qzcowcow_packet_define[195].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { qzcowcow_packet_define[196].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOpenResp( data:{ WinnerId:number, Infos:any[] } ) { qzcowcow_packet_define[197].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { qzcowcow_packet_define[198].sendToChannel(ChannelDefine.game, data, false); }
}

