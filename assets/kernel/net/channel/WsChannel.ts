//---------------------------------------
// WebSocket封装
//---------------------------------------
import IChannel from "./IChannel";
import IProcessor from "../processor/IProcessor";
import { ConnState } from "../../looker/KernelDefine";
import EventCenter from "../../event/EventCenter";
import KernelEvent from "../../looker/KernelEvent";
import TimerManager from "../../timer/TimerManager";
import CHandler from "../../basic/CHandler";

var MAX_RECONNECT = 3;

var WebSocket = WebSocket || window["WebSocket"] || window["MozWebSocket"]; 


export default class WsChannel implements IChannel {
	private _curState:ConnState = ConnState.unconnect;
	private _ws:any = null;
	private _url:string = "";
	private _dataProcessor:IProcessor = null;
	private _onConnSuccess:Function;
	private _onConnFail:Function;
	private _reconnectTimes:number = MAX_RECONNECT;
	private _name : string;
	private _heartTmr: any;

	private notifyState() : void
	{
		EventCenter.instance().fire(KernelEvent.NET_STATE, this);
	}

	private _on_opened(event) {
		cc.log(this._name, "ws: onopen", this._url);
		if(this._curState == ConnState.connecting) {
			this._curState = ConnState.connectsucc;
			cc.log(this._name, "连接成功", this._url);
		}
		else {
			this._curState = ConnState.reconnectsucc;
			cc.log(this._name, "重连成功", this._url);
		}

		this._reconnectTimes = MAX_RECONNECT;

		if(this._onConnSuccess) {
			this._onConnSuccess();
			this._onConnSuccess = null;
		}
		this._onConnFail = null;

		this._dataProcessor.flushRecvlist();
		this._dataProcessor.flushSendlist();

		this.notifyState();

		this.startHeartBeat();
	}

	private _on_recv_data(event) {
		// cc.log("ws: onmessage", event.data);
		this._dataProcessor.onrecvBuff(event.data);
	}

	private _on_close(event) {
		cc.log(this._name, "ws: onclose", this._url);
		this.stopHeartBeat();
		this.ws_closed();
	}

	private _on_error(event) {
		cc.log(this._name, "ws: onerror", this._url);
		this.stopHeartBeat();
		// this.ws_closed();
	}
	
	private initWs(url:string, cacertPath:string) : void
	{
		this._ws = new WebSocket(url, [], cacertPath);
		this._ws.binaryType = "arraybuffer";
		this._ws.onopen = this._on_opened.bind(this);
		this._ws.onmessage = this._on_recv_data.bind(this);
		this._ws.onclose = this._on_close.bind(this);
		this._ws.onerror = this._on_error.bind(this);
	}

	public destroy(): void 
	{
		this.close();
		this._dataProcessor.clear();
		this._dataProcessor = null;
	}

	public setProcessor(porcessor: IProcessor): void 
	{
		this._dataProcessor = porcessor;
		this._dataProcessor.setChannel(this);
	}

	public registProtocol(protocol:any) : void
	{
		this._dataProcessor.registProtocol(protocol);
	}
	
	public connect(url:string, port:number, on_success:Function = null, on_fail:Function = null) : void
	{
		if(this._url === url && this._ws !== null) {
			if(this._curState==ConnState.connecting){
				cc.log(this._name, "connecting: ", url);
				return;
			}
			else if(this._curState==ConnState.connectsucc){
				cc.log(this._name, "connected: ", url);
				return;
			}
			else if(this._curState==ConnState.reconnecting){
				cc.log(this._name, "reconnecting: ", url);
				return;
			}
			else if(this._curState==ConnState.reconnectsucc){
				cc.log(this._name, "reconnected: ", url);
				return;
			}
		}
		
		this.close();
		
		this._curState = ConnState.connecting;
		this._dataProcessor.clearSendlist();
		this._dataProcessor.clearRecvlist();
		this._dataProcessor.setPaused(false);
		this._onConnSuccess = on_success;
		this._onConnFail = on_fail;
		this._url = url;
		this._reconnectTimes = MAX_RECONNECT;
		cc.log(this._name, "连接WebSocket: ", url);

		this.do_connect();
	}

	public reconnect() : void
	{
		this._reconnectTimes = MAX_RECONNECT;
		if(this._curState != ConnState.reconnectfail) {
			cc.log(this._name, "当前状态无法重连：", this._curState);
			return;
		}
		this._curState = ConnState.reconnecting;
		cc.log(this._name, "断线重连: ", this._reconnectTimes, this._url);
		this.do_connect();
	}

	public force_reconnect() : void
	{
		this._reconnectTimes = MAX_RECONNECT;
		if(this._curState == ConnState.connectsucc || this._curState == ConnState.reconnectsucc || this._curState == ConnState.reconnectfail) {
			this.stopHeartBeat();
			this.clear_ws();
			cc.log(this._name, "强制重连", this._curState, this._url);
			this._curState = ConnState.reconnecting;
			this.do_connect();
		}
	}

	private do_connect() : void
	{
		var self = this;
		//注：native模式连接wss时需要cacert认证
		if(cc.sys.isNative){
			cc.loader.loadRes("launcher/cacert", function(errorMessage, loadedResource){
				if( errorMessage ) { 
					cc.log( self._name, '载入cacert.pem失败: ' + errorMessage ); 
				}
				self.initWs(self._url, ""+loadedResource);
			});
		}
		else {
			self.initWs(self._url, "");
		}
	}

	private clear_ws() : void
	{
		if(this._ws) {
			var ws = this._ws;
			this._ws = null;
			ws.onopen = null;
			ws.onmessage = null;
			ws.onclose = null;
			ws.onerror = null;
			ws.close();
		}
	}

	//被动关闭WebSocket
	private ws_closed() : void
	{
		this.stopHeartBeat();

		cc.log(this._name, "断网了or连接失败了");
		this.clear_ws();
		
		//自动重连
		if(this._reconnectTimes > 0) {
			this._reconnectTimes--;

			if(this._curState == ConnState.connecting) {
				this._curState = ConnState.connecting;
				cc.log(this._name, "再次尝试建立连接: ", this._reconnectTimes, this._url);
				this.do_connect();
			}
			else {
				this._curState = ConnState.reconnecting;
				cc.log(this._name, "断线重连: ", this._reconnectTimes, this._url);
				this.do_connect();
			}
		}
		//超过了重连次数就主动关闭网络
		else {
			this._onConnSuccess = null;
			if(this._onConnFail) {
				this._onConnFail();
				this._onConnFail = null;
			}

			if(this._curState == ConnState.connecting) {
				this._curState = ConnState.connectfail;
				cc.log(this._name, "连接失败: ", this._reconnectTimes, this._url);
			}
			else {
				this._curState = ConnState.reconnectfail;
				cc.log(this._name, "重连失败: ", this._reconnectTimes, this._url);
			}

			cc.log(this._name, "网络断开", this._url);
			this.notifyState();
		}
	}
	
	//主动关闭WebSocket
	public close() : void
	{
		cc.log(this._name, "主动关闭WebSocket");
		this.stopHeartBeat();
		this._reconnectTimes = 0;
		this._onConnSuccess = null;
		this._onConnFail = null;
		this._dataProcessor.clearSendlist();
		this._dataProcessor.clearRecvlist();
		this.clear_ws();
		this._curState = ConnState.unconnect;
	}
	
	public sendMessage(cmd:string|number, info:any) : boolean
	{
		return this._dataProcessor.sendMessage(cmd, info);
	}

	public sendBuff(buff:any) : boolean
	{
		if(!buff) {
			cc.log("数据为空");
			return false;
		}
		if(this._curState !== ConnState.connectsucc && this._curState !== ConnState.reconnectsucc) {
			cc.log(this._name, "尚未建立连接");
			return false;
		}
		if(!this._ws) {
			cc.log("尚未创建ws对象");
			return false;
		}

		this._ws.send(buff);
		
		return true;
	}



	private startHeartBeat() : void
	{
		this._heartTmr = TimerManager.addSecondTimer(8, -1, new CHandler(this.sendHeartBeat, this));
	}

	private sendHeartBeat() : void
	{
		cc.log(this._name, "---------- send heart beat");
		this._dataProcessor.sendHeartBeat();
	}

	private stopHeartBeat() : void
	{
		TimerManager.delTimer(this._heartTmr);
	}



	public setPaused(bPause:boolean) : void
	{
		if(this._dataProcessor) {
			this._dataProcessor.setPaused(bPause);
		}
	}

	public getProcessor() : IProcessor
	{
		return this._dataProcessor;
	}

	public getState() : ConnState 
	{
		return this._curState;
	}

	public setName(name:string) : void 
	{
		this._name = name;
	}

	public getName() : string 
	{
		return this._name;
	}

}
