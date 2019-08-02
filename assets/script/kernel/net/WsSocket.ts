//---------------------------------
// websocket封装
//
// WsSocket.instance().connect("wss://echo.websocket.org", new ProtobufCodec());
// WsSocket.instance().connect("ws://s1vce.lg98.tech:9920/websocket", new JsonCodec());
//---------------------------------
import DataProcessor from "../codec/DataProcessor";
import UIManager from "../gui/UIManager";
import WsHandler from "./WsHandler";

enum ConnState {
	unconnect = 0,
	connecting,
	connected
}

//var WebSocket = WebSocket || window.WebSocket || window.MozWebSocket;
var WebSocket = WebSocket || window["WebSocket"] || window["MozWebSocket"]; 

const {ccclass, property} = cc._decorator;

@ccclass
export default class WsSocket {
	private static _singleton:WsSocket = null;

	private _curState:ConnState = ConnState.unconnect;
	private _ws:any;
	private _url:string = "";
	private _dataProcessor:DataProcessor = null;

	private constructor() {
		this._curState = ConnState.unconnect;
	}
	public static instance() : WsSocket
	{
		if(!WsSocket._singleton) {
			WsSocket._singleton = new WsSocket();
		}
		return this._singleton;
	}


	private initWs(url:string, cacertPath:string, on_success:Function = null, on_fail:Function = null)
	{
		var self = this;
		var ws = new WebSocket(url, [], cacertPath);
		ws.binaryType = "arraybuffer";
		ws.onopen = function () {
			cc.log("ws: onopen", url);
			self._curState = ConnState.connected;
			if(on_success) { on_success(); }
		}
		ws.onmessage = function (event) {
			//cc.log("ws: onmessage");
			var info = self._dataProcessor.decode(event.data);
			var cmdId = info.cmd;
			var data = info.data;
			if(info.data) {
				data = self._dataProcessor.decode(info.data);
			}
			
			if(10000!==cmdId && 30400!=cmdId){
				cc.log(cmdId, data);
			}
			if(data.code === 200) {
				WsHandler.respond(cmdId, data);
			}
			else {
				UIManager.toast(data.msg);
			}
		}
		ws.onclose = function () {
			cc.log("ws: onclose", url);
			if(this._ws){
				var ws = this._ws;
				this._ws = null;
				ws.close();
			}
			this._curState = ConnState.unconnect;
			if(on_fail) { on_fail(); }
		}
		ws.onerror = function (err) {
			cc.log("ws: onerror", url);
			if(this._ws){
				var ws = this._ws;
				this._ws = null;
				ws.close();
			}
			this._curState = ConnState.unconnect;
			if(on_fail) { on_fail(); }
		}
		self._ws = ws;
	}

	public connect(url:string, processor:DataProcessor, on_success:Function = null, on_fail:Function = null) 
	{
		if(this._url === url && this._ws !== null){
			cc.log("the same url");
			return;
		}
		if(this._curState!==ConnState.unconnect){
			cc.log("连接中，请先关闭现有连接");
			return;
		}
		this.close();
		this._curState = ConnState.connecting;
		this._url = url;
		this._dataProcessor = processor;
		cc.log("连接WebSocket: ", url);
		var self = this;

		//注：native模式连接wss时需要cacert认证
		if(cc.sys.isNative){
			cc.loader.loadRes("launcher/cacert", function(errorMessage, loadedResource){
				if( errorMessage ) { 
					cc.log( '载入cacert.pem失败, 原因:' + errorMessage ); 
					return; 
				}
				self.initWs(url, ""+loadedResource, on_success, on_fail);
			});
		}
		else {
			self.initWs(url, "", on_success, on_fail);
		}
	}

	public close() 
	{
		if(this._ws){
			cc.log("关闭WebSocket");
			var ws = this._ws;
			this._ws = null;
			ws.close();
			this._curState = ConnState.unconnect;
		}
	}

	public sendMsg(cmdId:number, data:any) : boolean
	{
		if(data===undefined || data===null){
			data = {};
		}

		var info = {
			cmd : cmdId,
			data : data
		}

		var msg = this._dataProcessor.encode(info);
		return this.sendData(msg);
	}

	public sendData(data:any) : boolean
	{
		if(this._curState !== ConnState.connected) {
			cc.log("尚未建立连接");
			return false;
		}
		if(!this._ws) {
			cc.log("no ws object");
			return false;
		}

		this._ws.send(data);
		cc.log("【发送】", data);
		return true;
	}

}
