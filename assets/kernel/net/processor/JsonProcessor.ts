//--------------------------------------
// Json消息处理器
//--------------------------------------
import JsonCodec from "../../codec/JsonCodec";
import BaseProcessor from "./BaseProcessor";
import { ConnState } from "../../looker/KernelDefine";

export default class JsonProcessor extends BaseProcessor {
    private _coder:JsonCodec = new JsonCodec;

    public sendMessage(cmd: number|string, info: any): boolean 
    {
        if(!this.isValidCmd(cmd)) { return; }

        if(info===undefined || info===null){
			info = {};
		}

        var req = {
            cmd : cmd,
            data : info
        };
        
        var buff = this._coder.encode(req);

        if (this._channel.getState() != ConnState.connectsucc && this._channel.getState() != ConnState.reconnectsucc || this._paused) {
			cc.log(this._channel.getName(), "消息推入队列：", this._channel.getState(), this._paused);
            this._send_list.push(buff);
            return;
        }
        
        //for debug
		cc.log(this._channel.getName(), "[send]", info);
        
        this._channel.sendBuff(buff);
        return true;
    }

    public onrecvBuff(buff: any): void 
    {
        //二进制流 转 obj
        var info = this._coder.decode(buff);

        cc.log(this._channel.getName(), "[recv]", info);

        var cmd = info.cmd;
        var data = info.data;

        if(data) {
            data = this._coder.decode(data);
        }

        if(this._paused){
			this._fire_list.push({cmd:cmd,data:data});
			cc.log("push fire", this._fire_list.length);
		}
		else{
			this.response(cmd, data);
		}
    }

}
