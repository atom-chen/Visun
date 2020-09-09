//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tuitongzi } from "./tuitongzi";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tuitongzi_msgs {
    TuitongziSceneResp = 151,
    TuitongziStateStartResp = 152,
    TuitongziStatePlayingResp = 153,
    TuitongziStateOpenResp = 154,
    TuitongziStateOverResp = 155,
    TuitongziBetReq = 156,
    TuitongziBetResp = 157,
    TuitongziOpenResp = 158,
    TuitongziCheckoutResp = 159,
    TuitongziHostReq = 160,
    TuitongziHostResp = 161,
    TuitongziSuperHostReq = 162,
    TuitongziSuperHostResp = 163,
}

export var tuitongzi_packet_define = {
    151: new LeafWsPacket(151, tuitongzi.TuitongziSceneResp, "tuitongzi.TuitongziSceneResp"),
    152: new LeafWsPacket(152, tuitongzi.TuitongziStateStartResp, "tuitongzi.TuitongziStateStartResp"),
    153: new LeafWsPacket(153, tuitongzi.TuitongziStatePlayingResp, "tuitongzi.TuitongziStatePlayingResp"),
    154: new LeafWsPacket(154, tuitongzi.TuitongziStateOpenResp, "tuitongzi.TuitongziStateOpenResp"),
    155: new LeafWsPacket(155, tuitongzi.TuitongziStateOverResp, "tuitongzi.TuitongziStateOverResp"),
    156: new LeafWsPacket(156, tuitongzi.TuitongziBetReq, "tuitongzi.TuitongziBetReq"),
    157: new LeafWsPacket(157, tuitongzi.TuitongziBetResp, "tuitongzi.TuitongziBetResp"),
    158: new LeafWsPacket(158, tuitongzi.TuitongziOpenResp, "tuitongzi.TuitongziOpenResp"),
    159: new LeafWsPacket(159, tuitongzi.TuitongziCheckoutResp, "tuitongzi.TuitongziCheckoutResp"),
    160: new LeafWsPacket(160, tuitongzi.TuitongziHostReq, "tuitongzi.TuitongziHostReq"),
    161: new LeafWsPacket(161, tuitongzi.TuitongziHostResp, "tuitongzi.TuitongziHostResp"),
    162: new LeafWsPacket(162, tuitongzi.TuitongziSuperHostReq, "tuitongzi.TuitongziSuperHostReq"),
    163: new LeafWsPacket(163, tuitongzi.TuitongziSuperHostResp, "tuitongzi.TuitongziSuperHostResp"),
}

export class tuitongzi_request {
    public static TuitongziSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any, RemainCount:number } ) { tuitongzi_packet_define[151].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateStartResp( data:{ Times:any } ) { tuitongzi_packet_define[152].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStatePlayingResp( data:{ Times:any } ) { tuitongzi_packet_define[153].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tuitongzi_packet_define[154].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOverResp( data:{ Times:any } ) { tuitongzi_packet_define[155].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetReq( data:{ BetArea:number, BetScore:number } ) { tuitongzi_packet_define[156].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { tuitongzi_packet_define[157].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziOpenResp( data:{ AwardArea:any, BankerCard:any, ShunCard:any, TianCard:any, DiCard:any } ) { tuitongzi_packet_define[158].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { tuitongzi_packet_define[159].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[160].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[161].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[162].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[163].sendToChannel(ChannelDefine.game, data, false); }
}

