//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 41,
    GameCowcowHost = 42,
    GameCowcowHostResult = 43,
    GameCowcowSuperHost = 44,
    GameCowcowSuperHostResult = 45,
    GameCowcowBet = 46,
    GameCowcowBetResult = 47,
    GameCowcowOver = 48,
}

export var cowcow_packet_define = {
    41: new LeafWsPacket(41, cowcow.GameCowcowEnter),
    42: new LeafWsPacket(42, cowcow.GameCowcowHost),
    43: new LeafWsPacket(43, cowcow.GameCowcowHostResult),
    44: new LeafWsPacket(44, cowcow.GameCowcowSuperHost),
    45: new LeafWsPacket(45, cowcow.GameCowcowSuperHostResult),
    46: new LeafWsPacket(46, cowcow.GameCowcowBet),
    47: new LeafWsPacket(47, cowcow.GameCowcowBetResult),
    48: new LeafWsPacket(48, cowcow.GameCowcowOver),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number, AwardAreas:any, FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHostResult( data:{} ) { cowcow_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHostResult( data:{} ) { cowcow_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBet( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ UserID:number, BetArea:number, BetScore:number } ) { cowcow_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, Acquire:number } ) { cowcow_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
}

