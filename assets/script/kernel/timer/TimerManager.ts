import Caller from "../promise/Caller";
import ObjectPool from "../pool/ObjectPool";

enum TimerType {
	frame = 1,
	second = 2
};

class BaseTimer {
	protected _id:number;
	protected _interval:number;
	protected _func:Caller;
	protected _looptimes:number;
	protected _type:TimerType;
	protected _isLimit:boolean;

	protected _passedTime:number = 0;
	protected _stoped:boolean = false;
	protected _paused:boolean = false;

	constructor(type:TimerType, id:number, interval:number, func:Caller, looptimes:number){
		this.onUse(type, id, interval, func, looptimes);
	}

	public getId() : number {
		return this._id
	}

	public getTarget() : any {
		return this._func && this._func.getTarget();
	}

	public isStoped() : boolean {
		return this._stoped;
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

	public onUse(type:TimerType, id:number, interval:number, func:Caller, looptimes:number){
		this._type = type;
		this._id = id;
		this._interval = interval;
		this._func = func;
		this._looptimes = looptimes;
		this._passedTime = 0;
		this._stoped = false;
		this._paused = false;
		this._isLimit = looptimes > 0;
	}

	public onUnuse(){
		this._stoped = true;
		this._func = null;
	}

	public tick(dt:number) : boolean{
		if(this._stoped) {
			this._func = null;
			return true;
		}
		if(this._paused) { return false; }

		if(this._type===TimerType.frame){
			this._passedTime++;
		}
		else {
			this._passedTime += dt;
		}

		if(this._passedTime >= this._interval) {
			this._passedTime = this._passedTime - this._interval;
			this._func.callWith(this._looptimes);

			if(this._isLimit) {
				this._looptimes--;
				if(this._looptimes<=0){
					this._func = null;
					this._stoped = true;
					return true;
				}
			}
		}
		return false;
	};
}


export default class TimerManager {

	private static autoId:number = 0;

	private static _instance:TimerManager = null;

	private _timers:BaseTimer[] = [];
	private _updating:boolean = false;
	private _timerPool:ObjectPool;
	
	private constructor() {
		this._timerPool = new ObjectPool(
			function(type:TimerType, id:number, interval:number, func:Caller, looptimes:number){
				return new BaseTimer(type, id, interval, func, looptimes);
			},
			function(){
				this.destroy();
			},
			function(type:TimerType, id:number, interval:number, func:Caller, looptimes:number){
				this.onUse(type, id, interval, func, looptimes);
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
			if(this._timers[i].isStoped()) {
				this.delTimer(this._timers[i].getId());
			}
		}

		this._updating = false;
	}

	public addFrameTimer(interval:number, func:Caller, looptimes:number) {
		TimerManager.autoId++;
		let id = TimerManager.autoId;
		var tmr = this._timerPool.newObject(TimerType.frame, id, interval, func, looptimes);
		this._timers.push(tmr);
		return id;
	}

	public addSecondTimer(interval:number, func:Caller, looptimes:number) {
		TimerManager.autoId++;
		let id = TimerManager.autoId;
		var tmr = this._timerPool.newObject(TimerType.second, id, interval, func, looptimes);
		this._timers.push(tmr);
		return id;
	}

	public delTimer(id:number) {
		for(var i=this._timers.length-1; i>=0; i--) {
			if(this._timers[i].getId()===id) {
				this._timerPool.delObject(this._timers[i]);
				cc.log("deltimer: ", id, i);
				this._timers.splice(i, 1);
			}
		}
	}

	public removeByTarget(target:any) {
		for(var i=this._timers.length-1; i>=0; i--) {
			if(this._timers[i].getTarget()===target) {
				this._timerPool.delObject(this._timers[i]);
				cc.log("deltimer: ", i);
				this._timers.splice(i, 1);
			}
		}
	}

}
