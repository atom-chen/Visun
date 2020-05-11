//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { chat } from "./chat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum chat_msgs {
    SimplePlayerInfo = 14,
    GetOnlinePlayers = 15,
    GetOnlinePlayersResp = 16,
    FindPlayer = 17,
    FindPlayerResp = 18,
    SetupGroup = 19,
    SetupGroupResp = 20,
    InviteEnterGroup = 21,
    InviteEnterGroupResp = 22,
    EnterGroup = 23,
    EnterGroupResp = 24,
    GroupChat = 25,
    GroupChatResp = 26,
    PrivateChat = 27,
    PrivateChatResp = 28,
    GroupAddPerson = 29,
    GroupAddPersonResp = 30,
    GroupDelPerson = 31,
    GroupDelPersonResp = 32,
    GroupBanned = 33,
    GroupBannedResp = 34,
    GroupQuit = 35,
    GroupQuitResp = 36,
    GroupDismiss = 37,
    GroupDismissResp = 38,
    GroupChangeHost = 39,
    GroupChangeHostResp = 40,
}

export var chat_packet_define = {
    14: new LeafWsPacket(14, chat.SimplePlayerInfo, "chat.SimplePlayerInfo"),
    15: new LeafWsPacket(15, chat.GetOnlinePlayers, "chat.GetOnlinePlayers"),
    16: new LeafWsPacket(16, chat.GetOnlinePlayersResp, "chat.GetOnlinePlayersResp"),
    17: new LeafWsPacket(17, chat.FindPlayer, "chat.FindPlayer"),
    18: new LeafWsPacket(18, chat.FindPlayerResp, "chat.FindPlayerResp"),
    19: new LeafWsPacket(19, chat.SetupGroup, "chat.SetupGroup"),
    20: new LeafWsPacket(20, chat.SetupGroupResp, "chat.SetupGroupResp"),
    21: new LeafWsPacket(21, chat.InviteEnterGroup, "chat.InviteEnterGroup"),
    22: new LeafWsPacket(22, chat.InviteEnterGroupResp, "chat.InviteEnterGroupResp"),
    23: new LeafWsPacket(23, chat.EnterGroup, "chat.EnterGroup"),
    24: new LeafWsPacket(24, chat.EnterGroupResp, "chat.EnterGroupResp"),
    25: new LeafWsPacket(25, chat.GroupChat, "chat.GroupChat"),
    26: new LeafWsPacket(26, chat.GroupChatResp, "chat.GroupChatResp"),
    27: new LeafWsPacket(27, chat.PrivateChat, "chat.PrivateChat"),
    28: new LeafWsPacket(28, chat.PrivateChatResp, "chat.PrivateChatResp"),
    29: new LeafWsPacket(29, chat.GroupAddPerson, "chat.GroupAddPerson"),
    30: new LeafWsPacket(30, chat.GroupAddPersonResp, "chat.GroupAddPersonResp"),
    31: new LeafWsPacket(31, chat.GroupDelPerson, "chat.GroupDelPerson"),
    32: new LeafWsPacket(32, chat.GroupDelPersonResp, "chat.GroupDelPersonResp"),
    33: new LeafWsPacket(33, chat.GroupBanned, "chat.GroupBanned"),
    34: new LeafWsPacket(34, chat.GroupBannedResp, "chat.GroupBannedResp"),
    35: new LeafWsPacket(35, chat.GroupQuit, "chat.GroupQuit"),
    36: new LeafWsPacket(36, chat.GroupQuitResp, "chat.GroupQuitResp"),
    37: new LeafWsPacket(37, chat.GroupDismiss, "chat.GroupDismiss"),
    38: new LeafWsPacket(38, chat.GroupDismissResp, "chat.GroupDismissResp"),
    39: new LeafWsPacket(39, chat.GroupChangeHost, "chat.GroupChangeHost"),
    40: new LeafWsPacket(40, chat.GroupChangeHostResp, "chat.GroupChangeHostResp"),
}

export class chat_request {
    public static SimplePlayerInfo( data:{ UserID:number, Sex:number, Gold:number, HeadID:number } ) { chat_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static GetOnlinePlayers( data:{ PageNum:number } ) { chat_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static GetOnlinePlayersResp( data:{ Infos:any[] } ) { chat_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static FindPlayer( data:{ Name:string } ) { chat_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static FindPlayerResp( data:{ Infos:any[] } ) { chat_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static SetupGroup( data:{ Name:string } ) { chat_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static SetupGroupResp( data:{ GroupId:number, GroupName:string, HostID:number, Timestamp:number, AdminList:number[], MemberList:number[], BannedList:number[] } ) { chat_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static InviteEnterGroup( data:{ GroupId:number, GroupName:string } ) { chat_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static InviteEnterGroupResp( data:{ GroupId:number, HostID:number, UserID:number, Timestamp:number } ) { chat_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGroup( data:{ GroupId:number, HostID:number } ) { chat_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGroupResp( data:{ UserID:number, GroupId:number, Timestamp:number } ) { chat_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChat( data:{ Type:number, GroupId:number, Content:any } ) { chat_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChatResp( data:{ Type:number, GroupId:number, Content:any, Timestamp:number, SenderID:number } ) { chat_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChat( data:{ Type:number, TargetId:number, Content:any } ) { chat_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChatResp( data:{ Type:number, Content:any, Timestamp:number, SenderID:number } ) { chat_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPerson( data:{ GroupId:number, MemID:number } ) { chat_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { chat_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPerson( data:{ GroupId:number, MemID:number } ) { chat_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { chat_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBanned( data:{ GroupId:number, UserID:number, IsBanned:any } ) { chat_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBannedResp( data:{ GroupId:number, UserID:number, IsBanned:any, Timestamp:number, MemID:number } ) { chat_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuit( data:{ GroupId:number } ) { chat_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuitResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismiss( data:{ GroupId:number, Timestamp:number } ) { chat_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismissResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHost( data:{ GroupId:number, OldID:number, NewID:number } ) { chat_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHostResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
}

