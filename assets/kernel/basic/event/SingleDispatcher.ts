//-------------------------------------
//-- 响应句柄：观察者模式
//-------------------------------------
import EventCenter from "./EventCenter";

export default class SingleDispatcher {
	protected _observers = [];
	protected _responders = {};

	public addObserver(observer:any) : void
	{
		if(this._observers.indexOf(observer) < 0) {
			this._observers.push(observer)
		}
	}

	public removeObserver(observer:any) : void 
	{
		var idx = this._observers.indexOf(observer);
		if(idx>=0) {
			this._observers.splice(idx, 1);
		}
	}

	public clearObserver() : void
	{
		this._observers.length = 0;
		this._observers = [];
	}


	public registResponder(ptoname:string|number, func:Function, thisObj:any) : void
	{
		this._responders[ptoname] = { func:func, thisObj:thisObj };
	}

	public removeResponder(ptoname:string|number) : void
	{
		this._responders[ptoname] = null;
	}

	public removeResponderByTarget(thisObj:any) : void
	{
		for(var ptoname in this._responders) {
			if( this._responders[ptoname].thisObj === thisObj ) {
				this._responders[ptoname] = null;
			}
		}
	}

	public clearResponder() : void
	{
		this._responders = {};
	}

	
	public fire(cmd:string|number, info:any) : void
	{
		if(cmd===null || cmd===undefined){
			cc.log("无效的cmd");
			return;
		}

		for(var i in this._observers) {
			if(this._observers[i][cmd]){
				this._observers[i][cmd](info);
			}
		}

		if(this._responders[cmd]) {
			var callback = this._responders[cmd];
			if(callback.thisObj){
				callback.func.call(callback.thisObj, info);
			} else {
				callback.func(info);
			}
		}

		EventCenter.getInstance().fire(cmd, info);
		EventCenter.getInstance().fire("recv_proto", cmd, info);
	}
}