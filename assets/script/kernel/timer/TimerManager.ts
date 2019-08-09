import Caller from "../promise/Caller";
import ObjectPool from "../object_pool/ObjectPool";

abstract class BaseTimer {
	public _id:number;
	protected _interval:number;
	protected _func:Caller;
	protected _looptimes:number;

	protected _passedTime:number = 0;
	protected _stoped:boolean = false;
	protected _paused:boolean = false;

	constructor(id:number, interval:number, func:Caller, looptimes:number){
		this.onUse(id, interval, func, looptimes);
	}

	public destroy(){
		this._stoped = true;
		this._func = null;
	}

	public stop() {
		this._stoped = true;
		this._func = null;
	}

	public pause(bPause:boolean) {
		this._paused = bPause;
	}

	public onUse(id:number, interval:number, func:Caller, looptimes:number){
		this._id = id;
		this._interval = interval;
		this._func = func;
		this._looptimes = looptimes;
		this._passedTime = 0;
		this._stoped = false;
		this._paused = false;
	}

	public onUnuse(){
		this._stoped = true;
		this._func = null;
	}

	public abstract tick(dt:number) : boolean;
}

class FrameTimer extends BaseTimer {
	public tick(dt: number): boolean {
		if(this._stoped) {
			this._func = null;
			return true;
		}
		if(this._paused) { return false; }
		this._passedTime++;
		if(this._passedTime >= this._interval) {
			this._passedTime = this._passedTime - this._interval;
			this._func.call();
			this._looptimes--;
			if(this._looptimes<=0){
				this._func = null;
				this._stoped = true;
				return true;
			}
		}
		return false;
	}
}

class SecondTimer extends BaseTimer{
	public tick(dt: number): boolean {
		if(this._stoped) {
			this._func = null;
			return true;
		}
		if(this._paused) { return false; }
		this._passedTime += dt;
		if(this._passedTime >= this._interval) {
			this._passedTime = this._passedTime - this._interval;
			this._func.call();
			this._looptimes--;
			if(this._looptimes<=0){
				this._func = null;
				this._stoped = true;
				return true;
			}
		}
		return false;
	}
}

export default class TimerManager {
	private static autoId:number = 0;

	private static _instance:TimerManager = null;

	private _timers:BaseTimer[] = [];
	private _updating:boolean = false;
	private _framePool:ObjectPool;
	private _secondPool:ObjectPool;
	
	private constructor() {
		this._framePool = new ObjectPool(
			function(id:number, interval:number, func:Caller, looptimes:number){
				return new FrameTimer(id, interval, func, looptimes);
			},
			function(){
				this.destroy();
			},
			function(id:number, interval:number, func:Caller, looptimes:number){
				this.onUse(id, interval, func, looptimes);
			},
			function() {
				this.onUnuse();
			}
		);
		this._framePool = new ObjectPool(
			function(id:number, interval:number, func:Caller, looptimes:number){
				return new SecondTimer(id, interval, func, looptimes);
			},
			function(){
				this.destroy();
			},
			function(id:number, interval:number, func:Caller, looptimes:number){
				this.onUse(id, interval, func, looptimes);
			},
			function() {
				this.onUnuse();
			}
		);
	}
	public static instance() {
		if(TimerManager._instance) { return TimerManager._instance; }
		TimerManager._instance = new TimerManager;
		return TimerManager._instance;
	}

	public update(dt:number) {
		this._updating = true;

		for(var i=0, len=this._timers.length; i<len; i++) {
			this._timers[i].tick(dt);
		}

		this._updating = false;
	}

	public addFrameTimer(interval:number, func:Caller, looptimes:number) {
		TimerManager.autoId++;
		let id = TimerManager.autoId;
		var tmr = this._framePool.newObject(id, interval, func, looptimes);
		this._timers.push(tmr);
		return id;
	}

	public addSecondTimer(interval:number, func:Caller, looptimes:number) {
		TimerManager.autoId++;
		let id = TimerManager.autoId;
		var tmr = this._secondPool.newObject(id, interval, func, looptimes);
		this._timers.push(tmr);
		return id;
	}

	public delTimer(id:number) {
		for(var i=this._timers.length-1; i>=0; i--) {
			if(this._timers[i]._id===id) {
				this._framePool.delObject(this._timers[i]);
				this._secondPool.delObject(this._timers[i]);
				cc.log("deltimer: ", id, i);
				this._timers.splice(i, 1);
			}
		}
	}

	public removeByTarget(target:any) {
		
	}

}
