import { BaseTimer, TimerType } from "./BaseTimer";


export default class TimerManager {
	
	private static autoId:number = 0;
	private static _instance:TimerManager = null;

	private _timers:BaseTimer[] = [];
	
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
		tmr.reset(TimerType.frame, id, interval, func, thisObj, looptimes);
		this._timers.push(tmr);
		return id;
	}

	public addSecondTimer(interval:number, func:Function, thisObj:any, looptimes:number) {
		TimerManager.autoId++;
		let id = TimerManager.autoId;
		var tmr = new BaseTimer;
		tmr.reset(TimerType.second, id, interval, func, thisObj, looptimes);
		this._timers.push(tmr);
		return id;
	}

	public delTimer(id:number) {
		for(var i=this._timers.length-1; i>=0; i--) {
			if(this._timers[i].getId()===id) {
				this._timers.splice(i, 1);
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

	public test() {
		var xs = [];
        console.time('===testtmr');//测试
        for(var i=1; i<=8000000; i++){
            for(var j=1; j<=2; j++){
                var x = TimerManager.instance().addFrameTimer(1, ()=>{}, null , 10);
                xs[j-1] = x;
            }
            for(var jj=1; jj<=2; jj++){
                TimerManager.instance().delTimer(xs[jj-1]);
            }
        }
        console.timeEnd('===testtmr');//测试
	}

}
