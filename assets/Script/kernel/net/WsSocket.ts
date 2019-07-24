import { DataProcessor } from "../codec/DataProcessor";
import JsonCodec from "../codec/JsonCodec";
import ProtobufCodec from "../codec/ProtobufCodec";

//var WebSocket = WebSocket || window.WebSocket || window.MozWebSocket;
var WebSocket = WebSocket || window["WebSocket"] || window["MozWebSocket"]; 

const {ccclass, property} = cc._decorator;

@ccclass
export default class WsSocket extends cc.Component {

	private _connected:boolean = false;
	private _ws:any;
	private _url:string;
	private _dataProcessor:DataProcessor = new ProtobufCodec();

	public setDataProcessor(processor:DataProcessor)
	{
		this._dataProcessor = processor;
	}

	private initWs(url:string, cacertPath:string)
	{
		var self = this;
		var ws = new WebSocket(url, [], cacertPath);
		ws.binaryType = "arraybuffer";
		ws.onopen = function () {
			self._connected = true;
			cc.log("ws: onopen");
		}
		ws.onmessage = function (event) {
			cc.log("ws: onmessage");
			var info = self._dataProcessor.decode(event.data);
		}
		ws.onclose = function () {
			cc.log("ws: onclose");
			self._connected = false;
			self.close();
		}
		ws.onerror = function (err) {
			cc.log("ws: onerror");
			self._connected = false;
			self.close();
		}
		self._ws = ws;
	}

	public connect(url:string) 
	{
		this.close();
		this._connected = false;
		this._url = url;
		cc.log("连接WebSocket: ", url);
		var self = this;

		//注：native模式连接wss时需要cacert认证
		if(cc.sys.isNative){
			cc.loader.loadRes("cacert", function(errorMessage, loadedResource){
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
			this._ws.close();
			this._ws = null;
		}
		this._connected = false;
	}

	public sendData(data:any) 
	{
		if(!this._ws) {
			cc.log("no ws object");
			return;
		}
		var msg = this._dataProcessor.encode(data);
		this._ws.send(msg);
	}

}
