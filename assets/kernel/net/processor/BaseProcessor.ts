//--------------------------------------
// Protobuf消息处理器
//--------------------------------------
import IProcessor from "./IProcessor";
import IChannel from "../channel/IChannel";
import SingleDispatcher from "../../basic/event/SingleDispatcher";
import { ConnState } from "../../basic/defines/KernelDefine";
import PacketInterface from "../packet/PacketInterface";

export default class BaseProcessor implements IProcessor {
	protected _name: string = "";
	protected _dispatcher = new SingleDispatcher;
	protected _paused:boolean = false;
	protected _channel:IChannel = null;
	protected _send_list = [];
	protected _fire_list = [];
	protected _cmds: Array<PacketInterface> = [];
	protected _heatBeatFunc: Function = null;
	
	public constructor(name:string) {
		this._name = name;
	}

	public getDispatcher() : SingleDispatcher
	{
		return this._dispatcher;
	}

	public registCmds(cmds:any) : void
	{
		if(cmds===null || cmds===undefined) { return; }
		cc.log(this._name, "---regist cmds---", Object.keys(cmds).length);
		for(var k in cmds) {
			this._cmds[k] = cmds[k];
		}
	}

	public unregistCmds(cmds:any) : void
	{
		if(cmds===null || cmds===undefined) { return; }
		cc.log(this._name, "---unregist cmds---", Object.keys(cmds).length);
		for(var k in cmds) {
			this._cmds[k] = null;
		}
	}

	public unregistAllCmds() : void
	{
		cc.log(this._name, "---unregist all cmds---");
		this._cmds = [];
	}

	public setChannel(cluster:IChannel) : void
	{
		this._channel = cluster;
	}

	public clear() : void
	{
		this.clearSendlist();
		this.clearRecvlist();
		this._dispatcher.removeAllResponder();
		this._channel = null;
	}

	public clearSendlist() : void
	{
		this._send_list.length = 0;
		this._send_list = [];
	}

	public clearRecvlist() : void
	{
		this._fire_list.length = 0;
		this._fire_list = [];
	}

	setPaused(bPause:boolean) : void
	{
		this._paused = bPause;
		this.flushRecvlist();
		this.flushSendlist();
	}

	public isNetHolded() : boolean
	{
		return this._channel.getState() != ConnState.connectsucc && this._channel.getState() != ConnState.reconnectsucc || this._paused;
	}

	public flushRecvlist() : void
	{
		if(this._paused) { return; }
		if(this._fire_list.length <= 0) { return; }

		cc.log(this._name, "flush firelist", this._fire_list.length);
		for(var i=0, len=this._fire_list.length; i<len; i++){
			this._dispatcher.fire(this._fire_list[i].cmd, this._fire_list[i].data);
		}
		this._fire_list.length = 0;
		this._fire_list = [];
	}

	public flushSendlist() : void
	{
		if(this._paused) { return; }
		if(this._send_list.length <= 0) { return; }

		cc.log(this._name, "flush sendlist: ", this._send_list.length);
		for(var i=0; i<this._send_list.length; i++){
			this._channel.sendBuff(this._send_list[i]);
		}
		this._send_list.length = 0;
		this._send_list = [];
	}

	public sendMessage(cmd:number|string, info:any) : boolean
	{
		cc.log("子类须重载该方法");
		return false;
	}

	public onrecvBuff(buff:any) : void
	{	
		cc.log("子类须重载该方法");
	}

	public setHeartbeatFunc(func:Function) {
		this._heatBeatFunc = func;
	}

	public sendHeartBeat() : void
	{
		if(this._heatBeatFunc)
			this._heatBeatFunc();
	}
}
