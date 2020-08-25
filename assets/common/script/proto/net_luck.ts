//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { luck } from "./luck";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum luck_msgs {
    SendReward = 22,
    SendRewardResp = 23,
    GetReward = 24,
    GetRewardResp = 25,
    RollDice = 26,
    RollDiceResp = 27,
}

export var luck_packet_define = {
    22: new LeafWsPacket(22, luck.SendReward, "luck.SendReward"),
    23: new LeafWsPacket(23, luck.SendRewardResp, "luck.SendRewardResp"),
    24: new LeafWsPacket(24, luck.GetReward, "luck.GetReward"),
    25: new LeafWsPacket(25, luck.GetRewardResp, "luck.GetRewardResp"),
    26: new LeafWsPacket(26, luck.RollDice, "luck.RollDice"),
    27: new LeafWsPacket(27, luck.RollDiceResp, "luck.RollDiceResp"),
}

export class luck_request {
    public static SendReward( data:{ Type:number, Count:number, Money:number } ) { luck_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static SendRewardResp( data:{ ID:number, Type:number, Count:number, Money:number, TimeStamp:number, SenderID:number, StartTimeStamp:number, WaitTime:number } ) { luck_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static GetReward( data:{ ID:number } ) { luck_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GetRewardResp( data:{ ID:number, SenderID:number, StartTimeStamp:number, WaitTime:number, Type:number, Count:number, Money:number, RemainCount:number, RemainMoney:number, BestMoney:number, BestMoneyIndex:number, MoneyList:number[] } ) { luck_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static RollDice( data:{ Count:number } ) { luck_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static RollDiceResp( data:{ Count:number, Numbers:any } ) { luck_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
}

