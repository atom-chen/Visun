//--------------------------------------
// Json消息处理器
//--------------------------------------
import JsonCodec from "../../codec/JsonCodec";
import { ConnState } from "../Define";
import BaseProcessor from "./BaseProcessor";

export default class JsonProcessor extends BaseProcessor {
    private _coder:JsonCodec = new JsonCodec;

    public sendMessage(cmd: number|string, info: any): boolean 
    {
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

        if(this._channel.getState() === ConnState.connecting){
            this._send_list.push(buff);
            return;
        }
        
        this._channel.sendBuff(buff);
        return true;
    }

    public onrecvBuff(buff: any): void 
    {
        //二进制流 转 obj
        var info = this._coder.decode(buff);
        cc.log("[recv]", info);

        var cmd = info.cmd;
        var data = info.data;

        if(data) {
            data = this._coder.decode(data);
        }

        this.response(cmd, data);
    }

}
