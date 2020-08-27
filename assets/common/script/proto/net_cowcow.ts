//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 50,
    GameCowcowHost = 51,
    GameCowcowSuperHost = 52,
    GameCowcowReq = 53,
    GameCowcowBetResp = 54,
    GameCowcowOver = 55,
    GameCowcowCheckout = 56,
}

export var cowcow_packet_define = {
    50: new LeafWsPacket(50, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    51: new LeafWsPacket(51, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    52: new LeafWsPacket(52, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    53: new LeafWsPacket(53, cowcow.GameCowcowReq, "cowcow.GameCowcowReq"),
    54: new LeafWsPacket(54, cowcow.GameCowcowBetResp, "cowcow.GameCowcowBetResp"),
    55: new LeafWsPacket(55, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    56: new LeafWsPacket(56, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowReq( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResp( data:{ State:number, Hints:string } ) { cowcow_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { cowcow_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
}

