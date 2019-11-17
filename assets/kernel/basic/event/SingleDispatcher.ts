//-------------------------------------
//-- 响应句柄：观察者模式
//-------------------------------------
import EventCenter from "./EventCenter";

export default class SingleDispatcher {
	protected _observer = [];
	protected _responders = {};

	public addObserver(observer:any) : void
	{
		if(this._observer.indexOf(observer) < 0) {
			this._observer.push(observer)
		}
	}

	public removeObserver(observer:any) : void 
	{
		var idx = this._observer.indexOf(observer);
		if(idx>=0) {
			this._observer.splice(idx, 1);
		}
	}

	public clearObserver() : void
	{
		this._observer.length = 0;
		this._observer = [];
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

		for(var i in this._observer) {
			if(this._observer[i][cmd]){
				this._observer[i][cmd](info);
			}
		}

		if(this._responders[cmd]) {
			var callback = this._responders[cmd];
			if(callback.thisObj){
				callback.func.call(callback.thisObj, info);
			}
			else{
				callback.func(info);
			}
		}

		EventCenter.getInstance().fire(cmd, info);
	}
}