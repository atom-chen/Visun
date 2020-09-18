//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { tigerXdragon } from "./tigerXdragon";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum tigerXdragon_msgs {
    TigerXdragonSceneResp = 142,
    TigerXdragonStateStartResp = 143,
    TigerXdragonStatePlayingResp = 144,
    TigerXdragonStateOpenResp = 145,
    TigerXdragonStateOverResp = 146,
    TigerXdragonBetReq = 147,
    TigerXdragonBetResp = 148,
    TigerXdragonOpenResp = 149,
    TigerXdragonCheckoutResp = 150,
    TigerXdragonHostReq = 151,
    TigerXdragonHostResp = 152,
    TigerXdragonSuperHostReq = 153,
    TigerXdragonSuperHostResp = 154,
}

export var tigerXdragon_packet_define = {
    142: new LeafWsPacket(142, tigerXdragon.TigerXdragonSceneResp, "tigerXdragon.TigerXdragonSceneResp"),
    143: new LeafWsPacket(143, tigerXdragon.TigerXdragonStateStartResp, "tigerXdragon.TigerXdragonStateStartResp"),
    144: new LeafWsPacket(144, tigerXdragon.TigerXdragonStatePlayingResp, "tigerXdragon.TigerXdragonStatePlayingResp"),
    145: new LeafWsPacket(145, tigerXdragon.TigerXdragonStateOpenResp, "tigerXdragon.TigerXdragonStateOpenResp"),
    146: new LeafWsPacket(146, tigerXdragon.TigerXdragonStateOverResp, "tigerXdragon.TigerXdragonStateOverResp"),
    147: new LeafWsPacket(147, tigerXdragon.TigerXdragonBetReq, "tigerXdragon.TigerXdragonBetReq"),
    148: new LeafWsPacket(148, tigerXdragon.TigerXdragonBetResp, "tigerXdragon.TigerXdragonBetResp"),
    149: new LeafWsPacket(149, tigerXdragon.TigerXdragonOpenResp, "tigerXdragon.TigerXdragonOpenResp"),
    150: new LeafWsPacket(150, tigerXdragon.TigerXdragonCheckoutResp, "tigerXdragon.TigerXdragonCheckoutResp"),
    151: new LeafWsPacket(151, tigerXdragon.TigerXdragonHostReq, "tigerXdragon.TigerXdragonHostReq"),
    152: new LeafWsPacket(152, tigerXdragon.TigerXdragonHostResp, "tigerXdragon.TigerXdragonHostResp"),
    153: new LeafWsPacket(153, tigerXdragon.TigerXdragonSuperHostReq, "tigerXdragon.TigerXdragonSuperHostReq"),
    154: new LeafWsPacket(154, tigerXdragon.TigerXdragonSuperHostResp, "tigerXdragon.TigerXdragonSuperHostResp"),
}

export class tigerXdragon_request {
    public static TigerXdragonSceneResp( data:{ TimeStamp:number, Inning:string, Chips:number[], AwardAreas:any[], AreaBets:number[], MyBets:number[], AllPlayers:any } ) { tigerXdragon_packet_define[142].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStateStartResp( data:{ Times:any, Inning:string } ) { tigerXdragon_packet_define[143].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStatePlayingResp( data:{ Times:any } ) { tigerXdragon_packet_define[144].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStateOpenResp( data:{ Times:any, OpenInfo:any } ) { tigerXdragon_packet_define[145].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonStateOverResp( data:{ Times:any } ) { tigerXdragon_packet_define[146].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonBetReq( data:{ BetArea:number, BetScore:number } ) { tigerXdragon_packet_define[147].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonBetResp( data:{ UserID:number, BetArea:number, BetScore:number } ) { tigerXdragon_packet_define[148].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonOpenResp( data:{ Cards:any, AwardArea:any } ) { tigerXdragon_packet_define[149].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonCheckoutResp( data:{ MyAcquire:number, Acquires:number[] } ) { tigerXdragon_packet_define[150].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonHostReq( data:{ IsWant:any } ) { tigerXdragon_packet_define[151].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonHostResp( data:{ UserID:number, IsWant:any } ) { tigerXdragon_packet_define[152].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonSuperHostReq( data:{ IsWant:any } ) { tigerXdragon_packet_define[153].sendToChannel(ChannelDefine.game, data, false); }
    public static TigerXdragonSuperHostResp( data:{ UserID:number, IsWant:any } ) { tigerXdragon_packet_define[154].sendToChannel(ChannelDefine.game, data, false); }
}

