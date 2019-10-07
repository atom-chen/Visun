//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { room } from "../proto/RoomProto";
import ChannelDefine from "../definer/ChannelDefine";
import NetPacket from "../../../kernel/net/NetPacket";


export enum room_msgs {
    JOIN_ROOM_REQ = 30000,
    JOIN_ROOM_RES = 30001,
    GET_FROM_GATE = 30002,
    SEND_TO_GATE = 30003,
}

export var room_packet_define = {
    30000: new NetPacket(30000, room.JoinTableRequest),
    30001: new NetPacket(30001, room.JoinTableResponse),
    30002: new NetPacket(30002, room.ServerInfo),
    30003: new NetPacket(30003, room.AssignResponse),
}

export class room_request {
    public static JOIN_ROOM_REQ( data:{ userid:number, gameId:number, tableType:number, channelId:number } ) { room_packet_define[30000].sendToChannel(ChannelDefine.hall, data, false); }
}
