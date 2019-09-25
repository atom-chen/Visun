//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { hallgw } from "../proto/hall";
import ChannelDefine from "../definer/ChannelDefine";
import NetPacket from "../../../kernel/net/NetPacket";


export enum hallgw_msgs {
    Msg_Unknown = 0,
    Msg_HeartReq = 5000,
    Msg_HeartResp = 5001,
    Msg_UserInfoReq = 20000,
    Msg_UserInfoResp = 20001,
    Msg_GameListReq = 20002,
    Msg_GameListResp = 20003,
    Msg_NoticeNotify = 20004,
}

export var hallgw_packet_define = {
    5000: new NetPacket(5000, hallgw.HeartReq),
    5001: new NetPacket(5001, hallgw.HeartResp),
    20000: new NetPacket(20000, hallgw.UserInfoReq),
    20001: new NetPacket(20001, hallgw.UserInfoResp),
    20002: new NetPacket(20002, hallgw.GameListReq),
    20003: new NetPacket(20003, hallgw.GameListResp),
    20004: new NetPacket(20004, hallgw.NoticeNotify),
}

export class hallgw_request {
    public static Msg_HeartReq( data:{} ) : void 
    {
        hallgw_packet_define[5000].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_HeartResp( data:{ serverTime:number } ) : void 
    {
        hallgw_packet_define[5001].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_UserInfoReq( data:{ Id:number } ) : void 
    {
        hallgw_packet_define[20000].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_UserInfoResp( data:{ Id:number, Account:string, Name:string, Coin:number, Head:string } ) : void 
    {
        hallgw_packet_define[20001].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_GameListReq( data:{} ) : void 
    {
        hallgw_packet_define[20002].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_GameListResp( data:{ List:any } ) : void 
    {
        hallgw_packet_define[20003].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_NoticeNotify( data:{ Content:string } ) : void 
    {
        hallgw_packet_define[20004].sendToChannel(ChannelDefine.hall, data, false);
    }
}
