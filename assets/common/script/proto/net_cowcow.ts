//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 77,
    GameCowcowHost = 78,
    GameCowcowSuperHost = 79,
    GameCowcowPlaying = 80,
    GameCowcowBetResult = 81,
    GameCowcowOver = 82,
    GameCowcowCheckout = 83,
}

export var cowcow_packet_define = {
    77: new LeafWsPacket(77, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    78: new LeafWsPacket(78, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    79: new LeafWsPacket(79, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    80: new LeafWsPacket(80, cowcow.GameCowcowPlaying, "cowcow.GameCowcowPlaying"),
    81: new LeafWsPacket(81, cowcow.GameCowcowBetResult, "cowcow.GameCowcowBetResult"),
    82: new LeafWsPacket(82, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    83: new LeafWsPacket(83, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[77].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[78].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[79].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[80].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[81].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[82].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[83].sendToChannel(ChannelDefine.game, data, false); }
}

