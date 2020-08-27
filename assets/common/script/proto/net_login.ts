//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { login } from "./login";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum login_msgs {
    Register = 0,
    RegisterResult = 1,
    Login = 2,
    ResResult = 3,
    ResPopResult = 4,
    TaskItem = 5,
    TaskList = 6,
    GameList = 7,
    UserInfo = 8,
    RoomInfo = 9,
    GameBaseInfo = 10,
    GameItem = 11,
    MasterInfo = 12,
    ReqEnterRoom = 13,
}

export var login_packet_define = {
    0: new LeafWsPacket(0, login.Register, "login.Register"),
    1: new LeafWsPacket(1, login.RegisterResult, "login.RegisterResult"),
    2: new LeafWsPacket(2, login.Login, "login.Login"),
    3: new LeafWsPacket(3, login.ResResult, "login.ResResult"),
    4: new LeafWsPacket(4, login.ResPopResult, "login.ResPopResult"),
    5: new LeafWsPacket(5, login.TaskItem, "login.TaskItem"),
    6: new LeafWsPacket(6, login.TaskList, "login.TaskList"),
    7: new LeafWsPacket(7, login.GameList, "login.GameList"),
    8: new LeafWsPacket(8, login.UserInfo, "login.UserInfo"),
    9: new LeafWsPacket(9, login.RoomInfo, "login.RoomInfo"),
    10: new LeafWsPacket(10, login.GameBaseInfo, "login.GameBaseInfo"),
    11: new LeafWsPacket(11, login.GameItem, "login.GameItem"),
    12: new LeafWsPacket(12, login.MasterInfo, "login.MasterInfo"),
    13: new LeafWsPacket(13, login.ReqEnterRoom, "login.ReqEnterRoom"),
}

export class login_request {
    public static Register( data:{ Name:string, Password:string, SecurityCode:string, MachineCode:string, InvitationCode:string } ) { login_packet_define[0].sendToChannel(ChannelDefine.game, data, false); }
    public static RegisterResult( data:{ State:number, Hints:string } ) { login_packet_define[1].sendToChannel(ChannelDefine.game, data, false); }
    public static Login( data:{ Account:string, Password:string, SecurityCode:string, MachineCode:string } ) { login_packet_define[2].sendToChannel(ChannelDefine.game, data, false); }
    public static ResResult( data:{ Flag:number, Hints:string } ) { login_packet_define[3].sendToChannel(ChannelDefine.game, data, false); }
    public static ResPopResult( data:{ Flag:number, Title:string, Hints:string } ) { login_packet_define[4].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskItem( data:{ TaskID:number, Twice:number, Hints:string } ) { login_packet_define[5].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskList( data:{ Task:any[] } ) { login_packet_define[6].sendToChannel(ChannelDefine.game, data, false); }
    public static GameList( data:{ Items:any[] } ) { login_packet_define[7].sendToChannel(ChannelDefine.game, data, false); }
    public static UserInfo( data:{ Name:string, Accounts:string, Password:string, FaceID:number, Gender:number, Age:number, Level:number, Gold:number, PassPortID:string, Compellation:string, AgentID:number, SpreaderGameID:number, ClientAddr:number, MachineCode:string } ) { login_packet_define[8].sendToChannel(ChannelDefine.game, data, false); }
    public static RoomInfo( data:{ RoomNum:number, RoomKey:string, RoomName:string, Games:any } ) { login_packet_define[9].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaseInfo( data:{ Type:number, KindID:number, Level:number, Name:string, EnterScore:number, LessScore:number, MaxOnline:number, State:number, Commission:number } ) { login_packet_define[10].sendToChannel(ChannelDefine.game, data, false); }
    public static GameItem( data:{ ID:number, Info:any } ) { login_packet_define[11].sendToChannel(ChannelDefine.game, data, false); }
    public static MasterInfo( data:{ UserID:number, UserInfo:any, RoomsInfo:any[], Tasks:any } ) { login_packet_define[12].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqEnterRoom( data:{ RoomNum:number, RoomKey:string } ) { login_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
}

