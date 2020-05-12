//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 94,
    GameCowcowHost = 95,
    GameCowcowSuperHost = 96,
    GameCowcowPlaying = 97,
    GameCowcowBetResult = 98,
    GameCowcowOver = 99,
    GameCowcowCheckout = 100,
}

export var cowcow_packet_define = {
    94: new LeafWsPacket(94, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    95: new LeafWsPacket(95, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    96: new LeafWsPacket(96, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    97: new LeafWsPacket(97, cowcow.GameCowcowPlaying, "cowcow.GameCowcowPlaying"),
    98: new LeafWsPacket(98, cowcow.GameCowcowBetResult, "cowcow.GameCowcowBetResult"),
    99: new LeafWsPacket(99, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    100: new LeafWsPacket(100, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[100].sendToChannel(ChannelDefine.game, data, false); }
}

