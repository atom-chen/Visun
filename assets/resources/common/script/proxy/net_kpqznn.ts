//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { kpqznn } from "../proto/kpqznn";
import PacketDefine from "../../../../kernel/net/PacketDefine";
import ChannelDefine from "../definer/ChannelDefine";


export class kpqznn_packet_define {
    // public static UNKNOWN = new PacketDefine(kpqznn, kpqznn.Request.CMD.UNKNOWN, kpqznn.undefined, "undefined", "undefined");
    // public static HALL_REFRESH_COIN = new PacketDefine(kpqznn, kpqznn.Request.CMD.HALL_REFRESH_COIN, kpqznn.HallRefreshCoinResponse, "undefined", "HallRefreshCoinResponse");
    public static JOIN_TABLE = new PacketDefine(kpqznn, kpqznn.Request.CMD.JOIN_TABLE, kpqznn.JoinTableRequest, "coinJoinTableRequest", "JoinTableRequest");
    // public static SEND_USER_INFO = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_USER_INFO, kpqznn.TableInfoResponse, "undefined", "TableInfoResponse");
    public static SHOW_CARD = new PacketDefine(kpqznn, kpqznn.Request.CMD.SHOW_CARD, kpqznn.ShowCardRequest, "showCardRequest", "ShowCardRequest");
    public static BET = new PacketDefine(kpqznn, kpqznn.Request.CMD.BET, kpqznn.BetRequest, "betRequest", "BetRequest");
    // public static SEND_ROUND_RESULT = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_ROUND_RESULT, kpqznn.SendRoundResultResponse, "undefined", "SendRoundResultResponse");
    public static QIANG_ZHUANG = new PacketDefine(kpqznn, kpqznn.Request.CMD.QIANG_ZHUANG, kpqznn.QiangZhuangRequest, "qiangZhuangRequest", "QiangZhuangRequest");
    // public static SEND_ZHUANG = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_ZHUANG, kpqznn.TableInfoResponse, "undefined", "TableInfoResponse");
    // public static SEND_USER_CARD = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_USER_CARD, kpqznn.TableInfoResponse, "undefined", "TableInfoResponse");
    // public static SEND_USER_BEST_CARD = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_USER_BEST_CARD, kpqznn.undefined, "undefined", "undefined");
    // public static USER_RECONNECT = new PacketDefine(kpqznn, kpqznn.Request.CMD.USER_RECONNECT, kpqznn.undefined, "undefined", "undefined");
    // public static SEND_USER_RECONNECT = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_USER_RECONNECT, kpqznn.undefined, "undefined", "undefined");
    // public static SEND_RECONNECT_QUIT = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_RECONNECT_QUIT, kpqznn.SendReconnectQuitResponse, "undefined", "SendReconnectQuitResponse");
    // public static SEND_MESSAGE = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_MESSAGE, kpqznn.SendMessageResponse, "undefined", "SendMessageResponse");
    // public static MESSAGE = new PacketDefine(kpqznn, kpqznn.Request.CMD.MESSAGE, kpqznn.undefined, "undefined", "undefined");
    // public static SEND_COIN_REFRESH = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_COIN_REFRESH, kpqznn.undefined, "undefined", "undefined");
    public static USER_QUIT = new PacketDefine(kpqznn, kpqznn.Request.CMD.USER_QUIT, kpqznn.UserQuitRequest, "userQuitRequest", "UserQuitRequest");
    public static USER_ONBACK = new PacketDefine(kpqznn, kpqznn.Request.CMD.USER_ONBACK, kpqznn.UserOnBackRequest, "userOnBackRequest", "UserOnBackRequest");
    // public static SEND_USER_ONBACK = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_USER_ONBACK, kpqznn.SendUserOnBackResponse, "undefined", "SendUserOnBackResponse");
    public static USER_READY = new PacketDefine(kpqznn, kpqznn.Request.CMD.USER_READY, kpqznn.UserReadyRequest, "userReadyRequest", "UserReadyRequest");
    // public static SEND_GAME_NOTICE = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_GAME_NOTICE, kpqznn.SendGameNoticeResponse, "undefined", "SendGameNoticeResponse");
    // public static FORCE_OFFLINE = new PacketDefine(kpqznn, kpqznn.Request.CMD.FORCE_OFFLINE, kpqznn.undefined, "undefined", "undefined");
    public static DELAYQUIT_OFFLINE_RESP = new PacketDefine(kpqznn, kpqznn.Request.CMD.DELAYQUIT_OFFLINE_RESP, kpqznn.KickedOutRequest, "kickedOutRequest", "KickedOutRequest");
    // public static KICKEDOUT = new PacketDefine(kpqznn, kpqznn.Request.CMD.KICKEDOUT, kpqznn.undefined, "undefined", "undefined");
    // public static SEND_HEART_BEAT = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_HEART_BEAT, kpqznn.SendHeartBeatResponse, "undefined", "SendHeartBeatResponse");
    // public static SEND_REMAIN_TIME = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_REMAIN_TIME, kpqznn.SendRemainTimeResponse, "undefined", "SendRemainTimeResponse");
    public static CHANGE_TABLE = new PacketDefine(kpqznn, kpqznn.Request.CMD.CHANGE_TABLE, kpqznn.ChangeTableRequest, "changeTableRequest", "ChangeTableRequest");
    // public static ROOMLIST = new PacketDefine(kpqznn, kpqznn.Request.CMD.ROOMLIST, kpqznn.undefined, "undefined", "undefined");
    // public static DELAY_CHECK = new PacketDefine(kpqznn, kpqznn.Request.CMD.DELAY_CHECK, kpqznn.DelayCheckResponse, "undefined", "DelayCheckResponse");
    // public static SEND_LEAVE_TABLE = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_LEAVE_TABLE, kpqznn.SendLeaveTableResponse, "undefined", "SendLeaveTableResponse");
    // public static SEND_COIN_TABLE_INFO = new PacketDefine(kpqznn, kpqznn.Request.CMD.SEND_COIN_TABLE_INFO, kpqznn.SendCoinTableInfoResponse, "undefined", "SendCoinTableInfoResponse");
}

export class kpqznn_request {
//    public static UNKNOWN(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.UNKNOWN.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static HALL_REFRESH_COIN(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.HALL_REFRESH_COIN.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static JOIN_TABLE(data:any, bIsPbObj:boolean) : void 
    {
        kpqznn_packet_define.JOIN_TABLE.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static SEND_USER_INFO(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_USER_INFO.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static SHOW_CARD(data:any, bIsPbObj:boolean) : void 
    {
        kpqznn_packet_define.SHOW_CARD.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
    public static BET(data:any, bIsPbObj:boolean) : void 
    {
        kpqznn_packet_define.BET.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static SEND_ROUND_RESULT(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_ROUND_RESULT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static QIANG_ZHUANG(data:any, bIsPbObj:boolean) : void 
    {
        kpqznn_packet_define.QIANG_ZHUANG.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static SEND_ZHUANG(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_ZHUANG.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_USER_CARD(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_USER_CARD.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_USER_BEST_CARD(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_USER_BEST_CARD.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static USER_RECONNECT(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.USER_RECONNECT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_USER_RECONNECT(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_USER_RECONNECT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_RECONNECT_QUIT(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_RECONNECT_QUIT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_MESSAGE(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_MESSAGE.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static MESSAGE(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.MESSAGE.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_COIN_REFRESH(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_COIN_REFRESH.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static USER_QUIT(data:any, bIsPbObj:boolean) : void 
    {
        kpqznn_packet_define.USER_QUIT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
    public static USER_ONBACK(data:any, bIsPbObj:boolean) : void 
    {
        kpqznn_packet_define.USER_ONBACK.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static SEND_USER_ONBACK(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_USER_ONBACK.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static USER_READY(data:any, bIsPbObj:boolean) : void 
    {
        kpqznn_packet_define.USER_READY.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static SEND_GAME_NOTICE(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_GAME_NOTICE.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static FORCE_OFFLINE(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.FORCE_OFFLINE.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static DELAYQUIT_OFFLINE_RESP(data:any, bIsPbObj:boolean) : void 
    {
        kpqznn_packet_define.DELAYQUIT_OFFLINE_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static KICKEDOUT(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.KICKEDOUT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_HEART_BEAT(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_HEART_BEAT.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_REMAIN_TIME(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_REMAIN_TIME.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static CHANGE_TABLE(data:any, bIsPbObj:boolean) : void 
    {
        kpqznn_packet_define.CHANGE_TABLE.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static ROOMLIST(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.ROOMLIST.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static DELAY_CHECK(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.DELAY_CHECK.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_LEAVE_TABLE(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_LEAVE_TABLE.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static SEND_COIN_TABLE_INFO(data:any, bIsPbObj:boolean) : void 
//    {
//        kpqznn_packet_define.SEND_COIN_TABLE_INFO.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
}
