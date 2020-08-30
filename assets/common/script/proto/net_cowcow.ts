//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 46,
    GameCowcowHost = 47,
    GameCowcowSuperHost = 48,
    GameCowcowReq = 49,
    GameCowcowBetResp = 50,
    GameCowcowOver = 51,
    GameCowcowCheckout = 52,
}

export var cowcow_packet_define = {
    46: new LeafWsPacket(46, cowcow.GameCowcowEnter, "cowcow.GameCowcowEnter"),
    47: new LeafWsPacket(47, cowcow.GameCowcowHost, "cowcow.GameCowcowHost"),
    48: new LeafWsPacket(48, cowcow.GameCowcowSuperHost, "cowcow.GameCowcowSuperHost"),
    49: new LeafWsPacket(49, cowcow.GameCowcowReq, "cowcow.GameCowcowReq"),
    50: new LeafWsPacket(50, cowcow.GameCowcowBetResp, "cowcow.GameCowcowBetResp"),
    51: new LeafWsPacket(51, cowcow.GameCowcowOver, "cowcow.GameCowcowOver"),
    52: new LeafWsPacket(52, cowcow.GameCowcowCheckout, "cowcow.GameCowcowCheckout"),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowReq( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResp( data:{ State:number, Hints:string } ) { cowcow_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any } ) { cowcow_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
}

