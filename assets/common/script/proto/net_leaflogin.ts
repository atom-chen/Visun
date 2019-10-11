//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { leaflogin } from "./leaflogin";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum leaflogin_msgs {
    Register = 3,
    ResResult = 2,
    Login = 1,
}

export var leaflogin_packet_define = {
    3: new LeafWsPacket(3, leaflogin.Register),
    2: new LeafWsPacket(2, leaflogin.ResResult),
    1: new LeafWsPacket(1, leaflogin.Login),
}

export class leaflogin_request {
    public static Register( data:{ Name:string, Password:string, SecurityCode:string, MachineCode:string, InvitationCode:string } ) { leaflogin_packet_define[3].sendToChannel(ChannelDefine.game, data, false); }
    public static ResResult( data:{ State:number, Hints:string } ) { leaflogin_packet_define[2].sendToChannel(ChannelDefine.game, data, false); }
    public static Login( data:{ Account:string, Password:string, SecurityCode:string, MachineCode:string } ) { leaflogin_packet_define[1].sendToChannel(ChannelDefine.game, data, false); }
}
