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
    GroupInvite = 23,
    GroupInviteResp = 24,
    PrivateInvite = 25,
    PrivateInviteResp = 26,
    EnterGroup = 27,
    EnterGroupResp = 28,
    GroupChat = 29,
    GroupChatResp = 30,
    GroupSendReward = 31,
    GroupSendRewardResp = 32,
    GroupGetReward = 33,
    GroupGetRewardResp = 34,
    PrivateSendReward = 35,
    PrivateSendRewardResp = 36,
    PrivateGetReward = 37,
    PrivateGetRewardResp = 38,
    PrivateChat = 39,
    PrivateChatResp = 40,
    GroupAddPerson = 41,
    GroupAddPersonResp = 42,
    GroupDelPerson = 43,
    GroupDelPersonResp = 44,
    GroupBanned = 45,
    GroupBannedResp = 46,
    GroupQuit = 47,
    GroupQuitResp = 48,
    GroupDismiss = 49,
    GroupDismissResp = 50,
    GroupChangeHost = 51,
    GroupChangeHostResp = 52,
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
    23: new LeafWsPacket(23, chat.GroupInvite, "chat.GroupInvite"),
    24: new LeafWsPacket(24, chat.GroupInviteResp, "chat.GroupInviteResp"),
    25: new LeafWsPacket(25, chat.PrivateInvite, "chat.PrivateInvite"),
    26: new LeafWsPacket(26, chat.PrivateInviteResp, "chat.PrivateInviteResp"),
    27: new LeafWsPacket(27, chat.EnterGroup, "chat.EnterGroup"),
    28: new LeafWsPacket(28, chat.EnterGroupResp, "chat.EnterGroupResp"),
    29: new LeafWsPacket(29, chat.GroupChat, "chat.GroupChat"),
    30: new LeafWsPacket(30, chat.GroupChatResp, "chat.GroupChatResp"),
    31: new LeafWsPacket(31, chat.GroupSendReward, "chat.GroupSendReward"),
    32: new LeafWsPacket(32, chat.GroupSendRewardResp, "chat.GroupSendRewardResp"),
    33: new LeafWsPacket(33, chat.GroupGetReward, "chat.GroupGetReward"),
    34: new LeafWsPacket(34, chat.GroupGetRewardResp, "chat.GroupGetRewardResp"),
    35: new LeafWsPacket(35, chat.PrivateSendReward, "chat.PrivateSendReward"),
    36: new LeafWsPacket(36, chat.PrivateSendRewardResp, "chat.PrivateSendRewardResp"),
    37: new LeafWsPacket(37, chat.PrivateGetReward, "chat.PrivateGetReward"),
    38: new LeafWsPacket(38, chat.PrivateGetRewardResp, "chat.PrivateGetRewardResp"),
    39: new LeafWsPacket(39, chat.PrivateChat, "chat.PrivateChat"),
    40: new LeafWsPacket(40, chat.PrivateChatResp, "chat.PrivateChatResp"),
    41: new LeafWsPacket(41, chat.GroupAddPerson, "chat.GroupAddPerson"),
    42: new LeafWsPacket(42, chat.GroupAddPersonResp, "chat.GroupAddPersonResp"),
    43: new LeafWsPacket(43, chat.GroupDelPerson, "chat.GroupDelPerson"),
    44: new LeafWsPacket(44, chat.GroupDelPersonResp, "chat.GroupDelPersonResp"),
    45: new LeafWsPacket(45, chat.GroupBanned, "chat.GroupBanned"),
    46: new LeafWsPacket(46, chat.GroupBannedResp, "chat.GroupBannedResp"),
    47: new LeafWsPacket(47, chat.GroupQuit, "chat.GroupQuit"),
    48: new LeafWsPacket(48, chat.GroupQuitResp, "chat.GroupQuitResp"),
    49: new LeafWsPacket(49, chat.GroupDismiss, "chat.GroupDismiss"),
    50: new LeafWsPacket(50, chat.GroupDismissResp, "chat.GroupDismissResp"),
    51: new LeafWsPacket(51, chat.GroupChangeHost, "chat.GroupChangeHost"),
    52: new LeafWsPacket(52, chat.GroupChangeHostResp, "chat.GroupChangeHostResp"),
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
    public static GroupInvite( data:{ GroupId:number, Invite:any } ) { chat_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupInviteResp( data:{ GroupId:number, Resp:any } ) { chat_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateInvite( data:{ TargetId:number, Invite:any } ) { chat_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateInviteResp( data:{ TargetId:number, Resp:any } ) { chat_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGroup( data:{ GroupId:number, HostID:number } ) { chat_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGroupResp( data:{ UserID:number, GroupId:number, Timestamp:number } ) { chat_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChat( data:{ Type:number, GroupId:number, Content:any } ) { chat_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChatResp( data:{ Type:number, GroupId:number, Content:any, Timestamp:number, SenderID:number } ) { chat_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupSendReward( data:{ GroupId:number, SendReward:any } ) { chat_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupSendRewardResp( data:{ GroupId:number, Resp:any } ) { chat_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupGetReward( data:{ GroupId:number, GetReward:any } ) { chat_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupGetRewardResp( data:{ GroupId:number, Resp:any } ) { chat_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateSendReward( data:{ TargetId:number, SendReward:any } ) { chat_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateSendRewardResp( data:{ TargetId:number, Resp:any } ) { chat_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateGetReward( data:{ TargetId:number, GetReward:any } ) { chat_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateGetRewardResp( data:{ TargetId:number, Resp:any } ) { chat_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChat( data:{ Type:number, TargetId:number, Content:any } ) { chat_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChatResp( data:{ Type:number, Content:any, Timestamp:number, SenderID:number } ) { chat_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPerson( data:{ GroupId:number, MemID:number } ) { chat_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { chat_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPerson( data:{ GroupId:number, MemID:number } ) { chat_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { chat_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBanned( data:{ GroupId:number, UserID:number, IsBanned:any } ) { chat_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBannedResp( data:{ GroupId:number, UserID:number, IsBanned:any, Timestamp:number, MemID:number } ) { chat_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuit( data:{ GroupId:number } ) { chat_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuitResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismiss( data:{ GroupId:number, Timestamp:number } ) { chat_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismissResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHost( data:{ GroupId:number, OldID:number, NewID:number } ) { chat_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHostResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
}

