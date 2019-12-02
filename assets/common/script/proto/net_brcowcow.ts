//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { brcowcow } from "./brcowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum brcowcow_msgs {
    ReqBrcowcowBet = 18,
    RespBrcowcowBet = 19,
}

export var brcowcow_packet_define = {
    18: new LeafWsPacket(18, brcowcow.ReqBrcowcowBet),
    19: new LeafWsPacket(19, brcowcow.RespBrcowcowBet),
}

export class brcowcow_request {
    public static ReqBrcowcowBet( data:{ AreaId:number, Money:number } ) { brcowcow_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static RespBrcowcowBet( data:{ UserID:number, AreaId:number, Money:number } ) { brcowcow_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
}

