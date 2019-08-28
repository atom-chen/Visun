import { BaseTimer, TimerType } from "./BaseTimer";
//import JTPool from "../pool/JTPool";


export default class TimerManager {
	
	private static autoId:number = 0;
	private static _instance:TimerManager = null;

	private _timers:BaseTimer[] = [];
//	private static _pool:JTPool<BaseTimer> = JTPool.instance(BaseTimer) as JTPool<BaseTimer>;
	
	private constructor() {
		
	}
	public static instance() {
		if(!TimerManager._instance) { TimerManager._instance = new TimerManager; }
		return TimerManager._instance;
	}

	public update(dt:number) {
		try{
			for(var i=0, len=this._timers.length; i<len; i++) {
				this._timers[i].tick(dt);
				if(this._timers[i].isStoped()) {
					this.delTimer(this._timers[i].getId());
				}
			}
		}
		catch(err) {
			cc.log(err)
		}
	}

	public addFrameTimer(interval:number, func:Function, thisObj:any, looptimes:number) {
		TimerManager.autoId++;
		let id = TimerManager.autoId;
		var tmr = new BaseTimer;
	//	var tmr = TimerManager._pool.get();
		tmr.reset(TimerType.frame, id, interval, func, thisObj, looptimes);
		this._timers.push(tmr);
		return id;
	}

	public addSecondTimer(interval:number, func:Function, thisObj:any, looptimes:number) {
		TimerManager.autoId++;
		let id = TimerManager.autoId;
		var tmr = new BaseTimer;
	//	var tmr = TimerManager._pool.get();
		tmr.reset(TimerType.second, id, interval, func, thisObj, looptimes);
		this._timers.push(tmr);
		return id;
	}

	public delTimer(id:number) {
		for(var i=this._timers.length-1; i>=0; i--) {
			if(this._timers[i].getId()===id) {
			//	TimerManager._pool.put(this._timers[i]);
				this._timers.splice(i, 1);
				break;
			}
		}
	}

	public removeByTarget(target:any) {
		for(var i=this._timers.length-1; i>=0; i--) {
			if(this._timers[i].getTarget()===target) {
				this._timers.splice(i, 1);
			}
		}
	}

	public count() : number {
		return this._timers.length;
	}

}
