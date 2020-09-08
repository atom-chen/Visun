//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tigerXdragon } from "./tigerXdragon";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tigerXdragon_msgs {
    TigerXdragonSceneResp = 138,
    TigerXdragonStateStartResp = 139,
    TigerXdragonStatePlayingResp = 140,
    TigerXdragonStateOpenResp = 141,
    TigerXdragonStateOverResp = 142,
    TigerXdragonBetReq = 143,
    TigerXdragonBetResp = 144,
    TigerXdragonOpenResp = 145,
    TigerXdragonCheckoutResp = 146,
    TigerXdragonHostReq = 147,
    TigerXdragonHostResp = 148,
    TigerXdragonSuperHostReq = 149,
    TigerXdragonSuperHostResp = 150,
}

export var tigerXdragon_packet_define = {
    138: new LeafWsPacket(138, tigerXdragon.TigerXdragonSceneResp, "tigerXdragon.TigerXdragonSceneResp"),
    139: new LeafWsPacket(139, tigerXdragon.TigerXdragonStateStartResp, "tigerXdragon.TigerXdragonStateStartResp"),
    140: new LeafWsPacket(140, tigerXdragon.TigerXdragonStatePlayingResp, "tigerXdragon.TigerXdragonStatePlayingResp"),
    141: new LeafWsPacket(141, tigerXdragon.TigerXdragonStateOpenResp, "tigerXdragon.TigerXdragonStateOpenResp"),
    142: new LeafWsPacket(142, tigerXdragon.TigerXdragonStateOverResp, "tigerXdragon.TigerXdragonStateOverResp"),
    143: new LeafWsPacket(143, tigerXdragon.TigerXdragonBetReq, "tigerXdragon.TigerXdragonBetReq"),
    144: new LeafWsPacket(144, tigerXdragon.TigerXdragonBetResp, "tigerXdragon.TigerXdragonBetResp"),
    145: new LeafWsPacket(145, tigerXdragon.TigerXdragonOpenResp, "tigerXdragon.TigerXdragonOpenResp"),
    146: new LeafWsPacket(146, tigerXdragon.TigerXdragonCheckoutResp, "tigerXdragon.TigerXdragonCheckoutResp"),
    147: new LeafWsPacket(147, tigerXdragon.TigerXdragonHostReq, "tigerXdragon.TigerXdragonHostReq"),
    148: new LeafWsPacket(148, tigerXdragon.TigerXdragonHostResp, "tigerXdragon.TigerXdragonHostResp"),
    149: new LeafWsPacket(149, tigerXdragon.TigerXdragonSuperHostReq, "tigerXdragon.TigerXdragonSuperHostReq"),
    150: new LeafWsPacket(150, tigerXdragon.TigerXdragonSuperHostResp, "tigerXdragon.TigerXdragonSuperHostResp"),
}

export class tigerXdragon_request {
    public static TigerXdragonSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any } ) { tigerXdragon_packet_define[138].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStateStartResp( data:{ Times:any } ) { tigerXdragon_packet_define[139].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStatePlayingResp( data:{ Times:any } ) { tigerXdragon_packet_define[140].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tigerXdragon_packet_define[141].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStateOverResp( data:{ Times:any } ) { tigerXdragon_packet_define[142].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonBetReq( data:{ BetArea:number, BetScore:number } ) { tigerXdragon_packet_define[143].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { tigerXdragon_packet_define[144].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonOpenResp( data:{ Cards:any, AwardArea:any } ) { tigerXdragon_packet_define[145].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { tigerXdragon_packet_define[146].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonHostReq( data:{ IsWant:any } ) { tigerXdragon_packet_define[147].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonHostResp( data:{ UserID:number, IsWant:any } ) { tigerXdragon_packet_define[148].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonSuperHostReq( data:{ IsWant:any } ) { tigerXdragon_packet_define[149].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonSuperHostResp( data:{ UserID:number, IsWant:any } ) { tigerXdragon_packet_define[150].sendToChannel(ChannelDefine.game, data, false); }
}

