//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { login } from "./UserLoginSvc";
import ChannelDefine from "../definer/ChannelDefine";
import NetPacket from "../../../kernel/net/NetPacket";


export enum login_msgs {
    HeartReq = 5000,
    HeartResp = 5001,
    Msg_SysError = 5002,
    CheckTokenReq = 5003,
    MovedGateNot = 5004,
    CheckTokenRes = 5005,
    AdminKickUser = 5006,
    UserLogInReq = 10000,
    UserLogInResp = 10001,
}

export var login_packet_define = {
    5000: new NetPacket(5000, login.HeartReq),
    5001: new NetPacket(5001, login.HeartResp),
    5002: new NetPacket(5002, null),
    5003: new NetPacket(5003, login.CheckTokenRequest),
    5004: new NetPacket(5004, login.MovedGateNotice),
    5005: new NetPacket(5005, login.CheckTokenResponse),
    5006: new NetPacket(5006, null),
    10000: new NetPacket(10000, login.UserLogInReq),
    10001: new NetPacket(10001, login.UserLogInResp),
}

export class login_request {
    public static HeartReq( data:{} ) { login_packet_define[5000].sendToChannel(ChannelDefine.hall, data, false); }
    public static CheckTokenReq( data:{ uid:number, token:string } ) { login_packet_define[5003].sendToChannel(ChannelDefine.hall, data, false); }
    public static UserLogInReq( data:{ token:string, device:string } ) { login_packet_define[10000].sendToChannel(ChannelDefine.hall, data, false); }
}
