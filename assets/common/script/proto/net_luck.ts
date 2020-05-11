//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { luck } from "./luck";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum luck_msgs {
    SendReward = 40,
    SendRewardResp = 41,
    GetReward = 42,
    GetRewardResp = 43,
    RollDice = 44,
    RollDiceResp = 45,
}

export var luck_packet_define = {
    40: new LeafWsPacket(40, luck.SendReward, "luck.SendReward"),
    41: new LeafWsPacket(41, luck.SendRewardResp, "luck.SendRewardResp"),
    42: new LeafWsPacket(42, luck.GetReward, "luck.GetReward"),
    43: new LeafWsPacket(43, luck.GetRewardResp, "luck.GetRewardResp"),
    44: new LeafWsPacket(44, luck.RollDice, "luck.RollDice"),
    45: new LeafWsPacket(45, luck.RollDiceResp, "luck.RollDiceResp"),
}

export class luck_request {
    public static SendReward( data:{ Type:number, Count:number, Money:number } ) { luck_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static SendRewardResp( data:{ ID:number, Type:number, Count:number, Money:number, TimeStamp:number, SenderID:number, StartTimeStamp:number, WaitTime:number } ) { luck_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GetReward( data:{ ID:number } ) { luck_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GetRewardResp( data:{ ID:number, SenderID:number, StartTimeStamp:number, WaitTime:number, Count:number, Money:number, RemainCount:number, RemainMoney:number, BestMoney:number, BestMoneyIndex:number, MoneyList:number[] } ) { luck_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static RollDice( data:{ Count:number } ) { luck_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static RollDiceResp( data:{ Count:number, Numbers:any } ) { luck_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
}

