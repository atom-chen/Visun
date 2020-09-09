//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tuitongzi } from "./tuitongzi";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tuitongzi_msgs {
    TuitongziSceneResp = 151,
    TuitongziStateFreeResp = 152,
    TuitongziStateStartResp = 153,
    TuitongziStatePlayingResp = 154,
    TuitongziStateOpenResp = 155,
    TuitongziStateOverResp = 156,
    TuitongziBetReq = 157,
    TuitongziBetResp = 158,
    TuitongziOpenResp = 159,
    TuitongziCheckoutResp = 160,
    TuitongziHostReq = 161,
    TuitongziHostResp = 162,
    TuitongziSuperHostReq = 163,
    TuitongziSuperHostResp = 164,
}

export var tuitongzi_packet_define = {
    151: new LeafWsPacket(151, tuitongzi.TuitongziSceneResp, "tuitongzi.TuitongziSceneResp"),
    152: new LeafWsPacket(152, tuitongzi.TuitongziStateFreeResp, "tuitongzi.TuitongziStateFreeResp"),
    153: new LeafWsPacket(153, tuitongzi.TuitongziStateStartResp, "tuitongzi.TuitongziStateStartResp"),
    154: new LeafWsPacket(154, tuitongzi.TuitongziStatePlayingResp, "tuitongzi.TuitongziStatePlayingResp"),
    155: new LeafWsPacket(155, tuitongzi.TuitongziStateOpenResp, "tuitongzi.TuitongziStateOpenResp"),
    156: new LeafWsPacket(156, tuitongzi.TuitongziStateOverResp, "tuitongzi.TuitongziStateOverResp"),
    157: new LeafWsPacket(157, tuitongzi.TuitongziBetReq, "tuitongzi.TuitongziBetReq"),
    158: new LeafWsPacket(158, tuitongzi.TuitongziBetResp, "tuitongzi.TuitongziBetResp"),
    159: new LeafWsPacket(159, tuitongzi.TuitongziOpenResp, "tuitongzi.TuitongziOpenResp"),
    160: new LeafWsPacket(160, tuitongzi.TuitongziCheckoutResp, "tuitongzi.TuitongziCheckoutResp"),
    161: new LeafWsPacket(161, tuitongzi.TuitongziHostReq, "tuitongzi.TuitongziHostReq"),
    162: new LeafWsPacket(162, tuitongzi.TuitongziHostResp, "tuitongzi.TuitongziHostResp"),
    163: new LeafWsPacket(163, tuitongzi.TuitongziSuperHostReq, "tuitongzi.TuitongziSuperHostReq"),
    164: new LeafWsPacket(164, tuitongzi.TuitongziSuperHostResp, "tuitongzi.TuitongziSuperHostResp"),
}

export class tuitongzi_request {
    public static TuitongziSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any, RemainCount:number, StartArea:number } ) { tuitongzi_packet_define[151].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateFreeResp( data:{ Times:any } ) { tuitongzi_packet_define[152].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateStartResp( data:{ Times:any, StartArea:number, Dice:any } ) { tuitongzi_packet_define[153].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStatePlayingResp( data:{ Times:any } ) { tuitongzi_packet_define[154].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tuitongzi_packet_define[155].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOverResp( data:{ Times:any } ) { tuitongzi_packet_define[156].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetReq( data:{ BetArea:number, BetScore:number } ) { tuitongzi_packet_define[157].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { tuitongzi_packet_define[158].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziOpenResp( data:{ AwardArea:any, BankerCard:any, ShunCard:any, TianCard:any, DiCard:any } ) { tuitongzi_packet_define[159].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { tuitongzi_packet_define[160].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[161].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[162].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[163].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[164].sendToChannel(ChannelDefine.game, data, false); }
}

