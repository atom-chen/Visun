//---------------------------------
// websocket封装
//---------------------------------
import DataProcessor from "../codec/DataProcessor";

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
	

	private initWs(url:string, cacertPath:string)
	{
		var self = this;
		var ws = new WebSocket(url, [], cacertPath);
		ws.binaryType = "arraybuffer";
		ws.onopen = function () {
			cc.log("ws: onopen");
			self._curState = ConnState.connected;
		}
		ws.onmessage = function (event) {
			cc.log("ws: onmessage");
			var info = self._dataProcessor.decode(event.data);
			cc.log(info);
		}
		ws.onclose = function () {
			cc.log("ws: onclose");
			self._curState = ConnState.unconnect;
			self.close();
		}
		ws.onerror = function (err) {
			self._curState = ConnState.unconnect;
			cc.log("ws: onerror");
			self.close();
		}
		self._ws = ws;
	}

	public connect(url:string, processor:DataProcessor) 
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
				self.initWs(url, ""+loadedResource);
			});
		}
		else {
			self.initWs(url, "");
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
		var msg = this._dataProcessor.encode(data);
		return this._ws.send(msg);
	}

}
