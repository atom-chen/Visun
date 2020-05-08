//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 43,
    GameCowcowHost = 44,
    GameCowcowSuperHost = 45,
    GameCowcowPlaying = 46,
    GameCowcowBetResult = 47,
    GameCowcowOver = 48,
    GameCowcowCheckout = 49,
}

export var cowcow_packet_define = {
    43: new LeafWsPacket(43, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    44: new LeafWsPacket(44, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    45: new LeafWsPacket(45, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    46: new LeafWsPacket(46, cowcow.GameCowcowPlaying, "cowcow.GameCowcowPlaying"),
    47: new LeafWsPacket(47, cowcow.GameCowcowBetResult, "cowcow.GameCowcowBetResult"),
    48: new LeafWsPacket(48, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    49: new LeafWsPacket(49, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
}

