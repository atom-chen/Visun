//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { hallgw } from "../proto/hall";
import ChannelDefine from "../definer/ChannelDefine";
import NetPacket from "../../../kernel/net/NetPacket";


export enum hallgw_msgs {
    Msg_Unknown = 0,
    Msg_GetUserInfoReq = 20000,
    Msg_GetUserInfoResp = 20001,
    Msg_GetGameListReq = 20002,
    Msg_GetGameListResp = 20003,
    Msg_GetGameConfigReq = 20004,
    Msg_GetGameConfigResp = 20005,
    Msg_ChangeHeadReq = 20006,
    Msg_ChangeHeadResp = 20007,
    Msg_BroadcastNotice = 80000,
}

export var hallgw_packet_define = {
    20000: new NetPacket(20000, hallgw.MsgGetUserInfoReq),
    20001: new NetPacket(20001, hallgw.MsgGetUserInfoResp),
    20002: new NetPacket(20002, hallgw.MsgGetGameListReq),
    20003: new NetPacket(20003, hallgw.MsgGetGameListResp),
    20004: new NetPacket(20004, hallgw.MsgGetGameConfigReq),
    20005: new NetPacket(20005, hallgw.MsgGetGameConfigResp),
    20006: new NetPacket(20006, hallgw.MsgChangeHeadReq),
    20007: new NetPacket(20007, hallgw.MsgChangeHeadResp),
    80000: new NetPacket(80000, hallgw.MsgModifyGameConfigNotify),
}

export class hallgw_request {
    public static Msg_GetUserInfoReq( data:{ Id:number } ) : void 
    {
        hallgw_packet_define[20000].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_GetUserInfoResp( data:{ Id:number, Account:string, Name:string, Coin:number, Head:string } ) : void 
    {
        hallgw_packet_define[20001].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_GetGameListReq( data:{} ) : void 
    {
        hallgw_packet_define[20002].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_GetGameListResp( data:{ List:any } ) : void 
    {
        hallgw_packet_define[20003].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_GetGameConfigReq( data:{} ) : void 
    {
        hallgw_packet_define[20004].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_GetGameConfigResp( data:{ GameConfig:any } ) : void 
    {
        hallgw_packet_define[20005].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_ChangeHeadReq( data:{ UserId:number, Head:string } ) : void 
    {
        hallgw_packet_define[20006].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_ChangeHeadResp( data:{} ) : void 
    {
        hallgw_packet_define[20007].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_BroadcastNotice( data:{ GameConfig:any } ) : void 
    {
        hallgw_packet_define[80000].sendToChannel(ChannelDefine.hall, data, false);
    }
}
