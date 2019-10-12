//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { leaflogin } from "./leaflogin";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum leaflogin_msgs {
    Register = 0,
    RegisterResult = 1,
    Login = 2,
    ResResult = 3,
    TaskItem = 4,
    TaskList = 5,
    GameList = 6,
    UserInfo = 7,
    RoomInfo = 8,
    GameBaseInfo = 9,
    GameItem = 10,
    MasterInfo = 11,
    ReqEnterRoom = 12,
    ReqEnterGame = 13,
    ReqExitGame = 14,
}

export var leaflogin_packet_define = {
    0: new LeafWsPacket(0, leaflogin.Register),
    1: new LeafWsPacket(1, leaflogin.RegisterResult),
    2: new LeafWsPacket(2, leaflogin.Login),
    3: new LeafWsPacket(3, leaflogin.ResResult),
    4: new LeafWsPacket(4, leaflogin.TaskItem),
    5: new LeafWsPacket(5, leaflogin.TaskList),
    6: new LeafWsPacket(6, leaflogin.GameList),
    7: new LeafWsPacket(7, leaflogin.UserInfo),
    8: new LeafWsPacket(8, leaflogin.RoomInfo),
    9: new LeafWsPacket(9, leaflogin.GameBaseInfo),
    10: new LeafWsPacket(10, leaflogin.GameItem),
    11: new LeafWsPacket(11, leaflogin.MasterInfo),
    12: new LeafWsPacket(12, leaflogin.ReqEnterRoom),
    13: new LeafWsPacket(13, leaflogin.ReqEnterGame),
    14: new LeafWsPacket(14, leaflogin.ReqExitGame),
}

export class leaflogin_request {
    public static Register( data:{ Name:string, Password:string, SecurityCode:string, MachineCode:string, InvitationCode:string } ) { leaflogin_packet_define[0].sendToChannel(ChannelDefine.game, data, false); }
    public static RegisterResult( data:{ State:number, Hints:string } ) { leaflogin_packet_define[1].sendToChannel(ChannelDefine.game, data, false); }
    public static Login( data:{ Account:string, Password:string, SecurityCode:string, MachineCode:string } ) { leaflogin_packet_define[2].sendToChannel(ChannelDefine.game, data, false); }
    public static ResResult( data:{ State:number, Hints:string } ) { leaflogin_packet_define[3].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskItem( data:{ TaskID:number, Twice:number, Hints:string } ) { leaflogin_packet_define[4].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskList( data:{ Task:any } ) { leaflogin_packet_define[5].sendToChannel(ChannelDefine.game, data, false); }
    public static GameList( data:{ Items:any } ) { leaflogin_packet_define[6].sendToChannel(ChannelDefine.game, data, false); }
    public static UserInfo( data:{ Name:string, Accounts:string, Password:string, FaceID:number, Gender:number, Age:number, Level:number, Money:number, PassPortID:string, Compellation:string, AgentID:number, SpreaderGameID:number, ClientAddr:number, MachineCode:string } ) { leaflogin_packet_define[7].sendToChannel(ChannelDefine.game, data, false); }
    public static RoomInfo( data:{ RoomNum:number, RoomKey:string, RoomName:string, Games:any } ) { leaflogin_packet_define[8].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaseInfo( data:{ Type:number, KindID:number, Level:number, Name:string, EnterScore:number, LessScore:number } ) { leaflogin_packet_define[9].sendToChannel(ChannelDefine.game, data, false); }
    public static GameItem( data:{ ID:number, Info:any } ) { leaflogin_packet_define[10].sendToChannel(ChannelDefine.game, data, false); }
    public static MasterInfo( data:{ UserInfo:any, RoomsInfo:any, Tasks:any } ) { leaflogin_packet_define[11].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqEnterRoom( data:{ RoomNum:number, RoomKey:string } ) { leaflogin_packet_define[12].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqEnterGame( data:{ GameID:number } ) { leaflogin_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqExitGame( data:{ GameID:number } ) { leaflogin_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
}

