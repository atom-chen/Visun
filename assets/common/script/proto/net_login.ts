//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { login } from "./login";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum login_msgs {
    UserInfo = 0,
    RoomInfo = 1,
    GameInfo = 2,
    GameItem = 3,
    MasterInfo = 4,
    TaskItem = 5,
    TaskList = 6,
    GameList = 7,
    RegisterReq = 8,
    RegisterResp = 9,
    LoginReq = 10,
    LoginResp = 11,
    AllopatricResp = 12,
    ReconnectReq = 13,
    ReconnectResp = 14,
    EnterRoomReq = 15,
    EnterRoomResp = 16,
    ResultResp = 17,
    ResultPopResp = 18,
}

export var login_packet_define = {
    0: new LeafWsPacket(0, login.UserInfo, "login.UserInfo"),
    1: new LeafWsPacket(1, login.RoomInfo, "login.RoomInfo"),
    2: new LeafWsPacket(2, login.GameInfo, "login.GameInfo"),
    3: new LeafWsPacket(3, login.GameItem, "login.GameItem"),
    4: new LeafWsPacket(4, login.MasterInfo, "login.MasterInfo"),
    5: new LeafWsPacket(5, login.TaskItem, "login.TaskItem"),
    6: new LeafWsPacket(6, login.TaskList, "login.TaskList"),
    7: new LeafWsPacket(7, login.GameList, "login.GameList"),
    8: new LeafWsPacket(8, login.RegisterReq, "login.RegisterReq"),
    9: new LeafWsPacket(9, login.RegisterResp, "login.RegisterResp"),
    10: new LeafWsPacket(10, login.LoginReq, "login.LoginReq"),
    11: new LeafWsPacket(11, login.LoginResp, "login.LoginResp"),
    12: new LeafWsPacket(12, login.AllopatricResp, "login.AllopatricResp"),
    13: new LeafWsPacket(13, login.ReconnectReq, "login.ReconnectReq"),
    14: new LeafWsPacket(14, login.ReconnectResp, "login.ReconnectResp"),
    15: new LeafWsPacket(15, login.EnterRoomReq, "login.EnterRoomReq"),
    16: new LeafWsPacket(16, login.EnterRoomResp, "login.EnterRoomResp"),
    17: new LeafWsPacket(17, login.ResultResp, "login.ResultResp"),
    18: new LeafWsPacket(18, login.ResultPopResp, "login.ResultPopResp"),
}

export class login_request {
    public static UserInfo( data:{ UserID:number, Name:string, Account:string, Password:string, FaceID:number, Gender:number, Age:number, VIP:number, Level:number, Gold:number, PassPortID:string, RealName:string, PhoneNum:string, Email:string, Address:string, Identity:string, AgentID:number, ReferralCode:string, ClientAddr:string, ServerAddr:string, MachineCode:string } ) { login_packet_define[0].sendToChannel(ChannelDefine.game, data, false); }
    public static RoomInfo( data:{ RoomNum:number, RoomKey:string, RoomName:string, Games:any } ) { login_packet_define[1].sendToChannel(ChannelDefine.game, data, false); }
    public static GameInfo( data:{ Type:number, KindID:number, Level:number, Name:string, EnterScore:number, LessScore:number, MaxOnline:number, State:number, Commission:number } ) { login_packet_define[2].sendToChannel(ChannelDefine.game, data, false); }
    public static GameItem( data:{ ID:number, Info:any } ) { login_packet_define[3].sendToChannel(ChannelDefine.game, data, false); }
    public static MasterInfo( data:{ UserInfo:any, RoomsInfo:any[], Tasks:any } ) { login_packet_define[4].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskItem( data:{ TaskID:number, Twice:number, Hints:string } ) { login_packet_define[5].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskList( data:{ Task:any[] } ) { login_packet_define[6].sendToChannel(ChannelDefine.game, data, false); }
    public static GameList( data:{ Items:any[] } ) { login_packet_define[7].sendToChannel(ChannelDefine.game, data, false); }
    public static RegisterReq( data:{ Name:string, Password:string, SecurityCode:string, MachineCode:string, InvitationCode:string, PlatformID:number, Gender:number, Age:number, FaceID:number, PassPortID:string, RealName:string, PhoneNum:string, Email:string, Address:string } ) { login_packet_define[8].sendToChannel(ChannelDefine.game, data, false); }
    public static RegisterResp( data:{ Info:any } ) { login_packet_define[9].sendToChannel(ChannelDefine.game, data, false); }
    public static LoginReq( data:{ Account:string, Password:string, SecurityCode:string, MachineCode:string, PlatformID:number } ) { login_packet_define[10].sendToChannel(ChannelDefine.game, data, false); }
    public static LoginResp( data:{ MainInfo:any, InGameID:number } ) { login_packet_define[11].sendToChannel(ChannelDefine.game, data, false); }
    public static AllopatricResp( data:{ UserId:number } ) { login_packet_define[12].sendToChannel(ChannelDefine.game, data, false); }
    public static ReconnectReq( data:{ Account:string, Password:string, MachineCode:string, PlatformID:number } ) { login_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
    public static ReconnectResp( data:{ MainInfo:any, InGameID:number } ) { login_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterRoomReq( data:{ RoomNum:number, RoomKey:string } ) { login_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterRoomResp( data:{ RoomNum:number, Games:any } ) { login_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static ResultResp( data:{ State:number, Hints:string } ) { login_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static ResultPopResp( data:{ Flag:number, Title:string, Hints:string } ) { login_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
}

