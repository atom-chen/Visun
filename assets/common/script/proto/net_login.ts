//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { login } from "./login";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum login_msgs {
    UserInfo = 0,
    TableInfo = 1,
    GameInfo = 2,
    MasterInfo = 3,
    TaskItem = 4,
    ClassItem = 5,
    GameItem = 6,
    TableItem = 7,
    TaskList = 8,
    ClassList = 9,
    GameList = 10,
    TableList = 11,
    RegisterReq = 12,
    RegisterResp = 13,
    LoginReq = 14,
    LoginResp = 15,
    AllopatricResp = 16,
    ReconnectReq = 17,
    ReconnectResp = 18,
    ChooseClassReq = 19,
    ChooseClassResp = 20,
    ChooseGameReq = 21,
    ChooseGameResp = 22,
    SettingTableReq = 23,
    SettingTableResp = 24,
    ResultResp = 25,
    ResultPopResp = 26,
}

export var login_packet_define = {
    0: new LeafWsPacket(0, login.UserInfo, "login.UserInfo"),
    1: new LeafWsPacket(1, login.TableInfo, "login.TableInfo"),
    2: new LeafWsPacket(2, login.GameInfo, "login.GameInfo"),
    3: new LeafWsPacket(3, login.MasterInfo, "login.MasterInfo"),
    4: new LeafWsPacket(4, login.TaskItem, "login.TaskItem"),
    5: new LeafWsPacket(5, login.ClassItem, "login.ClassItem"),
    6: new LeafWsPacket(6, login.GameItem, "login.GameItem"),
    7: new LeafWsPacket(7, login.TableItem, "login.TableItem"),
    8: new LeafWsPacket(8, login.TaskList, "login.TaskList"),
    9: new LeafWsPacket(9, login.ClassList, "login.ClassList"),
    10: new LeafWsPacket(10, login.GameList, "login.GameList"),
    11: new LeafWsPacket(11, login.TableList, "login.TableList"),
    12: new LeafWsPacket(12, login.RegisterReq, "login.RegisterReq"),
    13: new LeafWsPacket(13, login.RegisterResp, "login.RegisterResp"),
    14: new LeafWsPacket(14, login.LoginReq, "login.LoginReq"),
    15: new LeafWsPacket(15, login.LoginResp, "login.LoginResp"),
    16: new LeafWsPacket(16, login.AllopatricResp, "login.AllopatricResp"),
    17: new LeafWsPacket(17, login.ReconnectReq, "login.ReconnectReq"),
    18: new LeafWsPacket(18, login.ReconnectResp, "login.ReconnectResp"),
    19: new LeafWsPacket(19, login.ChooseClassReq, "login.ChooseClassReq"),
    20: new LeafWsPacket(20, login.ChooseClassResp, "login.ChooseClassResp"),
    21: new LeafWsPacket(21, login.ChooseGameReq, "login.ChooseGameReq"),
    22: new LeafWsPacket(22, login.ChooseGameResp, "login.ChooseGameResp"),
    23: new LeafWsPacket(23, login.SettingTableReq, "login.SettingTableReq"),
    24: new LeafWsPacket(24, login.SettingTableResp, "login.SettingTableResp"),
    25: new LeafWsPacket(25, login.ResultResp, "login.ResultResp"),
    26: new LeafWsPacket(26, login.ResultPopResp, "login.ResultPopResp"),
}

export class login_request {
    public static UserInfo( data:{ UserID:number, Name:string, Account:string, Password:string, FaceID:number, Gender:number, Age:number, VIP:number, Level:number, Gold:number, PassPortID:string, RealName:string, PhoneNum:string, Email:string, Address:string, Identity:string, AgentID:number, ReferralCode:string, ClientAddr:string, ServerAddr:string, MachineCode:string } ) { login_packet_define[0].sendToChannel(ChannelDefine.game, data, false); }
    public static TableInfo( data:{ HostID:number, Name:string, Password:string, State:any, EnterScore:number, LessScore:number, PlayScore:number, Commission:number, MaxChair:number, Amount:number, MaxOnline:number } ) { login_packet_define[1].sendToChannel(ChannelDefine.game, data, false); }
    public static GameInfo( data:{ Type:any, KindID:number, Level:number, Scene:any } ) { login_packet_define[2].sendToChannel(ChannelDefine.game, data, false); }
    public static MasterInfo( data:{ UserInfo:any, Classes:any, Tasks:any } ) { login_packet_define[3].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskItem( data:{ TaskID:number, Twice:number, Hints:string } ) { login_packet_define[4].sendToChannel(ChannelDefine.game, data, false); }
    public static ClassItem( data:{ Num:number, Name:string, Key:string } ) { login_packet_define[5].sendToChannel(ChannelDefine.game, data, false); }
    public static GameItem( data:{ ID:number, Info:any } ) { login_packet_define[6].sendToChannel(ChannelDefine.game, data, false); }
    public static TableItem( data:{ GameID:number, TableNum:number, Info:any } ) { login_packet_define[7].sendToChannel(ChannelDefine.game, data, false); }
    public static TaskList( data:{ Task:any[] } ) { login_packet_define[8].sendToChannel(ChannelDefine.game, data, false); }
    public static ClassList( data:{ classify:any[] } ) { login_packet_define[9].sendToChannel(ChannelDefine.game, data, false); }
    public static GameList( data:{ Items:any[] } ) { login_packet_define[10].sendToChannel(ChannelDefine.game, data, false); }
    public static TableList( data:{ Items:any[] } ) { login_packet_define[11].sendToChannel(ChannelDefine.game, data, false); }
    public static RegisterReq( data:{ Name:string, Password:string, SecurityCode:string, MachineCode:string, InvitationCode:string, PlatformID:number, Gender:number, Age:number, FaceID:number, PassPortID:string, RealName:string, PhoneNum:string, Email:string, Address:string } ) { login_packet_define[12].sendToChannel(ChannelDefine.game, data, false); }
    public static RegisterResp( data:{ Info:any } ) { login_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
    public static LoginReq( data:{ Account:string, Password:string, SecurityCode:string, MachineCode:string, PlatformID:number } ) { login_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static LoginResp( data:{ MainInfo:any, InGameID:number, InTableNum:number } ) { login_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static AllopatricResp( data:{ UserId:number } ) { login_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static ReconnectReq( data:{ Account:string, Password:string, MachineCode:string, PlatformID:number } ) { login_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static ReconnectResp( data:{ MainInfo:any, InGameID:number, InTableNum:number } ) { login_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static ChooseClassReq( data:{ Num:number, TableKey:string } ) { login_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static ChooseClassResp( data:{ Num:number, Games:any } ) { login_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static ChooseGameReq( data:{ GameID:number } ) { login_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static ChooseGameResp( data:{ GameID:number, Tables:any } ) { login_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static SettingTableReq( data:{ Info:any } ) { login_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static SettingTableResp( data:{ Item:any } ) { login_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static ResultResp( data:{ State:number, Hints:string } ) { login_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static ResultPopResp( data:{ Flag:number, Title:string, Hints:string } ) { login_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
}

