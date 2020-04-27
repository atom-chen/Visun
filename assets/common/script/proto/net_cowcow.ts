//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 37,
    GameCowcowHost = 38,
    GameCowcowSuperHost = 39,
    GameCowcowPlaying = 40,
    GameCowcowBetResult = 41,
    GameCowcowOver = 42,
    GameCowcowCheckout = 43,
}

export var cowcow_packet_define = {
    37: new LeafWsPacket(37, cowcow.GameCowcowEnter),
    38: new LeafWsPacket(38, cowcow.GameCowcowHost),
    39: new LeafWsPacket(39, cowcow.GameCowcowSuperHost),
    40: new LeafWsPacket(40, cowcow.GameCowcowPlaying),
    41: new LeafWsPacket(41, cowcow.GameCowcowBetResult),
    42: new LeafWsPacket(42, cowcow.GameCowcowOver),
    43: new LeafWsPacket(43, cowcow.GameCowcowCheckout),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
}

