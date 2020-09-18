//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tuitongzi } from "./tuitongzi";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tuitongzi_msgs {
    TuitongziSceneResp = 155,
    TuitongziStateStartResp = 156,
    TuitongziStatePlayingResp = 157,
    TuitongziStateOpenResp = 158,
    TuitongziStateOverResp = 159,
    TuitongziBetReq = 160,
    TuitongziBetResp = 161,
    TuitongziOpenResp = 162,
    TuitongziCheckoutResp = 163,
    TuitongziHostReq = 164,
    TuitongziHostResp = 165,
    TuitongziSuperHostReq = 166,
    TuitongziSuperHostResp = 167,
}

export var tuitongzi_packet_define = {
    155: new LeafWsPacket(155, tuitongzi.TuitongziSceneResp, "tuitongzi.TuitongziSceneResp"),
    156: new LeafWsPacket(156, tuitongzi.TuitongziStateStartResp, "tuitongzi.TuitongziStateStartResp"),
    157: new LeafWsPacket(157, tuitongzi.TuitongziStatePlayingResp, "tuitongzi.TuitongziStatePlayingResp"),
    158: new LeafWsPacket(158, tuitongzi.TuitongziStateOpenResp, "tuitongzi.TuitongziStateOpenResp"),
    159: new LeafWsPacket(159, tuitongzi.TuitongziStateOverResp, "tuitongzi.TuitongziStateOverResp"),
    160: new LeafWsPacket(160, tuitongzi.TuitongziBetReq, "tuitongzi.TuitongziBetReq"),
    161: new LeafWsPacket(161, tuitongzi.TuitongziBetResp, "tuitongzi.TuitongziBetResp"),
    162: new LeafWsPacket(162, tuitongzi.TuitongziOpenResp, "tuitongzi.TuitongziOpenResp"),
    163: new LeafWsPacket(163, tuitongzi.TuitongziCheckoutResp, "tuitongzi.TuitongziCheckoutResp"),
    164: new LeafWsPacket(164, tuitongzi.TuitongziHostReq, "tuitongzi.TuitongziHostReq"),
    165: new LeafWsPacket(165, tuitongzi.TuitongziHostResp, "tuitongzi.TuitongziHostResp"),
    166: new LeafWsPacket(166, tuitongzi.TuitongziSuperHostReq, "tuitongzi.TuitongziSuperHostReq"),
    167: new LeafWsPacket(167, tuitongzi.TuitongziSuperHostResp, "tuitongzi.TuitongziSuperHostResp"),
}

export class tuitongzi_request {
    public static TuitongziSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any, RemainCount:number, StartArea:number } ) { tuitongzi_packet_define[155].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateStartResp( data:{ Times:any, StartArea:number, Dice:any, Inning:string } ) { tuitongzi_packet_define[156].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStatePlayingResp( data:{ Times:any } ) { tuitongzi_packet_define[157].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tuitongzi_packet_define[158].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOverResp( data:{ Times:any } ) { tuitongzi_packet_define[159].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetReq( data:{ BetArea:number, BetScore:number } ) { tuitongzi_packet_define[160].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { tuitongzi_packet_define[161].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziOpenResp( data:{ AwardArea:any, BankerCard:any, ShunCard:any, TianCard:any, DiCard:any } ) { tuitongzi_packet_define[162].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { tuitongzi_packet_define[163].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[164].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[165].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[166].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[167].sendToChannel(ChannelDefine.game, data, false); }
}

