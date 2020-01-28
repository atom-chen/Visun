//---------------------------------
// 全局事件中心
//---------------------------------
export default class EventCenter {
	private static _instance:EventCenter = null;
	private static _neterrInst:EventCenter = null;
	private _events = {};
	
	
	public static getInstance() : EventCenter
	{
		if(!EventCenter._instance){ EventCenter._instance = new EventCenter(); }
		return EventCenter._instance;
	}
	public static delInstance() {
		EventCenter._instance._events = null;
		EventCenter._instance = null;
	}

	public static neterrInstance() : EventCenter {
		if(!EventCenter._neterrInst){ EventCenter._neterrInst = new EventCenter(); }
		return EventCenter._neterrInst;
	}

	public listenerCount(evtName:string|number) : number {
		if(this._events[evtName]) { return this._events[evtName].length; }
		return 0;
	}

	public getEvent(evtName:string|number, cbFunc:Function, thisObj:any) : number
	{
		var evtList = this._events[evtName];
		if(!evtList) { return -1; }

		var len = evtList.length;
		for(var i=len-1; i>=0; i--) {
			var listener = evtList[i];
			if(listener.callBack === cbFunc && listener.target === thisObj)
			{
				return i;
			}
		}

		return -1;
	}

	//监听事件
	public listen(evtName:string|number, cbFunc:Function, thisObj:any, bCall:boolean=false)
	{
		if(evtName===null || evtName===undefined || !cbFunc)
		{
			cc.warn("listen error! event name or callback is null!", evtName, typeof evtName, typeof cbFunc);
			return;
		}

		if(this.getEvent(evtName, cbFunc, thisObj) >= 0) {
			cc.warn("already registed this event: ", evtName);
			return;
		}

		var evtList = this._events[evtName];
		if(!evtList) {
			evtList = [];
			this._events[evtName] = evtList;
		}

		let listener = { callBack : cbFunc, target : thisObj };

		evtList.push(listener);

		if(bCall) {
			cbFunc.call(thisObj);
		}
	}

	//移除监听
	public remove(evtName:string, cbFunc:Function, thisObj:any)
	{
		var evtList = this._events[evtName];
		if(!evtList) { return; }

		var len = evtList.length;
		for(var i=len-1; i>=0; i--) {
			var listener = evtList[i];
			if(listener.callBack === cbFunc && listener.target === thisObj)
			{
				evtList.splice(i, 1);
				break;
			}
		}
	}

	//移除监听
	public removeByTarget(thisObj:any)
	{
		for(var evtName in this._events){
			var evtList = this._events[evtName];
			var len = evtList.length;
			for(var i=len-1; i>=0; i--) {
				var listener = evtList[i];
				if(listener.target === thisObj)
				{
				//	cc.log("remove event by target");
					evtList.splice(i, 1);
				}
			}
		}
	}

	//触发
	public fire(evtName:string|number, ...arglist:any[]) : boolean
	{
		var evtList = this._events[evtName];
		
		if(!evtList || evtList.length<=0) { 
			return false; 
		}

		if(arglist.length < 1) {
			for(var i = 0, len = evtList.length; i < len; i++) {
				var listener = evtList[i];
				listener.callBack.call(listener.target);
			}
		} else {
			for(var i = 0, len = evtList.length; i < len; i++) {
				var listener = evtList[i];
				listener.callBack.apply(listener.target, arglist);
			}
		}

		return true;
	}
	
}
