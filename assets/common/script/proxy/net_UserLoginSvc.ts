//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { login } from "../proto/UserLoginSvc";
import ChannelDefine from "../definer/ChannelDefine";
import NetPacket from "../../../kernel/net/NetPacket";


export enum login_msgs {
	Msg_SysError = 5002,		//网关错误
    Msg_GsPackage = 10000,		//登录请求
    Msg_UserLogInResp = 10001,	//登录响应
}

export var login_packet_define = {
	10000: new NetPacket(10000, login.GsPackage),
    10001: new NetPacket(10001, login.UserLogInResp)
}

export class login_request {
	public static Msg_GsPackage(data:any) : void 
    {
        login_packet_define[10000].sendToChannel(ChannelDefine.hall, data, false);
    }
}
