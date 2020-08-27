//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 45,
    GameCowcowHost = 46,
    GameCowcowSuperHost = 47,
    GameCowcowPlaying = 48,
    GameCowcowBetResult = 49,
    GameCowcowOver = 50,
    GameCowcowCheckout = 51,
}

export var cowcow_packet_define = {
    45: new LeafWsPacket(45, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    46: new LeafWsPacket(46, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    47: new LeafWsPacket(47, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    48: new LeafWsPacket(48, cowcow.GameCowcowPlaying, "cowcow.GameCowcowPlaying"),
    49: new LeafWsPacket(49, cowcow.GameCowcowBetResult, "cowcow.GameCowcowBetResult"),
    50: new LeafWsPacket(50, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    51: new LeafWsPacket(51, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
}

