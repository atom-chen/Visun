import Caller from "../promise/Caller";
import IPoolObject from "../pool/IPoolObject";

export enum TimerType {
	frame = 1,
	second = 2
};

export class BaseTimer implements IPoolObject {
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
		this.reuse(type, id, interval, func, looptimes);
    }
    
    public reuse(type:TimerType, id:number, interval:number, func:Caller, looptimes:number){
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

	public unuse(){
		this._stoped = true;
		this._func = null;
    }
    
    public destroy(){
		this._stoped = true;
		this._func = null;
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

    
	public stop() {
		this._stoped = true;
		this._func = null;
	}

	public pause(bPause:boolean) {
		this._paused = bPause;
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