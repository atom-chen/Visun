//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { qzcowcow } from "./qzcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum qzcowcow_msgs {
    QzcowcowPlayer = 179,
    QzcowcowSceneResp = 180,
    QzcowcowStateFreeResp = 181,
    QzcowcowStatePlayingResp = 182,
    QzcowcowStateDealResp = 183,
    QzcowcowStateOpenResp = 184,
    QzcowcowStateOverResp = 185,
    QzcowcowReadyReq = 186,
    QzcowcowReadyResp = 187,
    QzcowcowBetReq = 188,
    QzcowcowBetResp = 189,
    QzcowcowOpenResp = 190,
    QzcowcowOverResp = 191,
    QzcowcowHostReq = 192,
    QzcowcowHostResp = 193,
    QzcowcowHostListReq = 194,
    QzcowcowHostListResp = 195,
}

export var qzcowcow_packet_define = {
    179: new LeafWsPacket(179, qzcowcow.QzcowcowPlayer, "qzcowcow.QzcowcowPlayer"),
    180: new LeafWsPacket(180, qzcowcow.QzcowcowSceneResp, "qzcowcow.QzcowcowSceneResp"),
    181: new LeafWsPacket(181, qzcowcow.QzcowcowStateFreeResp, "qzcowcow.QzcowcowStateFreeResp"),
    182: new LeafWsPacket(182, qzcowcow.QzcowcowStatePlayingResp, "qzcowcow.QzcowcowStatePlayingResp"),
    183: new LeafWsPacket(183, qzcowcow.QzcowcowStateDealResp, "qzcowcow.QzcowcowStateDealResp"),
    184: new LeafWsPacket(184, qzcowcow.QzcowcowStateOpenResp, "qzcowcow.QzcowcowStateOpenResp"),
    185: new LeafWsPacket(185, qzcowcow.QzcowcowStateOverResp, "qzcowcow.QzcowcowStateOverResp"),
    186: new LeafWsPacket(186, qzcowcow.QzcowcowReadyReq, "qzcowcow.QzcowcowReadyReq"),
    187: new LeafWsPacket(187, qzcowcow.QzcowcowReadyResp, "qzcowcow.QzcowcowReadyResp"),
    188: new LeafWsPacket(188, qzcowcow.QzcowcowBetReq, "qzcowcow.QzcowcowBetReq"),
    189: new LeafWsPacket(189, qzcowcow.QzcowcowBetResp, "qzcowcow.QzcowcowBetResp"),
    190: new LeafWsPacket(190, qzcowcow.QzcowcowOpenResp, "qzcowcow.QzcowcowOpenResp"),
    191: new LeafWsPacket(191, qzcowcow.QzcowcowOverResp, "qzcowcow.QzcowcowOverResp"),
    192: new LeafWsPacket(192, qzcowcow.QzcowcowHostReq, "qzcowcow.QzcowcowHostReq"),
    193: new LeafWsPacket(193, qzcowcow.QzcowcowHostResp, "qzcowcow.QzcowcowHostResp"),
    194: new LeafWsPacket(194, qzcowcow.QzcowcowHostListReq, "qzcowcow.QzcowcowHostListReq"),
    195: new LeafWsPacket(195, qzcowcow.QzcowcowHostListResp, "qzcowcow.QzcowcowHostListResp"),
}

export class qzcowcow_request {
    public static QzcowcowPlayer( data:{ MyInfo:any, Cards:any } ) { qzcowcow_packet_define[179].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { qzcowcow_packet_define[180].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateFreeResp( data:{ Times:any } ) { qzcowcow_packet_define[181].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStatePlayingResp( data:{ Times:any } ) { qzcowcow_packet_define[182].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateDealResp( data:{ Times:any, Cards:any } ) { qzcowcow_packet_define[183].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { qzcowcow_packet_define[184].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOverResp( data:{ Times:any } ) { qzcowcow_packet_define[185].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowReadyReq( data:{ IsReady:any } ) { qzcowcow_packet_define[186].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowReadyResp( data:{ UserId:number } ) { qzcowcow_packet_define[187].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { qzcowcow_packet_define[188].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { qzcowcow_packet_define[189].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOpenResp( data:{ WinnerId:number, Infos:any[] } ) { qzcowcow_packet_define[190].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { qzcowcow_packet_define[191].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostReq( data:{ IsWant:any } ) { qzcowcow_packet_define[192].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostResp( data:{ UserID:number, IsWant:any } ) { qzcowcow_packet_define[193].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostListReq( data:{} ) { qzcowcow_packet_define[194].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { qzcowcow_packet_define[195].sendToChannel(ChannelDefine.game, data, false); }
}

