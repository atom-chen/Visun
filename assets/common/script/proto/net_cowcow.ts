//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 47,
    GameCowcowHost = 48,
    GameCowcowHostResult = 49,
    GameCowcowSuperHost = 50,
    GameCowcowSuperHostResult = 51,
    GameCowcowBet = 52,
    GameCowcowBetResult = 53,
    GameCowcowOver = 54,
}

export var cowcow_packet_define = {
    47: new LeafWsPacket(47, cowcow.GameCowcowEnter),
    48: new LeafWsPacket(48, cowcow.GameCowcowHost),
    49: new LeafWsPacket(49, cowcow.GameCowcowHostResult),
    50: new LeafWsPacket(50, cowcow.GameCowcowSuperHost),
    51: new LeafWsPacket(51, cowcow.GameCowcowSuperHostResult),
    52: new LeafWsPacket(52, cowcow.GameCowcowBet),
    53: new LeafWsPacket(53, cowcow.GameCowcowBetResult),
    54: new LeafWsPacket(54, cowcow.GameCowcowOver),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number, AwardAreas:any, FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHostResult( data:{} ) { cowcow_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHostResult( data:{} ) { cowcow_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBet( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ UserID:number, BetArea:number, BetScore:number } ) { cowcow_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, Acquire:number } ) { cowcow_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
}

