//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { login } from "../proto/UserLoginSvc";
import ChannelDefine from "../definer/ChannelDefine";
import NetPacket from "../../../kernel/net/NetPacket";


export enum login_msgs {
    Msg_HeartReq = 5000,
    Msg_HeartResp = 5001,
    Msg_SysError = 5002,
    CheckTokenReq = 5003,
    MovedGateNot = 5004,
    CheckTokenRes = 5005,
    Msg_GsPackage = 10000,
    Msg_UserLogInResp = 10001,
}

export var login_packet_define = {
    5000: new NetPacket(5000, login.HeartReq),
    5001: new NetPacket(5001, login.HeartResp),
    5002: new NetPacket(5002, null),
    5003: new NetPacket(5003, login.CheckTokenRequest),
    5004: new NetPacket(5004, login.MovedGateNotice),
    5005: new NetPacket(5005, login.CheckTokenResponse),
    10000: new NetPacket(10000, login.GsPackage),
    10001: new NetPacket(10001, login.UserLogInResp),
}

export class login_request {
    public static Msg_HeartReq( data:{} ) : void 
    {
        login_packet_define[5000].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_HeartResp( data:{ serverTime:number } ) : void 
    {
        login_packet_define[5001].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_SysError( data:any ) : void 
    {
        login_packet_define[5002].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static CheckTokenReq( data:{ uid:number, token:string } ) : void 
    {
        login_packet_define[5003].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static MovedGateNot( data:{ wsUri:string } ) : void 
    {
        login_packet_define[5004].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static CheckTokenRes( data:{} ) : void 
    {
        login_packet_define[5005].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_GsPackage( data:{ enBody:any, sign:string } ) : void 
    {
        login_packet_define[10000].sendToChannel(ChannelDefine.hall, data, false);
    }
    public static Msg_UserLogInResp( data:{ code:number, msg:string, data:any } ) : void 
    {
        login_packet_define[10001].sendToChannel(ChannelDefine.hall, data, false);
    }
}
