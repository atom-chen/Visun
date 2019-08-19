//--------------------------------------
// Protobuf消息处理器
//--------------------------------------
import IProcessor from "./IProcessor";
import IChannel from "../channel/IChannel";
import EventCenter from "../../event/EventCenter";

export default class ProtobufProcessor implements IProcessor {
    private _working:boolean = true;
    private _channel:IChannel = null;
    private _pbPackage:any;
    private _responder:any;
    public name_2_cmd:object = {};
    public cmd_2_name:object = {};

    public constructor(pbPackage:any, responder:object) {
        this.setResponder(responder);
        this.registProtocol(pbPackage);
    }

    public registProtocol(protocol:any) : void
    {
        this._pbPackage = protocol;

        this.name_2_cmd = {};
        this.cmd_2_name = {};

        var info = protocol.Request.CMD;
        for(var key in info) {
            if(isNaN(key as any)) {
                var value = info[key];
                cc.log(key, value);
                this.name_2_cmd[key] = value;
                this.cmd_2_name[value] = key;
            }
        }
    }

    public setResponder(responder:any) : void
    {
        this._responder = responder;
    }

    public setChannel(cluster:IChannel)
    {
        this._channel = cluster;
    }

    public clear() : void
    {
        this._working = false;
        this._channel = null;
        this._responder = null;
        this.name_2_cmd = null;
        this.cmd_2_name = null;
        this._pbPackage = null;
    }

    public sendMessage(cmd:number|string, info:any) : boolean
    {
        if(!this._working) {
            cc.log("已经停止");
            return;
        }
        if(!this.cmd_2_name[cmd]) {
            cc.error("未定义该协议", cmd);
            return;
        }
        
        var param11 = {
            cmd : 20010,
            msg : "ssdddddf",
        }
        var req = this._pbPackage.Request.create();
        req.cmd = this._pbPackage.Request.CMD.DELAY_CHECK;
        req.delayCheckRequest = this._pbPackage.DelayCheckRequest.create(param11);
        var buff = this._pbPackage.Request.encode(req).finish();

        var obj = this._pbPackage.Request.decode(buff);
		var info = this._pbPackage.Request.toObject(obj);
        cc.log("---- send: ", info);
        
        this._channel.sendBuff(buff);
        return true;
    }

    public onrecvBuff(buff:any) : void
    {
        if(!this._working) {
            cc.log("已经停止");
            return;
        }
        
        //二进制流 转 obj
		var obj = this._pbPackage.Response.decode(buff);
		var info = this._pbPackage.Response.toObject(obj);
        cc.log(info);

        var cmd = info.cmd;
        var data = info.data;

        if(this._responder) {
            this._responder[cmd](data);
        }

        EventCenter.instance().fire(cmd, data);
    }
}
