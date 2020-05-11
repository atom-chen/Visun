//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 89,
    GameCowcowHost = 90,
    GameCowcowSuperHost = 91,
    GameCowcowPlaying = 92,
    GameCowcowBetResult = 93,
    GameCowcowOver = 94,
    GameCowcowCheckout = 95,
}

export var cowcow_packet_define = {
    89: new LeafWsPacket(89, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    90: new LeafWsPacket(90, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    91: new LeafWsPacket(91, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    92: new LeafWsPacket(92, cowcow.GameCowcowPlaying, "cowcow.GameCowcowPlaying"),
    93: new LeafWsPacket(93, cowcow.GameCowcowBetResult, "cowcow.GameCowcowBetResult"),
    94: new LeafWsPacket(94, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    95: new LeafWsPacket(95, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
}

