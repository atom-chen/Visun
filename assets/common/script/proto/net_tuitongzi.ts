//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tuitongzi } from "./tuitongzi";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tuitongzi_msgs {
    TuitongziSceneResp = 160,
    TuitongziStateStartResp = 161,
    TuitongziStatePlayingResp = 162,
    TuitongziStateOpenResp = 163,
    TuitongziStateOverResp = 164,
    TuitongziBetReq = 165,
    TuitongziBetResp = 166,
    TuitongziOpenResp = 167,
    TuitongziCheckoutResp = 168,
    TuitongziHostReq = 169,
    TuitongziHostResp = 170,
    TuitongziSuperHostReq = 171,
    TuitongziSuperHostResp = 172,
}

export var tuitongzi_packet_define = {
    160: new LeafWsPacket(160, tuitongzi.TuitongziSceneResp, "tuitongzi.TuitongziSceneResp"),
    161: new LeafWsPacket(161, tuitongzi.TuitongziStateStartResp, "tuitongzi.TuitongziStateStartResp"),
    162: new LeafWsPacket(162, tuitongzi.TuitongziStatePlayingResp, "tuitongzi.TuitongziStatePlayingResp"),
    163: new LeafWsPacket(163, tuitongzi.TuitongziStateOpenResp, "tuitongzi.TuitongziStateOpenResp"),
    164: new LeafWsPacket(164, tuitongzi.TuitongziStateOverResp, "tuitongzi.TuitongziStateOverResp"),
    165: new LeafWsPacket(165, tuitongzi.TuitongziBetReq, "tuitongzi.TuitongziBetReq"),
    166: new LeafWsPacket(166, tuitongzi.TuitongziBetResp, "tuitongzi.TuitongziBetResp"),
    167: new LeafWsPacket(167, tuitongzi.TuitongziOpenResp, "tuitongzi.TuitongziOpenResp"),
    168: new LeafWsPacket(168, tuitongzi.TuitongziCheckoutResp, "tuitongzi.TuitongziCheckoutResp"),
    169: new LeafWsPacket(169, tuitongzi.TuitongziHostReq, "tuitongzi.TuitongziHostReq"),
    170: new LeafWsPacket(170, tuitongzi.TuitongziHostResp, "tuitongzi.TuitongziHostResp"),
    171: new LeafWsPacket(171, tuitongzi.TuitongziSuperHostReq, "tuitongzi.TuitongziSuperHostReq"),
    172: new LeafWsPacket(172, tuitongzi.TuitongziSuperHostResp, "tuitongzi.TuitongziSuperHostResp"),
}

export class tuitongzi_request {
    public static TuitongziSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any, RemainCount:number, StartArea:number } ) { tuitongzi_packet_define[160].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateStartResp( data:{ Times:any, StartArea:number, Dice:any, Inning:string } ) { tuitongzi_packet_define[161].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStatePlayingResp( data:{ Times:any } ) { tuitongzi_packet_define[162].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tuitongzi_packet_define[163].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOverResp( data:{ Times:any } ) { tuitongzi_packet_define[164].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetReq( data:{ BetArea:number, BetScore:number } ) { tuitongzi_packet_define[165].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { tuitongzi_packet_define[166].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziOpenResp( data:{ AwardArea:any, BankerCard:any, ShunCard:any, TianCard:any, DiCard:any } ) { tuitongzi_packet_define[167].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { tuitongzi_packet_define[168].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[169].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[170].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[171].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[172].sendToChannel(ChannelDefine.game, data, false); }
}

