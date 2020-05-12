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
    Exit = 3,
    ResResult = 4,
    TaskItem = 5,
    TaskList = 6,
    GameList = 7,
    UserInfo = 8,
    SimplePlayerInfo = 9,
    RoomInfo = 10,
    GroupInfo = 11,
    GameBaseInfo = 12,
    GameItem = 13,
    MasterInfo = 14,
    ReqEnterRoom = 15,
    GetOnlinePlayers = 16,
    GetOnlinePlayersResp = 17,
    FindPlayer = 18,
    FindPlayerResp = 19,
}

export var login_packet_define = {
    0: new LeafWsPacket(0, login.Register, "login.Register"),
    1: new LeafWsPacket(1, login.RegisterResult, "login.RegisterResult"),
    2: new LeafWsPacket(2, login.Login, "login.Login"),
    3: new LeafWsPacket(3, login.Exit, "login.Exit"),
    4: new LeafWsPacket(4, login.ResResult, "login.ResResult"),
    5: new LeafWsPacket(5, login.TaskItem, "login.TaskItem"),
    6: new LeafWsPacket(6, login.TaskList, "login.TaskList"),
    7: new LeafWsPacket(7, login.GameList, "login.GameList"),
    8: new LeafWsPacket(8, login.UserInfo, "login.UserInfo"),
    9: new LeafWsPacket(9, login.SimplePlayerInfo, "login.SimplePlayerInfo"),
    10: new LeafWsPacket(10, login.RoomInfo, "login.RoomInfo"),
    11: new LeafWsPacket(11, login.GroupInfo, "login.GroupInfo"),
    12: new LeafWsPacket(12, login.GameBaseInfo, "login.GameBaseInfo"),
    13: new LeafWsPacket(13, login.GameItem, "login.GameItem"),
    14: new LeafWsPacket(14, login.MasterInfo, "login.MasterInfo"),
    15: new LeafWsPacket(15, login.ReqEnterRoom, "login.ReqEnterRoom"),
    16: new LeafWsPacket(16, login.GetOnlinePlayers, "login.GetOnlinePlayers"),
    17: new LeafWsPacket(17, login.GetOnlinePlayersResp, "login.GetOnlinePlayersResp"),
    18: new LeafWsPacket(18, login.FindPlayer, "login.FindPlayer"),
    19: new LeafWsPacket(19, login.FindPlayerResp, "login.FindPlayerResp"),
}

export class login_request {
    public static Register( data:{ Name:string, Password:string, SecurityCode:string, MachineCode:string, InvitationCode:string } ) { login_packet_define[0].sendToChannel(ChannelDefine.game, data, false); }
    public static RegisterResult( data:{ State:number, Hints:string } ) { login_packet_define[1].sendToChannel(ChannelDefine.game, data, false); }
    public static Login( data:{ Account:string, Password:string, SecurityCode:string, MachineCode:string } ) { login_packet_define[2].sendToChannel(ChannelDefine.game, data, false); }
    public static Exit( data:{} ) { login_packet_define[3].sendToChannel(ChannelDefine.game, data, false); }
    public static ResResult( data:{ State:number, Hints:string } ) { login_packet_define[4].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskItem( data:{ TaskID:number, Twice:number, Hints:string } ) { login_packet_define[5].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskList( data:{ Task:any[] } ) { login_packet_define[6].sendToChannel(ChannelDefine.game, data, false); }
    public static GameList( data:{ Items:any[] } ) { login_packet_define[7].sendToChannel(ChannelDefine.game, data, false); }
    public static UserInfo( data:{ Name:string, Accounts:string, Password:string, FaceID:number, Gender:number, Age:number, Level:number, Gold:number, PassPortID:string, Compellation:string, AgentID:number, SpreaderGameID:number, ClientAddr:number, MachineCode:string } ) { login_packet_define[8].sendToChannel(ChannelDefine.game, data, false); }
    public static SimplePlayerInfo( data:{ UserID:number, Sex:number, Gold:number, HeadID:number } ) { login_packet_define[9].sendToChannel(ChannelDefine.game, data, false); }
    public static RoomInfo( data:{ RoomNum:number, RoomKey:string, RoomName:string, Games:any } ) { login_packet_define[10].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupInfo( data:{ ID:number, Name:string, HostID:number, SetUpTime:number, AdminList:number[], BannedList:number[], MemberList:any[] } ) { login_packet_define[11].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaseInfo( data:{ Type:number, KindID:number, Level:number, Name:string, EnterScore:number, LessScore:number, MaxOnline:number, State:number, Commission:number } ) { login_packet_define[12].sendToChannel(ChannelDefine.game, data, false); }
    public static GameItem( data:{ ID:number, Info:any } ) { login_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
    public static MasterInfo( data:{ UserID:number, UserInfo:any, RoomsInfo:any[], Groups:any[], Tasks:any } ) { login_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static ReqEnterRoom( data:{ RoomNum:number, RoomKey:string } ) { login_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static GetOnlinePlayers( data:{ PageNum:number } ) { login_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static GetOnlinePlayersResp( data:{ Infos:any[] } ) { login_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static FindPlayer( data:{ Name:string } ) { login_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static FindPlayerResp( data:{ Infos:any[] } ) { login_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
}

