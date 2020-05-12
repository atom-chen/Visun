//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { chat } from "./chat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum chat_msgs {
    SetupGroup = 20,
    SetupGroupResp = 21,
    SetupGroupAdmin = 22,
    SetupGroupAdminResp = 23,
    CancelGroupAdmin = 24,
    CancelGroupAdminResp = 25,
    InviteEnterGroup = 26,
    InviteEnterGroupResp = 27,
    GroupInvite = 28,
    GroupInviteResp = 29,
    PrivateInvite = 30,
    PrivateInviteResp = 31,
    EnterGroup = 32,
    EnterGroupResp = 33,
    GroupChat = 34,
    GroupChatResp = 35,
    GroupSendReward = 36,
    GroupSendRewardResp = 37,
    GroupGetReward = 38,
    GroupGetRewardResp = 39,
    PrivateSendReward = 40,
    PrivateSendRewardResp = 41,
    PrivateGetReward = 42,
    PrivateGetRewardResp = 43,
    PrivateChat = 44,
    PrivateChatResp = 45,
    GroupAddPerson = 46,
    GroupAddPersonResp = 47,
    GroupDelPerson = 48,
    GroupDelPersonResp = 49,
    GroupBanned = 50,
    GroupBannedResp = 51,
    GroupQuit = 52,
    GroupQuitResp = 53,
    GroupDismiss = 54,
    GroupDismissResp = 55,
    GroupChangeHost = 56,
    GroupChangeHostResp = 57,
}

export var chat_packet_define = {
    20: new LeafWsPacket(20, chat.SetupGroup, "chat.SetupGroup"),
    21: new LeafWsPacket(21, chat.SetupGroupResp, "chat.SetupGroupResp"),
    22: new LeafWsPacket(22, chat.SetupGroupAdmin, "chat.SetupGroupAdmin"),
    23: new LeafWsPacket(23, chat.SetupGroupAdminResp, "chat.SetupGroupAdminResp"),
    24: new LeafWsPacket(24, chat.CancelGroupAdmin, "chat.CancelGroupAdmin"),
    25: new LeafWsPacket(25, chat.CancelGroupAdminResp, "chat.CancelGroupAdminResp"),
    26: new LeafWsPacket(26, chat.InviteEnterGroup, "chat.InviteEnterGroup"),
    27: new LeafWsPacket(27, chat.InviteEnterGroupResp, "chat.InviteEnterGroupResp"),
    28: new LeafWsPacket(28, chat.GroupInvite, "chat.GroupInvite"),
    29: new LeafWsPacket(29, chat.GroupInviteResp, "chat.GroupInviteResp"),
    30: new LeafWsPacket(30, chat.PrivateInvite, "chat.PrivateInvite"),
    31: new LeafWsPacket(31, chat.PrivateInviteResp, "chat.PrivateInviteResp"),
    32: new LeafWsPacket(32, chat.EnterGroup, "chat.EnterGroup"),
    33: new LeafWsPacket(33, chat.EnterGroupResp, "chat.EnterGroupResp"),
    34: new LeafWsPacket(34, chat.GroupChat, "chat.GroupChat"),
    35: new LeafWsPacket(35, chat.GroupChatResp, "chat.GroupChatResp"),
    36: new LeafWsPacket(36, chat.GroupSendReward, "chat.GroupSendReward"),
    37: new LeafWsPacket(37, chat.GroupSendRewardResp, "chat.GroupSendRewardResp"),
    38: new LeafWsPacket(38, chat.GroupGetReward, "chat.GroupGetReward"),
    39: new LeafWsPacket(39, chat.GroupGetRewardResp, "chat.GroupGetRewardResp"),
    40: new LeafWsPacket(40, chat.PrivateSendReward, "chat.PrivateSendReward"),
    41: new LeafWsPacket(41, chat.PrivateSendRewardResp, "chat.PrivateSendRewardResp"),
    42: new LeafWsPacket(42, chat.PrivateGetReward, "chat.PrivateGetReward"),
    43: new LeafWsPacket(43, chat.PrivateGetRewardResp, "chat.PrivateGetRewardResp"),
    44: new LeafWsPacket(44, chat.PrivateChat, "chat.PrivateChat"),
    45: new LeafWsPacket(45, chat.PrivateChatResp, "chat.PrivateChatResp"),
    46: new LeafWsPacket(46, chat.GroupAddPerson, "chat.GroupAddPerson"),
    47: new LeafWsPacket(47, chat.GroupAddPersonResp, "chat.GroupAddPersonResp"),
    48: new LeafWsPacket(48, chat.GroupDelPerson, "chat.GroupDelPerson"),
    49: new LeafWsPacket(49, chat.GroupDelPersonResp, "chat.GroupDelPersonResp"),
    50: new LeafWsPacket(50, chat.GroupBanned, "chat.GroupBanned"),
    51: new LeafWsPacket(51, chat.GroupBannedResp, "chat.GroupBannedResp"),
    52: new LeafWsPacket(52, chat.GroupQuit, "chat.GroupQuit"),
    53: new LeafWsPacket(53, chat.GroupQuitResp, "chat.GroupQuitResp"),
    54: new LeafWsPacket(54, chat.GroupDismiss, "chat.GroupDismiss"),
    55: new LeafWsPacket(55, chat.GroupDismissResp, "chat.GroupDismissResp"),
    56: new LeafWsPacket(56, chat.GroupChangeHost, "chat.GroupChangeHost"),
    57: new LeafWsPacket(57, chat.GroupChangeHostResp, "chat.GroupChangeHostResp"),
}

export class chat_request {
    public static SetupGroup( data:{ Name:string } ) { chat_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static SetupGroupResp( data:{ GroupId:number, GroupName:string, HostID:number, Timestamp:number, AdminList:number[], MemberList:number[], BannedList:number[] } ) { chat_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static SetupGroupAdmin( data:{ GroupId:number, AdminList:number[] } ) { chat_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static SetupGroupAdminResp( data:{ GroupId:number, AdminList:number[], Timestamp:number } ) { chat_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static CancelGroupAdmin( data:{ GroupId:number, AdminList:number[] } ) { chat_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static CancelGroupAdminResp( data:{ GroupId:number, AdminList:number[], Timestamp:number } ) { chat_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static InviteEnterGroup( data:{ GroupId:number, GroupName:string } ) { chat_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static InviteEnterGroupResp( data:{ GroupId:number, HostID:number, UserID:number, Timestamp:number } ) { chat_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupInvite( data:{ GroupId:number, Invite:any } ) { chat_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupInviteResp( data:{ GroupId:number, Resp:any } ) { chat_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateInvite( data:{ TargetId:number, Invite:any } ) { chat_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateInviteResp( data:{ TargetId:number, Resp:any } ) { chat_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGroup( data:{ GroupId:number, HostID:number } ) { chat_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static EnterGroupResp( data:{ UserID:number, GroupId:number, Timestamp:number } ) { chat_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChat( data:{ Type:number, GroupId:number, Content:any } ) { chat_packet_define[34].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChatResp( data:{ Type:number, GroupId:number, Content:any, Timestamp:number, SenderID:number } ) { chat_packet_define[35].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupSendReward( data:{ GroupId:number, SendReward:any } ) { chat_packet_define[36].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupSendRewardResp( data:{ GroupId:number, Resp:any } ) { chat_packet_define[37].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupGetReward( data:{ GroupId:number, GetReward:any } ) { chat_packet_define[38].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupGetRewardResp( data:{ GroupId:number, Resp:any } ) { chat_packet_define[39].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateSendReward( data:{ TargetId:number, SendReward:any } ) { chat_packet_define[40].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateSendRewardResp( data:{ TargetId:number, Resp:any } ) { chat_packet_define[41].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateGetReward( data:{ TargetId:number, GetReward:any } ) { chat_packet_define[42].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateGetRewardResp( data:{ TargetId:number, Resp:any } ) { chat_packet_define[43].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChat( data:{ Type:number, TargetId:number, Content:any } ) { chat_packet_define[44].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChatResp( data:{ Type:number, Content:any, Timestamp:number, SenderID:number } ) { chat_packet_define[45].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPerson( data:{ GroupId:number, MemID:number } ) { chat_packet_define[46].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { chat_packet_define[47].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPerson( data:{ GroupId:number, MemID:number } ) { chat_packet_define[48].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { chat_packet_define[49].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBanned( data:{ GroupId:number, UserID:number, IsBanned:any } ) { chat_packet_define[50].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBannedResp( data:{ GroupId:number, UserID:number, IsBanned:any, Timestamp:number, MemID:number } ) { chat_packet_define[51].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuit( data:{ GroupId:number } ) { chat_packet_define[52].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuitResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[53].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismiss( data:{ GroupId:number, Timestamp:number } ) { chat_packet_define[54].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismissResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[55].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHost( data:{ GroupId:number, OldID:number, NewID:number } ) { chat_packet_define[56].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHostResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[57].sendToChannel(ChannelDefine.game, data, false); }
}

