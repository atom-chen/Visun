//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 41,
    GameCowcowHost = 42,
    GameCowcowSuperHost = 43,
    GameCowcowPlaying = 44,
    GameCowcowBetResult = 45,
    GameCowcowOver = 46,
    GameCowcowCheckout = 47,
}

export var cowcow_packet_define = {
    41: new LeafWsPacket(41, cowcow.GameCowcowEnter),
    42: new LeafWsPacket(42, cowcow.GameCowcowHost),
    43: new LeafWsPacket(43, cowcow.GameCowcowSuperHost),
    44: new LeafWsPacket(44, cowcow.GameCowcowPlaying),
    45: new LeafWsPacket(45, cowcow.GameCowcowBetResult),
    46: new LeafWsPacket(46, cowcow.GameCowcowOver),
    47: new LeafWsPacket(47, cowcow.GameCowcowCheckout),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
}

