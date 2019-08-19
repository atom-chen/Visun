export default class SingleDispatcher {
	protected _responders = {};

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

	public response(ptoname:string|number, info:any) : void
	{
		if(this._responders[ptoname]) {
			var callback = this._responders[ptoname];
			if(callback.thisObj){
				callback.func.call(callback.thisObj, info);
			}
			else{
				callback.func(info);
			}
		}
	}
}