//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { cowcow } from "./cowcow";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum cowcow_msgs {
    GameCowcowEnter = 33,
    GameCowcowHost = 34,
    GameCowcowSuperHost = 35,
    GameCowcowPlaying = 36,
    GameCowcowBetResult = 37,
    GameCowcowOver = 38,
    GameCowcowCheckout = 39,
}

export var cowcow_packet_define = {
    33: new LeafWsPacket(33, cowcow.GameCowcowEnter),
    34: new LeafWsPacket(34, cowcow.GameCowcowHost),
    35: new LeafWsPacket(35, cowcow.GameCowcowSuperHost),
    36: new LeafWsPacket(36, cowcow.GameCowcowPlaying),
    37: new LeafWsPacket(37, cowcow.GameCowcowBetResult),
    38: new LeafWsPacket(38, cowcow.GameCowcowOver),
    39: new LeafWsPacket(39, cowcow.GameCowcowCheckout),
}

export class cowcow_request {
    public static GameCowcowEnter( data:{ UserInfo:any, TimeStamp:number, Chips:number[], AwardAreas:any[], FreeTime:number, BetTime:number, OpenTime:number } ) { cowcow_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowSuperHost( data:{ UserID:number, IsWant:any } ) { cowcow_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowPlaying( data:{ BetArea:number, BetScore:number } ) { cowcow_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowBetResult( data:{ State:number, Hints:string } ) { cowcow_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowOver( data:{ AwardArea:any, BankerCard:any, TianCard:any, XuanCard:any, DiCard:any, HuangCard:any, CardValue:any } ) { cowcow_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GameCowcowCheckout( data:{ Acquire:number } ) { cowcow_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
}

