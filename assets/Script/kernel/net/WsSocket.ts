import DataProcessor from "../codec/DataProcessor";

//var WebSocket = WebSocket || window.WebSocket || window.MozWebSocket;
var WebSocket = WebSocket || window["WebSocket"] || window["MozWebSocket"]; 

const {ccclass, property} = cc._decorator;

@ccclass
export default class WsSocket {

	private _ws:any;
	private _url:string;
	private _dataProcessor:DataProcessor = null;
	

	private initWs(url:string, cacertPath:string)
	{
		var self = this;
		var ws = new WebSocket(url, [], cacertPath);
		ws.binaryType = "arraybuffer";
		ws.onopen = function () {
			cc.log("ws: onopen");
		}
		ws.onmessage = function (event) {
			cc.log("ws: onmessage");
			var info = self._dataProcessor.decode(event.data);
			cc.log(info);
		}
		ws.onclose = function () {
			cc.log("ws: onclose");
			self.close();
		}
		ws.onerror = function (err) {
			cc.log("ws: onerror");
			self.close();
		}
		self._ws = ws;
	}

	public connect(url:string, processor:DataProcessor) 
	{
		this.close();
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
			this._ws.close();
			this._ws = null;
		}
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
