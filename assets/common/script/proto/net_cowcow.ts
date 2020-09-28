//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 55,
    GameCowcowHost = 56,
    GameCowcowSuperHost = 57,
    GameCowcowReq = 58,
    GameCowcowBetResp = 59,
    GameCowcowOver = 60,
    GameCowcowCheckout = 61,
}

export var cowcow_packet_define = {
    55: new LeafWsPacket(55, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    56: new LeafWsPacket(56, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    57: new LeafWsPacket(57, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    58: new LeafWsPacket(58, cowcow.GameCowcowReq, "cowcow.GameCowcowReq"),
    59: new LeafWsPacket(59, cowcow.GameCowcowBetResp, "cowcow.GameCowcowBetResp"),
    60: new LeafWsPacket(60, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    61: new LeafWsPacket(61, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowReq( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResp( data:{ State:number, Hints:string } ) { cowcow_packet_define[59].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { cowcow_packet_define[60].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[61].sendToChannel(ChannelDefine.game, data, false); }
}

