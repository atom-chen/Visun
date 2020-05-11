//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { chat } from "./chat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum chat_msgs {
    SimplePlayerInfo = 13,
    GetOnlinePlayers = 14,
    GetOnlinePlayersResp = 15,
    FindPlayer = 16,
    FindPlayerResp = 17,
    SetupGroup = 18,
    SetupGroupResp = 19,
    InviteEnterGroup = 20,
    InviteEnterGroupResp = 21,
    EnterGroup = 22,
    EnterGroupResp = 23,
    GroupChat = 24,
    GroupChatResp = 25,
    PrivateChat = 26,
    PrivateChatResp = 27,
    GroupAddPerson = 28,
    GroupAddPersonResp = 29,
    GroupDelPerson = 30,
    GroupDelPersonResp = 31,
    GroupBanned = 32,
    GroupBannedResp = 33,
    GroupQuit = 34,
    GroupQuitResp = 35,
    GroupDismiss = 36,
    GroupDismissResp = 37,
    GroupChangeHost = 38,
    GroupChangeHostResp = 39,
}

export var chat_packet_define = {
    13: new LeafWsPacket(13, chat.SimplePlayerInfo, "chat.SimplePlayerInfo"),
    14: new LeafWsPacket(14, chat.GetOnlinePlayers, "chat.GetOnlinePlayers"),
    15: new LeafWsPacket(15, chat.GetOnlinePlayersResp, "chat.GetOnlinePlayersResp"),
    16: new LeafWsPacket(16, chat.FindPlayer, "chat.FindPlayer"),
    17: new LeafWsPacket(17, chat.FindPlayerResp, "chat.FindPlayerResp"),
    18: new LeafWsPacket(18, chat.SetupGroup, "chat.SetupGroup"),
    19: new LeafWsPacket(19, chat.SetupGroupResp, "chat.SetupGroupResp"),
    20: new LeafWsPacket(20, chat.InviteEnterGroup, "chat.InviteEnterGroup"),
    21: new LeafWsPacket(21, chat.InviteEnterGroupResp, "chat.InviteEnterGroupResp"),
    22: new LeafWsPacket(22, chat.EnterGroup, "chat.EnterGroup"),
    23: new LeafWsPacket(23, chat.EnterGroupResp, "chat.EnterGroupResp"),
    24: new LeafWsPacket(24, chat.GroupChat, "chat.GroupChat"),
    25: new LeafWsPacket(25, chat.GroupChatResp, "chat.GroupChatResp"),
    26: new LeafWsPacket(26, chat.PrivateChat, "chat.PrivateChat"),
    27: new LeafWsPacket(27, chat.PrivateChatResp, "chat.PrivateChatResp"),
    28: new LeafWsPacket(28, chat.GroupAddPerson, "chat.GroupAddPerson"),
    29: new LeafWsPacket(29, chat.GroupAddPersonResp, "chat.GroupAddPersonResp"),
    30: new LeafWsPacket(30, chat.GroupDelPerson, "chat.GroupDelPerson"),
    31: new LeafWsPacket(31, chat.GroupDelPersonResp, "chat.GroupDelPersonResp"),
    32: new LeafWsPacket(32, chat.GroupBanned, "chat.GroupBanned"),
    33: new LeafWsPacket(33, chat.GroupBannedResp, "chat.GroupBannedResp"),
    34: new LeafWsPacket(34, chat.GroupQuit, "chat.GroupQuit"),
    35: new LeafWsPacket(35, chat.GroupQuitResp, "chat.GroupQuitResp"),
    36: new LeafWsPacket(36, chat.GroupDismiss, "chat.GroupDismiss"),
    37: new LeafWsPacket(37, chat.GroupDismissResp, "chat.GroupDismissResp"),
    38: new LeafWsPacket(38, chat.GroupChangeHost, "chat.GroupChangeHost"),
    39: new LeafWsPacket(39, chat.GroupChangeHostResp, "chat.GroupChangeHostResp"),
}

export class chat_request {
    public static SimplePlayerInfo( data:{ UserID:number, Sex:number, Gold:number, HeadID:number } ) { chat_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
    public static GetOnlinePlayers( data:{ PageNum:number } ) { chat_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static GetOnlinePlayersResp( data:{ Infos:any[] } ) { chat_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static FindPlayer( data:{ Name:string } ) { chat_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static FindPlayerResp( data:{ Infos:any[] } ) { chat_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static SetupGroup( data:{ Name:string } ) { chat_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static SetupGroupResp( data:{ GroupId:number, GroupName:string, HostID:number, Timestamp:number, AdminList:number[], MemberList:number[], BannedList:number[] } ) { chat_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static InviteEnterGroup( data:{ GroupId:number, GroupName:string } ) { chat_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static InviteEnterGroupResp( data:{ GroupId:number, HostID:number, UserID:number, Timestamp:number } ) { chat_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGroup( data:{ GroupId:number, HostID:number } ) { chat_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGroupResp( data:{ UserID:number, GroupId:number, Timestamp:number } ) { chat_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChat( data:{ Type:number, GroupId:number, Content:any } ) { chat_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChatResp( data:{ Type:number, GroupId:number, Content:any, Timestamp:number, SenderID:number } ) { chat_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChat( data:{ Type:number, TargetId:number, Content:any } ) { chat_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChatResp( data:{ Type:number, Content:any, Timestamp:number, SenderID:number } ) { chat_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPerson( data:{ GroupId:number, MemID:number } ) { chat_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { chat_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPerson( data:{ GroupId:number, MemID:number } ) { chat_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { chat_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBanned( data:{ GroupId:number, UserID:number, IsBanned:any } ) { chat_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBannedResp( data:{ GroupId:number, UserID:number, IsBanned:any, Timestamp:number, MemID:number } ) { chat_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuit( data:{ GroupId:number } ) { chat_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuitResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismiss( data:{ GroupId:number, Timestamp:number } ) { chat_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismissResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHost( data:{ GroupId:number, OldID:number, NewID:number } ) { chat_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHostResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
}

