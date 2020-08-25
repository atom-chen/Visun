//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { chat } from "./chat";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum chat_msgs {
    SimplePlayerInfo = 13,
    WorldChat = 14,
    WorldChatResp = 15,
    GroupChat = 16,
    GroupChatResp = 17,
    PrivateChat = 18,
    PrivateChatResp = 19,
    GameChat = 20,
    GameChatResp = 21,
}

export var chat_packet_define = {
    13: new LeafWsPacket(13, chat.SimplePlayerInfo, "chat.SimplePlayerInfo"),
    14: new LeafWsPacket(14, chat.WorldChat, "chat.WorldChat"),
    15: new LeafWsPacket(15, chat.WorldChatResp, "chat.WorldChatResp"),
    16: new LeafWsPacket(16, chat.GroupChat, "chat.GroupChat"),
    17: new LeafWsPacket(17, chat.GroupChatResp, "chat.GroupChatResp"),
    18: new LeafWsPacket(18, chat.PrivateChat, "chat.PrivateChat"),
    19: new LeafWsPacket(19, chat.PrivateChatResp, "chat.PrivateChatResp"),
    20: new LeafWsPacket(20, chat.GameChat, "chat.GameChat"),
    21: new LeafWsPacket(21, chat.GameChatResp, "chat.GameChatResp"),
}

export class chat_request {
    public static SimplePlayerInfo( data:{ UserID:number, Name:string, HeadImg:string } ) { chat_packet_define[13].sendToChannel(ChannelDefine.game, data, false); }
    public static WorldChat( data:{ Content:string } ) { chat_packet_define[14].sendToChannel(ChannelDefine.game, data, false); }
    public static WorldChatResp( data:{ Content:string, Timestamp:number, Sender:any } ) { chat_packet_define[15].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChat( data:{ Content:string, GroupId:number } ) { chat_packet_define[16].sendToChannel(ChannelDefine.game, data, false); }
    public static GroupChatResp( data:{ Content:string, GroupId:number, Timestamp:number, Sender:any } ) { chat_packet_define[17].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChat( data:{ Content:string, TargetId:number } ) { chat_packet_define[18].sendToChannel(ChannelDefine.game, data, false); }
    public static PrivateChatResp( data:{ Content:string, TargetId:number, Timestamp:number, Sender:any } ) { chat_packet_define[19].sendToChannel(ChannelDefine.game, data, false); }
    public static GameChat( data:{ Content:string, GameId:number } ) { chat_packet_define[20].sendToChannel(ChannelDefine.game, data, false); }
    public static GameChatResp( data:{ Content:string, GameId:number, Timestamp:number, Sender:any } ) { chat_packet_define[21].sendToChannel(ChannelDefine.game, data, false); }
}

