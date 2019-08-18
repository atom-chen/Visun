//--------------------------------------
// 网络通道管理器
//--------------------------------------
import IChannel from "./IChannel";
import WsChannel from "./WsChannel";
import TcpChannel from "./TcpChannel";
import HttpChannel from "./HttpChannel";

export default class ChannelMgr {
    private static _instance:ChannelMgr = null;
    private _channels:{[key: string]: IChannel;} = {};

    public static instance() : ChannelMgr
    {
        if(!ChannelMgr._instance){ ChannelMgr._instance = new ChannelMgr; }
        return ChannelMgr._instance;
    }

    public del(key:string) : void
    {
        if(this._channels[key]) {
            this._channels[key].destroy();
            this._channels[key] = null;
        }
    }

    public createWsChannel(key:string) : IChannel
    {
        if(!this._channels[key]) {
            this._channels[key] = new WsChannel;
        }
        return this._channels[key];
    }

    public createTcpChannel(key:string) : IChannel
    {
        if(!this._channels[key]) {
            this._channels[key] = new TcpChannel;
        }
        return this._channels[key];
    }

    public createHttpChannel(key:string) : IChannel
    {
        if(!this._channels[key]) {
            this._channels[key] = new HttpChannel;
        }
        return this._channels[key];
    }
}
