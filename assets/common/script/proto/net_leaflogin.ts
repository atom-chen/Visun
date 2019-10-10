//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { leaflogin } from "./leaflogin";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/LeafWsPacket";


export enum leaflogin_msgs {
    Register = 20000,
    RegisterResult = 20001,
    Login = 20002,
    ResResult = 20003,
}

export var leaflogin_packet_define = {
    20000: new LeafWsPacket(20000, leaflogin.Register, 200, 101),
    20001: new LeafWsPacket(20001, leaflogin.RegisterResult, 200, 101),
    20002: new LeafWsPacket(20002, leaflogin.Login, 201, 101),
    20003: new LeafWsPacket(20003, leaflogin.ResResult, 201, 101),
}

export class leaflogin_request {
    public static Register( data:{ Name:string, Password:string, SecurityCode:string, MachineCode:string, InvitationCode:string } ) { leaflogin_packet_define[20000].sendToChannel(ChannelDefine.game, data, false); }
    public static RegisterResult( data:{ State:number, Hints:string } ) { leaflogin_packet_define[20001].sendToChannel(ChannelDefine.game, data, false); }
    public static Login( data:{ Account:string, Password:string, SecurityCode:string, MachineCode:string } ) { leaflogin_packet_define[20002].sendToChannel(ChannelDefine.game, data, false); }
    public static ResResult( data:{ State:number, Hints:string } ) { leaflogin_packet_define[20003].sendToChannel(ChannelDefine.game, data, false); }
}
