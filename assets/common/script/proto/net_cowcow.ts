//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 98,
    GameCowcowHost = 99,
    GameCowcowSuperHost = 100,
    GameCowcowPlaying = 101,
    GameCowcowBetResult = 102,
    GameCowcowOver = 103,
    GameCowcowCheckout = 104,
}

export var cowcow_packet_define = {
    98: new LeafWsPacket(98, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    99: new LeafWsPacket(99, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    100: new LeafWsPacket(100, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    101: new LeafWsPacket(101, cowcow.GameCowcowPlaying, "cowcow.GameCowcowPlaying"),
    102: new LeafWsPacket(102, cowcow.GameCowcowBetResult, "cowcow.GameCowcowBetResult"),
    103: new LeafWsPacket(103, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    104: new LeafWsPacket(104, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[101].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[102].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[103].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[104].sendToChannel(ChannelDefine.game, data, false); }
}

