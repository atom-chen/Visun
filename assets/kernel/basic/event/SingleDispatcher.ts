//-------------------------------------
//-- 响应句柄：观察者模式
//-------------------------------------
import EventCenter from "./EventCenter";
import KernelEvent from "../defines/KernelEvent";

export default class SingleDispatcher {
	protected _observers = [];

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

		EventCenter.getInstance().fire(cmd, info);
		EventCenter.getInstance().fire(KernelEvent.recv_proto, cmd, info);
	}
}