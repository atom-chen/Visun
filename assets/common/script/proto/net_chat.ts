//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { chat } from "./chat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum chat_msgs {
    SetupGroup = 13,
    SetupGroupResp = 14,
    GroupChat = 15,
    GroupChatResp = 16,
    PrivateChat = 17,
    PrivateChatResp = 18,
    GroupAddPerson = 19,
    GroupAddPersonResp = 20,
    GroupDelPerson = 21,
    GroupDelPersonResp = 22,
    GroupBanned = 23,
    GroupBannedResp = 24,
    GroupQuit = 25,
    GroupQuitResp = 26,
    GroupDismiss = 27,
    GroupDismissResp = 28,
    GroupChangeHost = 29,
    GroupChangeHostResp = 30,
}

export var chat_packet_define = {
    13: new LeafWsPacket(13, chat.SetupGroup, "chat.SetupGroup"),
    14: new LeafWsPacket(14, chat.SetupGroupResp, "chat.SetupGroupResp"),
    15: new LeafWsPacket(15, chat.GroupChat, "chat.GroupChat"),
    16: new LeafWsPacket(16, chat.GroupChatResp, "chat.GroupChatResp"),
    17: new LeafWsPacket(17, chat.PrivateChat, "chat.PrivateChat"),
    18: new LeafWsPacket(18, chat.PrivateChatResp, "chat.PrivateChatResp"),
    19: new LeafWsPacket(19, chat.GroupAddPerson, "chat.GroupAddPerson"),
    20: new LeafWsPacket(20, chat.GroupAddPersonResp, "chat.GroupAddPersonResp"),
    21: new LeafWsPacket(21, chat.GroupDelPerson, "chat.GroupDelPerson"),
    22: new LeafWsPacket(22, chat.GroupDelPersonResp, "chat.GroupDelPersonResp"),
    23: new LeafWsPacket(23, chat.GroupBanned, "chat.GroupBanned"),
    24: new LeafWsPacket(24, chat.GroupBannedResp, "chat.GroupBannedResp"),
    25: new LeafWsPacket(25, chat.GroupQuit, "chat.GroupQuit"),
    26: new LeafWsPacket(26, chat.GroupQuitResp, "chat.GroupQuitResp"),
    27: new LeafWsPacket(27, chat.GroupDismiss, "chat.GroupDismiss"),
    28: new LeafWsPacket(28, chat.GroupDismissResp, "chat.GroupDismissResp"),
    29: new LeafWsPacket(29, chat.GroupChangeHost, "chat.GroupChangeHost"),
    30: new LeafWsPacket(30, chat.GroupChangeHostResp, "chat.GroupChangeHostResp"),
}

export class chat_request {
    public static SetupGroup( data:{ name:string } ) { chat_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
    public static SetupGroupResp( data:{ GroupId:number, GroupName:string, HostID:number, Timestamp:number, AdminList:number[], MemberList:number[], BannedList:number[] } ) { chat_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChat( data:{ GroupId:number, Content:string } ) { chat_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChatResp( data:{ GroupId:number, Content:string, Timestamp:number, SenderID:number } ) { chat_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChat( data:{ TargetId:number, Content:string } ) { chat_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChatResp( data:{ Content:string, Timestamp:number, SenderID:number } ) { chat_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPerson( data:{ GroupId:number, MemID:number } ) { chat_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { chat_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPerson( data:{ GroupId:number, MemID:number } ) { chat_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { chat_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBanned( data:{ GroupId:number, UserID:number, IsBanned:any } ) { chat_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBannedResp( data:{ GroupId:number, UserID:number, IsBanned:any, Timestamp:number, MemID:number } ) { chat_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuit( data:{ GroupId:number } ) { chat_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuitResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismiss( data:{ GroupId:number, Timestamp:number } ) { chat_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismissResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHost( data:{ GroupId:number, OldID:number, NewID:number } ) { chat_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHostResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { chat_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
}

