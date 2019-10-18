//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { configure } from "./configure";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum configure_msgs {
    GameInfo = 5,
    RoomDesc = 6,
    GameListReq = 7,
    GameListResp = 8,
    RoomListReq = 9,
    RoomListResp = 10,
}

export var configure_packet_define = {
    5: new LeafWsPacket(5, configure.GameInfo),
    6: new LeafWsPacket(6, configure.RoomDesc),
    7: new LeafWsPacket(7, configure.GameListReq),
    8: new LeafWsPacket(8, configure.GameListResp),
    9: new LeafWsPacket(9, configure.RoomListReq),
    10: new LeafWsPacket(10, configure.RoomListResp),
}

export class configure_request {
    public static GameInfo( data:{ GameType:number, Name:string, State:string, PlayerCount:number } ) { configure_packet_define[5].sendToChannel(ChannelDefine.game, data, false); }
    public static RoomDesc( data:{ GameType:number, GameId:number, Name:string, BaseScore:number, RountCount:number, MinMoney:number, MaxMoney:number, MaxFighter:number, MaxAudience:number } ) { configure_packet_define[6].sendToChannel(ChannelDefine.game, data, false); }
    public static GameListReq( data:{} ) { configure_packet_define[7].sendToChannel(ChannelDefine.game, data, false); }
    public static GameListResp( data:{ GameList:any } ) { configure_packet_define[8].sendToChannel(ChannelDefine.game, data, false); }
    public static RoomListReq( data:{ GameType:number } ) { configure_packet_define[9].sendToChannel(ChannelDefine.game, data, false); }
    public static RoomListResp( data:{ GameType:number, RoomList:any } ) { configure_packet_define[10].sendToChannel(ChannelDefine.game, data, false); }
}

