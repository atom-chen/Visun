//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tigerXdragon } from "./tigerXdragon";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tigerXdragon_msgs {
    TigerXdragonSceneResp = 152,
    TigerXdragonStateStartResp = 153,
    TigerXdragonStatePlayingResp = 154,
    TigerXdragonStateOpenResp = 155,
    TigerXdragonStateOverResp = 156,
    TigerXdragonBetReq = 157,
    TigerXdragonBetResp = 158,
    TigerXdragonOpenResp = 159,
    TigerXdragonCheckoutResp = 160,
    TigerXdragonHostReq = 161,
    TigerXdragonHostResp = 162,
    TigerXdragonSuperHostReq = 163,
    TigerXdragonSuperHostResp = 164,
}

export var tigerXdragon_packet_define = {
    152: new LeafWsPacket(152, tigerXdragon.TigerXdragonSceneResp, "tigerXdragon.TigerXdragonSceneResp"),
    153: new LeafWsPacket(153, tigerXdragon.TigerXdragonStateStartResp, "tigerXdragon.TigerXdragonStateStartResp"),
    154: new LeafWsPacket(154, tigerXdragon.TigerXdragonStatePlayingResp, "tigerXdragon.TigerXdragonStatePlayingResp"),
    155: new LeafWsPacket(155, tigerXdragon.TigerXdragonStateOpenResp, "tigerXdragon.TigerXdragonStateOpenResp"),
    156: new LeafWsPacket(156, tigerXdragon.TigerXdragonStateOverResp, "tigerXdragon.TigerXdragonStateOverResp"),
    157: new LeafWsPacket(157, tigerXdragon.TigerXdragonBetReq, "tigerXdragon.TigerXdragonBetReq"),
    158: new LeafWsPacket(158, tigerXdragon.TigerXdragonBetResp, "tigerXdragon.TigerXdragonBetResp"),
    159: new LeafWsPacket(159, tigerXdragon.TigerXdragonOpenResp, "tigerXdragon.TigerXdragonOpenResp"),
    160: new LeafWsPacket(160, tigerXdragon.TigerXdragonCheckoutResp, "tigerXdragon.TigerXdragonCheckoutResp"),
    161: new LeafWsPacket(161, tigerXdragon.TigerXdragonHostReq, "tigerXdragon.TigerXdragonHostReq"),
    162: new LeafWsPacket(162, tigerXdragon.TigerXdragonHostResp, "tigerXdragon.TigerXdragonHostResp"),
    163: new LeafWsPacket(163, tigerXdragon.TigerXdragonSuperHostReq, "tigerXdragon.TigerXdragonSuperHostReq"),
    164: new LeafWsPacket(164, tigerXdragon.TigerXdragonSuperHostResp, "tigerXdragon.TigerXdragonSuperHostResp"),
}

export class tigerXdragon_request {
    public static TigerXdragonSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any } ) { tigerXdragon_packet_define[152].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStateStartResp( data:{ Times:any, Inning:string } ) { tigerXdragon_packet_define[153].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStatePlayingResp( data:{ Times:any } ) { tigerXdragon_packet_define[154].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tigerXdragon_packet_define[155].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStateOverResp( data:{ Times:any } ) { tigerXdragon_packet_define[156].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonBetReq( data:{ BetArea:number, BetScore:number } ) { tigerXdragon_packet_define[157].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { tigerXdragon_packet_define[158].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonOpenResp( data:{ Cards:any, AwardArea:any } ) { tigerXdragon_packet_define[159].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { tigerXdragon_packet_define[160].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonHostReq( data:{ IsWant:any } ) { tigerXdragon_packet_define[161].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonHostResp( data:{ UserID:number, IsWant:any } ) { tigerXdragon_packet_define[162].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonSuperHostReq( data:{ IsWant:any } ) { tigerXdragon_packet_define[163].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonSuperHostResp( data:{ UserID:number, IsWant:any } ) { tigerXdragon_packet_define[164].sendToChannel(ChannelDefine.game, data, false); }
}

