//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { leaflogin } from "./leaflogin";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum leaflogin_msgs {
    Login = 1,
    ResResult = 2,
    Register = 3,
    MasterInfo = 4,
}

export var leaflogin_packet_define = {
    1: new LeafWsPacket(1, leaflogin.Login),
    2: new LeafWsPacket(2, leaflogin.ResResult),
    3: new LeafWsPacket(3, leaflogin.Register),
    4: new LeafWsPacket(4, leaflogin.MasterInfo),
}

export class leaflogin_request {
    public static Login( data:{ Account:string, Password:string, SecurityCode:string, MachineCode:string } ) { leaflogin_packet_define[1].sendToChannel(ChannelDefine.game, data, false); }
    public static ResResult( data:{ State:number, Hints:string } ) { leaflogin_packet_define[2].sendToChannel(ChannelDefine.game, data, false); }
    public static Register( data:{ Name:string, Password:string, SecurityCode:string, MachineCode:string, InvitationCode:string } ) { leaflogin_packet_define[3].sendToChannel(ChannelDefine.game, data, false); }
    public static MasterInfo( data:{ UserInfo:any, RoomsInfo:any, Tasks:any } ) { leaflogin_packet_define[4].sendToChannel(ChannelDefine.game, data, false); }
}
