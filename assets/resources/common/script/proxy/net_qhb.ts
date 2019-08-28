//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { qhb } from "../proto/qhb";
import PacketDefine from "../../../../kernel/net/PacketDefine";
import ChannelDefine from "../definer/ChannelDefine";


export class qhb_packet_define {
    // public static UNKNOWN = new PacketDefine(qhb, qhb.Request.CMD.UNKNOWN, qhb.undefined, "undefined", "undefined");
    public static APPLY_REQ = new PacketDefine(qhb, qhb.Request.CMD.APPLY_REQ, qhb.c2s_apply, "apply", "c2s_apply");
    // public static APPLY_RESP = new PacketDefine(qhb, qhb.Request.CMD.APPLY_RESP, qhb.s2c_apply, "undefined", "s2c_apply");
    public static DISAPPLY_REQ = new PacketDefine(qhb, qhb.Request.CMD.DISAPPLY_REQ, qhb.c2s_disApply, "disApply", "c2s_disApply");
    // public static DISAPPLY_RESP = new PacketDefine(qhb, qhb.Request.CMD.DISAPPLY_RESP, qhb.s2c_disApply, "undefined", "s2c_disApply");
    public static JOIN_COIN_TABLE_REQ = new PacketDefine(qhb, qhb.Request.CMD.JOIN_COIN_TABLE_REQ, qhb.c2s_joinTable, "joinTable", "c2s_joinTable");
    // public static JOIN_COIN_TABLE_RESP = new PacketDefine(qhb, qhb.Request.CMD.JOIN_COIN_TABLE_RESP, qhb.s2c_joinTable, "undefined", "s2c_joinTable");
    public static GET_USERLIST_REQ = new PacketDefine(qhb, qhb.Request.CMD.GET_USERLIST_REQ, qhb.c2s_getUserList, "getUserList", "c2s_getUserList");
    // public static GET_USERLIST_RESP = new PacketDefine(qhb, qhb.Request.CMD.GET_USERLIST_RESP, qhb.s2c_getUserList, "undefined", "s2c_getUserList");
    public static QIANG_REQ = new PacketDefine(qhb, qhb.Request.CMD.QIANG_REQ, qhb.c2s_qiang, "qiang", "c2s_qiang");
    // public static QIANG_RESP = new PacketDefine(qhb, qhb.Request.CMD.QIANG_RESP, qhb.s2c_qiang, "undefined", "s2c_qiang");
    // public static PUSHBET_RESP = new PacketDefine(qhb, qhb.Request.CMD.PUSHBET_RESP, qhb.s2c_qiangPush, "undefined", "s2c_qiangPush");
    public static PUSH_USER_RECONNECT_REQ = new PacketDefine(qhb, qhb.Request.CMD.PUSH_USER_RECONNECT_REQ, qhb.c2s_reconnect, "reconnect", "c2s_reconnect");
    // public static PUSH_USER_RECONNECT_RESP = new PacketDefine(qhb, qhb.Request.CMD.PUSH_USER_RECONNECT_RESP, qhb.undefined, "undefined", "undefined");
    public static USER_ONBACK_REQ = new PacketDefine(qhb, qhb.Request.CMD.USER_ONBACK_REQ, qhb.c2s_userOnBack, "userOnBack", "c2s_userOnBack");
    // public static USER_ONBACK_RESP = new PacketDefine(qhb, qhb.Request.CMD.USER_ONBACK_RESP, qhb.s2c_userOnBack, "undefined", "s2c_userOnBack");
    public static USER_QUIT_REQ = new PacketDefine(qhb, qhb.Request.CMD.USER_QUIT_REQ, qhb.c2s_userQuit, "userQuit", "c2s_userQuit");
    // public static USER_QUIT_RESP = new PacketDefine(qhb, qhb.Request.CMD.USER_QUIT_RESP, qhb.s2c_userQuit, "undefined", "s2c_userQuit");
}

export class qhb_request {
//    public static UNKNOWN(data:any, bIsPbObj:boolean) : void 
//    {
//        qhb_packet_define.UNKNOWN.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static APPLY_REQ(data:any, bIsPbObj:boolean) : void 
    {
        qhb_packet_define.APPLY_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static APPLY_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        qhb_packet_define.APPLY_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static DISAPPLY_REQ(data:any, bIsPbObj:boolean) : void 
    {
        qhb_packet_define.DISAPPLY_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static DISAPPLY_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        qhb_packet_define.DISAPPLY_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static JOIN_COIN_TABLE_REQ(data:any, bIsPbObj:boolean) : void 
    {
        qhb_packet_define.JOIN_COIN_TABLE_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static JOIN_COIN_TABLE_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        qhb_packet_define.JOIN_COIN_TABLE_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static GET_USERLIST_REQ(data:any, bIsPbObj:boolean) : void 
    {
        qhb_packet_define.GET_USERLIST_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static GET_USERLIST_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        qhb_packet_define.GET_USERLIST_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static QIANG_REQ(data:any, bIsPbObj:boolean) : void 
    {
        qhb_packet_define.QIANG_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static QIANG_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        qhb_packet_define.QIANG_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
//    public static PUSHBET_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        qhb_packet_define.PUSHBET_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static PUSH_USER_RECONNECT_REQ(data:any, bIsPbObj:boolean) : void 
    {
        qhb_packet_define.PUSH_USER_RECONNECT_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static PUSH_USER_RECONNECT_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        qhb_packet_define.PUSH_USER_RECONNECT_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static USER_ONBACK_REQ(data:any, bIsPbObj:boolean) : void 
    {
        qhb_packet_define.USER_ONBACK_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static USER_ONBACK_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        qhb_packet_define.USER_ONBACK_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
    public static USER_QUIT_REQ(data:any, bIsPbObj:boolean) : void 
    {
        qhb_packet_define.USER_QUIT_REQ.sendToChannel(ChannelDefine.game, data, bIsPbObj);
    }
//    public static USER_QUIT_RESP(data:any, bIsPbObj:boolean) : void 
//    {
//        qhb_packet_define.USER_QUIT_RESP.sendToChannel(ChannelDefine.game, data, bIsPbObj);
//    }
}
