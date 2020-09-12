//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tuitongzi } from "./tuitongzi";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tuitongzi_msgs {
    TuitongziSceneResp = 152,
    TuitongziStateFreeResp = 153,
    TuitongziStateStartResp = 154,
    TuitongziStatePlayingResp = 155,
    TuitongziStateOpenResp = 156,
    TuitongziStateOverResp = 157,
    TuitongziBetReq = 158,
    TuitongziBetResp = 159,
    TuitongziOpenResp = 160,
    TuitongziCheckoutResp = 161,
    TuitongziHostReq = 162,
    TuitongziHostResp = 163,
    TuitongziSuperHostReq = 164,
    TuitongziSuperHostResp = 165,
}

export var tuitongzi_packet_define = {
    152: new LeafWsPacket(152, tuitongzi.TuitongziSceneResp, "tuitongzi.TuitongziSceneResp"),
    153: new LeafWsPacket(153, tuitongzi.TuitongziStateFreeResp, "tuitongzi.TuitongziStateFreeResp"),
    154: new LeafWsPacket(154, tuitongzi.TuitongziStateStartResp, "tuitongzi.TuitongziStateStartResp"),
    155: new LeafWsPacket(155, tuitongzi.TuitongziStatePlayingResp, "tuitongzi.TuitongziStatePlayingResp"),
    156: new LeafWsPacket(156, tuitongzi.TuitongziStateOpenResp, "tuitongzi.TuitongziStateOpenResp"),
    157: new LeafWsPacket(157, tuitongzi.TuitongziStateOverResp, "tuitongzi.TuitongziStateOverResp"),
    158: new LeafWsPacket(158, tuitongzi.TuitongziBetReq, "tuitongzi.TuitongziBetReq"),
    159: new LeafWsPacket(159, tuitongzi.TuitongziBetResp, "tuitongzi.TuitongziBetResp"),
    160: new LeafWsPacket(160, tuitongzi.TuitongziOpenResp, "tuitongzi.TuitongziOpenResp"),
    161: new LeafWsPacket(161, tuitongzi.TuitongziCheckoutResp, "tuitongzi.TuitongziCheckoutResp"),
    162: new LeafWsPacket(162, tuitongzi.TuitongziHostReq, "tuitongzi.TuitongziHostReq"),
    163: new LeafWsPacket(163, tuitongzi.TuitongziHostResp, "tuitongzi.TuitongziHostResp"),
    164: new LeafWsPacket(164, tuitongzi.TuitongziSuperHostReq, "tuitongzi.TuitongziSuperHostReq"),
    165: new LeafWsPacket(165, tuitongzi.TuitongziSuperHostResp, "tuitongzi.TuitongziSuperHostResp"),
}

export class tuitongzi_request {
    public static TuitongziSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any, RemainCount:number, StartArea:number } ) { tuitongzi_packet_define[152].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateFreeResp( data:{ Times:any } ) { tuitongzi_packet_define[153].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateStartResp( data:{ Times:any, StartArea:number, Dice:any } ) { tuitongzi_packet_define[154].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStatePlayingResp( data:{ Times:any } ) { tuitongzi_packet_define[155].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tuitongzi_packet_define[156].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOverResp( data:{ Times:any } ) { tuitongzi_packet_define[157].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetReq( data:{ BetArea:number, BetScore:number } ) { tuitongzi_packet_define[158].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { tuitongzi_packet_define[159].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziOpenResp( data:{ AwardArea:any, BankerCard:any, ShunCard:any, TianCard:any, DiCard:any } ) { tuitongzi_packet_define[160].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { tuitongzi_packet_define[161].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[162].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[163].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[164].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[165].sendToChannel(ChannelDefine.game, data, false); }
}

