//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { qzcowcow } from "./qzcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum qzcowcow_msgs {
    QzcowcowSceneResp = 179,
    QzcowcowStateFreeResp = 180,
    QzcowcowStateStartResp = 181,
    QzcowcowStatePlayingResp = 182,
    QzcowcowStateOpenResp = 183,
    QzcowcowStateOverResp = 184,
    QzcowcowBetReq = 185,
    QzcowcowBetResp = 186,
    QzcowcowOpenResp = 187,
    QzcowcowOverResp = 188,
    QzcowcowHostReq = 189,
    QzcowcowHostResp = 190,
    QzcowcowHostListReq = 191,
    QzcowcowHostListResp = 192,
}

export var qzcowcow_packet_define = {
    179: new LeafWsPacket(179, qzcowcow.QzcowcowSceneResp, "qzcowcow.QzcowcowSceneResp"),
    180: new LeafWsPacket(180, qzcowcow.QzcowcowStateFreeResp, "qzcowcow.QzcowcowStateFreeResp"),
    181: new LeafWsPacket(181, qzcowcow.QzcowcowStateStartResp, "qzcowcow.QzcowcowStateStartResp"),
    182: new LeafWsPacket(182, qzcowcow.QzcowcowStatePlayingResp, "qzcowcow.QzcowcowStatePlayingResp"),
    183: new LeafWsPacket(183, qzcowcow.QzcowcowStateOpenResp, "qzcowcow.QzcowcowStateOpenResp"),
    184: new LeafWsPacket(184, qzcowcow.QzcowcowStateOverResp, "qzcowcow.QzcowcowStateOverResp"),
    185: new LeafWsPacket(185, qzcowcow.QzcowcowBetReq, "qzcowcow.QzcowcowBetReq"),
    186: new LeafWsPacket(186, qzcowcow.QzcowcowBetResp, "qzcowcow.QzcowcowBetResp"),
    187: new LeafWsPacket(187, qzcowcow.QzcowcowOpenResp, "qzcowcow.QzcowcowOpenResp"),
    188: new LeafWsPacket(188, qzcowcow.QzcowcowOverResp, "qzcowcow.QzcowcowOverResp"),
    189: new LeafWsPacket(189, qzcowcow.QzcowcowHostReq, "qzcowcow.QzcowcowHostReq"),
    190: new LeafWsPacket(190, qzcowcow.QzcowcowHostResp, "qzcowcow.QzcowcowHostResp"),
    191: new LeafWsPacket(191, qzcowcow.QzcowcowHostListReq, "qzcowcow.QzcowcowHostListReq"),
    192: new LeafWsPacket(192, qzcowcow.QzcowcowHostListResp, "qzcowcow.QzcowcowHostListResp"),
}

export class qzcowcow_request {
    public static QzcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { qzcowcow_packet_define[179].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateFreeResp( data:{ Times:any } ) { qzcowcow_packet_define[180].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateStartResp( data:{ Times:any, HostID:number } ) { qzcowcow_packet_define[181].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStatePlayingResp( data:{ Times:any } ) { qzcowcow_packet_define[182].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { qzcowcow_packet_define[183].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOverResp( data:{ Times:any } ) { qzcowcow_packet_define[184].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { qzcowcow_packet_define[185].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { qzcowcow_packet_define[186].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOpenResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { qzcowcow_packet_define[187].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { qzcowcow_packet_define[188].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostReq( data:{ IsWant:any } ) { qzcowcow_packet_define[189].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostResp( data:{ UserID:number, IsWant:any } ) { qzcowcow_packet_define[190].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostListReq( data:{} ) { qzcowcow_packet_define[191].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { qzcowcow_packet_define[192].sendToChannel(ChannelDefine.game, data, false); }
}

