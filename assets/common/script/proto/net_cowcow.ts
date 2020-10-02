//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 57,
    GameCowcowHost = 58,
    GameCowcowSuperHost = 59,
    GameCowcowReq = 60,
    GameCowcowBetResp = 61,
    GameCowcowOver = 62,
    GameCowcowCheckout = 63,
}

export var cowcow_packet_define = {
    57: new LeafWsPacket(57, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    58: new LeafWsPacket(58, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    59: new LeafWsPacket(59, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    60: new LeafWsPacket(60, cowcow.GameCowcowReq, "cowcow.GameCowcowReq"),
    61: new LeafWsPacket(61, cowcow.GameCowcowBetResp, "cowcow.GameCowcowBetResp"),
    62: new LeafWsPacket(62, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    63: new LeafWsPacket(63, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowReq( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResp( data:{ State:number, Hints:string } ) { cowcow_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { cowcow_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[63].sendToChannel(ChannelDefine.game, data, false); }
}

