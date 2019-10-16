//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { login } from "./login";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum login_msgs {
    ResResult = 0,
    Register = 1,
    RegisterResult = 2,
    Login = 3,
    LoginResult = 4,
    UserInfo = 5,
    RoomInfo = 6,
    TaskItem = 7,
    TaskList = 8,
    GameList = 9,
    GameBaseInfo = 10,
    GameItem = 11,
}

export var login_packet_define = {
    0: new LeafWsPacket(0, login.ResResult),
    1: new LeafWsPacket(1, login.Register),
    2: new LeafWsPacket(2, login.RegisterResult),
    3: new LeafWsPacket(3, login.Login),
    4: new LeafWsPacket(4, login.LoginResult),
    5: new LeafWsPacket(5, login.UserInfo),
    6: new LeafWsPacket(6, login.RoomInfo),
    7: new LeafWsPacket(7, login.TaskItem),
    8: new LeafWsPacket(8, login.TaskList),
    9: new LeafWsPacket(9, login.GameList),
    10: new LeafWsPacket(10, login.GameBaseInfo),
    11: new LeafWsPacket(11, login.GameItem),
}

export class login_request {
    public static ResResult( data:{ State:number, Hints:string } ) { login_packet_define[0].sendToChannel(ChannelDefine.game, data, false); }
    public static Register( data:{ Name:string, Password:string, SecurityCode:string, MachineCode:string, InvitationCode:string } ) { login_packet_define[1].sendToChannel(ChannelDefine.game, data, false); }
    public static RegisterResult( data:{ State:number, Hints:string } ) { login_packet_define[2].sendToChannel(ChannelDefine.game, data, false); }
    public static Login( data:{ Account:string, Password:string, SecurityCode:string, MachineCode:string } ) { login_packet_define[3].sendToChannel(ChannelDefine.game, data, false); }
    public static LoginResult( data:{ State:number, Hints:string } ) { login_packet_define[4].sendToChannel(ChannelDefine.game, data, false); }
    public static UserInfo( data:{ Name:string, Accounts:string, Password:string, FaceID:number, Gender:number, Age:number, Level:number, Money:number, PassPortID:string, Compellation:string, AgentID:number, SpreaderGameID:number, ClientAddr:number, MachineCode:string } ) { login_packet_define[5].sendToChannel(ChannelDefine.game, data, false); }
    public static RoomInfo( data:{ RoomNum:number, RoomKey:string, RoomName:string, Games:any } ) { login_packet_define[6].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskItem( data:{ TaskID:number, Twice:number, Hints:string } ) { login_packet_define[7].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskList( data:{ Task:any } ) { login_packet_define[8].sendToChannel(ChannelDefine.game, data, false); }
    public static GameList( data:{ Items:any } ) { login_packet_define[9].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaseInfo( data:{ Type:number, KindID:number, Level:number, Name:string, EnterScore:number, LessScore:number } ) { login_packet_define[10].sendToChannel(ChannelDefine.game, data, false); }
    public static GameItem( data:{ ID:number, Info:any } ) { login_packet_define[11].sendToChannel(ChannelDefine.game, data, false); }
}

