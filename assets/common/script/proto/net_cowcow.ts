//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 52,
    GameCowcowHost = 53,
    GameCowcowSuperHost = 54,
    GameCowcowReq = 55,
    GameCowcowBetResp = 56,
    GameCowcowOver = 57,
    GameCowcowCheckout = 58,
}

export var cowcow_packet_define = {
    52: new LeafWsPacket(52, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    53: new LeafWsPacket(53, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    54: new LeafWsPacket(54, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    55: new LeafWsPacket(55, cowcow.GameCowcowReq, "cowcow.GameCowcowReq"),
    56: new LeafWsPacket(56, cowcow.GameCowcowBetResp, "cowcow.GameCowcowBetResp"),
    57: new LeafWsPacket(57, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    58: new LeafWsPacket(58, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowReq( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResp( data:{ State:number, Hints:string } ) { cowcow_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { cowcow_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[58].sendToChannel(ChannelDefine.game, data, false); }
}

