//---------------------------------
// 全局事件中心
//---------------------------------
export default class EventCenter {
	private static _instance:EventCenter = null;
	private _events = {};
	
	
	public static instance() : EventCenter
	{
		if(!EventCenter._instance){ EventCenter._instance = new EventCenter(); }
		return EventCenter._instance;
	}
	public static destroy() {
		EventCenter._instance._events = null;
		EventCenter._instance = null;
	}

	//监听事件
	public listen(evtName:string, cbFunc:Function, thisObj:any, bCall:boolean=false)
	{
		if(!evtName || !cbFunc)
		{
			cc.log("listen error! event name or callback is null!")
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
	public remove(evtName:string, cbFunc:Function)
	{
		var evtList = this._events[evtName];
		if(!evtList) {
			return;
		}

		var len = evtList.length;
		for(var i=len-1; i>=0; i--) {
			var listener = evtList[i];
			if(listener.callBack === cbFunc)
			{
				evtList.splice(i, 1);
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
					cc.log("remove by target: ")
					evtList.splice(i, 1);
				}
			}
		}
	}

	//触发
	public fire(evtName:string, ...arglist:any[])
	{
		var evtList = this._events[evtName];
		if(!evtList){ return; }

		if(arglist.length < 1) 
		{
			for(var i = 0, len = evtList.length; i < len; i++)
			{
				var listener = evtList[i];
				listener.callBack.call(listener.target);
			}
		}
		else 
		{
			for(var i = 0, len = evtList.length; i < len; i++)
			{
				var listener = evtList[i];
				listener.callBack.apply(listener.target, arglist);
			}
		}
	}
	
}
