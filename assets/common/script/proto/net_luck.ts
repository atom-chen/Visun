//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { luck } from "./luck";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum luck_msgs {
    SendReward = 34,
    SendRewardResp = 35,
    GetReward = 36,
    GetRewardResp = 37,
    RollDice = 38,
    RollDiceResp = 39,
}

export var luck_packet_define = {
    34: new LeafWsPacket(34, luck.SendReward, "luck.SendReward"),
    35: new LeafWsPacket(35, luck.SendRewardResp, "luck.SendRewardResp"),
    36: new LeafWsPacket(36, luck.GetReward, "luck.GetReward"),
    37: new LeafWsPacket(37, luck.GetRewardResp, "luck.GetRewardResp"),
    38: new LeafWsPacket(38, luck.RollDice, "luck.RollDice"),
    39: new LeafWsPacket(39, luck.RollDiceResp, "luck.RollDiceResp"),
}

export class luck_request {
    public static SendReward( data:{ Type:number, Count:number, Money:number } ) { luck_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static SendRewardResp( data:{ ID:number, Type:number, Count:number, Money:number, TimeStamp:number, SenderID:number, StartTimeStamp:number, WaitTime:number } ) { luck_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static GetReward( data:{ ID:number } ) { luck_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GetRewardResp( data:{ ID:number, SenderID:number, StartTimeStamp:number, WaitTime:number, Count:number, Money:number, RemainCount:number, RemainMoney:number, BestMoney:number, BestMoneyIndex:number, MoneyList:number[] } ) { luck_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static RollDice( data:{ Count:number } ) { luck_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static RollDiceResp( data:{ Count:number, Numbers:any } ) { luck_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
}

