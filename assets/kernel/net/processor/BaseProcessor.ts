//--------------------------------------
//消息处理器基类
//--------------------------------------
import IProcessor from "./IProcessor";
import IChannel from "../channel/IChannel";
import SingleDispatcher from "../../basic/event/SingleDispatcher";
import { ConnState } from "../../basic/defines/KernelDefine";
import PacketInterface from "../packet/PacketInterface";
import KernelEvent from "../../basic/defines/KernelEvent";
import EventCenter from "../../basic/event/EventCenter";

export default class BaseProcessor implements IProcessor {
	protected _name: string = "";
	protected _dispatcher = new SingleDispatcher;	//消息派发器
	protected _paused:boolean = false;
	protected _channel:IChannel = null;
	protected _send_list = [];
	protected _fire_list = [];
	protected _cmds: Array<PacketInterface> = [];
	protected _heatBeatFunc: Function = null;
	protected _keepConnOnBackground: boolean = false;
	
	public constructor(name:string) {
		this._name = name;
		EventCenter.getInstance().listen(KernelEvent.EnterBackground, this.onEnterBackground, this);
		EventCenter.getInstance().listen(KernelEvent.EnterForground, this.onEnterForground, this);
		EventCenter.getInstance().listen(KernelEvent.keyboard, this.testReconnect, this);
	}

	private testReconnect(v) {
		cc.log("测试断线重连");
		this._channel.force_reconnect();
	}

	private onEnterBackground() {
		this.setPaused(true);
	}

	private onEnterForground(passedTime:number) {
		this.setPaused(false);

		if(passedTime >= 2000 && !this._keepConnOnBackground) {
			this._channel.force_reconnect();
		} else {
			var netState = this._channel.getState();
			if(netState===ConnState.connectfail || netState === ConnState.reconnectfail) {
				this._channel.notifyState();
			}
		}
	}

	setKeepConnOnBackground(bKeep:boolean) : void {
		this._keepConnOnBackground = bKeep;
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

	public lenSendList() : number {
		return this._send_list.length;
	}

	public lenRecvList() : number {
		return this._fire_list.length;
	}

	setPaused(bPause:boolean) : void
	{
		this._paused = bPause;
		this.flushRecvlist();
		this.flushSendlist();
	}

	public isNetHolded() : boolean
	{
		var curState = this._channel.getState();
		return curState == ConnState.connecting || curState == ConnState.reconnecting || this._paused;
	}

	public flushRecvlist() : void
	{
		if(this._paused) { return; }
		if(this._fire_list.length <= 0) { return; }

		cc.log(this._name, "flush firelist", this._fire_list.length);
		var cur = this._fire_list[0];
		this._fire_list.splice(0, 1);
		if(cur) {
			this._dispatcher.fire(cur.cmd, cur.data);
		}
		this.flushRecvlist();
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
		if(this._heatBeatFunc) {
			this._heatBeatFunc();
		}
	}
}
