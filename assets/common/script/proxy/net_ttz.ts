//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { ttz } from "../proto/ttz";
import PacketDefine from "../../../kernel/net/PacketDefine";
import ChannelDefine from "../definer/ChannelDefine";


export class ttz_packet_define {
    // public static UNKNOWN = new PacketDefine(ttz, ttz.Request.CMD.UNKNOWN, ttz.undefined, "undefined", "undefined");
    public static HALL_REFRESH_COIN = new PacketDefine(ttz, ttz.Request.CMD.HALL_REFRESH_COIN, ttz.HallRefreshCoinRequest, "hallRefreshCoinRequest", "HallRefreshCoinRequest");
    public static QIANG_ZHUANG = new PacketDefine(ttz, ttz.Request.CMD.QIANG_ZHUANG, ttz.QiangZhuangRequest, "qiangZhuangRequest", "QiangZhuangRequest");
    // public static SEND_ZHUANG = new PacketDefine(ttz, ttz.Request.CMD.SEND_ZHUANG, ttz.undefined, "undefined", "undefined");
    public static BET = new PacketDefine(ttz, ttz.Request.CMD.BET, ttz.BetRequest, "betRequest", "BetRequest");
    public static JOIN_TABLE = new PacketDefine(ttz, ttz.Request.CMD.JOIN_TABLE, ttz.JoinTableRequest, "joinTableRequest", "JoinTableRequest");
    // public static SEND_JOIN_TABLE = new PacketDefine(ttz, ttz.Request.CMD.SEND_JOIN_TABLE, ttz.undefined, "undefined", "undefined");
    public static USER_READY = new PacketDefine(ttz, ttz.Request.CMD.USER_READY, ttz.UserReadyRequest, "userReadyRequest", "UserReadyRequest");
    // public static SEND_USER_READY = new PacketDefine(ttz, ttz.Request.CMD.SEND_USER_READY, ttz.undefined, "undefined", "undefined");
    // public static SEND_USER_INFO = new PacketDefine(ttz, ttz.Request.CMD.SEND_USER_INFO, ttz.undefined, "undefined", "undefined");
    // public static SEND_USER_CARD = new PacketDefine(ttz, ttz.Request.CMD.SEND_USER_CARD, ttz.undefined, "undefined", "undefined");
    // public static SEND_CARDS = new PacketDefine(ttz, ttz.Request.CMD.SEND_CARDS, ttz.undefined, "undefined", "undefined");
    public static USER_RECONNECT = new PacketDefine(ttz, ttz.Request.CMD.USER_RECONNECT, ttz.UserReconnectRequest, "userReconnectRequest", "UserReconnectRequest");
    // public static SEND_RECONNECT_QUIT = new PacketDefine(ttz, ttz.Request.CMD.SEND_RECONNECT_QUIT, ttz.undefined, "undefined", "undefined");
    // public static SEND_USER_RECONNECT = new PacketDefine(ttz, ttz.Request.CMD.SEND_USER_RECONNECT, ttz.undefined, "undefined", "undefined");
    public static USER_QUIT = new PacketDefine(ttz, ttz.Request.CMD.USER_QUIT, ttz.UserQuitRequest, "userQuitRequest", "UserQuitRequest");
    // public static SEND_USER_QUIT = new PacketDefine(ttz, ttz.Request.CMD.SEND_USER_QUIT, ttz.undefined, "undefined", "undefined");
    public static MESSAGE = new PacketDefine(ttz, ttz.Request.CMD.MESSAGE, ttz.MessageRequest, "messageRequest", "MessageRequest");
    // public static SEND_MESSAGE = new PacketDefine(ttz, ttz.Request.CMD.SEND_MESSAGE, ttz.undefined, "undefined", "undefined");
    // public static SEND_COIN_REFRESH = new PacketDefine(ttz, ttz.Request.CMD.SEND_COIN_REFRESH, ttz.undefined, "undefined", "undefined");
    public static USER_ONBACK = new PacketDefine(ttz, ttz.Request.CMD.USER_ONBACK, ttz.UserOnBackRequest, "userOnBackRequest", "UserOnBackRequest");
    // public static SEND_USER_ONBACK = new PacketDefine(ttz, ttz.Request.CMD.SEND_USER_ONBACK, ttz.undefined, "undefined", "undefined");
    // public static SEND_DIAMOND_CHANGE = new PacketDefine(ttz, ttz.Request.CMD.SEND_DIAMOND_CHANGE, ttz.undefined, "undefined", "undefined");
    public static DELAY_CHECK = new PacketDefine(ttz, ttz.Request.CMD.DELAY_CHECK, ttz.DelayCheckRequest, "delayCheckRequest", "DelayCheckRequest");
    // public static Get_User_Info = new PacketDefine(ttz, ttz.Request.CMD.Get_User_Info, ttz.undefined, "undefined", "undefined");
    // public static SEND_ROUND_RESULT = new PacketDefine(ttz, ttz.Request.CMD.SEND_ROUND_RESULT, ttz.undefined, "undefined", "undefined");
    // public static FORCE_OFFLINE = new PacketDefine(ttz, ttz.Request.CMD.FORCE_OFFLINE, ttz.undefined, "undefined", "undefined");
    // public static DELAYQUIT_OFFLINE_RESP = new PacketDefine(ttz, ttz.Request.CMD.DELAYQUIT_OFFLINE_RESP, ttz.undefined, "undefined", "undefined");
    // public static KICKEDOUT = new PacketDefine(ttz, ttz.Request.CMD.KICKEDOUT, ttz.undefined, "undefined", "undefined");
    // public static SEND_NOTICE_CLIENT_DISMISS = new PacketDefine(ttz, ttz.Request.CMD.SEND_NOTICE_CLIENT_DISMISS, ttz.undefined, "undefined", "undefined");
    // public static SEND_REMAIN_TIME = new PacketDefine(ttz, ttz.Request.CMD.SEND_REMAIN_TIME, ttz.undefined, "undefined", "undefined");
    // public static SEND_USERQUIT_BY_ADMIN = new PacketDefine(ttz, ttz.Request.CMD.SEND_USERQUIT_BY_ADMIN, ttz.undefined, "undefined", "undefined");
    // public static SEND_HEART_BEAT = new PacketDefine(ttz, ttz.Request.CMD.SEND_HEART_BEAT, ttz.undefined, "undefined", "undefined");
    // public static NOTICE_PUSH_RESP = new PacketDefine(ttz, ttz.Request.CMD.NOTICE_PUSH_RESP, ttz.undefined, "undefined", "undefined");
}

export class ttz_request {
//    public static UNKNOWN(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.UNKNOWN.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static HALL_REFRESH_COIN(data:any, bIsPbObj:boolean) : void 
    {
        ttz_packet_define.HALL_REFRESH_COIN.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
    public static QIANG_ZHUANG(data:any, bIsPbObj:boolean) : void 
    {
        ttz_packet_define.QIANG_ZHUANG.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static SEND_ZHUANG(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_ZHUANG.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static BET(data:any, bIsPbObj:boolean) : void 
    {
        ttz_packet_define.BET.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
    public static JOIN_TABLE(data:any, bIsPbObj:boolean) : void 
    {
        ttz_packet_define.JOIN_TABLE.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static SEND_JOIN_TABLE(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_JOIN_TABLE.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static USER_READY(data:any, bIsPbObj:boolean) : void 
    {
        ttz_packet_define.USER_READY.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static SEND_USER_READY(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_USER_READY.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_USER_INFO(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_USER_INFO.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_USER_CARD(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_USER_CARD.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_CARDS(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_CARDS.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static USER_RECONNECT(data:any, bIsPbObj:boolean) : void 
    {
        ttz_packet_define.USER_RECONNECT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static SEND_RECONNECT_QUIT(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_RECONNECT_QUIT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_USER_RECONNECT(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_USER_RECONNECT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static USER_QUIT(data:any, bIsPbObj:boolean) : void 
    {
        ttz_packet_define.USER_QUIT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static SEND_USER_QUIT(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_USER_QUIT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static MESSAGE(data:any, bIsPbObj:boolean) : void 
    {
        ttz_packet_define.MESSAGE.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static SEND_MESSAGE(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_MESSAGE.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_COIN_REFRESH(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_COIN_REFRESH.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static USER_ONBACK(data:any, bIsPbObj:boolean) : void 
    {
        ttz_packet_define.USER_ONBACK.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static SEND_USER_ONBACK(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_USER_ONBACK.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_DIAMOND_CHANGE(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_DIAMOND_CHANGE.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static DELAY_CHECK(data:any, bIsPbObj:boolean) : void 
    {
        ttz_packet_define.DELAY_CHECK.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static Get_User_Info(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.Get_User_Info.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_ROUND_RESULT(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_ROUND_RESULT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static FORCE_OFFLINE(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.FORCE_OFFLINE.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static DELAYQUIT_OFFLINE_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.DELAYQUIT_OFFLINE_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static KICKEDOUT(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.KICKEDOUT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_NOTICE_CLIENT_DISMISS(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_NOTICE_CLIENT_DISMISS.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_REMAIN_TIME(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_REMAIN_TIME.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_USERQUIT_BY_ADMIN(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_USERQUIT_BY_ADMIN.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_HEART_BEAT(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.SEND_HEART_BEAT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static NOTICE_PUSH_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        ttz_packet_define.NOTICE_PUSH_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
}
