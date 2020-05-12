//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 93,
    GameCowcowHost = 94,
    GameCowcowSuperHost = 95,
    GameCowcowPlaying = 96,
    GameCowcowBetResult = 97,
    GameCowcowOver = 98,
    GameCowcowCheckout = 99,
}

export var cowcow_packet_define = {
    93: new LeafWsPacket(93, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    94: new LeafWsPacket(94, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    95: new LeafWsPacket(95, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    96: new LeafWsPacket(96, cowcow.GameCowcowPlaying, "cowcow.GameCowcowPlaying"),
    97: new LeafWsPacket(97, cowcow.GameCowcowBetResult, "cowcow.GameCowcowBetResult"),
    98: new LeafWsPacket(98, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    99: new LeafWsPacket(99, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[94].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[95].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[96].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[97].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[98].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[99].sendToChannel(ChannelDefine.game, data, false); }
}

