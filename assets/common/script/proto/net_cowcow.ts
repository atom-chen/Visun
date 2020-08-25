//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 58,
    GameCowcowHost = 59,
    GameCowcowSuperHost = 60,
    GameCowcowPlaying = 61,
    GameCowcowBetResult = 62,
    GameCowcowOver = 63,
    GameCowcowCheckout = 64,
}

export var cowcow_packet_define = {
    58: new LeafWsPacket(58, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    59: new LeafWsPacket(59, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    60: new LeafWsPacket(60, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    61: new LeafWsPacket(61, cowcow.GameCowcowPlaying, "cowcow.GameCowcowPlaying"),
    62: new LeafWsPacket(62, cowcow.GameCowcowBetResult, "cowcow.GameCowcowBetResult"),
    63: new LeafWsPacket(63, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    64: new LeafWsPacket(64, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
}

