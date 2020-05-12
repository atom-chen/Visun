//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { luck } from "./luck";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum luck_msgs {
    SendReward = 58,
    SendRewardResp = 59,
    GetReward = 60,
    GetRewardResp = 61,
    RollDice = 62,
    RollDiceResp = 63,
}

export var luck_packet_define = {
    58: new LeafWsPacket(58, luck.SendReward, "luck.SendReward"),
    59: new LeafWsPacket(59, luck.SendRewardResp, "luck.SendRewardResp"),
    60: new LeafWsPacket(60, luck.GetReward, "luck.GetReward"),
    61: new LeafWsPacket(61, luck.GetRewardResp, "luck.GetRewardResp"),
    62: new LeafWsPacket(62, luck.RollDice, "luck.RollDice"),
    63: new LeafWsPacket(63, luck.RollDiceResp, "luck.RollDiceResp"),
}

export class luck_request {
    public static SendReward( data:{ Type:number, Count:number, Money:number } ) { luck_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static SendRewardResp( data:{ ID:number, Type:number, Count:number, Money:number, TimeStamp:number, SenderID:number, StartTimeStamp:number, WaitTime:number } ) { luck_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static GetReward( data:{ ID:number } ) { luck_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static GetRewardResp( data:{ ID:number, SenderID:number, StartTimeStamp:number, WaitTime:number, Type:number, Count:number, Money:number, RemainCount:number, RemainMoney:number, BestMoney:number, BestMoneyIndex:number, MoneyList:number[] } ) { luck_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static RollDice( data:{ Count:number } ) { luck_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static RollDiceResp( data:{ Count:number, Numbers:any } ) { luck_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
}

