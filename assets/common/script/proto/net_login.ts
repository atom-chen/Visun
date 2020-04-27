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
    TaskItem = 4,
    TaskList = 5,
    GameList = 6,
    UserInfo = 7,
    RoomInfo = 8,
    GameBaseInfo = 9,
    GameItem = 10,
    MasterInfo = 11,
    ReqEnterRoom = 12,
}

export var login_packet_define = {
    0: new LeafWsPacket(0, login.Register),
    1: new LeafWsPacket(1, login.RegisterResult),
    2: new LeafWsPacket(2, login.Login),
    3: new LeafWsPacket(3, login.ResResult),
    4: new LeafWsPacket(4, login.TaskItem),
    5: new LeafWsPacket(5, login.TaskList),
    6: new LeafWsPacket(6, login.GameList),
    7: new LeafWsPacket(7, login.UserInfo),
    8: new LeafWsPacket(8, login.RoomInfo),
    9: new LeafWsPacket(9, login.GameBaseInfo),
    10: new LeafWsPacket(10, login.GameItem),
    11: new LeafWsPacket(11, login.MasterInfo),
    12: new LeafWsPacket(12, login.ReqEnterRoom),
}

export class login_request {
    public static Register( data:{ Name:string, Password:string, SecurityCode:string, MachineCode:string, InvitationCode:string } ) { login_packet_define[0].sendToChannel(ChannelDefine.game, data, false); }
    public static RegisterResult( data:{ State:number, Hints:string } ) { login_packet_define[1].sendToChannel(ChannelDefine.game, data, false); }
    public static Login( data:{ Account:string, Password:string, SecurityCode:string, MachineCode:string } ) { login_packet_define[2].sendToChannel(ChannelDefine.game, data, false); }
    public static ResResult( data:{ State:number, Hints:string } ) { login_packet_define[3].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskItem( data:{ TaskID:number, Twice:number, Hints:string } ) { login_packet_define[4].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskList( data:{ Task:any[] } ) { login_packet_define[5].sendToChannel(ChannelDefine.game, data, false); }
    public static GameList( data:{ Items:any[] } ) { login_packet_define[6].sendToChannel(ChannelDefine.game, data, false); }
    public static UserInfo( data:{ Name:string, Accounts:string, Password:string, FaceID:number, Gender:number, Age:number, Level:number, Gold:number, PassPortID:string, Compellation:string, AgentID:number, SpreaderGameID:number, ClientAddr:number, MachineCode:string } ) { login_packet_define[7].sendToChannel(ChannelDefine.game, data, false); }
    public static RoomInfo( data:{ RoomNum:number, RoomKey:string, RoomName:string, Games:any } ) { login_packet_define[8].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaseInfo( data:{ Type:number, KindID:number, Level:number, TableID:number, Name:string, Number:string, EnterScore:number, LessScore:number } ) { login_packet_define[9].sendToChannel(ChannelDefine.game, data, false); }
    public static GameItem( data:{ ID:number, Info:any } ) { login_packet_define[10].sendToChannel(ChannelDefine.game, data, false); }
    public static MasterInfo( data:{ UserInfo:any, RoomsInfo:any[], Tasks:any } ) { login_packet_define[11].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqEnterRoom( data:{ RoomNum:number, RoomKey:string } ) { login_packet_define[12].sendToChannel(ChannelDefine.game, data, false); }
}

