//--------------------------------------
// Protobuf消息处理器
//--------------------------------------
import IProcessor from "./IProcessor";
import IChannel from "../channel/IChannel";
import SingleDispatcher from "../../event/SingleDispatcher";
import ProtobufCodec from "../../codec/ProtobufCodec";
import { ConnState } from "../Define";

export default class ProtobufProcessor extends SingleDispatcher implements IProcessor {
    private _working:boolean = true;
    private _channel:IChannel = null;
    private _coder:ProtobufCodec = new ProtobufCodec;
    private _pb_package:any;
    public name_2_cmd:object = {};
    public cmd_2_name:object = {};
    public _send_list = [];

    public registProtocol(protocol:any) : void
    {
        this._pb_package = protocol;

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

    public setChannel(cluster:IChannel)
    {
        this._channel = cluster;
    }

    public clear() : void
    {
        this.removeAllResponder();
        this._working = false;
        this._channel = null;
        this.name_2_cmd = null;
        this.cmd_2_name = null;
        this._pb_package = null;
    }

    // this._pb_package.my_packer.pack_obj(cmd, info)做了下面这些事情:
    // var req = this._pb_package.Request.create();
    // req.cmd = this._pb_package.Request.CMD.DELAY_CHECK;
    // req.delayCheckRequest = this._pb_package.DelayCheckRequest.create(info);
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
        
        var buff = this._pb_package.Request.encode(info).finish();

        // var obj = this._pb_package.Request.decode(buff);
		// var info = this._pb_package.Request.toObject(obj);
        // cc.log("[send]", info);
        if(this._channel.getState() === ConnState.connecting){
            this._send_list.push(buff);
            return;
        }

        this._channel.sendBuff(buff);
        return true;
    }

    public flush() 
    {
        if(this._send_list.length <= 0) { return; }
        for(var i=1; i<this._send_list.length; i++){
            this._channel.sendBuff(this._send_list[i]);
        }
        this._send_list.length = 0;
        this._send_list = [];
    }

    public onrecvBuff(buff:any) : void
    {
        if(!this._working) {
            cc.log("已经停止");
            return;
        }
        
        //二进制流 转 obj
        var bytes = new Uint8Array(buff);
		var obj = this._pb_package.Response.decode(bytes);
		var info = this._pb_package.Response.toObject(obj);
        cc.log("[recv]", info);

        var cmd = info.cmd;
        var data = info.data;

        this.response(cmd, data);
    }
}
