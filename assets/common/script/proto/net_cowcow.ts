//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 70,
    GameCowcowHost = 71,
    GameCowcowSuperHost = 72,
    GameCowcowPlaying = 73,
    GameCowcowBetResult = 74,
    GameCowcowOver = 75,
    GameCowcowCheckout = 76,
}

export var cowcow_packet_define = {
    70: new LeafWsPacket(70, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    71: new LeafWsPacket(71, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    72: new LeafWsPacket(72, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    73: new LeafWsPacket(73, cowcow.GameCowcowPlaying, "cowcow.GameCowcowPlaying"),
    74: new LeafWsPacket(74, cowcow.GameCowcowBetResult, "cowcow.GameCowcowBetResult"),
    75: new LeafWsPacket(75, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    76: new LeafWsPacket(76, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[70].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[71].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[72].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[73].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[74].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[75].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[76].sendToChannel(ChannelDefine.game, data, false); }
}

