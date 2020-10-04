//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tuitongzi } from "./tuitongzi";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tuitongzi_msgs {
    TuitongziSceneResp = 165,
    TuitongziStateStartResp = 166,
    TuitongziStatePlayingResp = 167,
    TuitongziStateOpenResp = 168,
    TuitongziStateOverResp = 169,
    TuitongziBetReq = 170,
    TuitongziBetResp = 171,
    TuitongziOpenResp = 172,
    TuitongziCheckoutResp = 173,
    TuitongziHostReq = 174,
    TuitongziHostResp = 175,
    TuitongziSuperHostReq = 176,
    TuitongziSuperHostResp = 177,
}

export var tuitongzi_packet_define = {
    165: new LeafWsPacket(165, tuitongzi.TuitongziSceneResp, "tuitongzi.TuitongziSceneResp"),
    166: new LeafWsPacket(166, tuitongzi.TuitongziStateStartResp, "tuitongzi.TuitongziStateStartResp"),
    167: new LeafWsPacket(167, tuitongzi.TuitongziStatePlayingResp, "tuitongzi.TuitongziStatePlayingResp"),
    168: new LeafWsPacket(168, tuitongzi.TuitongziStateOpenResp, "tuitongzi.TuitongziStateOpenResp"),
    169: new LeafWsPacket(169, tuitongzi.TuitongziStateOverResp, "tuitongzi.TuitongziStateOverResp"),
    170: new LeafWsPacket(170, tuitongzi.TuitongziBetReq, "tuitongzi.TuitongziBetReq"),
    171: new LeafWsPacket(171, tuitongzi.TuitongziBetResp, "tuitongzi.TuitongziBetResp"),
    172: new LeafWsPacket(172, tuitongzi.TuitongziOpenResp, "tuitongzi.TuitongziOpenResp"),
    173: new LeafWsPacket(173, tuitongzi.TuitongziCheckoutResp, "tuitongzi.TuitongziCheckoutResp"),
    174: new LeafWsPacket(174, tuitongzi.TuitongziHostReq, "tuitongzi.TuitongziHostReq"),
    175: new LeafWsPacket(175, tuitongzi.TuitongziHostResp, "tuitongzi.TuitongziHostResp"),
    176: new LeafWsPacket(176, tuitongzi.TuitongziSuperHostReq, "tuitongzi.TuitongziSuperHostReq"),
    177: new LeafWsPacket(177, tuitongzi.TuitongziSuperHostResp, "tuitongzi.TuitongziSuperHostResp"),
}

export class tuitongzi_request {
    public static TuitongziSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any, RemainCount:number, StartArea:number } ) { tuitongzi_packet_define[165].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateStartResp( data:{ Times:any, StartArea:number, Dice:any, Inning:string } ) { tuitongzi_packet_define[166].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStatePlayingResp( data:{ Times:any } ) { tuitongzi_packet_define[167].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tuitongzi_packet_define[168].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziStateOverResp( data:{ Times:any } ) { tuitongzi_packet_define[169].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetReq( data:{ BetArea:number, BetScore:number } ) { tuitongzi_packet_define[170].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { tuitongzi_packet_define[171].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziOpenResp( data:{ AwardArea:any, BankerCard:any, ShunCard:any, TianCard:any, DiCard:any } ) { tuitongzi_packet_define[172].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { tuitongzi_packet_define[173].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[174].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[175].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostReq( data:{ IsWant:any } ) { tuitongzi_packet_define[176].sendToChannel(ChannelDefine.game, data, false); }
    public static TuitongziSuperHostResp( data:{ UserID:number, IsWant:any } ) { tuitongzi_packet_define[177].sendToChannel(ChannelDefine.game, data, false); }
}

