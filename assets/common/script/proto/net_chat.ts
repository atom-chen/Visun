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
    SetupGroup = 16,
    SetupGroupResp = 17,
    GroupChat = 18,
    GroupChatResp = 19,
    PrivateChat = 20,
    PrivateChatResp = 21,
    GroupAddPerson = 22,
    GroupAddPersonResp = 23,
    GroupDelPerson = 24,
    GroupDelPersonResp = 25,
    GroupBanned = 26,
    GroupBannedResp = 27,
    GroupQuit = 28,
    GroupQuitResp = 29,
    GroupDismiss = 30,
    GroupDismissResp = 31,
    GroupChangeHost = 32,
    GroupChangeHostResp = 33,
}

export var chat_packet_define = {
    13: new LeafWsPacket(13, chat.SimplePlayerInfo, "chat.SimplePlayerInfo"),
    14: new LeafWsPacket(14, chat.GetOnlinePlayers, "chat.GetOnlinePlayers"),
    15: new LeafWsPacket(15, chat.GetOnlinePlayersResp, "chat.GetOnlinePlayersResp"),
    16: new LeafWsPacket(16, chat.SetupGroup, "chat.SetupGroup"),
    17: new LeafWsPacket(17, chat.SetupGroupResp, "chat.SetupGroupResp"),
    18: new LeafWsPacket(18, chat.GroupChat, "chat.GroupChat"),
    19: new LeafWsPacket(19, chat.GroupChatResp, "chat.GroupChatResp"),
    20: new LeafWsPacket(20, chat.PrivateChat, "chat.PrivateChat"),
    21: new LeafWsPacket(21, chat.PrivateChatResp, "chat.PrivateChatResp"),
    22: new LeafWsPacket(22, chat.GroupAddPerson, "chat.GroupAddPerson"),
    23: new LeafWsPacket(23, chat.GroupAddPersonResp, "chat.GroupAddPersonResp"),
    24: new LeafWsPacket(24, chat.GroupDelPerson, "chat.GroupDelPerson"),
    25: new LeafWsPacket(25, chat.GroupDelPersonResp, "chat.GroupDelPersonResp"),
    26: new LeafWsPacket(26, chat.GroupBanned, "chat.GroupBanned"),
    27: new LeafWsPacket(27, chat.GroupBannedResp, "chat.GroupBannedResp"),
    28: new LeafWsPacket(28, chat.GroupQuit, "chat.GroupQuit"),
    29: new LeafWsPacket(29, chat.GroupQuitResp, "chat.GroupQuitResp"),
    30: new LeafWsPacket(30, chat.GroupDismiss, "chat.GroupDismiss"),
    31: new LeafWsPacket(31, chat.GroupDismissResp, "chat.GroupDismissResp"),
    32: new LeafWsPacket(32, chat.GroupChangeHost, "chat.GroupChangeHost"),
    33: new LeafWsPacket(33, chat.GroupChangeHostResp, "chat.GroupChangeHostResp"),
}

export class chat_request {
    public static SimplePlayerInfo( data:{ UserID:number, Sex:number, Gold:number, HeadID:number } ) { chat_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
    public static GetOnlinePlayers( data:{ PageNum:number } ) { chat_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static GetOnlinePlayersResp( data:{ Infos:any[] } ) { chat_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static SetupGroup( data:{ Name:string } ) { chat_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static SetupGroupResp( data:{ GroupId:number, GroupName:string, HostID:number, Timestamp:number, AdminList:number[], MemberList:number[], BannedList:number[] } ) { chat_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChat( data:{ GroupId:number, Content:string } ) { chat_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChatResp( data:{ GroupId:number, Content:string, Timestamp:number, SenderID:number } ) { chat_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChat( data:{ TargetId:number, Content:string } ) { chat_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChatResp( data:{ Content:string, Timestamp:number, SenderID:number } ) { chat_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPerson( data:{ GroupId:number, MemID:number } ) { chat_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { chat_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPerson( data:{ GroupId:number, MemID:number } ) { chat_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { chat_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBanned( data:{ GroupId:number, UserID:number, IsBanned:any } ) { chat_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBannedResp( data:{ GroupId:number, UserID:number, IsBanned:any, Timestamp:number, MemID:number } ) { chat_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuit( data:{ GroupId:number } ) { chat_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuitResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismiss( data:{ GroupId:number, Timestamp:number } ) { chat_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismissResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHost( data:{ GroupId:number, OldID:number, NewID:number } ) { chat_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHostResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
}

