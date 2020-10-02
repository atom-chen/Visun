//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tuitongzi } from "./tuitongzi";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tuitongzi_msgs {
    TuitongziSceneResp = 159,
    TuitongziStateStartResp = 160,
    TuitongziStatePlayingResp = 161,
    TuitongziStateOpenResp = 162,
    TuitongziStateOverResp = 163,
    TuitongziBetReq = 164,
    TuitongziBetResp = 165,
    TuitongziOpenResp = 166,
    TuitongziCheckoutResp = 167,
    TuitongziHostReq = 168,
    TuitongziHostResp = 169,
    TuitongziSuperHostReq = 170,
    TuitongziSuperHostResp = 171,
}

export var tuitongzi_packet_define = {
    159: new LeafWsPacket(159, tuitongzi.TuitongziSceneResp, "tuitongzi.TuitongziSceneResp"),
    160: new LeafWsPacket(160, tuitongzi.TuitongziStateStartResp, "tuitongzi.TuitongziStateStartResp"),
    161: new LeafWsPacket(161, tuitongzi.TuitongziStatePlayingResp, "tuitongzi.TuitongziStatePlayingResp"),
    162: new LeafWsPacket(162, tuitongzi.TuitongziStateOpenResp, "tuitongzi.TuitongziStateOpenResp"),
    163: new LeafWsPacket(163, tuitongzi.TuitongziStateOverResp, "tuitongzi.TuitongziStateOverResp"),
    164: new LeafWsPacket(164, tuitongzi.TuitongziBetReq, "tuitongzi.TuitongziBetReq"),
    165: new LeafWsPacket(165, tuitongzi.TuitongziBetResp, "tuitongzi.TuitongziBetResp"),
    166: new LeafWsPacket(166, tuitongzi.TuitongziOpenResp, "tuitongzi.TuitongziOpenResp"),
    167: new LeafWsPacket(167, tuitongzi.TuitongziCheckoutResp, "tuitongzi.TuitongziCheckoutResp"),
    168: new LeafWsPacket(168, tuitongzi.TuitongziHostReq, "tuitongzi.TuitongziHostReq"),
    169: new LeafWsPacket(169, tuitongzi.TuitongziHostResp, "tuitongzi.TuitongziHostResp"),
    170: new LeafWsPacket(170, tuitongzi.TuitongziSuperHostReq, "tuitongzi.TuitongziSuperHostReq"),
    171: new LeafWsPacket(171, tuitongzi.TuitongziSuperHostResp, "tuitongzi.TuitongziSuperHostResp"),
}

export class tuitongzi_request {
    public static TuitongziSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any, RemainCount:number, StartArea:number } ) { tuitongzi_packet_define[159].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateStartResp( data:{ Times:any, StartArea:number, Dice:any, Inning:string } ) { tuitongzi_packet_define[160].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStatePlayingResp( data:{ Times:any } ) { tuitongzi_packet_define[161].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tuitongzi_packet_define[162].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOverResp( data:{ Times:any } ) { tuitongzi_packet_define[163].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetReq( data:{ BetArea:number, BetScore:number } ) { tuitongzi_packet_define[164].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { tuitongzi_packet_define[165].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziOpenResp( data:{ AwardArea:any, BankerCard:any, ShunCard:any, TianCard:any, DiCard:any } ) { tuitongzi_packet_define[166].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { tuitongzi_packet_define[167].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[168].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[169].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[170].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[171].sendToChannel(ChannelDefine.game, data, false); }
}

