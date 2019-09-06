import { JTIPoolObject } from "../pool/JTIPoolObject";
import CHandler from "../basic/CHandler";

export enum TimerType {
	frame = 1,
	second = 2
};

export class BaseTimer implements JTIPoolObject {
	protected _id:number;
	protected _interval:number;
	protected _callback:CHandler;
	protected _looptimes:number;
	protected _type:TimerType;
	protected _isLimit:boolean;

	protected _passedTime:number = 0;
	protected _stoped:boolean = false;
	protected _paused:boolean = false;

	recycle(): void {
		this.stop();
	}
    
    public reset(type:TimerType, id:number, interval:number, looptimes:number, callback:CHandler){
		this._type = type;
		this._id = id;
		this._interval = interval;
		this._callback = callback;
		this._looptimes = looptimes;
		this._passedTime = 0;
		this._stoped = false;
		this._paused = false;
		this._isLimit = looptimes > 0;
	}

	public stop() {
		this._stoped = true;
		if(this._callback){
			this._callback.clear();
			this._callback = null;
		}
	}

	public pause(bPause:boolean) {
		this._paused = bPause;
	}

	public tick(dt:number) : boolean{
		if(this._stoped) {
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
			this._callback.call(this);

			if(this._isLimit) {
				this._looptimes--;
				if(this._looptimes<=0){
					this.stop();
					return true;
				}
			}
		}
		return false;
	}

	public getId() : number {
		return this._id
	}

	public getTarget() : any {
		if(this._callback){
			return this._callback.getTarget();
		}
		return null;
	}

	public isStoped() : boolean {
		return this._stoped;
	}

	public getLooptimes(){
		return this._looptimes;
	}

}