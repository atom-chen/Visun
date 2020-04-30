//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 40,
    GameCowcowHost = 41,
    GameCowcowSuperHost = 42,
    GameCowcowPlaying = 43,
    GameCowcowBetResult = 44,
    GameCowcowOver = 45,
    GameCowcowCheckout = 46,
}

export var cowcow_packet_define = {
    40: new LeafWsPacket(40, cowcow.GameCowcowEnter),
    41: new LeafWsPacket(41, cowcow.GameCowcowHost),
    42: new LeafWsPacket(42, cowcow.GameCowcowSuperHost),
    43: new LeafWsPacket(43, cowcow.GameCowcowPlaying),
    44: new LeafWsPacket(44, cowcow.GameCowcowBetResult),
    45: new LeafWsPacket(45, cowcow.GameCowcowOver),
    46: new LeafWsPacket(46, cowcow.GameCowcowCheckout),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
}

