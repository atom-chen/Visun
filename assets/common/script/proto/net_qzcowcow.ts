//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { qzcowcow } from "./qzcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum qzcowcow_msgs {
    QzcowcowSceneResp = 178,
    QzcowcowStateFreeResp = 179,
    QzcowcowStateStartResp = 180,
    QzcowcowStatePlayingResp = 181,
    QzcowcowStateOpenResp = 182,
    QzcowcowStateOverResp = 183,
    QzcowcowBetReq = 184,
    QzcowcowBetResp = 185,
    QzcowcowOpenResp = 186,
    QzcowcowOverResp = 187,
    QzcowcowHostReq = 188,
    QzcowcowHostResp = 189,
    QzcowcowHostListReq = 190,
    QzcowcowHostListResp = 191,
}

export var qzcowcow_packet_define = {
    178: new LeafWsPacket(178, qzcowcow.QzcowcowSceneResp, "qzcowcow.QzcowcowSceneResp"),
    179: new LeafWsPacket(179, qzcowcow.QzcowcowStateFreeResp, "qzcowcow.QzcowcowStateFreeResp"),
    180: new LeafWsPacket(180, qzcowcow.QzcowcowStateStartResp, "qzcowcow.QzcowcowStateStartResp"),
    181: new LeafWsPacket(181, qzcowcow.QzcowcowStatePlayingResp, "qzcowcow.QzcowcowStatePlayingResp"),
    182: new LeafWsPacket(182, qzcowcow.QzcowcowStateOpenResp, "qzcowcow.QzcowcowStateOpenResp"),
    183: new LeafWsPacket(183, qzcowcow.QzcowcowStateOverResp, "qzcowcow.QzcowcowStateOverResp"),
    184: new LeafWsPacket(184, qzcowcow.QzcowcowBetReq, "qzcowcow.QzcowcowBetReq"),
    185: new LeafWsPacket(185, qzcowcow.QzcowcowBetResp, "qzcowcow.QzcowcowBetResp"),
    186: new LeafWsPacket(186, qzcowcow.QzcowcowOpenResp, "qzcowcow.QzcowcowOpenResp"),
    187: new LeafWsPacket(187, qzcowcow.QzcowcowOverResp, "qzcowcow.QzcowcowOverResp"),
    188: new LeafWsPacket(188, qzcowcow.QzcowcowHostReq, "qzcowcow.QzcowcowHostReq"),
    189: new LeafWsPacket(189, qzcowcow.QzcowcowHostResp, "qzcowcow.QzcowcowHostResp"),
    190: new LeafWsPacket(190, qzcowcow.QzcowcowHostListReq, "qzcowcow.QzcowcowHostListReq"),
    191: new LeafWsPacket(191, qzcowcow.QzcowcowHostListResp, "qzcowcow.QzcowcowHostListResp"),
}

export class qzcowcow_request {
    public static QzcowcowSceneResp( data:{ TimeStamp:number, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], Inning:string, AllPlayers:any, HostID:number } ) { qzcowcow_packet_define[178].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateFreeResp( data:{ Times:any } ) { qzcowcow_packet_define[179].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateStartResp( data:{ Times:any, HostID:number } ) { qzcowcow_packet_define[180].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStatePlayingResp( data:{ Times:any } ) { qzcowcow_packet_define[181].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOpenResp( data:{ Times:any, OpenInfo:any } ) { qzcowcow_packet_define[182].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowStateOverResp( data:{ Times:any } ) { qzcowcow_packet_define[183].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetReq( data:{ BetArea:number, BetScore:number } ) { qzcowcow_packet_define[184].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowBetResp( data:{ UserId:number, BetArea:number, BetScore:number } ) { qzcowcow_packet_define[185].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOpenResp( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { qzcowcow_packet_define[186].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowOverResp( data:{ MySettlement:number, TotalSettlement:number[] } ) { qzcowcow_packet_define[187].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostReq( data:{ IsWant:any } ) { qzcowcow_packet_define[188].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostResp( data:{ UserID:number, IsWant:any } ) { qzcowcow_packet_define[189].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostListReq( data:{} ) { qzcowcow_packet_define[190].sendToChannel(ChannelDefine.game, data, false); }
    public static QzcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { qzcowcow_packet_define[191].sendToChannel(ChannelDefine.game, data, false); }
}

