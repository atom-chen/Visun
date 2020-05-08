//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 42,
    GameCowcowHost = 43,
    GameCowcowSuperHost = 44,
    GameCowcowPlaying = 45,
    GameCowcowBetResult = 46,
    GameCowcowOver = 47,
    GameCowcowCheckout = 48,
}

export var cowcow_packet_define = {
    42: new LeafWsPacket(42, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    43: new LeafWsPacket(43, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    44: new LeafWsPacket(44, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    45: new LeafWsPacket(45, cowcow.GameCowcowPlaying, "cowcow.GameCowcowPlaying"),
    46: new LeafWsPacket(46, cowcow.GameCowcowBetResult, "cowcow.GameCowcowBetResult"),
    47: new LeafWsPacket(47, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    48: new LeafWsPacket(48, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
}

