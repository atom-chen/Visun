//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { hallgw } from "../proto/hall";
import ChannelDefine from "../definer/ChannelDefine";
import NetPacket from "../../../kernel/net/NetPacket";


export enum hallgw_msgs {
    MsgGetUserInfoReq = 20000,
    MsgGetUserInfoResp = 20001,
    MsgGetGameListReq = 20002,
    MsgGetGameListResp = 20003,
    MsgGetGameConfigReq = 20004,
    MsgGetGameConfigResp = 20005,
    MsgChangeHeadReq = 20006,
    MsgChangeHeadResp = 20007,
    Msg_DisableGame = 20008,
    MsgNoticeNotify = 80000,
    MsgMarqueeNotice = 80001,
    MsgPopupNotice = 80002,
    MsgModifyGameConfigNotify = 80003,
}

export var hallgw_packet_define = {
    20000: new NetPacket(20000, hallgw.MsgGetUserInfoReq),
    20001: new NetPacket(20001, hallgw.MsgGetUserInfoResp),
    20002: new NetPacket(20002, hallgw.MsgGetGameListReq),
    20003: new NetPacket(20003, hallgw.MsgGetGameListResp),
    20004: new NetPacket(20004, hallgw.MsgGetGameConfigReq),
    20005: new NetPacket(20005, hallgw.MsgGetGameConfigResp),
    20006: new NetPacket(20006, hallgw.MsgChangeHeadReq),
    20007: new NetPacket(20007, hallgw.MsgChangeHeadResp),
    20008: new NetPacket(20008, null),
    80000: new NetPacket(80000, hallgw.MsgNoticeNotify),
    80001: new NetPacket(80001, hallgw.MsgMarqueeNotice),
    80002: new NetPacket(80002, hallgw.MsgPopupNotice),
    80003: new NetPacket(80003, hallgw.MsgModifyGameConfigNotify),
}

export class hallgw_request {
    public static MsgGetUserInfoReq( data:{ Id:number } ) { hallgw_packet_define[20000].sendToChannel(ChannelDefine.hall, data, false); }
    public static MsgGetGameListReq( data:{} ) { hallgw_packet_define[20002].sendToChannel(ChannelDefine.hall, data, false); }
    public static MsgGetGameConfigReq( data:{ PlatformId:number } ) { hallgw_packet_define[20004].sendToChannel(ChannelDefine.hall, data, false); }
    public static MsgChangeHeadReq( data:{ UserId:number, Head:string } ) { hallgw_packet_define[20006].sendToChannel(ChannelDefine.hall, data, false); }
}
