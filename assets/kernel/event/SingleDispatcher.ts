import EventCenter from "./EventCenter";

export default class SingleDispatcher {
	protected _observer = null;
	protected _responders = {};

	public setObserver(observer:any) : void
	{
		this._observer = observer;
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

	public removeAllResponder() : void
	{
		this._responders = {};
	}

	public fire(cmd:string|number, info:any) : void
	{
		if(cmd===null || cmd===undefined){
			cc.log("无效的cmd");
			return;
		}

		if(this._observer && this._observer[cmd]) {
			this._observer[cmd].call(this._observer, info);
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

		EventCenter.getInstance().fire(cmd.toString(), info);
	}
}