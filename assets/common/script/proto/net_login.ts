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
    GameInfo = 6,
    RoomDesc = 7,
    GameListReq = 8,
    GameListResp = 9,
    RoomListReq = 10,
    RoomListResp = 11,
    RoomInfo = 12,
    TaskItem = 13,
    TaskList = 14,
    GameList = 15,
    GameBaseInfo = 16,
    GameItem = 17,
}

export var login_packet_define = {
    0: new LeafWsPacket(0, login.ResResult),
    1: new LeafWsPacket(1, login.Register),
    2: new LeafWsPacket(2, login.RegisterResult),
    3: new LeafWsPacket(3, login.Login),
    4: new LeafWsPacket(4, login.LoginResult),
    5: new LeafWsPacket(5, login.UserInfo),
    6: new LeafWsPacket(6, login.GameInfo),
    7: new LeafWsPacket(7, login.RoomDesc),
    8: new LeafWsPacket(8, login.GameListReq),
    9: new LeafWsPacket(9, login.GameListResp),
    10: new LeafWsPacket(10, login.RoomListReq),
    11: new LeafWsPacket(11, login.RoomListResp),
    12: new LeafWsPacket(12, login.RoomInfo),
    13: new LeafWsPacket(13, login.TaskItem),
    14: new LeafWsPacket(14, login.TaskList),
    15: new LeafWsPacket(15, login.GameList),
    16: new LeafWsPacket(16, login.GameBaseInfo),
    17: new LeafWsPacket(17, login.GameItem),
}

export class login_request {
    public static ResResult( data:{ State:number, Hints:string } ) { login_packet_define[0].sendToChannel(ChannelDefine.game, data, false); }
    public static Register( data:{ Name:string, Password:string, SecurityCode:string, MachineCode:string, InvitationCode:string } ) { login_packet_define[1].sendToChannel(ChannelDefine.game, data, false); }
    public static RegisterResult( data:{ State:number, Hints:string } ) { login_packet_define[2].sendToChannel(ChannelDefine.game, data, false); }
    public static Login( data:{ Account:string, Password:string, SecurityCode:string, MachineCode:string } ) { login_packet_define[3].sendToChannel(ChannelDefine.game, data, false); }
    public static LoginResult( data:{ State:number, Hints:string } ) { login_packet_define[4].sendToChannel(ChannelDefine.game, data, false); }
    public static UserInfo( data:{ UserId:number, Name:string, Accounts:string, Password:string, FaceID:number, Gender:number, Age:number, Level:number, Money:number, PassPortID:string, Compellation:string, AgentID:number, SpreaderGameID:number, ClientAddr:number, MachineCode:string } ) { login_packet_define[5].sendToChannel(ChannelDefine.game, data, false); }
    public static GameInfo( data:{ GameType:number, Name:string, State:string, PlayerCount:number } ) { login_packet_define[6].sendToChannel(ChannelDefine.game, data, false); }
    public static RoomDesc( data:{ GameType:number, Name:string, BaseScore:number, RountCount:number, MinMoney:number, MaxMoney:number, MaxFighter:number, MaxAudience:number } ) { login_packet_define[7].sendToChannel(ChannelDefine.game, data, false); }
    public static GameListReq( data:{} ) { login_packet_define[8].sendToChannel(ChannelDefine.game, data, false); }
    public static GameListResp( data:{ Games:any } ) { login_packet_define[9].sendToChannel(ChannelDefine.game, data, false); }
    public static RoomListReq( data:{ GameType:number } ) { login_packet_define[10].sendToChannel(ChannelDefine.game, data, false); }
    public static RoomListResp( data:{ GameType:number, Rooms:any } ) { login_packet_define[11].sendToChannel(ChannelDefine.game, data, false); }
    public static RoomInfo( data:{ RoomNum:number, RoomKey:string, RoomName:string, Games:any } ) { login_packet_define[12].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskItem( data:{ TaskID:number, Twice:number, Hints:string } ) { login_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskList( data:{ Task:any } ) { login_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static GameList( data:{ Items:any } ) { login_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static GameBaseInfo( data:{ Type:number, KindID:number, Level:number, Name:string, EnterScore:number, LessScore:number } ) { login_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static GameItem( data:{ ID:number, Info:any } ) { login_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
}

