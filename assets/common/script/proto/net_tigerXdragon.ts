//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tigerXdragon } from "./tigerXdragon";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tigerXdragon_msgs {
    TigerXdragonSceneResp = 147,
    TigerXdragonStateStartResp = 148,
    TigerXdragonStatePlayingResp = 149,
    TigerXdragonStateOpenResp = 150,
    TigerXdragonStateOverResp = 151,
    TigerXdragonBetReq = 152,
    TigerXdragonBetResp = 153,
    TigerXdragonOpenResp = 154,
    TigerXdragonCheckoutResp = 155,
    TigerXdragonHostReq = 156,
    TigerXdragonHostResp = 157,
    TigerXdragonSuperHostReq = 158,
    TigerXdragonSuperHostResp = 159,
}

export var tigerXdragon_packet_define = {
    147: new LeafWsPacket(147, tigerXdragon.TigerXdragonSceneResp, "tigerXdragon.TigerXdragonSceneResp"),
    148: new LeafWsPacket(148, tigerXdragon.TigerXdragonStateStartResp, "tigerXdragon.TigerXdragonStateStartResp"),
    149: new LeafWsPacket(149, tigerXdragon.TigerXdragonStatePlayingResp, "tigerXdragon.TigerXdragonStatePlayingResp"),
    150: new LeafWsPacket(150, tigerXdragon.TigerXdragonStateOpenResp, "tigerXdragon.TigerXdragonStateOpenResp"),
    151: new LeafWsPacket(151, tigerXdragon.TigerXdragonStateOverResp, "tigerXdragon.TigerXdragonStateOverResp"),
    152: new LeafWsPacket(152, tigerXdragon.TigerXdragonBetReq, "tigerXdragon.TigerXdragonBetReq"),
    153: new LeafWsPacket(153, tigerXdragon.TigerXdragonBetResp, "tigerXdragon.TigerXdragonBetResp"),
    154: new LeafWsPacket(154, tigerXdragon.TigerXdragonOpenResp, "tigerXdragon.TigerXdragonOpenResp"),
    155: new LeafWsPacket(155, tigerXdragon.TigerXdragonCheckoutResp, "tigerXdragon.TigerXdragonCheckoutResp"),
    156: new LeafWsPacket(156, tigerXdragon.TigerXdragonHostReq, "tigerXdragon.TigerXdragonHostReq"),
    157: new LeafWsPacket(157, tigerXdragon.TigerXdragonHostResp, "tigerXdragon.TigerXdragonHostResp"),
    158: new LeafWsPacket(158, tigerXdragon.TigerXdragonSuperHostReq, "tigerXdragon.TigerXdragonSuperHostReq"),
    159: new LeafWsPacket(159, tigerXdragon.TigerXdragonSuperHostResp, "tigerXdragon.TigerXdragonSuperHostResp"),
}

export class tigerXdragon_request {
    public static TigerXdragonSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any } ) { tigerXdragon_packet_define[147].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStateStartResp( data:{ Times:any, Inning:string } ) { tigerXdragon_packet_define[148].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStatePlayingResp( data:{ Times:any } ) { tigerXdragon_packet_define[149].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tigerXdragon_packet_define[150].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStateOverResp( data:{ Times:any } ) { tigerXdragon_packet_define[151].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonBetReq( data:{ BetArea:number, BetScore:number } ) { tigerXdragon_packet_define[152].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { tigerXdragon_packet_define[153].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonOpenResp( data:{ Cards:any, AwardArea:any } ) { tigerXdragon_packet_define[154].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { tigerXdragon_packet_define[155].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonHostReq( data:{ IsWant:any } ) { tigerXdragon_packet_define[156].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonHostResp( data:{ UserID:number, IsWant:any } ) { tigerXdragon_packet_define[157].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonSuperHostReq( data:{ IsWant:any } ) { tigerXdragon_packet_define[158].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonSuperHostResp( data:{ UserID:number, IsWant:any } ) { tigerXdragon_packet_define[159].sendToChannel(ChannelDefine.game, data, false); }
}

