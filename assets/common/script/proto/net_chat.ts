//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { go } from "./chat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum go_msgs {
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

export var go_packet_define = {
    13: new LeafWsPacket(13, go.SimplePlayerInfo, "go.SimplePlayerInfo"),
    14: new LeafWsPacket(14, go.GetOnlinePlayers, "go.GetOnlinePlayers"),
    15: new LeafWsPacket(15, go.GetOnlinePlayersResp, "go.GetOnlinePlayersResp"),
    16: new LeafWsPacket(16, go.SetupGroup, "go.SetupGroup"),
    17: new LeafWsPacket(17, go.SetupGroupResp, "go.SetupGroupResp"),
    18: new LeafWsPacket(18, go.GroupChat, "go.GroupChat"),
    19: new LeafWsPacket(19, go.GroupChatResp, "go.GroupChatResp"),
    20: new LeafWsPacket(20, go.PrivateChat, "go.PrivateChat"),
    21: new LeafWsPacket(21, go.PrivateChatResp, "go.PrivateChatResp"),
    22: new LeafWsPacket(22, go.GroupAddPerson, "go.GroupAddPerson"),
    23: new LeafWsPacket(23, go.GroupAddPersonResp, "go.GroupAddPersonResp"),
    24: new LeafWsPacket(24, go.GroupDelPerson, "go.GroupDelPerson"),
    25: new LeafWsPacket(25, go.GroupDelPersonResp, "go.GroupDelPersonResp"),
    26: new LeafWsPacket(26, go.GroupBanned, "go.GroupBanned"),
    27: new LeafWsPacket(27, go.GroupBannedResp, "go.GroupBannedResp"),
    28: new LeafWsPacket(28, go.GroupQuit, "go.GroupQuit"),
    29: new LeafWsPacket(29, go.GroupQuitResp, "go.GroupQuitResp"),
    30: new LeafWsPacket(30, go.GroupDismiss, "go.GroupDismiss"),
    31: new LeafWsPacket(31, go.GroupDismissResp, "go.GroupDismissResp"),
    32: new LeafWsPacket(32, go.GroupChangeHost, "go.GroupChangeHost"),
    33: new LeafWsPacket(33, go.GroupChangeHostResp, "go.GroupChangeHostResp"),
}

export class go_request {
    public static SimplePlayerInfo( data:{ UserID:number, Sex:number, Gold:number, HeadID:number } ) { go_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
    public static GetOnlinePlayers( data:{ PageNum:number } ) { go_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static GetOnlinePlayersResp( data:{ Infos:any[] } ) { go_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static SetupGroup( data:{ Name:string } ) { go_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static SetupGroupResp( data:{ GroupId:number, GroupName:string, HostID:number, Timestamp:number, AdminList:number[], MemberList:number[], BannedList:number[] } ) { go_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChat( data:{ GroupId:number, Content:string } ) { go_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChatResp( data:{ GroupId:number, Content:string, Timestamp:number, SenderID:number } ) { go_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChat( data:{ TargetId:number, Content:string } ) { go_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChatResp( data:{ Content:string, Timestamp:number, SenderID:number } ) { go_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPerson( data:{ GroupId:number, MemID:number } ) { go_packet_define[22].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupAddPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { go_packet_define[23].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPerson( data:{ GroupId:number, MemID:number } ) { go_packet_define[24].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDelPersonResp( data:{ GroupId:number, UserID:number, Timestamp:number, MemID:number } ) { go_packet_define[25].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBanned( data:{ GroupId:number, UserID:number, IsBanned:any } ) { go_packet_define[26].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupBannedResp( data:{ GroupId:number, UserID:number, IsBanned:any, Timestamp:number, MemID:number } ) { go_packet_define[27].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuit( data:{ GroupId:number } ) { go_packet_define[28].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupQuitResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { go_packet_define[29].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismiss( data:{ GroupId:number, Timestamp:number } ) { go_packet_define[30].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupDismissResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { go_packet_define[31].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHost( data:{ GroupId:number, OldID:number, NewID:number } ) { go_packet_define[32].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChangeHostResp( data:{ GroupId:number, UserID:number, Timestamp:number } ) { go_packet_define[33].sendToChannel(ChannelDefine.game, data, false); }
}

