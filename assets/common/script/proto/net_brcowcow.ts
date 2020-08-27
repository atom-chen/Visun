//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    GameBrcowcowEnterResp = 73,
    GameBrcowcowStateResp = 74,
    GameBrcowcowBetReq = 75,
    GameBrcowcowBetResp = 76,
    GameBrcowcowOverResp = 77,
    GameBrcowcowHistoryReq = 78,
    GameBrcowcowHistoryResp = 79,
    GameBrcowcowHost = 80,
    GameBrcowcowHostListReq = 81,
    GameBrcowcowHostListResp = 82,
}

export var brcowcow_packet_define = {
    73: new LeafWsPacket(73, brcowcow.GameBrcowcowEnterResp, "brcowcow.GameBrcowcowEnterResp"),
    74: new LeafWsPacket(74, brcowcow.GameBrcowcowStateResp, "brcowcow.GameBrcowcowStateResp"),
    75: new LeafWsPacket(75, brcowcow.GameBrcowcowBetReq, "brcowcow.GameBrcowcowBetReq"),
    76: new LeafWsPacket(76, brcowcow.GameBrcowcowBetResp, "brcowcow.GameBrcowcowBetResp"),
    77: new LeafWsPacket(77, brcowcow.GameBrcowcowOverResp, "brcowcow.GameBrcowcowOverResp"),
    78: new LeafWsPacket(78, brcowcow.GameBrcowcowHistoryReq, "brcowcow.GameBrcowcowHistoryReq"),
    79: new LeafWsPacket(79, brcowcow.GameBrcowcowHistoryResp, "brcowcow.GameBrcowcowHistoryResp"),
    80: new LeafWsPacket(80, brcowcow.GameBrcowcowHost, "brcowcow.GameBrcowcowHost"),
    81: new LeafWsPacket(81, brcowcow.GameBrcowcowHostListReq, "brcowcow.GameBrcowcowHostListReq"),
    82: new LeafWsPacket(82, brcowcow.GameBrcowcowHostListResp, "brcowcow.GameBrcowcowHostListResp"),
}

export class brcowcow_request {
    public static GameBrcowcowEnterResp( data:{ TimeStamp:number, AreaBets:number[], MyBets:number[], GameState:any } ) { brcowcow_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBrcowcowStateResp( data:{ CurState:number, CurStateTimeout:number } ) { brcowcow_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBrcowcowBetReq( data:{ AreaId:number, Money:number } ) { brcowcow_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBrcowcowBetResp( data:{ UserId:number, AreaId:number, Money:number } ) { brcowcow_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBrcowcowOverResp( data:{ Cards:any[], AreaResult:any, TotalSettlement:number[], MySettlement:number } ) { brcowcow_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBrcowcowHistoryReq( data:{ GameId:number } ) { brcowcow_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBrcowcowHistoryResp( data:{ GameId:number } ) { brcowcow_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBrcowcowHost( data:{ UserID:number, IsWant:any } ) { brcowcow_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBrcowcowHostListReq( data:{} ) { brcowcow_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBrcowcowHostListResp( data:{ CurHost:any, Waitlist:number[] } ) { brcowcow_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
}

