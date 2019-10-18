//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { login } from "./login";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum login_msgs {
    UserInfo = 0,
    ReqRegister = 1,
    RespRegister = 2,
    ReqLogin = 3,
    RespLogin = 4,
}

export var login_packet_define = {
    0: new LeafWsPacket(0, login.UserInfo),
    1: new LeafWsPacket(1, login.ReqRegister),
    2: new LeafWsPacket(2, login.RespRegister),
    3: new LeafWsPacket(3, login.ReqLogin),
    4: new LeafWsPacket(4, login.RespLogin),
}

export class login_request {
    public static UserInfo( data:{ UserId:number, Accounts:string, Password:string, Name:string, Head:string, Sex:number, VipLevel:number, Money:number } ) { login_packet_define[0].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqRegister( data:{ Account:string, Password:string, SecurityCode:string } ) { login_packet_define[1].sendToChannel(ChannelDefine.game, data, false); }
    public static RespRegister( data:{ State:number, Hints:string } ) { login_packet_define[2].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqLogin( data:{ Account:string, Password:string, SecurityCode:string, MachineCode:string } ) { login_packet_define[3].sendToChannel(ChannelDefine.game, data, false); }
    public static RespLogin( data:{ State:number, Hints:string } ) { login_packet_define[4].sendToChannel(ChannelDefine.game, data, false); }
}

