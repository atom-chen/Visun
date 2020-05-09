//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 61,
    GameCowcowHost = 62,
    GameCowcowSuperHost = 63,
    GameCowcowPlaying = 64,
    GameCowcowBetResult = 65,
    GameCowcowOver = 66,
    GameCowcowCheckout = 67,
}

export var cowcow_packet_define = {
    61: new LeafWsPacket(61, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    62: new LeafWsPacket(62, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    63: new LeafWsPacket(63, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    64: new LeafWsPacket(64, cowcow.GameCowcowPlaying, "cowcow.GameCowcowPlaying"),
    65: new LeafWsPacket(65, cowcow.GameCowcowBetResult, "cowcow.GameCowcowBetResult"),
    66: new LeafWsPacket(66, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    67: new LeafWsPacket(67, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
}

