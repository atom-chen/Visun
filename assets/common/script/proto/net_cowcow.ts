//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 62,
    GameCowcowHost = 63,
    GameCowcowSuperHost = 64,
    GameCowcowReq = 65,
    GameCowcowBetResp = 66,
    GameCowcowOver = 67,
    GameCowcowCheckout = 68,
}

export var cowcow_packet_define = {
    62: new LeafWsPacket(62, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    63: new LeafWsPacket(63, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    64: new LeafWsPacket(64, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    65: new LeafWsPacket(65, cowcow.GameCowcowReq, "cowcow.GameCowcowReq"),
    66: new LeafWsPacket(66, cowcow.GameCowcowBetResp, "cowcow.GameCowcowBetResp"),
    67: new LeafWsPacket(67, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    68: new LeafWsPacket(68, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[64].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowReq( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[65].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResp( data:{ State:number, Hints:string } ) { cowcow_packet_define[66].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { cowcow_packet_define[67].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[68].sendToChannel(ChannelDefine.game, data, false); }
}

