//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { bjl } from "../proto/bjl";
import PacketDefine from "../../../kernel/net/PacketDefine";
import ChannelDefine from "../definer/ChannelDefine";


export class bjl_packet_define {
    // public static UNKNOWN = new PacketDefine(bjl, bjl.Request.CMD.UNKNOWN, bjl.undefined, "undefined", "undefined");
    public static BET_REQ = new PacketDefine(bjl, bjl.Request.CMD.BET_REQ, bjl.c2s_bet, "bet", "c2s_bet");
    public static JOIN_COIN_TABLE_REQ = new PacketDefine(bjl, bjl.Request.CMD.JOIN_COIN_TABLE_REQ, bjl.c2s_joinTable, "joinTable", "c2s_joinTable");
    public static GETUSERLIST_REQ = new PacketDefine(bjl, bjl.Request.CMD.GETUSERLIST_REQ, bjl.c2s_getUserList, "getUserList", "c2s_getUserList");
    public static NOTICE_PUSH_REQ = new PacketDefine(bjl, bjl.Request.CMD.NOTICE_PUSH_REQ, bjl.c2s_noticePush, "noticePush", "c2s_noticePush");
    public static PUSH_USER_RECONNECT_REQ = new PacketDefine(bjl, bjl.Request.CMD.PUSH_USER_RECONNECT_REQ, bjl.c2s_reconnect, "reconnect", "c2s_reconnect");
    public static USER_ONBACK_REQ = new PacketDefine(bjl, bjl.Request.CMD.USER_ONBACK_REQ, bjl.c2s_userOnback, "userOnback", "c2s_userOnback");
    public static USER_QUIT_REQ = new PacketDefine(bjl, bjl.Request.CMD.USER_QUIT_REQ, bjl.c2s_userQuit, "userQuit", "c2s_userQuit");
    // public static FOUCED_OFFLINE_REQ = new PacketDefine(bjl, bjl.Request.CMD.FOUCED_OFFLINE_REQ, bjl.c2s_foucedOffline, "undefined", "c2s_foucedOffline");
    // public static SEND_BET_RESP = new PacketDefine(bjl, bjl.Request.CMD.SEND_BET_RESP, bjl.undefined, "undefined", "undefined");
    // public static SEND_JOIN_COIN_TABLE_RESP = new PacketDefine(bjl, bjl.Request.CMD.SEND_JOIN_COIN_TABLE_RESP, bjl.undefined, "undefined", "undefined");
    // public static SEND_GETUSERLIST_RESP = new PacketDefine(bjl, bjl.Request.CMD.SEND_GETUSERLIST_RESP, bjl.undefined, "undefined", "undefined");
    // public static SEND_NOTICE_PUSH_RESP = new PacketDefine(bjl, bjl.Request.CMD.SEND_NOTICE_PUSH_RESP, bjl.undefined, "undefined", "undefined");
    // public static SEND_PUSH_USER_RECONNECT_RESP = new PacketDefine(bjl, bjl.Request.CMD.SEND_PUSH_USER_RECONNECT_RESP, bjl.undefined, "undefined", "undefined");
    // public static SEND_PUSH_RECONNECT_QUIT_RESP = new PacketDefine(bjl, bjl.Request.CMD.SEND_PUSH_RECONNECT_QUIT_RESP, bjl.undefined, "undefined", "undefined");
    // public static SEND_PUSH_RECONNECT_DATA_RESP = new PacketDefine(bjl, bjl.Request.CMD.SEND_PUSH_RECONNECT_DATA_RESP, bjl.undefined, "undefined", "undefined");
    // public static SEND_USER_ONBACK_RESP = new PacketDefine(bjl, bjl.Request.CMD.SEND_USER_ONBACK_RESP, bjl.undefined, "undefined", "undefined");
    // public static SEND_USER_QUIT_RESP = new PacketDefine(bjl, bjl.Request.CMD.SEND_USER_QUIT_RESP, bjl.undefined, "undefined", "undefined");
    // public static FOUCED_OFFLINE_RESP = new PacketDefine(bjl, bjl.Request.CMD.FOUCED_OFFLINE_RESP, bjl.s2c_foucedOffline, "undefined", "s2c_foucedOffline");
}

export class bjl_request {
//    public static UNKNOWN(data:any, bIsPbObj:boolean) : void 
//    {
//        bjl_packet_define.UNKNOWN.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static BET_REQ(data:any, bIsPbObj:boolean) : void 
    {
        bjl_packet_define.BET_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
    public static JOIN_COIN_TABLE_REQ(data:any, bIsPbObj:boolean) : void 
    {
        bjl_packet_define.JOIN_COIN_TABLE_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
    public static GETUSERLIST_REQ(data:any, bIsPbObj:boolean) : void 
    {
        bjl_packet_define.GETUSERLIST_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
    public static NOTICE_PUSH_REQ(data:any, bIsPbObj:boolean) : void 
    {
        bjl_packet_define.NOTICE_PUSH_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
    public static PUSH_USER_RECONNECT_REQ(data:any, bIsPbObj:boolean) : void 
    {
        bjl_packet_define.PUSH_USER_RECONNECT_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
    public static USER_ONBACK_REQ(data:any, bIsPbObj:boolean) : void 
    {
        bjl_packet_define.USER_ONBACK_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
    public static USER_QUIT_REQ(data:any, bIsPbObj:boolean) : void 
    {
        bjl_packet_define.USER_QUIT_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static FOUCED_OFFLINE_REQ(data:any, bIsPbObj:boolean) : void 
//    {
//        bjl_packet_define.FOUCED_OFFLINE_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_BET_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        bjl_packet_define.SEND_BET_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_JOIN_COIN_TABLE_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        bjl_packet_define.SEND_JOIN_COIN_TABLE_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_GETUSERLIST_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        bjl_packet_define.SEND_GETUSERLIST_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_NOTICE_PUSH_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        bjl_packet_define.SEND_NOTICE_PUSH_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_PUSH_USER_RECONNECT_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        bjl_packet_define.SEND_PUSH_USER_RECONNECT_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_PUSH_RECONNECT_QUIT_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        bjl_packet_define.SEND_PUSH_RECONNECT_QUIT_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_PUSH_RECONNECT_DATA_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        bjl_packet_define.SEND_PUSH_RECONNECT_DATA_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_USER_ONBACK_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        bjl_packet_define.SEND_USER_ONBACK_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_USER_QUIT_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        bjl_packet_define.SEND_USER_QUIT_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static FOUCED_OFFLINE_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        bjl_packet_define.FOUCED_OFFLINE_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
}
