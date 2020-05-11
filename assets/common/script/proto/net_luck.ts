//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { luck } from "./luck";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum luck_msgs {
    SendReward = 53,
    SendRewardResp = 54,
    GetReward = 55,
    GetRewardResp = 56,
    RollDice = 57,
    RollDiceResp = 58,
}

export var luck_packet_define = {
    53: new LeafWsPacket(53, luck.SendReward, "luck.SendReward"),
    54: new LeafWsPacket(54, luck.SendRewardResp, "luck.SendRewardResp"),
    55: new LeafWsPacket(55, luck.GetReward, "luck.GetReward"),
    56: new LeafWsPacket(56, luck.GetRewardResp, "luck.GetRewardResp"),
    57: new LeafWsPacket(57, luck.RollDice, "luck.RollDice"),
    58: new LeafWsPacket(58, luck.RollDiceResp, "luck.RollDiceResp"),
}

export class luck_request {
    public static SendReward( data:{ Type:number, Count:number, Money:number } ) { luck_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static SendRewardResp( data:{ ID:number, Type:number, Count:number, Money:number, TimeStamp:number, SenderID:number, StartTimeStamp:number, WaitTime:number } ) { luck_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static GetReward( data:{ ID:number } ) { luck_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GetRewardResp( data:{ ID:number, SenderID:number, StartTimeStamp:number, WaitTime:number, Type:number, Count:number, Money:number, RemainCount:number, RemainMoney:number, BestMoney:number, BestMoneyIndex:number, MoneyList:number[] } ) { luck_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static RollDice( data:{ Count:number } ) { luck_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static RollDiceResp( data:{ Count:number, Numbers:any } ) { luck_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
}

