//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { luck } from "./luck";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum luck_msgs {
    SendReward = 62,
    SendRewardResp = 63,
    GetReward = 64,
    GetRewardResp = 65,
    RollDice = 66,
    RollDiceResp = 67,
}

export var luck_packet_define = {
    62: new LeafWsPacket(62, luck.SendReward, "luck.SendReward"),
    63: new LeafWsPacket(63, luck.SendRewardResp, "luck.SendRewardResp"),
    64: new LeafWsPacket(64, luck.GetReward, "luck.GetReward"),
    65: new LeafWsPacket(65, luck.GetRewardResp, "luck.GetRewardResp"),
    66: new LeafWsPacket(66, luck.RollDice, "luck.RollDice"),
    67: new LeafWsPacket(67, luck.RollDiceResp, "luck.RollDiceResp"),
}

export class luck_request {
    public static SendReward( data:{ Type:number, Count:number, Money:number } ) { luck_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static SendRewardResp( data:{ ID:number, Type:number, Count:number, Money:number, TimeStamp:number, SenderID:number, StartTimeStamp:number, WaitTime:number } ) { luck_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static GetReward( data:{ ID:number } ) { luck_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static GetRewardResp( data:{ ID:number, SenderID:number, StartTimeStamp:number, WaitTime:number, Type:number, Count:number, Money:number, RemainCount:number, RemainMoney:number, BestMoney:number, BestMoneyIndex:number, MoneyList:number[] } ) { luck_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static RollDice( data:{ Count:number } ) { luck_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static RollDiceResp( data:{ Count:number, Numbers:any } ) { luck_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
}

