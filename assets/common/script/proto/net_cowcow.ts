//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 56,
    GameCowcowHost = 57,
    GameCowcowSuperHost = 58,
    GameCowcowReq = 59,
    GameCowcowBetResp = 60,
    GameCowcowOver = 61,
    GameCowcowCheckout = 62,
}

export var cowcow_packet_define = {
    56: new LeafWsPacket(56, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    57: new LeafWsPacket(57, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    58: new LeafWsPacket(58, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    59: new LeafWsPacket(59, cowcow.GameCowcowReq, "cowcow.GameCowcowReq"),
    60: new LeafWsPacket(60, cowcow.GameCowcowBetResp, "cowcow.GameCowcowBetResp"),
    61: new LeafWsPacket(61, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    62: new LeafWsPacket(62, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowReq( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResp( data:{ State:number, Hints:string } ) { cowcow_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { cowcow_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[62].sendToChannel(ChannelDefine.game, data, false); }
}

