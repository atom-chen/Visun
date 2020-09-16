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
    QzcowcowStateCallResp = 182,
    QzcowcowStateDecideResp = 183,
    QzcowcowStatePlayingResp = 184,
    QzcowcowStateDealResp = 185,
    QzcowcowStateOpenResp = 186,
    QzcowcowStateOverResp = 187,
    QzcowcowReadyReq = 188,
    QzcowcowReadyResp = 189,
    QzcowcowBetReq = 190,
    QzcowcowBetResp = 191,
    QzcowcowOpenResp = 192,
    QzcowcowOverResp = 193,
    QzcowcowHostReq = 194,
    QzcowcowHostResp = 195,
    QzcowcowHostListReq = 196,
    QzcowcowHostListResp = 197,
}

export var qzcowcow_packet_define = {
    179: new LeafWsPacket(179, qzcowcow.QzcowcowPlayer, "qzcowcow.QzcowcowPlayer"),
    180: new LeafWsPacket(180, qzcowcow.QzcowcowSceneResp, "qzcowcow.QzcowcowSceneResp"),
    181: new LeafWsPacket(181, qzcowcow.QzcowcowStateFreeResp, "qzcowcow.QzcowcowStateFreeResp"),
    182: new LeafWsPacket(182, qzcowcow.QzcowcowStateCallResp, "qzcowcow.QzcowcowStateCallResp"),
    183: new LeafWsPacket(183, qzcowcow.QzcowcowStateDecideResp, "qzcowcow.QzcowcowStateDecideResp"),
    184: new LeafWsPacket(184, qzcowcow.QzcowcowStatePlayingResp, "qzcowcow.QzcowcowStatePlayingResp"),
    185: new LeafWsPacket(185, qzcowcow.QzcowcowStateDealResp, "qzcowcow.QzcowcowStateDealResp"),
    186: new LeafWsPacket(186, qzcowcow.QzcowcowStateOpenResp, "qzcowcow.QzcowcowStateOpenResp"),
    187: new LeafWsPacket(187, qzcowcow.QzcowcowStateOverResp, "qzcowcow.QzcowcowStateOverResp"),
    188: new LeafWsPacket(188, qzcowcow.QzcowcowReadyReq, "qzcowcow.QzcowcowReadyReq"),
    189: new LeafWsPacket(189, qzcowcow.QzcowcowReadyResp, "qzcowcow.QzcowcowReadyResp"),
    190: new LeafWsPacket(190, qzcowcow.QzcowcowBetReq, "qzcowcow.QzcowcowBetReq"),
    191: new LeafWsPacket(191, qzcowcow.QzcowcowBetResp, "qzcowcow.QzcowcowBetResp"),
    192: new LeafWsPacket(192, qzcowcow.QzcowcowOpenResp, "qzcowcow.QzcowcowOpenResp"),
    193: new LeafWsPacket(193, qzcowcow.QzcowcowOverResp, "qzcowcow.QzcowcowOverResp"),
    194: new LeafWsPacket(194, qzcowcow.QzcowcowHostReq, "qzcowcow.QzcowcowHostReq"),
    195: new LeafWsPacket(195, qzcowcow.QzcowcowHostResp, "qzcowcow.QzcowcowHostResp"),
    196: new LeafWsPacket(196, qzcowcow.QzcowcowHostListReq, "qzcowcow.QzcowcowHostListReq"),
    197: new LeafWsPacket(197, qzcowcow.QzcowcowHostListResp, "qzcowcow.QzcowcowHostListResp"),
}

export class qzcowcow_request {
    public static QzcowcowPlayer( data:{ MyInfo:any, Cards:any } ) { qzcowcow_packet_define[179].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { qzcowcow_packet_define[180].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateFreeResp( data:{ Times:any } ) { qzcowcow_packet_define[181].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateCallResp( data:{ Times:any } ) { qzcowcow_packet_define[182].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateDecideResp( data:{ Times:any, HostID:number } ) { qzcowcow_packet_define[183].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStatePlayingResp( data:{ Times:any } ) { qzcowcow_packet_define[184].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateDealResp( data:{ Times:any, Cards:any } ) { qzcowcow_packet_define[185].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { qzcowcow_packet_define[186].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOverResp( data:{ Times:any } ) { qzcowcow_packet_define[187].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowReadyReq( data:{ IsReady:any } ) { qzcowcow_packet_define[188].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowReadyResp( data:{ UserId:number } ) { qzcowcow_packet_define[189].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { qzcowcow_packet_define[190].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { qzcowcow_packet_define[191].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOpenResp( data:{ WinnerId:number, Infos:any[] } ) { qzcowcow_packet_define[192].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { qzcowcow_packet_define[193].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostReq( data:{ IsWant:any } ) { qzcowcow_packet_define[194].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostResp( data:{ UserID:number, IsWant:any } ) { qzcowcow_packet_define[195].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostListReq( data:{} ) { qzcowcow_packet_define[196].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { qzcowcow_packet_define[197].sendToChannel(ChannelDefine.game, data, false); }
}

