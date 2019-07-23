const {ccclass, property} = cc._decorator;

@ccclass
export default class WsSocket extends cc.Component {

	private _connected:boolean = false;
	private _ws:any;
	private _url:string;

	public connect(url:string) 
	{
		this.close();
		this._connected = false;
		this._url = url;
		cc.log("连接WebSocket: ", url);
		var self = this;

		//注：native模式连接wss时需要cacert认证
		cc.loader.loadRes("cacert", function(errorMessage,loadedResource){
			if( errorMessage ) { 
				cc.log( '载入cacert.pem失败, 原因:' + errorMessage ); 
				return; 
			}

			var ws = new WebSocket(url, []);
			ws.binaryType = "arraybuffer";
			ws.onopen = function () {
				self._connected = true;
				cc.log("ws: onopen");
			}
			ws.onmessage = function (event) {
				cc.log("ws: onmessage");
				var data = event.data;
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
		});
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
		this._ws.send(data);
	}

}
