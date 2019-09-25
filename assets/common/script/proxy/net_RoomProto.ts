//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { room } from "../proto/RoomProto";
import ChannelDefine from "../definer/ChannelDefine";
import NetPacket from "../../../kernel/net/NetPacket";


export enum room_msgs {
    UNKNOWN = 0,
    JOIN_ROOM_REQ = 40000,
    JOIN_ROOM_RES = 40001,
    GET_FROM_GATE = 101,
    SEND_TO_GATE = 102,
}

export var room_packet_define = {
    40000: new NetPacket(40000, room.ServerInfo),
    40001: new NetPacket(40001, room.AssignResponse),
    101: new NetPacket(101, room.ServerInfo),
    102: new NetPacket(102, room.AssignResponse),
}

export class room_request {
    public static JOIN_ROOM_REQ( data:{ roomId:number, tableId:number, User:number } ) : void 
    {
        room_packet_define[40000].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static JOIN_ROOM_RES( data:{ msgid:number, user:any, assignMode:any } ) : void 
    {
        room_packet_define[40001].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static GET_FROM_GATE( data:{ roomId:number, tableId:number, User:number } ) : void 
    {
        room_packet_define[101].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static SEND_TO_GATE( data:{ msgid:number, user:any, assignMode:any } ) : void 
    {
        room_packet_define[102].sendToChannel(ChannelDefine.hall, data, false);
    }
}
