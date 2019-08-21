//--------------------------------------
// Json消息处理器
//--------------------------------------
import IProcessor from "./IProcessor";
import JsonCodec from "../../codec/JsonCodec";
import IChannel from "../channel/IChannel";
import SingleDispatcher from "../../event/SingleDispatcher";

export default class JsonProcessor extends SingleDispatcher implements IProcessor {
    private _working:boolean = true;
    private _channel:IChannel = null;
    private _coder:JsonCodec = new JsonCodec;
    private _pb_package:any;
    public name_2_cmd:object = {};
    public cmd_2_name:object = {};

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

    public setChannel(cluster:IChannel) : void
    {
        this._channel = cluster;
    }

    public clear(): void 
    {
        this.removeAllResponder();
        this._working = false;
        this._channel = null;
        this.name_2_cmd = null;
        this.cmd_2_name = null;
        this._pb_package = null;
    }

    public sendMessage(cmd: number|string, info: any): boolean 
    {
        if(!this._working) {
            cc.log("已经停止");
            return;
        }
        if(!this.cmd_2_name[cmd]) {
            cc.error("未定义该协议", cmd);
            return;
        }
        if(info===undefined || info===null){
			info = {};
		}

        var req = {
            cmd : cmd,
            data : info
        };
        
        var buff = this._coder.encode(req);
        this._channel.sendBuff(buff);
        return true;
    }

    public sendPacket(cmd: number|string, packet: any): boolean 
    {
        return this.sendMessage(cmd, packet);
    }

    public onrecvBuff(buff: any): void 
    {
        if(!this._working) {
            cc.log("已经停止");
            return;
        }
        //二进制流 转 obj
        var info = this._coder.decode(buff);
        cc.log(info);

        var cmd = info.cmd;
        var data = info.data;

        if(data) {
            data = this._coder.decode(data);
        }

        this.response(cmd, data);
    }

}
